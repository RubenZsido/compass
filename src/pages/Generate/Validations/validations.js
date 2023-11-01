import * as yup from "yup";

const basicSchema = yup.object().shape({
  companyName: yup.string().required(),
  companyDescription: yup.string().required(),
  price: yup
    .number()
    .min(0)
    .required(),
});

const styleSchema = yup.object().shape({
  companyName: yup.string().required(),
  companyDescription: yup.string().required(),
  price: yup
    .number()
    .min(0)
    .required(),
});

const layoutSchema = yup.object().shape({
  companyName: yup.string().required(),
  companyDescription: yup.string().required(),
  price: yup
    .number()
    .min(0)
    .required(),
});

const hostingSchema = yup.object().shape({
  companyName: yup.string().required(),
  companyDescription: yup.string().required(),
  price: yup
    .number()
    .min(0)
    .required(),
});

export const validations = [
  basicSchema,
  styleSchema,
  layoutSchema,
  hostingSchema,
];
