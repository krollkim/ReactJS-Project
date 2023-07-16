import { useState } from "react"


const useCardActionBar = (handleDeleteCard,handleLikeCard,setCards,cards) => {
    const [localLike, setLocalLike] = useState()
    
    const onDelete = async (cardId) => {
        try {
          handleDeleteCard(cardId)
          setCards((prevCards) => cards.filter((card) => card._id !== cardId)
          );
        } catch (e) {
          console.log(e);
        }
      }

      const onLike = async (cardId) => {
        try {
          await handleLikeCard(cardId)
          cards.map(card => {
    
            if (card._id === cardId) {
              localLike ? setLocalLike(false) : setLocalLike(true)
              return card
            }
            return card
          })
        } catch (err) {
          console.log(err);
        }
      };

      return {
        onDelete,
        onLike,
        localLike,
        setLocalLike
      }
}

export default useCardActionBar