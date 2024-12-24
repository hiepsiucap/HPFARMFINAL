/** @format */

import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/lexend"; // Make sure you've installed the font
import { formatPrice } from "../utilize/Price";

interface Column {
  id: "name" | "dateRegister" | "project" | "subscription" | "totalprice";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "name", label: "Tên khách hàng", minWidth: 170 },
  { id: "dateRegister", label: "Ngày đăng kí", minWidth: 100 },
  {
    id: "project",
    label: "Dự án đầu tư",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "subscription",
    label: "Gói đăng kí",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "totalprice",
    label: "Tổng tiền",
    minWidth: 170,
    align: "right",
    format: (value: number) => formatPrice(value),
  },
];

interface Data {
  name: string;
  dateRegister: string;
  project: string;
  subscription: string;
  totalprice: number;
}

function createData(
  name: string,
  project: string,
  subscription: string,
  totalprice: number
): Data {
  const dateRegister = "1-1-2017";
  return { name, dateRegister, project, subscription, totalprice };
}

const rows = [
  createData("Nguyễn Hồng Hiệp", "Dự án trồng dâu tây", "Gói cơ bản ", 120000),
  createData("Nguyễn Hồng Hiệp", "Dự án trồng dâu tây", "Gói cơ bản ", 120000),
  createData("Nguyễn Hồng Hiệp", "Dự án trồng dâu tây", "Gói cơ bản ", 120000),

  createData("Nguyễn Hồng Hiệp", "Dự án trồng dâu tây", "Gói cơ bản ", 120000),
  createData("Nguyễn Hồng Hiệp", "Dự án trồng dâu tây", "Gói cơ bản ", 120000),
  createData("Nguyễn Hồng Hiệp", "Dự án trồng dâu tây", "Gói cơ bản ", 120000),
  createData("Nguyễn Hồng Hiệp", "Dự án trồng dâu tây", "Gói cơ bản ", 120000),
  createData("Nguyễn Hồng Hiệp", "Dự án trồng dâu tây", "Gói cơ bản ", 120000),
  createData("Nguyễn Hồng Hiệp", "Dự án trồng dâu tây", "Gói cơ bản ", 120000),
  createData("Nguyễn Hồng Hiệp", "Dự án trồng dâu tây", "Gói cơ bản ", 120000),
  createData("Nguyễn Hồng Hiệp", "Dự án trồng dâu tây", "Gói cơ bản ", 120000),
  createData("Nguyễn Hồng Hiệp", "Dự án trồng dâu tây", "Gói cơ bản ", 120000),
];

// Create a theme to apply the font and other custom styles
const theme = createTheme({
  typography: {
    fontFamily: "Lexend, Arial, sans-serif",
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          backgroundColor: "#FBFADA",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: "#FBFADA", // Table header background color
          fontWeight: "bold",
        },
      },
    },
  },
});

export default function RecentSubTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.name}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </ThemeProvider>
  );
}
