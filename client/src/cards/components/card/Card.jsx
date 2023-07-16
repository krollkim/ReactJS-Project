import React from 'react';
import cardType from '../../models/types/cardType';
import CardHead from './CardHead';
import CardBody from './CardBody';
import CardActionBar from './CardActionBar';
import { func } from 'prop-types'

import {
  Box,
  Card,
  CardActionArea,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../routes/routesModel';


const CardComponent = ({ cards, card, onDelete, onLike, onEdit, like, setLike, setCards }) => {

  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10, mb: 20 }}>
        <Card sx={{ minWidth: 300, maxWidth: 350 }} raised>
          <CardActionArea
            onClick={() => navigate(`${ROUTES.CARD_INFO}/${card._id}/${card.title}/${card.image.url.split("/")[2]}`)}>
            <CardHead image={card.image} />
            <CardBody card={card} />
          </CardActionArea>
          <CardActionBar
            userId={card.user_id}
            cardId={card._id}
            onDelete={onDelete}
            card={card}
            cards={cards}
            onEdit={onEdit}
            setCards={setCards}
          />
        </Card>
      </Box>
    </>
  )
}

CardComponent.propTypes = {
  card: cardType.isRequired,
  onEdit: func.isRequired,
};

export default CardComponent