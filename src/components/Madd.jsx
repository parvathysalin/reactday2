import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Madd = () => {
    const [page,setpage]=useState('deepta')
    const [count,setCount]=useState(0)
    function valueAdd(){
        setCount(count+1)
    }
  return (
    
    <Box 
    style={{marginTop:'50px'}}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"

    ><h1>welcome to {page} page</h1>
        <div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="name"
          defaultValue="Hello World"
        /></div>
        <div>
            
        <TextField
          
          id="outlined-disabled"
          label="email"
          type="email"
          defaultValue="dashvcs@gmail.com"
        /></div>
        <div>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        /></div>
        <div>
        <TextField
          id="outlined-read-only-input"
          label="phone"
          defaultValue="Hello"
          InputProps={{
            readOnly: true,
          }}
        /></div>
        </div>
        <div>
                <Button onClick={valueAdd}>register</Button>
                <small>button is clicked {count}</small>
            </div>
        </Box>
  )
}

export default Madd