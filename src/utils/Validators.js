export { isEmpty } from "./Validation-utils";
export const validateStepOne = (fromValues) => {
  const errors = {};

  if (isEmpty(fromValues.firstName)) {
    errors.firstName = "нэр шаардлагатай";
  }

  if (isEmpty(fromValues.lastName)) {
    errors.lastName = "овог шаардлагатай";
  }
  return { errors, isValid: true };
};
export const validateStepTwo = (fromValues) => {
  const errors = {};

  if (isEmpty(fromValues.email)) {
    errors.email = "Имэйл хаяг шаардлагатай";
  }

  if (isEmpty(fromValues.phone)) {
    errors.phoneNumber = "утасны дугаар шаардлагатай";
  }

  if (isEmpty(fromValues.password)) {
    errors.password = "Нууц үг оруулна уу";
  }

  return { errors, isValid };
};
export const validateStepThree = (fromValues) => {
  const errors = {};

  if (isEmpty(fromValues.birthDay)) {
    errors.birthDay = "төрсөн огноо оруулна уу";
  }

  if (isEmpty(fromValues.profile)) {
    errors.profile = "зураг оруулна уу";
  }
  const isValid = Object.keys(errors).length === 0;
  return { errors, isValid: true };
};
