import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Classes from '../BasicTable/Table.module.css';
import FailedStstusDot from '../../assets/FailedStatusDot.svg';
import SuccessfulStstusDot from '../../assets/SuccessfulStatusDot.svg';
import InProgressStstusDot from '../../assets/InProgressStatusDot.svg';

export default function BasicTable(props) {
  const { data, columns } = props;

  const getStatusClass = (status) => {
    if (status === 'successful') {
      return Classes.successful;
    } else if (status === 'failed') {
      return Classes.failed;
    } else if (status === 'in_progress') {
      return Classes.in_progress;
    }
    return '';
  };

  return (
    <TableContainer component={Paper} className={Classes.tableContainer}>
      <Table sx={{ minWidth: 450 }} sy={{ maxHeight: 400 }}>
        <TableHead>
          <TableRow className={Classes.tableRow}>
            {columns.map((column) => (
              <TableCell className={Classes.TableCell}>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell component="th" scope="row" className={Classes.TableCell}>
                  {row[column] === 'successful' ||
                  row[column] === 'failed' ||
                  row[column] === 'in_progress' ? (
                    <div className={getStatusClass(row.status)}>
                      {row[column] === 'successful' && (
                        <>
                          <img src={SuccessfulStstusDot} alt="Successfil dot" />
                          {row[column]}
                        </>
                      )}
                      {row[column] === 'failed' && (
                        <>
                          <img src={FailedStstusDot} alt="Failed dot" />
                          {row[column]}
                        </>
                      )}
                      {row[column] === 'in_progress' && (
                        <>
                          <img src={InProgressStstusDot} alt="In Progress dot" />
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
