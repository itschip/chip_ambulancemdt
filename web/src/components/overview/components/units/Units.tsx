import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow'; 
import { Chip } from '@material-ui/core';

import useStyles from './units.styles';
import { useUnits } from '../../hooks/useUnits';

const Units = () => {
  const units = useUnits();
  const classes = useStyles();

  if (!units) return <p>loading</p>

  return (
    <TableContainer className={classes.tableContainer}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeader} style={{ fontWeight: 800, fontSize: 20, color: '#73a3c9' }}>Enheter</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {units.map((unit) => (
            <TableRow key={unit}>
              <TableCell component="th" scope="row">
                <Chip label={unit}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Units;