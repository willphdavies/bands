import { Box, Card, CardContent, CardHeader, CardMedia } from "@mui/material";
import './About.scss';
export function About() {
  return (
    <Box className="page-about">
      <Card className="about__card">
        <CardHeader title="About Us" subheader="What the hell is this..?" />
        <CardMedia component="img" src="/img/bar.jpeg" height="500" />
        <CardContent>
          All In One Take began as an open jam session at <a href="https://drinkbeerhereportland.com/" rel="noreferrer" target="_blank" >Growlers Taproom</a> located on 82nd St in Portland, OR. 
          The event quickly gained popularity, drawing in a diverse range of musicians including flautists, drummers, saxophonists, guitarists, and keyboardists. 
          Joe, the owner, designed the venue with live performances in mind and equipped it with a complete PA system, a drum kit, bass, guitar, amplifiers, even a REAL Hammond Organ with a Leslie Speaker.
          The venue even boasts a double bass for those brave enough to play it.
          <br />
          <br />
          One day, Joe Mishkin (another Joe), a regular patron, proposed the idea of recording the jam sessions, and thus, All In One Take was born.
          <br />
          <br />
          The rules for the jam are simple, no covers, no "songs you know", just pick up an instrument and play along.
          <iframe title="Growlers Taproom" src="https://docs.google.com/presentation/d/e/2PACX-1vSE0uoLEBQumR69s6SrpbXWGU7zdRFkyYGzcNDMlN_7ig2vHzprZV1DMqnNM5cI_39EM84qQ4zRrfcK/embed?start=true&loop=true&delayms=3000" />
        </CardContent>
      </Card>
    </Box>
  )
}