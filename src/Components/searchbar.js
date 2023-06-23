import * as React from 'react';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { useState , useEffect} from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';


export default function SearchBar(props){
   
    const [searchterm,setSearchterm]=useState();
    return(
      <Grid container>
        <Grid item md={12}>
        <Box sx={{display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mt:1,
                  mb:1}}>

<FormControl sx={{ width: '25ch' }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Movie</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            value={searchterm}
            onChange={(e)=>setSearchterm(e.target.value)}
            

            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  onClick={()=>props.searchmovies(searchterm)}
                ><SearchTwoToneIcon/>
                </IconButton>
              </InputAdornment>
            }
          />
          {console.log(searchterm)}
        </FormControl>
        </Box>
        
        </Grid>
        </Grid>
    )
        }