import React, { useContext, useEffect } from "react";
import { useUser } from "../../users/providers/UserProvider";
import useCards from "../hooks/useCards";
import PageHeader from "../../components/PageHeader";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { Container, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CardsFeedback from "../components/CardsFeedback";
import { searchContext } from "../../providers/SearchProvider";

const MyCardsPage = () => {
  const { user } = useUser();
  const { pending, error, cards, handleGetMyCards,setCards } = useCards();
  const { searchQuery } = useContext(searchContext)
  const navigate = useNavigate();

  let filtered = []
  if(searchQuery.length > 0) {
    filtered = cards?.filter(card => (card?.title.match(searchQuery)))
  } else {
    filtered = cards
  }

  useEffect(() => {
    if (!user || !user.isBusiness) navigate(ROUTES.CARDS);
    else handleGetMyCards();
  }, [handleGetMyCards, navigate, user]);

  return (
    <Container sx={{ position: "relative", minHeight: "90vh" }}>
      <PageHeader
        title="My Cards Page"
        subtitle="Here you can manage all your cards"
      />
      <Fab
        onClick={() => navigate(ROUTES.CREATE_CARD)}
        color="primary"
        aria-label="add card"
        sx={{ position: "absolute", bottom: 75, right: 15 }}
      >
        <AddIcon />
      </Fab>
      <CardsFeedback
        pending={pending}
        error={error}
        cards={filtered}
        onDelete={() => {}}
        setCards={setCards}
      />
    </Container>
  );
};

export default MyCardsPage;