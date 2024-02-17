import React, { useState } from "react";
import { Formik, Form, Field, useFormik } from "formik";
import BasicForm from "./Forms/BasicForm";
import StyleForm from "./Forms/StyleForm";
import LayoutForm from "./Forms/LayoutForm";
import HostingForm from "./Forms/HostingForm";
import { validations } from "./Validations/validations";
import { GenerateStepper } from "./Components/GenerateStepper";
import { Card, CardContent } from "@mui/material";
import { TextField } from "formik-material-ui";
import * as yup from "yup";

const GeneratePage = () => {
  const steps = ["Basics", "Style", "Layout", "Hosting"];

  const [activeStep, setActiveStep] = useState(0);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: 0,
    keyword: "",
    image: "",
  });
  const currentValidation = validations[activeStep];

  const handleNextStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setActiveStep((prev) => prev + 1);
  };
  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setActiveStep((prev) => prev - 1);
  };
  const _renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <BasicForm next={handleNextStep} data={data} />;
      case 1:
        return <StyleForm />;
      case 2:
        return <LayoutForm />;
      case 3:
        return <HostingForm />;
      default:
        return <div>Not Found</div>;
    }
  };
  return (
    <Card
      container
      spacing={3}
      justifyContent="center"
      sx={{ marginTop: "20px" }}
    >
      <CardContent>
        <Formik
          initialValues={{
            name: "",
            oneliner: "",
            description: "",
            price: 0,
            keyword: "",
            images: [],
            headerId: 0,
          }}
          validationSchema={yup.object({
            name: yup.string("Enter a name").required("A name is required"),
            oneliner: yup
              .string("Enter a oneloner")
              .required("A oneliner is required")
              .max(20, "Maximum 20 characters"),
            price: yup.number().min(0.00001, "Has to be larger than zero"),
          })}
          onSubmit={() => {}}
        >
          <Form autoComplete="off">
            <div>
              <Field name="name" component={TextField} label="Product Name" />
              <Field name="oneliner" component={TextField} label="Oneliner" />
            </div>

            <div>
              <Field
                name="description"
                component={TextField}
                label="Description"
              />
              <Field
                name="price"
                component={TextField}
                label="Price(in dollars)"
              />
            </div>
          </Form>
        </Formik>
        <GenerateStepper steps={steps} activeStep={activeStep} />
      </CardContent>
    </Card>
  );
};

export default GeneratePage;
