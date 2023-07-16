import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from "@mui/icons-material/Delete";
import CallIcon from '@mui/icons-material/Call';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
    Box,
    CardActions,
    IconButton
} from "@mui/material";
import {func, string} from "prop-types";
import { useUser } from '../../../users/providers/UserProvider';
import { useNavigate } from "react-router-dom";
import ROUTES from '../../../routes/routesModel';


const CardActionBar = ({cardId, onDelete, onLike, userId,card }) => {
  const { user } = useUser();
  
  const navigate = useNavigate();
  const isLiked = () => {
    const likeColor = card.likes.filter(like => (like === user._id))
    return likeColor[0] === user._id ? "red" : "inherit"
  }
  
  return (
   
<CardActions sx={{pt:0, justifyContent: "space-between"}}>
<Box>
    {(user && (user?._id === userId || user.isAdmin)) && (
    <IconButton aria-label='delete' onClick={()=>onDelete(cardId)}>
      <DeleteIcon/>
   </IconButton>
    )}
    { user && user?._id === userId && (
    <IconButton aria-label='edit' onClick={()=> navigate(`${ROUTES.EDIT_CARD}/${cardId}`)}>
      <CreateIcon/>
    </IconButton>
    )}
</Box>
<Box>
    <IconButton aria-label='call'>
      <CallIcon/>
    </IconButton>
    { user && (
   <IconButton sx={{color: isLiked() }} aria-label='like' onClick={()=>onLike(cardId)}>
    <FavoriteIcon/>
    </IconButton>
    )}
</Box>
</CardActions>

  )
}

CardActionBar.propTypes = {
  cardId: string.isRequired,
  onDelete: func.isRequired,
  onEdit: func.isRequired,
  onLike: func.isRequired,
}

export default CardActionBar