import {
  EMAIL_REGEX,MOBILE_NUMBER_REGEX
} from "constants/AppConstant";
import * as Yup from "yup";

export const enquiryFormSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is mandatory")
    .matches(EMAIL_REGEX, "Please enter valid email")
    .min(6, "Username should be 6 to 100 characters long")
    .max(100, "Username should be 6 to 100 characters long"),
    
    name: Yup.string().required("Name is mandatory"),

  mobileNo: Yup.string()
    .required("Mobile Number is mandatory")
    .matches(MOBILE_NUMBER_REGEX, "Please enter valid email")
    .min(6, "Username should be 6 to 100 characters long")
    .max(100, "Username should be 6 to 100 characters long"),

  subject: Yup.string()
    .required("Subject is mandatory"),

  description: Yup.string()
    .required("Description is mandatory")
});
