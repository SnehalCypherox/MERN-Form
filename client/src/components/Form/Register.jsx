import { useState } from "react";
import "./Form.css";
import { useLoginFormValidator } from "../hooks/useLoginFormValidator";
import { Button, FormLabel, Input, Paper } from "@mui/material";
import { Box } from "@mui/system";

const Register = props => {


  const [form, setForm] = useState({
    email: "",
    userName: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const { errors, validateForm, onBlurField } = useLoginFormValidator(form);

  const onUpdateField = e => {
    const field = e.target.name;
    const nextFormState = {
      ...form,
      [field]: e.target.value,
    };
    setForm(nextFormState);
    if (errors[field].dirty)
      validateForm({
        form: nextFormState,
        errors,
        field,
      });
  };

  const onSubmitForm = e => {
    e.preventDefault();
    const { isValid } = validateForm({ form, errors, forceTouchErrors: true });
    if (!isValid) return;
    alert(JSON.stringify(form, null, 2));
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            width: 500,
            display: 'flex',
            flexDirection: 'column',
            m: 'auto',
          },
        }}
      >
        <Paper elevation={0} variant='outlined' className="form-box" sx={{ paddingTop: 2 }}>
          <h1 className='title'>Register Form</h1>
          <form className="form" onSubmit={onSubmitForm}>

          <div className="formGroup">
              <FormLabel className="formLabel">Username :</FormLabel>
              <Input type="text" name="userName" value={form.userName} onChange={onUpdateField} onBlur={onBlurField} />
              {errors.userName.dirty && errors.userName.error ? (
                <p className='formFieldErrorMessage'>
                  {errors.email.message}</p>
              ) : null}
            </div>
            
            <div className="formGroup">
              <FormLabel className="formLabel">Email :</FormLabel>
              <Input type="text" name="email" value={form.email} onChange={onUpdateField} onBlur={onBlurField} />
              {errors.email.dirty && errors.email.error ? (
                <p className='formFieldErrorMessage'>
                  {errors.email.message}</p>
              ) : null}
            </div>

            <div className='formGroup'>
              <FormLabel className="formLabel">Mobile :</FormLabel>
              <Input type="tel" name="mobile" value={form.mobile} onChange={onUpdateField} onBlur={onBlurField} />
              {errors.mobile.dirty && errors.mobile.error ? (
                <p className='formFieldErrorMessage'>
                  {errors.mobile.message}</p>
              ) : null}
            </div>

            <div className='formGroup'>
              <FormLabel className="formLabel">Password</FormLabel>
              <Input type="password" name="password" value={form.password} onChange={onUpdateField} onBlur={onBlurField} />
              {errors.password.dirty && errors.password.error ? (
                <p className='formFieldErrorMessage'>
                  {errors.password.message}
                </p>
              ) : null}
            </div>

            <div className='formGroup'>
              <FormLabel className="formLabel">Confirm Password</FormLabel>
              <Input type="password" name="confirmPassword" value={form.confirmPassword} onChange={onUpdateField} onBlur={onBlurField} />
              {errors.confirmPassword.dirty && errors.confirmPassword.error ? (
                <p className='formFieldErrorMessage'>
                  {errors.confirmPassword.message}
                </p>
              ) : null}
            </div>

            <div className="formActions">
              <Button variant="container" type="submit">Sign Up</Button>
              <Button variant="container" type="submit">Sign In</Button>
            </div>
          </form>
        </Paper>
      </Box>

    </>

  );
};

export default Register;
