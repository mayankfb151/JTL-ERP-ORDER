import * as React from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

interface Data {
    id: number;
    calories: number;
    carbs: number;
    fat: number;
    name: string;
    protein: number;
}

function createData(
    id: number,
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
): Data {
    return {
        id,
        name,
        calories,
        fat,
        carbs,
        protein,
    };
}

const rows = [
    createData(1, "Cupcake", 305, 3.7, 67, 4.3),
    createData(2, "Donut", 452, 25.0, 51, 4.9),
    createData(3, "Eclair", 262, 16.0, 24, 6.0),
    createData(4, "Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData(5, "Gingerbread", 356, 16.0, 49, 3.9),
    createData(6, "Honeycomb", 408, 3.2, 87, 6.5),
    createData(7, "Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData(8, "Jelly Bean", 375, 0.0, 94, 0.0),
    createData(9, "KitKat", 518, 26.0, 65, 7.0),
    createData(10, "Lollipop", 392, 0.2, 98, 0.0),
    createData(11, "Marshmallow", 318, 0, 81, 2.0),
    createData(12, "Nougat", 360, 19.0, 9, 37.0),
    createData(13, "Oreo", 437, 18.0, 63, 4.0),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string }
) => number {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(
    array: readonly T[],
    comparator: (a: T, b: T) => number
) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: "name",
        numeric: false,
        disablePadding: true,
        label: "Dessert (100g serving)",
    },
    {
        id: "calories",
        numeric: true,
        disablePadding: false,
        label: "Calories",
    },
    {
        id: "fat",
        numeric: true,
        disablePadding: false,
        label: "Fat (g)",
    },
    {
        id: "carbs",
        numeric: true,
        disablePadding: false,
        label: "Carbs (g)",
    },
    {
        id: "protein",
        numeric: true,
        disablePadding: false,
        label: "Protein (g)",
    },
];

interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (
        event: React.MouseEvent<unknown>,
        property: keyof Data
    ) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
    const {
        onSelectAllClick,
        order,
        orderBy,
        numSelected,
        rowCount,
        onRequestSort,
    } = props;
    const createSortHandler =
        (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={
                            numSelected > 0 && numSelected < rowCount
                        }
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            "aria-label": "select all desserts",
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? "right" : "left"}
                        padding={headCell.disablePadding ? "none" : "normal"}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : "asc"}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === "desc"
                                        ? "sorted descending"
                                        : "sorted ascending"}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

