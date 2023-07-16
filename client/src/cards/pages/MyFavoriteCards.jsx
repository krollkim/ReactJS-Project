import React, { useEffect } from "react";
import { useUser } from "../../users/providers/UserProvider";
import useCards from "../hooks/useCards";
import PageHeader from "../../components/PageHeader";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { Container, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CardsFeedback from "../components/CardsFeedback";

const MyFavoriteCards = () => {
  const { user } = useUser();
  const { pending, error, cards, handleGetLikeCards ,setCards } = useCards();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.isBusiness) navigate(ROUTES.CARDS);
    else handleGetLikeCards();
  }, [handleGetLikeCards, navigate, user]);

  return (
    <Container sx={{ position: "relative", minHeight: "90vh" }}>
      <PageHeader
        title="favorite card Page"
        subtitle="Here is your favorite cards"
      />
      <CardsFeedback
        pending={pending}
        error={error}
        cards={cards}
        onDelete={() => {}}
        setCards={setCards}
      />
    </Container>
  );
};

export default MyFavoriteCards;