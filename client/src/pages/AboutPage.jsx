import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import PageHeader from '../components/PageHeader'

const AboutPage = () => {
  return (
    <Container maxWidth="lg">
        <PageHeader 
            title='About Page'
            subtitle='On this page you can find explanations about using the application'
        />

        <Grid container spacing={0}>
         <Grid item xs={10} md={6} lg={8} alignSelf="center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit sunt, magni explicabo dolor optio obcaecati eligendi facilis quia labore omnis libero? Laudantium, ab possimus dolor deleniti expedita inventore ipsa sapiente!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit sunt, magni explicabo dolor optio obcaecati eligendi facilis quia labore omnis libero? Laudantium, ab possimus dolor deleniti expedita inventore ipsa sapiente!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit sunt, magni explicabo dolor optio obcaecati eligendi facilis quia labore omnis libero? Laudantium, ab possimus dolor deleniti expedita inventore ipsa sapiente!
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
  );
};

export default AboutPage