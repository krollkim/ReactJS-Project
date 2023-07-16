import React from "react";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../providers/UserProvider";
import useUsers from "../hooks/useUsers";
import useForm from "../../forms/hooks/useForm";
import initialLoginForm from "../helpers/initial-forms/initialLoginForm";
import loginSchema from "../models/joi-schema/loginSchema";
import Container from "@mui/material/Container";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
<link rel="stylesheet" href="stylingForForms.css" />
const LoginPage = () => {
  const { user } = useUser();
  const { handleLogin } = useUsers();

  const { value, ...rest } = useForm(
    initialLoginForm,
    loginSchema,
    handleLogin
  );

  if (user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <>
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: 'relative',
        display: 'flex',
      }}>
        {/* <Container sx={{ position: 'absolute',}}>
           <Container
          sx={{
            background: 'pink',
            width: 70,
            height: 60,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: 'relative',
            right: 250,
            margin: 'auto',
            zIndex: 11,
          }}/>
         <Container
          sx={{
          background: 'pink',
          width: 160,
          height: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: 'relative',
          top: 10,
          right: 290,
          margin: 'auto',
        }}/>
         <Container
          sx={{
          background: 'pink',
          width: 160,
          height: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: 'relative',
          top: 125,
          left: 230,
          margin: 'auto',
          zIndex: 11,
        }}/>
        </Container> */}
      
      <Form
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        onChange={rest.validateForm}
        title="login"
        styles={{zIndex: 10, maxWidth: "450px", background: '#7662c5bb', borderRadius: 8,}}
        to={ROUTES.CARDS}>
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
        <Input
          label="email"
          name="email"
          type="email"
          error={value.errors.email}
          onChange={rest.handleChange}
          data={value.data}
        />
        <Input
          label="password"
          name="password"
          type="password"
          error={value.errors.password}
          onChange={rest.handleChange}
          data={value.data}
        />
      </Form>
    </Container>
      </>
  );
};

export default LoginPage;