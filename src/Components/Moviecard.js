import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';




export default function MovieCard(props) {
  const data={
    "Title": "The Fast and the Furious",
    "Year": "2001",
    "imdbID": "tt0232500",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
}
  return (
    <Card sx={{ width:202, height:295}}>
      <CardMedia
        sx={{ height: 180 }}
        image={props.context.Poster}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {props.context.Title}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {props.context.Type}, {props.context.Year}
        </Typography>
        
      </CardContent>
      
    </Card>
    
  );
}