import { Container, Typography, Box, Divider, CardMedia } from '@mui/material';
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useCards from '../hooks/useCards';
import PageHeader from '../../components/PageHeader';

const CardDetailsPage = () => {
  const { id } = useParams();
  const { card, handleGetCard } = useCards();
  const subtitle = "Here you can find more details about the business";

  useEffect(() => {
    handleGetCard(id);
    // eslint-disable-next-line
  }, [id]);
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
        
        <Box display={"flex"} alignItems={"center"} flexDirection={{ xs: "column", sm: "row" }}>
          <Box position={"relative"} display={"flex"} width={{ xs: "100%", sm: "50%" }} alignItems={"center"} justifyContent={"center"}>
            <CardMedia sx={{ boxShadow: "1px 1px 15px 1px black", borderRadius: "8px", opacity: "0.7", minHeight: "250px", maxHeight: "600px" }} component="img" image={card?.image.url} alt={card?.image.alt} />

          </Box>
          <Box flexDirection={"column"} width={{ xs: "100%", sm: "50%" }} ml={{ xs: 0, sm: 5 }} display={"flex"} justifyContent={"flex-start"} alignItems={"flex-start"}>
            <Typography color={"#FF9900"} sx={{ textShadow: "1px 1px 1px black" }} mb={2} variant={'h3'}> {card?.title}</Typography>
            <Typography sx={{ textShadow: "1px 1px 1px black" }} mb={5} variant='h5'> {card?.subtitle}</Typography>
            <Typography alignItems={"flex-start"} justifyContent={"flex-start"}>{card?.description}</Typography>
            <Divider sx={{height:"20px"}} />
            <Typography alignItems={"flex-start"} justifyContent={"flex-start"}>County: {card?.address.country}</Typography>
            <Typography alignItems={"flex-start"} justifyContent={"flex-start"}>State: {card?.address.state}</Typography>
            <Typography alignItems={"flex-start"} justifyContent={"flex-start"}>City: {card?.address.city}</Typography>
            <Typography alignItems={"flex-start"} justifyContent={"flex-start"}>Street: {card?.address.street}</Typography>
            <Typography alignItems={"flex-start"} justifyContent={"flex-start"}>House number: {card?.address.houseNumber}</Typography>
            <Typography alignItems={"flex-start"} justifyContent={"flex-start"}>Zip code: {card?.address.zip}</Typography>
            <Box display={'flex'} height={"100%"} alignItems={"flex-end"} >
              <Typography color={"#FF9900"} mt={7} justifyContent={"flex-end"}>Contact us: <Link style={{ color: '#7662c5', textDecoration: "none" }} to={`tel:${card?.phone}`} color='white'>{card?.phone}</Link></Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Container>
  );
}

export default CardDetailsPage