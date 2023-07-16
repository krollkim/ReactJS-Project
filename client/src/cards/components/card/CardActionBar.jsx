import React, { useEffect } from 'react'
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
import useCardActionBar from './hooks/useCardActionBar';

// working likes and delete

const CardActionBar = ({ cardId, userId, card, setLike, cards, setCards }) => {
  const { user } = useUser();
  const navigate = useNavigate();
  const { handleLikeCard, handleDeleteCard } = useCards()
  const { onDelete, onLike,localLike,setLocalLike } = useCardActionBar(handleDeleteCard,handleLikeCard,setCards,cards)

  useEffect(() => {
    const isLiked = async () => {
      const hasUser = await card.likes.filter(like => (like === user?._id))   
      if (hasUser.length > 0) {
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