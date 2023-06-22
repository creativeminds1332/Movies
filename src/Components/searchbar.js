import * as React from 'react';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function SearchBar(){
    const [searchterm,setSearchterm]=useState(null);
    return(
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
                  
                ><SearchTwoToneIcon/>
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        </Box>
    )
        }