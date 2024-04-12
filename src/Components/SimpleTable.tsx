import { Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { Link } from "react-router-dom";

export default function DenseTable(props: any) {
    const rows = props.orderData;
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: "#1160b7",
            color: theme.palette.common.white,
            fontsize: 11,
        },
        [`&.${tableCellClasses.body}`]: {
            fontsize: 11,
            innerWidth: "20px",
        },
    }));
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
        "&:nth-of-type(even)": {
            backgroundColor: "whitesmoke",
        },
        // hide last border
        "&:last-child td, &:last-child th": {
            border: 0,
        },
    }));
    return (
        <TableContainer component={Paper}>
            {rows.length > 0 && (
                <Table
                    size="small"
                    sx={{ width: "100%" }}
                    aria-label="a dense table"
                >
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
                                    <StyledTableCell key={index}>
                                        <Link to={`/orders/${row.id}`}>
                                            <Checkbox color="primary" />
                                        </Link>
                                    </StyledTableCell>
                                    {Object.keys(rows[0]).map((item, index) => {
                                        return (
                                            <StyledTableCell key={index}>
                                                <Typography fontSize={"0.8rem"}>
                                                    {row[item]}
                                                </Typography>
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
