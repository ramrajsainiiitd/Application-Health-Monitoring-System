import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import classes from '../BasicTable/Table.module.css';
import failedStstusDot from '../../assets/FailedStatusDot.svg';
import successfulStstusDot from '../../assets/SuccessfulStatusDot.svg';
import inProgressStstusDot from '../../assets/InProgressStatusDot.svg';

export default function BasicTable(props) {
  const { data, columns } = props;

  const getStatusClass = (status) => {
    if (status === 'successful') {
      return classes.successful;
    } else if (status === 'failed') {
      return classes.failed;
    } else if (status === 'in_progress') {
      return classes.in_progress;
    }
    return '';
  };

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table sx={{ minWidth: 450 }} sy={{ maxHeight: 400 }}>
        <TableHead>
          <TableRow className={classes.tableRow}>
            {columns.map((column) => (
              <TableCell className={classes.TableCell}>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell component="th" scope="row" className={classes.TableCell}>
                  {row[column] === 'successful' ||
                  row[column] === 'failed' ||
                  row[column] === 'in_progress' ? (
                    <div className={getStatusClass(row.status)}>
                      {row[column] === 'successful' && (
                        <>
                          <img src={successfulStstusDot} alt="Successfil dot" />
                          {row[column]}
                        </>
                      )}
                      {row[column] === 'failed' && (
                        <>
                          <img src={failedStstusDot} alt="Failed dot" />
                          {row[column]}
                        </>
                      )}
                      {row[column] === 'in_progress' && (
                        <>
                          <img src={inProgressStstusDot} alt="In Progress dot" />
                          {row[column]}
                        </>
                      )}
                    </div>
                  ) : (
                    row[column]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
