export const backendUrl = "http://localhost:8080/";

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
};

export const realtorKey = process.env.REACT_APP_RAPID_API_KEY;
export const firebaseKey = process.env.REACT_APP_FIREBASE_API_KEY;
export const authDomain = process.env.REACT_APP_AUTH_DOMAIN;
export const projectId = process.env.REACT_APP_PROJECT_ID;
export const storageBucket = process.env.REACT_APP_STORAGE_BUCKET;
export const messagingSenderId = process.env.REACT_APP_MESSAGING_SENDER_ID;
export const appId = process.env.REACT_APP_ID;

export const dateConverter = (date) => {
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString();
  const day = date.getDate().toString();
  return `${month}/${day}/${year}`;
};

export const userDataNullChecker = (value)=>{
  if(!value || value ==="null") return null
  else return value
}

export const numberToString = (value)=>{
  if(typeof value === "number") return value.toString();
  else return value
}
export const stringToNumber = (value)=>{
  if(typeof value === "string") return Number(value);
  else return value
}

