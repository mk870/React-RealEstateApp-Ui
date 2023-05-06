export const backendUrl = "http://localhost:8080";

export const passwordValidator = (
  setIsPasswordValidationError,
  passwordValue
) => {
  const regexPasswordValidator = new RegExp(
    "^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  if (regexPasswordValidator.test(passwordValue)) {
    setIsPasswordValidationError(false);
  } else {
    setIsPasswordValidationError(true);
  }
};

export const emailValidator = (setIsEmailValidationError, emailValue) => {
  if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      emailValue
    )
  ) {
    setIsEmailValidationError(true);
  } else {
    setIsEmailValidationError(false);
  }
};

export const passwordGuideLines = [
  "longer than 8 characters",
  "have atleast 1 special character",
  "have atleast 1 number",
  "have atleast 1 capital letter",
];

export const shortenString = (text, maxNumberOfWords) => {
  const maxWords = maxNumberOfWords + 1;
  if (text.length > maxNumberOfWords)
    return `${text.substring(0, maxWords)}...`;
  else return text;
};

export const cleanTextSnippets = (snippet) => {
  if (snippet) return snippet.replace(/(https?|ftp):\/\/[.[a-zA-Z0-9/-]+/, " ");
  else return "";
};
export const nullStringValueChecker = (value) => {
  if (!value) return "not available";
  else return value;
};
export const nullNumberValueChecker = (value) => {
  if (!value) return "--";
  else return value;
};
export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export const realtorKey = process.env.REACT_APP_RAPID_API_KEY;
