import React, { useEffect, useState } from "react";
import Header from "../../Components/layouts/Header";
import Bargraph from "../../Components/themes/BarChart";
import {
  Box,
  Stack,
  TextField,
  Typography,
  TableContainer,
  Button,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { LoadingButton } from "@mui/lab";
import * as Api from "../../Services/Api";
import moment from "moment";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import "jspdf-autotable";

const GetFarmer = (props: any) => {
  const [farmer, setFarmer] = useState<any>();

  useEffect(() => {
    const getFarmer = async () => {
      const [err, res] = await Api.getFarmerById(props?.farmerId);
      setFarmer(res?.data);
    };
    getFarmer();
  }, []);

  return (
    <>
      <Typography>{farmer ? farmer?.name : props?.farmerId}</Typography>
      <Typography>{farmer ? farmer?.mobile : null}</Typography>
    </>
  );
};

const filterData = (start_date: any, end_date: any, data: any) => {
  if (!start_date && !end_date) {
    return data;
  } else {
    const filteredData = data.filter((o: any) => {
      const itemDate = moment(o.createdAt).format("DD-MM-YYYY");
      const start = moment(start_date).format("DD-MM-YYYY");
      const end = moment(end_date).format("DD-MM-YYYY");
      return itemDate >= start && itemDate <= end;
    });

    return filteredData;
  }
};
const Accounting = () => {
  const [startDate, setStartDate] = useState<any>();
  const [endDate, setEndDate] = useState<any>();
  const [totalSales, setTotalSales] = useState<any>();
  const [loading, setLoading] = useState(false);

  const fileName = "Total sales";

  const dataFiltered = filterData(startDate, endDate, totalSales);

  useEffect(() => {
    const init = async () => {
      const [err, res] = await Api.getDealerReport();
      if (err) {
        console.log(err);
      }
      if (res) {
        setTotalSales(res.data.TotalOrders);
      }
    };
    init();
  }, []);

  //Download PDF
  const print = () => {
    const pdf: any = new jsPDF("p", "pt", "a4");
    const columns = ["Id", "", "", "", "", "", ""];
    var rows = [];

    for (let i = 0; i < totalSales.length; i++) {
      var temp = [
        totalSales[i].id,
        totalSales[i].start.split("T")[0],
        totalSales[i].duration,
        totalSales[i].name,
        totalSales[i].project,
        totalSales[i].task,
        totalSales[i].comment,
      ];
      rows.push(temp);
    }
    pdf.text(235, 40, "Tabla de Prestamo");
    pdf.autoTable(columns, rows, {
      startY: 65,
      theme: "grid",
      styles: {
        font: "times",
        halign: "center",
        cellPadding: 3.5,
        lineWidth: 0.5,
        lineColor: [0, 0, 0],
        textColor: [0, 0, 0],
      },
      headStyles: {
        textColor: [0, 0, 0],
        fontStyle: "normal",
        lineWidth: 0.5,
        lineColor: [0, 0, 0],
        fillColor: [166, 204, 247],
      },
      alternateRowStyles: {
        fillColor: [212, 212, 212],
        textColor: [0, 0, 0],
        lineWidth: 0.5,
        lineColor: [0, 0, 0],
      },
      rowStyles: {
        lineWidth: 0.5,
        lineColor: [0, 0, 0],
      },
      tableLineColor: [0, 0, 0],
    });
    console.log(pdf.output("datauristring"));
    pdf.save("pdf");
  };

  return (
    <div>
      <Header title="Pos" subtitle="Accounting" />
      <Stack spacing={2} sx={{ p: 5 }}>
        <Stack direction={{ xs: "row", sm: "row" }} spacing={5}>
          <Box sx={{ width: "100%", display: "flex" }}>
            <Typography sx={{ color: "grey" }}>Start Date</Typography>
            <TextField
              onChange={(e: any) => {
                let date = moment(e.target.value).toISOString();
                setStartDate(date);
              }}
              type="date"
              required={true}
              fullWidth
              id="base"
              variant="outlined"
            />
          </Box>
          <Box sx={{ width: "100%", display: "flex" }}>
            <Typography sx={{ color: "grey" }}>End Date</Typography>
            <TextField
              onChange={(e: any) => {
                let date: any = moment(e.target.value).toISOString();
                setEndDate(date);
              }}
              type="date"
              required={true}
              fullWidth
              id="base"
              variant="outlined"
            />
          </Box>
        </Stack>
      </Stack>

      <div className="p-5">
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", mb: 2, gap: 1 }}
        >
          {dataFiltered <= 0 || dataFiltered === undefined ? (
            <></>
          ) : (
            <Button
              variant="contained"
              sx={{ backgroundColor: "#05AB2A", height: "fix-layout" }}
            >
              <CSVLink
                // headers={headers}
                data={dataFiltered}
                filename={fileName}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                {loading ? "Loading csv..." : "Download"}
              </CSVLink>
            </Button>
          )}
          {/* <Button
            onClick={print}
            variant="contained"
            sx={{ backgroundColor: "#05AB2A" }}
          >
            Download PDF
          </Button> */}
        </Box>
        <TableContainer sx={{ minWidth: 500 }}>
          <Table sx={{ border: "2px solid" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                  Purchase ID
                </TableCell>
                <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                  Purchase Date
                </TableCell>
                <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                  Farmer
                </TableCell>
                <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                  Products
                </TableCell>
                <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                  Total Amount
                </TableCell>
                <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                  Payment Mode
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataFiltered?.length > 0 &&
                dataFiltered.map((row: any) => (
                  <TableRow
                    key={row._id}
                    sx={{
                      border: 1,
                    }}
                  >
                    <TableCell sx={{ border: 1 }}>{row?._id}</TableCell>

                    <TableCell sx={{ border: 1 }}>
                      {moment(row.createdAt)?.format("DD-MM-YY")}
                    </TableCell>
                    <TableCell sx={{ border: 1 }}>
                      {/* {row?.customer} */}
                      <GetFarmer farmerId={row?.customer} />
                    </TableCell>
                    <TableCell sx={{ border: 1 }}>
                      {row?.items?.map((o: any) => (
                        <h1 className="">{o?.item?.tradeName}</h1>
                      ))}
                    </TableCell>
                    <TableCell sx={{ border: 1 }}>₹{row?.totalPrice}</TableCell>
                    <TableCell sx={{ border: 1 }}>
                      {row.paymentStatus === "paid" ? (
                        <Typography sx={{ fontWeight: "bold" }}>
                          CASH
                        </Typography>
                      ) : (
                        <></>
                      )}
                      {row.paymentStatus === "payByCredit" ? (
                        <Typography sx={{ fontWeight: "bold" }}>
                          CREDIT
                        </Typography>
                      ) : (
                        <></>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Accounting;
