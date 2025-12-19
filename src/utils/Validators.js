export { isEmpty } from "./Validation-utils";
export const validateStepOne = (formValues) => {
  const errors = {};

  if (isEmpty(formValues.firstName)) {
    errors.firstName = "нэр шаардлагатай";
  }

  if (isEmpty(formValues.lastName)) {
    errors.lastName = "овог шаардлагатай";
  }
  if (isEmpty(formValues.username)) {
    errors.username = "Хэрэглэгчийн нэр шаардлагатай";
  }

  return { errors, isValid: true };
};
export const validateStepTwo = (formValues) => {
  const errors = {};

  if (isEmpty(formValues.email)) {
    errors.email = "Имэйл хаяг шаардлагатай";
  }

  if (isEmpty(formValues.phoneNumber)) {
    errors.phoneNumber = "утасны дугаар шаардлагатай";
  }

  if (isEmpty(formValues.password)) {
    errors.password = "Нууц үг оруулна уу";
  }

  return { errors, isValid: Object.keys(errors).length === 0 };
};
export const validateStepThree = (formValues) => {
  const errors = {};

  if (isEmpty(formValues.birthDay)) {
    errors.birthDay = "төрсөн огноо оруулна уу";
  }

  if (isEmpty(formValues.profile)) {
    errors.profile = "зураг оруулна уу";
  }
  const isValid = Object.keys(errors).length === 0;
  return { errors, isValid: true };
};
