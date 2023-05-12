import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import {TableFooter, Typography } from '@mui/material';
import { CSVLink } from "react-csv";
import Button from '@mui/material/Button';
import './Events.css'



function createData(Car_Number,Entery_Time, Exist_Time,Date) {
  return {  Car_Number,Entery_Time, Exist_Time,Date};
}
const rows = [
  createData('3:00pm','4/2/2023','2:00pm', 'BP-1-A6000'),
  createData('3:00pm','4/2/2023', '2:00pm', 'BP-1-A3400'),
  createData('3:00pm','4/2/2023', '2:00pm', 'BP-1-A3890'),
  createData( '3:00pm', '4/2/2023', '2:00pm', 'BP-1-A3430'),
  createData('3:00pm', '4/2/2023', '2:00pm', 'BP-1-A6784'),
  createData( '3:00pm','4/2/2023', '2:00pm', 'BP-1-A3567'),
  createData('3:00pm', '4/2/2023', '2:00pm', 'BP-1-A0454'),
  createData('3:00pm', '4/2/2023', '2:00pm', 'BP-1-A0466'),
  createData('3:00pm', '4/2/2023','2:00pm', 'BP-1-A03433'),
  createData('3:00pm', '4/2/2023','2:00pm', 'BP-1-A04544'),
  createData('3:00pm', '4/2/2023','2:00pm','BP-1-A0000'),

];
export default function Events() {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };


  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <React.Fragment>
      <div>
        <h2 className='topic'>Daily Report</h2>
        <CSVLink data={rows} className='btn' filename='Daily Report'>
          <Button variant='contained' >Downloads</Button>
        </CSVLink>
      </div>
      <TableContainer component={Paper}>

        <Table sx={{ minWidth: 770 , minHeight:600,}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align='center'><Typography  style={{ fontWeight: 600 }}>Car Number</Typography></TableCell>
              <TableCell align='left'><Typography  style={{ fontWeight: 600 }}>Date</Typography></TableCell>
              <TableCell align='left'><Typography  style={{ fontWeight: 600 }}>Entry Time</Typography></TableCell>
              <TableCell align='left'><Typography  style={{ fontWeight: 600 }}>Exit Time</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
              > <TableCell align='center'>{row.Date}</TableCell>
                <TableCell align='left'>{row.Entery_Time}</TableCell>
                <TableCell align='left'>{row.Exist_Time}</TableCell>
                <TableCell align='left'>{row.Car_Number}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
          <TablePagination
          align='center'
          rowsPerPageOptions={[5,9]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
          </TableFooter>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
  
}
