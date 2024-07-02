import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Read = () => {
    const rows=[{name:'deepta',phone:786888886,email:'deep@gmail.com'},{name:'namitha',phone:65479876,email:'nami@gmail.com'},{name:'parvathy',phone:973527,email:'pas@gmail.com'}]
  
  return (
    <div>
         <TableContainer style={{marginTop:100}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell align="right">phone</TableCell>
            <TableCell align="right">email;(g)</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
    </div>
  )
  
}

export default Read