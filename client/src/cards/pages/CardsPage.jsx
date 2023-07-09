import { Container } from '@mui/system';
import React, {useEffect} from 'react'
import PageHeader from '../../components/PageHeader';
import CardsFeedback from '../components/CardsFeedback';
import useCards from '../hooks/useCards';


const CardsPage = () => {

const {
  pending, 
  error, 
  cards, 
  handleGetCards,
} = useCards();

useEffect(()=> {
    handleGetCards();
}, []);

const onDeleteCard = () => {};

  return (
    <Container>
        <PageHeader title="Cards" subtitle="On this page you can find all business cards from all categories"/>

        <CardsFeedback
        pending={pending}
        error={error}
        cards={cards}
        onDelete={onDeleteCard}
        />
    </Container>
  )
}

export default CardsPage