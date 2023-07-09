import React from "react";
import { string } from "prop-types";
import Container from "@mui/material/Container";
import { CardMedia, Grid, Typography } from "@mui/material";

const Error = ({ errorMessage }) => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography variant="h5" color="initial">
            Oops.. something went wrong: {errorMessage}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} justifyContent="center">
          <CardMedia
            component="img"
            maxWidth="100"
            image="/client/public/assets/images/broken-robot.png"
          ></CardMedia>
        </Grid>
      </Grid>
    </Container>
  );
};

Error.propTypes = {
  errorMessage: string.isRequired,
};

export default Error;