import { Container, Grid } from '@mui/material';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CardFeedback from '../components/card/CardFeedback';
import useCards from '../hooks/useCards';
import PageHeader from '../../components/PageHeader';

const CardDetailsPage = () => {
    const {id} = useParams();
    const {pending, error, card, handleGetCard} = useCards();
    const subtitle = "Here you can find more details about the business";


    
  const onLike = (cardId) => console.log(`you liked card no:${cardId}`);
  const onDelete = (cardId) => console.log(`you deleted card no:${cardId}`);
  const onEdit = (cardId) => console.log(`you edited card no:${cardId}`);

  useEffect(() => {
    handleGetCard(id);
  }, []);
  
  return (
    <Container maxWidth="lg">
      <PageHeader title="Card Details" subtitle={subtitle} />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* {pending && <Spinner />}
        {error && <Error errorMessage={error} />}
        <CardComponent
          card={card}
          onEdit={onEdit}
          onLike={onLike}
          onDelete={onDelete}
        /> */}
        <CardFeedback
          onEdit={onEdit}
          onLike={onLike}
          onDelete={onDelete}
          pending={pending}
          card={card}
          error={error}
        />
      </Container>
    </Container>
  );
}

export default CardDetailsPage