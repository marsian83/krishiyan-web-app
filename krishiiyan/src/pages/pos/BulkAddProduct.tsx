import React, { useState, useRef, useEffect } from "react";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Button, TableContainer, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import moment from "moment";
import * as Api from "../../Services/Api";
import { AddProductRequestPayload } from "../../Services/Api";
import { toast } from "react-toastify";
var XLSX = require("xlsx");

const BulkAddProduct = (props: any) => {
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState<DialogProps["maxWidth"]>("lg"); //xs,sm,md,false,lg,xl
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [xlsxData, setXlsxData] = useState<any>();

  //Import File
  //Handle I/P
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e?.target?.result;
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);
        setXlsxData(json);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };
  const handleInputFileRefClick = () => {
    inputFileRef.current?.click();
  };

  const onSubmitHandler = async () => {
    if (xlsxData) {
      // if (props?.dealer?.excel_data_download.toString() === "false") {
        for (const item of xlsxData) {
          console.log(item, "items____________");
          const payloadObj: AddProductRequestPayload = {
            activeIngridient: item.activeIngridient,
            tradeName: item.tradeName,
            productDescription: item.productDescription,
            category: item.category,
            measuringUnit: item.measuringUnit,
            volume: item.volume,
            quantity: item.quantity,
            dateOfPurchase: item.dateOfPurchase,
            expiryDate: item.expiryDate,
            MRP: item.MRP,
            procurementDiscout: item.procurementDiscout,
            sellingPrice: item.sellingPrice,
            searchKeywords: item.searchKeywords,
            crop: item.crop,
          };

          const [error, response] = await Api.createUniformProduct(payloadObj);
          if (error) {
            toast.error(error?.data, {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
          if (response) {
            props.handleClose();
            props.getProducts();
          }
        }
      // } 
    } else {
      alert("Please upload xlsx file.");
    }
  };

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth={fullWidth}
      maxWidth={maxWidth}
    >
      <DialogTitle id="alert-dialog-title">
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h5"
            color="#05AB2A"
            sx={{ font: "bold", fontSize: "70" }}
          >
            Add Bulk Product
          </Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={handleInputFileRefClick}
            variant="contained"
            sx={{ backgroundColor: "#05AB2A" }}
          >
            Import through xlsx/csv file
          </Button>
          <input
            onChange={handleFileInput}
            type="file"
            id="file"
            ref={inputFileRef}
            style={{ display: "none" }}
          />
        </Box>
        {xlsxData === undefined ? (
          <></>
        ) : (
          <TableContainer sx={{ minWidth: 500 }}>
            <Table
              sx={{ border: "2px solid", mt: 3 }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                    Product ID
                  </TableCell>
                  <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                    Trade Name
                  </TableCell>
                  <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                    Category
                  </TableCell>
                  <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                    Unit
                  </TableCell>
                  <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                    Volume
                  </TableCell>
                  <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                    Quantity
                  </TableCell>
                  <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                    Date Of Purchase
                  </TableCell>
                  <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                    Expiry Date
                  </TableCell>
                  <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                    MRP
                  </TableCell>
                  <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                    Procurement Price
                  </TableCell>
                  <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                    Selling Price
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {xlsxData?.length > 0 &&
                  xlsxData
                    // .filter((obj: any) => obj.category === selectedProduct)
                    .map((row: any) => (
                      <TableRow
                        key={row._id}
                        sx={{
                          border: 1,
                        }}
                      >
                        <TableCell sx={{ border: 1 }}>
                          {row?._id.slice(0, 5)}...
                        </TableCell>
                        <TableCell sx={{ border: 1 }}>
                          {row?.tradeName}
                        </TableCell>
                        <TableCell sx={{ border: 1 }}>
                          {row?.category}
                        </TableCell>
                        <TableCell sx={{ border: 1 }}>
                          {row?.measuringUnit}
                        </TableCell>
                        <TableCell sx={{ border: 1 }}>{row?.volume}</TableCell>
                        <TableCell sx={{ border: 1 }}>
                          {row?.quantity}
                        </TableCell>
                        <TableCell sx={{ border: 1 }}>
                          {moment(row?.dateOfPurchase)?.format("DD-MM-YY")}
                        </TableCell>
                        <TableCell sx={{ border: 1 }}>
                          {moment(row?.expiryDate)?.format("DD-MM-YY")}
                        </TableCell>
                        <TableCell sx={{ border: 1 }}>₹{row?.MRP}</TableCell>
                        <TableCell sx={{ border: 1 }}>
                          ₹{row?.procuredPrice}
                        </TableCell>
                        <TableCell sx={{ border: 1 }}>
                          ₹{row?.sellingPrice}
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end", p: 3 }}>
          <Button
            variant="contained"
            onClick={onSubmitHandler}
            disabled={!xlsxData}
          >
            {" "}
            Submit
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default BulkAddProduct;
