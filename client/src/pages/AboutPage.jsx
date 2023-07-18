import { 
  Grid,
  Typography,
  Button,
  Link,
  TextField, } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import PageHeader from '../components/PageHeader'

const AboutPage = () => {
  return (
    <>
    <Container maxWidth="lg">
        <PageHeader 
            title='About'
            subtitle='This website is a business card creator that allows you to create, manage, and share your business cards. It uses the technologies ReactJS, NodeJS, and MongoDB'
        />
  
        <Grid container spacing={5}>
         <Grid item xs={10} md={6} lg={8} alignSelf="center">
          <Container>
            <Typography variant="h3" mb={3}>Features</Typography>
            <Typography variant="body1">
        <ul>
          <li>Create and edit your business cards with all CRUD functions
            (create, read, update, delete).</li>
          <li>Login and signup with your email address and password.</li>
          <li>Manage your users and their permissions.</li>
          <li>Favorite specific business cards.</li>
          <li>Add business cards to your collection.</li>
        </ul>
      </Typography>
          </Container>
         </Grid>
          <Grid 
          item xs={5.1} lg={4} 
          sx={{display: {md: "flex"}, 
          justifyContent: "center"
          }}>
            <img src="/assets/images/card.jpg" alt="card" width={350}/>
          </Grid>
        </Grid>
    </Container>
    <Container sx={{border: 1, borderRadius: 5, background: '#7662c5bb', mt: 2}}>
    <Container>
          <Typography variant="h3" mt={2} ml={2} mb={3}>Technologies</Typography>
    <Typography variant="body1" ml={2} mb={3}>
        This website uses the following technologies:
        <ul>
          <li><Typography variant="h6" mb={1} mt={2}>ReactJS</Typography>: A JavaScript library for building user interfaces.</li>
          <li><Typography variant="h6" mb={1} mt={2}>NodeJS</Typography>: A runtime environment for JavaScript.</li>
          <li><Typography variant="h6" mb={1} mt={2}>MongoDB</Typography>: A NoSQL database.</li>
        </ul>
      </Typography>
      <Typography variant="body1" sx={{fontWeight: 800, mb: 3}}>
        To use this website, you will need to create an account and login.
        Once you are logged in, you can start creating and editing your
        business cards. You can also manage your users and their permissions,
        favorite specific business cards, and add business cards to your
        collection.
      </Typography>
      <Typography variant="body1" mt={6}>
        To install the technologies used by this website, you can follow these
        steps:
        <Container>
        <ol>
          <li><Typography variant="h6">Install NodeJS</Typography>
          </li>
          <li><Typography variant="h6">Install MongoDB</Typography>
          </li>
          <li><Typography variant="h6">Install ReactJS</Typography>
          </li>
        </ol>
        </Container>
      </Typography>
      <Typography variant="body1" sx={{mt: 5, mb: 5}}>
        Once you have installed the necessary technologies, you can start
        developing your own business card website.
      </Typography>
     <Container sx={{mb: 5}}>
      <Typography>
      <Typography variant="h4">Contact</Typography>
      
      If you have any questions or feedback, please contact us at kimkroll2000@gmail.com <br/>
      Thank you for using our website!
      </Typography>
     </Container>
    </Container>
    </Container>
  </>
  );
};

export default AboutPage