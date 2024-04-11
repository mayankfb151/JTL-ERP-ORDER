import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";

export default function DenseTable(props: any) {
    const rows = props.orderData;
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: "#FFA500",
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        "&:last-child td, &:last-child th": {
            border: 0,
        },
    }));
    return (
        <TableContainer component={Paper}>
            {rows.length > 0 && (
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>
                                <Checkbox color="primary" />
                            </StyledTableCell>
                            {Object.keys(rows[0]).map((item, index) => {
                                return (
                                    <StyledTableCell key={index}>
                                        {item}
                                    </StyledTableCell>
                                );
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows &&
                            rows.map((row: any, index: any) => (
                                <StyledTableRow
                                    key={index}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <StyledTableCell>
                                        <Link to={`/orders/${row.id}`}>
                                            <Checkbox color="primary" />
                                        </Link>
                                    </StyledTableCell>
                                    {Object.keys(rows[0]).map((item, index) => {
                                        return (
                                            <StyledTableCell key={index}>
                                                {row[item]}
                                            </StyledTableCell>
                                        );
                                    })}
                                </StyledTableRow>
                            ))}
                    </TableBody>
                </Table>
            )}
        </TableContainer>
    );
}
