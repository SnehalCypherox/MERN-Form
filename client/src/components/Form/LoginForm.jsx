import { useState } from "react";
import "./Form.css";
import { useLoginFormValidator } from "../hooks/useLoginFormValidator";
import { Button, FormLabel, Input, Paper } from "@mui/material";
import { Box } from "@mui/system";

const LoginForm = props => {


  const [form, setForm] = useState({
    userName: "",
    password: "",
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
          <h1 className='title'>Login Form</h1>
          <form className="form" onSubmit={onSubmitForm}>

          <div className="formGroup">
              <FormLabel className="formLabel">User Name :</FormLabel>
              <Input type="text" name="userName" value={form.userName} onChange={onUpdateField} onBlur={onBlurField} />
              {errors.userName.dirty && errors.userName.error ? (
                <p className='formFieldErrorMessage'>
                  {errors.userName.message}</p>
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

            <div className="formActions">
              <Button variant="container" type="submit">Sign In</Button>
              <Button variant="container" type="submit">Sign Up</Button>
            </div>
          </form>
        </Paper>
      </Box>

    </>

  );
};

export default LoginForm;
