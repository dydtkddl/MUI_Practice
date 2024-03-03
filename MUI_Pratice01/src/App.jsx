import React from "react";
import { Button, ButtonGroup, Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Box } from "@mui/material"
// 
// import {makeStyles} from "@mui/styles"
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import useStyles from "./styles"

const cards = [1,2,3,4,5,6,7,8,9,10];


const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon className={classes.icon} />
          <Typography variant="h6">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm" sx={{ border: "1px solid", marginTop: "100px" }}>
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Photo Album</Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>Hello everyone This is a photo album and I'm trying to make this sentence as long as possible!</Typography>
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button className={classes.buttons} variant="contained">
                    See my Photos
                  </Button>
                </Grid>

                <Grid item>
                  <Button className={classes.buttons} variant="outlined">
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className = {classes.cardGrid} maxwidth = "md">
          <Grid container spacing = {4}>
            {cards.map((card)=>(
              <Grid item xs = {12} sm = {6}md ={4} key = {card}>
              <Card className={classes.card}>
                  <CardMedia className = {classes.cardMedia}title ="Image tite" image ="data:image/jpeg;base64,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" />
                  <CardContent className = {classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography >
                      This is a mediar card. you can !!2eqdwafwadqw
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size = "small" color = "primary">View</Button>
                    <Button size = "small" color = "primary">Edit</Button>
                  </CardActions>
              </Card>
            </Grid>
            ))}
            
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
              <Typography variant = "h6" align = "center">
                  Footer
              </Typography>
              <Typography variant = "subtitle1" align = "center">
                Somthing here to give the footer a purpose!
              </Typography>
      </footer>
    </>
  )
}
export default App;