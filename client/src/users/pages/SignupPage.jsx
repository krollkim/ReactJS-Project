import React from "react";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { Container } from "@mui/material";
import { useUser } from "../providers/UserProvider";
import useForm from "../../forms/hooks/useForm";
import useUsers from "./../hooks/useUsers";
import signUpSchema from "../models/joi-schema/signUpSchema";
import UserForm from "../components/UserForm";
import initialSignUpForm from "../helpers/initial-forms/initialSignUpForm";
import BubbleChartIcon from '@mui/icons-material/BubbleChart';


const SignUpPage = () => {
  const { handleSignup } = useUsers();

  const { value, ...rest } = useForm(
    initialSignUpForm,
    signUpSchema,
    handleSignup
  );

  const { user } = useUser();

  if (user) {
    return <Navigate replace to={ROUTES.CARDS} />;
  }

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    > <BubbleChartIcon sx={{
      justifyContent: "center",
      alignItems: "center",
      width: 50,
      height: 50,
      display: 'absolute',
      right: 0,
      left: 0,
      margin: 'auto'
      }}/>
      <UserForm
        title="register user"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleChange}
        data={value.data}
        errors={value.errors}
        setData={rest.setData}
      />
       <BubbleChartIcon sx={{
          justifyContent: "center",
          alignItems: "center",
          width: 50,
          height: 50,
          display: 'absolute',
          right: 0,
          left: 0,
          margin: 'auto'
          }}/>
    </Container>
  );
};

export default SignUpPage;