interface EnhancedTableToolbarProps {
    numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
    const { numSelected } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(
                            theme.palette.primary.main,
                            theme.palette.action.activatedOpacity
                        ),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: "1 1 100%" }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: "1 1 100%" }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Nutrition
                </Typography>
            )}
            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
}
export default function EnhancedTable() {
    const [order, setOrder] = React.useState<Order>("asc");
    const [orderBy, setOrderBy] = React.useState<keyof Data>("calories");
    const [selected, setSelected] = React.useState<readonly number[]>([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof Data
    ) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const handleSelectAllClick = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected: readonly number[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDense(event.target.checked);
    };

    const isSelected = (id: number) => selected.indexOf(id) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            stableSort(rows, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
            ),
        [order, orderBy, page, rowsPerPage]
    );

    const top100Films = [
        { title: "The Shawshank Redemption", year: 1994 },
        { title: "The Godfather", year: 1972 },
        { title: "The Godfather: Part II", year: 1974 },
        { title: "The Dark Knight", year: 2008 },
        { title: "12 Angry Men", year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: "Pulp Fiction", year: 1994 },
        {
            title: "The Lord of the Rings: The Return of the King",
            year: 2003,
        },
        { title: "The Good, the Bad and the Ugly", year: 1966 },
        { title: "Fight Club", year: 1999 },
        {
            title: "The Lord of the Rings: The Fellowship of the Ring",
            year: 2001,
        },
        {
            title: "Star Wars: Episode V - The Empire Strikes Back",
            year: 1980,
        },
        { title: "Forrest Gump", year: 1994 },
        { title: "Inception", year: 2010 },
        {
            title: "The Lord of the Rings: The Two Towers",
            year: 2002,
        },
        { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
        { title: "Goodfellas", year: 1990 },
        { title: "The Matrix", year: 1999 },
        { title: "Seven Samurai", year: 1954 },
        {
            title: "Star Wars: Episode IV - A New Hope",
            year: 1977,
        },
        { title: "City of God", year: 2002 },
        { title: "Se7en", year: 1995 },
        { title: "The Silence of the Lambs", year: 1991 },
        { title: "It's a Wonderful Life", year: 1946 },
        { title: "Life Is Beautiful", year: 1997 },
        { title: "The Usual Suspects", year: 1995 },
        { title: "Léon: The Professional", year: 1994 },
        { title: "Spirited Away", year: 2001 },
        { title: "Saving Private Ryan", year: 1998 },
        { title: "Once Upon a Time in the West", year: 1968 },
        { title: "American History X", year: 1998 },
        { title: "Interstellar", year: 2014 },
        { title: "Casablanca", year: 1942 },
        { title: "City Lights", year: 1931 },
        { title: "Psycho", year: 1960 },
        { title: "The Green Mile", year: 1999 },
        { title: "The Intouchables", year: 2011 },
        { title: "Modern Times", year: 1936 },
        { title: "Raiders of the Lost Ark", year: 1981 },
        { title: "Rear Window", year: 1954 },
        { title: "The Pianist", year: 2002 },
        { title: "The Departed", year: 2006 },
        { title: "Terminator 2: Judgment Day", year: 1991 },
        { title: "Back to the Future", year: 1985 },
        { title: "Whiplash", year: 2014 },
        { title: "Gladiator", year: 2000 },
        { title: "Memento", year: 2000 },
        { title: "The Prestige", year: 2006 },
        { title: "The Lion King", year: 1994 },
        { title: "Apocalypse Now", year: 1979 },
        { title: "Alien", year: 1979 },
        { title: "Sunset Boulevard", year: 1950 },
        {
            title: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
            year: 1964,
        },
        { title: "The Great Dictator", year: 1940 },
        { title: "Cinema Paradiso", year: 1988 },
        { title: "The Lives of Others", year: 2006 },
        { title: "Grave of the Fireflies", year: 1988 },
        { title: "Paths of Glory", year: 1957 },
        { title: "Django Unchained", year: 2012 },
        { title: "The Shining", year: 1980 },
        { title: "WALL·E", year: 2008 },
        { title: "American Beauty", year: 1999 },
        { title: "The Dark Knight Rises", year: 2012 },
        { title: "Princess Mononoke", year: 1997 },
        { title: "Aliens", year: 1986 },
        { title: "Oldboy", year: 2003 },
        { title: "Once Upon a Time in America", year: 1984 },
        { title: "Witness for the Prosecution", year: 1957 },
        { title: "Das Boot", year: 1981 },
        { title: "Citizen Kane", year: 1941 },
        { title: "North by Northwest", year: 1959 },
        { title: "Vertigo", year: 1958 },
        {
            title: "Star Wars: Episode VI - Return of the Jedi",
            year: 1983,
        },
        { title: "Reservoir Dogs", year: 1992 },
        { title: "Braveheart", year: 1995 },
        { title: "M", year: 1931 },
        { title: "Requiem for a Dream", year: 2000 },
        { title: "Amélie", year: 2001 },
        { title: "A Clockwork Orange", year: 1971 },
        { title: "Like Stars on Earth", year: 2007 },
        { title: "Taxi Driver", year: 1976 },
        { title: "Lawrence of Arabia", year: 1962 },
        { title: "Double Indemnity", year: 1944 },
        {
            title: "Eternal Sunshine of the Spotless Mind",
            year: 2004,
        },
        { title: "Amadeus", year: 1984 },
        { title: "To Kill a Mockingbird", year: 1962 },
        { title: "Toy Story 3", year: 2010 },
        { title: "Logan", year: 2017 },
        { title: "Full Metal Jacket", year: 1987 },
        { title: "Dangal", year: 2016 },
        { title: "The Sting", year: 1973 },
        { title: "2001: A Space Odyssey", year: 1968 },
        { title: "Singin' in the Rain", year: 1952 },
        { title: "Toy Story", year: 1995 },
        { title: "Bicycle Thieves", year: 1948 },
        { title: "The Kid", year: 1921 },
        { title: "Inglourious Basterds", year: 2009 },
        { title: "Snatch", year: 2000 },
        { title: "3 Idiots", year: 2009 },
        { title: "Monty Python and the Holy Grail", year: 1975 },
    ];

    return (
        <Box sx={{ width: "100%" }}>
            <Paper sx={{ width: "100%", mb: 2 }}>
                <Autocomplete
                    id="free-solo-demo"
                    freeSolo
                    options={top100Films.map((option) => option.title)}
                    renderInput={(params) => (
                        <TextField {...params} label="freeSolo" />
                    )}
                />
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={dense ? "small" : "medium"}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {visibleRows.map((row, index) => {
                                const isItemSelected = isSelected(row.id);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) =>
                                            handleClick(event, row.id)
                                        }
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.id}
                                        selected={isItemSelected}
                                        sx={{ cursor: "pointer" }}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                color="primary"
                                                checked={isItemSelected}
                                                inputProps={{
                                                    "aria-labelledby": labelId,
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell
                                            component="th"
                                            id={labelId}
                                            scope="row"
                                            padding="none"
                                        >
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.calories}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.fat}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.carbs}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.protein}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <FormControlLabel
                control={
                    <Switch checked={dense} onChange={handleChangeDense} />
                }
                label="Dense padding"
            />
        </Box>
    );
}
