import { Alert } from "@mui/material";

export const emailValidator = email => {
  if (!email) {
    return "Email is required";
  } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
    return "Incorrect email format";
  }
  return "";
};

export const userNameValidator = userName => {
  if(!userName) {
    return <Alert severity="error">Username is required</Alert>
    // return "Username is required";
  }
  return "";
}

export const mobileValidator = mobile => {
  if(!mobile) {
    return <Alert severity="error">Mobile Number is required</Alert>
  } else if (mobile.length < 10) {
    return <Alert severity="error">Mobile Number must have a 10 characters</Alert>
  }
  return "";
}

export const passwordValidator = password => {
  if (!password) {
    return <Alert severity="error">Password is required</Alert> 
  } else if (password.length < 8) {
    return <Alert severity="error"> Password must have a minimum 8 characters </Alert>
  }
  return "";
};

export const confirmPasswordValidator = (confirmPassword, form) => {
  if (!confirmPassword) {
    return <Alert severity="error"> Confirm password is required"</Alert>
  } else if (confirmPassword.length < 8) {
    return <Alert severity="error"> Confirm password must have a minimum 8 characters </Alert>
  } else if (confirmPassword !== form.password) {
    return <Alert severity="error"> Passwords do not match </Alert>
  }
  return "";
};
