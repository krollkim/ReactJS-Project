import React from 'react';
import cardType from '../../models/types/cardType';
import CardHead from './CardHead';
import CardBody from './CardBody';
import CardActionBar from './CardActionBar';
import {func} from 'prop-types'

import {
    Box,
    Card,
    CardActionArea,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../routes/routesModel';


const CardComponent = ({ card, onDelete, onLike, onEdit }) => {

  const navigate = useNavigate();
  return (
 <>

 {/* fourth card, with props injaction and loop */}
  <Box sx={{display: "flex", justifyContent: "center", mt: 10, mb: 20}}>
    <Card sx={{minWidth: 300, maxWidth: 350}} raised>
        <CardActionArea
          onClick={() => navigate(`${ROUTES.CARD_INFO}/${card._id}/${card.title}/${card.image.url.split("/")[2]}`)}>
            <CardHead image={card.image}/>
            <CardBody card={card}/>
        </CardActionArea>
            <CardActionBar
            userId={card.user_id}
            cardId={card._id}
            onDelete={onDelete}
            onLike={onLike}
            onEdit={onEdit}
            />
    </Card>
  </Box>
 </>
 )
}

CardComponent.propTypes = {
  card: cardType.isRequired,
  onLike: func.isRequired,
  onDelete: func.isRequired,
  onEdit: func.isRequired,
};

export default CardComponent