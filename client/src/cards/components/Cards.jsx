import {Grid, Container} from "@mui/material";
import React from "react";
import CardComponent from "./card/Card";
import { arrayOf } from "prop-types";
import cardType from "../models/types/cardType";
import useCards from "../hooks/useCards";

const Cards = ({cards}) => {
  const { handleDeleteCard } = useCards();

  const onLike = (cardId) => console.log(`you liked card no:${cardId}`);
  const onDelete = (cardId) => handleDeleteCard(cardId);
  const onEdit = (cardId) => console.log(`you edited card no:${cardId}`);

  return (
  
    <Grid container spacing={2} pb={2}>
      {cards.map((card) => (
        <Grid item key={card._id} xs={12.5} sm={6.5} md={4.5} lg={3.5}>
          <CardComponent
            onLike={onLike}
            onDelete={onDelete}
            onEdit={onEdit}
            card={card}
          />
        </Grid>
      ))}
    </Grid>
  );
};

Cards.propTypes = {
  cards: arrayOf(cardType),
};

export default Cards;