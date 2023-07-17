import { Container } from '@mui/system';
import React, { useContext, useEffect } from 'react'
import PageHeader from '../../components/PageHeader';
import CardsFeedback from '../components/CardsFeedback';
import useCards from '../hooks/useCards';
import { searchContext } from '../../providers/SearchProvider';


const CardsPage = () => {
  const { searchQuery } = useContext(searchContext)
  const { pending, error, cards, handleGetCards, setCards, } = useCards();

  let filtered = []
  if(searchQuery.length > 0) {
    filtered = cards?.filter(card => (card?.title.match(searchQuery)))
  } else {
    filtered = cards
  }
  
  
  useEffect(() => {
    handleGetCards();    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDeleteCard = () => { };

  return (
    <Container>
      <PageHeader title="Cards" subtitle="On this page you can find all business cards from all categories" />

      <CardsFeedback
        pending={pending}
        error={error}
        cards={filtered}
        onDelete={onDeleteCard}
        setCards={setCards}
      />
    </Container>
  )
}

export default CardsPage