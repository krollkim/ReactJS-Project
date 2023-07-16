import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from "@mui/icons-material/Delete";
import CallIcon from '@mui/icons-material/Call';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  Box,
  CardActions,
  IconButton
} from "@mui/material";
import { func, string } from "prop-types";
import { useUser } from '../../../users/providers/UserProvider';
import { useNavigate } from "react-router-dom";
import ROUTES from '../../../routes/routesModel';
import useCards from '../../hooks/useCards';

// working likes and delete

const CardActionBar = ({ cardId, userId, card, setLike, cards, setCards }) => {
  const { user } = useUser();
  const navigate = useNavigate();
  const { handleLikeCard, handleDeleteCard } = useCards()
  const [localLike, setLocalLike] = useState()

  const onDelete = async (cardId) => {
    console.log(`you delete card no ${cardId}`)
    try {
      handleDeleteCard(cardId)
      setCards((prevCards) => cards.filter((card) => card._id !== cardId)
      );
    } catch (e) {
      console.log(e);
    }
  }

  const onLike = async (cardId) => {
    console.log(`you liked card no:${cardId}`)
    try {
      await handleLikeCard(cardId)
      cards.map(card => {

        if (card._id === cardId) {
          console.log("card should shange to liked");
          localLike ? setLocalLike(false) : setLocalLike(true)
          return card
        }
        return card
      })
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const isLiked = async () => {
      console.log('in is liked');
      const hasUser = await card.likes.filter(like => (like === user?._id))
      console.log(hasUser);
      if (hasUser.length > 0) {
        console.log('in if test');
        setLocalLike(true)
      }

    }
    isLiked()
  }, [setLike, card.likes, user?._id, setLocalLike])


  return (

    <CardActions sx={{ pt: 0, justifyContent: "space-between" }}>
      <Box>
        {(user && (user?._id === userId || user.isAdmin)) && (
          <IconButton aria-label='delete' onClick={() => onDelete(cardId)}>
            <DeleteIcon />
          </IconButton>
        )}
        {user && user?._id === userId && (
          <IconButton aria-label='edit' onClick={() => navigate(`${ROUTES.EDIT_CARD}/${cardId}`)}>
            <CreateIcon />
          </IconButton>
        )}
      </Box>
      <Box>
        <IconButton aria-label='call'>
          <CallIcon />
        </IconButton>
        {user && (
          <IconButton sx={{ color: localLike ? "red" : "inherit" }} aria-label='like' onClick={() => onLike(cardId)}>
            <FavoriteIcon />
          </IconButton>
        )}
      </Box>
    </CardActions>

  )
}

CardActionBar.propTypes = {
  cardId: string.isRequired,
  onEdit: func.isRequired,
}

export default CardActionBar