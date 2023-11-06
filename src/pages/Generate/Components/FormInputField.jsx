import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";
const FormInputField = (props) => {
  const [field, meta] = useField(props);
  return <TextField {...field}>FormInputField</TextField>;
};

export default FormInputField;
