import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardProduct() {
  return (
    <Card sx={{ width: '270px' /* 300 */, marginTop: '20px', borderRadius:'7px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="https://media-cdn.tripadvisor.com/media/photo-s/1c/ee/29/d3/photo0jpg.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}