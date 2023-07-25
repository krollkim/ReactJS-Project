import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useSnack } from "../../providers/SnackbarProvider";
import ROUTES from "../../routes/routesModel";
import normalizeCard from "../helpers/normalization/normalizeCards";
import { 
  getCards,
  getCard,
  getMyCards,
  createCard, 
  editCard, 
  deleteCard,
  likeCard,  
} from "../services/cardServices";


const useCards = () => {
  const [cards, setCards] = useState(null);
  const [card, setCard] = useState(null);
  const [like, setLike] = useState(false)
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);
  const [cardId,setCardId] = useState(null);
  const {setSnack} = useSnack();
  const navigate = useNavigate();

  useAxios();

  const requestStatus = (pending, error, cards, card) => {
    setPending(pending);
    setError(error);
    setCards(cards);
    setCard(card);
    
  };

  const handleGetCards = async () => {
    try {
      setPending(true);
      const cards = await getCards();
      requestStatus(false, null, cards, null);
    } catch (error) {
      requestStatus(false, error, null, null);
    }
  };

  const handleGetCard = async cardId => {
    try {
      setPending(true);
      const card = await getCard(cardId);
      requestStatus(false, null, null, card);
    } catch (error) {
      requestStatus(false, error, null, null);
    }
  };

  const handleGetMyCards = useCallback(async () => {
    try{
      setPending(true);
      const cards = await getMyCards();
      requestStatus(false, null, cards, null);
    } catch(error) {
      requestStatus(false, error, null, null);
    }
  }, [])

 
  const handleCreateCard = useCallback(async cardFromClient => {
    try{
      setPending(true);
      const normalCard = normalizeCard(cardFromClient);
      const card = await createCard(normalCard)
      requestStatus(false, null, null, card);
      setSnack('success', 'your card has been created!');
      navigate(ROUTES.MY_CARDS);
    } catch (error) {
      requestStatus(false, error, null, null);
    }
  }, [setSnack, navigate]);

  const handleUpdateCard = async (card) => {
    
    try {
      setPending(true);
      const normalCard = normalizeCard(card);
      const data = await editCard(normalCard,cardId);
      requestStatus(false, null, null, card);
      setSnack('success', 'your card has been UPDATED!');
      navigate(ROUTES.MY_CARDS)
    } catch (error) {
      requestStatus(false, error, null, null);
    }
  };

  const handleLikeCard = async cardId => {
    try {
      setPending(true);
      const card = await likeCard(cardId);
      requestStatus(false, null, null, card, );
    } catch (error) {
      requestStatus(false, error, null, null);
    }
  };

  const handleDeleteCard = async cardId => {
    try {
      setPending(true);
      const card = await deleteCard(cardId);
      requestStatus(false, null, null, card);
      
    } catch (error) {
      requestStatus(false, error, null, null);
    }
    if(card) navigate(ROUTES.CARDS);
  };

  const handleGetFavCards = async (userId) => {
    try {
      setPending(true)
      const cards = await getCards()
      const favCards = cards.filter(card => {    
        return card.likes.map((like) => (like === userId))[0] 
      })
      requestStatus(false,null,favCards,null)
    } catch (error) {
      requestStatus(false, error, null, null);
    }
  }

  return {
    card,
    cards,
    pending,
    error,
    setCards,
    setCard,
    like,
    setLike,
    handleGetCards,
    handleGetCard,
    handleGetMyCards,
    handleCreateCard,
    handleUpdateCard,
    handleDeleteCard,
    handleLikeCard,
    handleGetFavCards,
    setCardId,
  };
};

export default useCards;
