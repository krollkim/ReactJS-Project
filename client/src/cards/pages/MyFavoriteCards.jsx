import React, { useContext, useEffect } from "react";
import { useUser } from "../../users/providers/UserProvider";
import useCards from "../hooks/useCards";
import PageHeader from "../../components/PageHeader";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { Container } from "@mui/material";
import CardsFeedback from "../components/CardsFeedback";
import { searchContext } from "../../providers/SearchProvider";

const MyFavoriteCards = () => {
  const { user } = useUser();
  const { pending, error, cards, handleGetFavCards } = useCards();
  const navigate = useNavigate();
  const { searchQuery } = useContext(searchContext)

  let filtered = []
  if(searchQuery.length > 0) {
    filtered = cards?.filter(card => (card?.title.match(searchQuery)))
  } else {
    filtered = cards
  }

  useEffect( () => {
    const getCards = async ()=>{
      if (!user){ 
        navigate(ROUTES.CARDS);}
      else {
        await handleGetFavCards(user._id);
      }
    }
    getCards()
    // eslint-disable-next-line
  }, []);

  return (
    <Container sx={{ position: "relative", minHeight: "90vh" }}>
      <PageHeader
       title="favorite card Page"
       subtitle="Here is your favorite cards"
      />
      <CardsFeedback
        pending={pending}
        error={error}
        cards={filtered}
        onDelete={() => {}}       
      />
    </Container>
  );
};

export default MyFavoriteCards;