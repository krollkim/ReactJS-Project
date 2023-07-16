import React from "react";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";
import useForm from "../../forms/hooks/useForm";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import cardSchema from "../models/joi-schema/cardSchema";
import ROUTES from "../../routes/routesModel";
import { Navigate } from "react-router-dom";
import { Container } from "@mui/material";
import CardForm from "../components/CardForm";
import BubbleChartIcon from '@mui/icons-material/BubbleChart';


const EditCardPage = ({ cardId }) => {
  const { handleUpdateCard } = useCards();
  const { user } = useUser();
  const { value, ...rest } = useForm(
    initialCardForm,
    cardSchema,
    handleUpdateCard,
  );
  console.log(value);

  if (!user || !user.isBusiness) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
      <CardForm
        title="edit Card"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        errors={value.errors}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleChange}
        data={value.data}
        cardId={cardId}
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

export default EditCardPage;