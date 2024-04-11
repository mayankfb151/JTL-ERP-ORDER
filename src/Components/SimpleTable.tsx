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

export default function DenseTable(props: any) {
    const rows = props.orderData;
    return (
        <TableContainer component={Paper}>
            <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox">
                            <Checkbox color="primary" />
                        </TableCell>
                        {Object.keys(rows[0]).map((item) => {
                            return <TableCell>{rows[0][item]}</TableCell>;
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row: any) => (
                        <TableRow
                            key={row.name}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell padding="checkbox">
                                <Link to={`/orders/${row.id}`}>
                                    <Checkbox color="primary" />
                                </Link>
                            </TableCell>
                            {Object.keys(rows[0]).map((item) => {
                                return <TableCell>{row[item]}</TableCell>;
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
