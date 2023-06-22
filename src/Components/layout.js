import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MovieCard from './Moviecard';
import { useState, useEffect } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function BasicGrid() {
  //742f108d-API key
const API_URL =' http://www.omdbapi.com/?apikey=742f108d&';
const [movielist, setMovielist]=useState(['']);
const searchmovies= async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`) ;
    const mydata = await response.json();
    const details = mydata.Search;
    setMovielist(details);
    
  }
  useEffect(()=>{
    searchmovies('home alone');
  },[]);
  return (
    
    <Box sx={{ flexGrow: 1, ml:1, mr:1 }}>
        <Grid container spacing={2}>
        {movielist.map((items)=>(
            <Grid item md={2}>
          <Item><MovieCard context={items}/></Item>
        </Grid>
        ))}
        
      </Grid>
    </Box>
  );
}