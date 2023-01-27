import React, { useState, useEffect } from "react";
import {
  Alert,
  Box,
  Button,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TableSortLabel from "@mui/material/TableSortLabel";

const TABLE_HEAD = [
    { id: "id", label: "S.No", alignRight: false },
    { id: "areaCode", label: "Area Code", alignRight: false },
    { id: "area", label: "Area", alignRight: false },
    { id: "type", label: "Type", alignRight: true },
    { id: "majorCrops", label: "Major Crops", alignRight: true },
   
  ];
const CultivationInputTable = () => {
  const [rows, setRows] = useState([
    { id: 1, areaCode: "", area: "", type: "", majorCrops: "" },
  ]);

  const [open, setOpen] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [disable, setDisable] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);

  // Function For closing the alert snackbar
  const handleClose = (event: any, reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  // Function For adding new row object
  const handleAdd = () => {
    setRows([
      ...rows,
      {
        id: rows.length + 1,
        areaCode: "",
        area: "",
        type: "",
        majorCrops: "",
      },
    ]);
    setEdit(true);
  };

  // Function to handle edit
  const handleEdit = (i: any) => {
    // If edit mode is true setEdit will
    // set it to false and vice versa
    setEdit(!isEdit);
  };

  // Function to handle save
  const handleSave = () => {
    setEdit(!isEdit);
    setRows(rows);
    console.log("saved : ", rows);
    setDisable(true);
    setOpen(true);
  };
  // The handleInputChange handler can be set up to handle
  // many different inputs in the form, listen for changes
  // to input elements and record their values in state
  // const handleInputChange = (e:any, index:any) => {
  //     setDisable(false);
  //     const { name, value } = e.target;
  //     const list = [...rows];
  //     // list[index][name] = value;
  //     setRows(list);
  // };

  // Showing delete confirmation to users
  const handleConfirm = () => {
    setShowConfirm(true);
  };

  // Handle the case of delete confirmation where
  // user click yes delete a specific row of id:i
  const handleRemoveClick = (i: any) => {
    const list = [...rows];
    list.splice(i, 1);
    setRows(list);
    setShowConfirm(false);
  };
  // Handle the case of delete confirmation
  // where user click no
  const handleNo = () => {
    setShowConfirm(false);
  };
  return (
    <TableBody>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        sx={{ bottom: "104px" }}
      >
        <Alert onClose={() => handleClose} severity="success">
          Record saved successfully!
        </Alert>
      </Snackbar>
      <Box margin={1}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            {isEdit ? (
              <div>
                <Button onClick={handleAdd}>
                  {/* <AddBoxIcon onClick={handleAdd} /> */}
                  ADD
                </Button>
                {rows.length !== 0 && (
                  <div>
                    {disable ? (
                      <Button disabled onClick={handleSave}>
                        {/* <DoneIcon /> */}
                        SAVE
                      </Button>
                    ) : (
                      <Button onClick={handleSave}>
                        {/* <DoneIcon /> */}
                        SAVE
                      </Button>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div>
                <Button onClick={handleAdd}>
                  {/* <AddBoxIcon onClick={handleAdd} /> */}
                  ADD
                </Button>
                <Button onClick={handleEdit}>
                  {/* <CreateIcon /> */}
                  EDIT
                </Button>
              </div>
            )}
          </div>
        </div>
        <TableRow> </TableRow>
        <TableContainer sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
          <TableRow>
              <TableCell padding="checkbox">
              </TableCell>
              {TABLE_HEAD?.map((headCell) => (
                <TableCell key={headCell.id}>
                  <TableSortLabel hideSortIcon>{headCell.label}</TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => {
              return (
                <div>
                  <TableRow>
                    {isEdit ? (
                      <div>
                        <TableCell padding="none">
                          <input
                            value={row.areaCode}
                            name="areacode"
                            //   onChange={(e) => handleInputChange(e, i)}
                          />
                        </TableCell>
                        <TableCell padding="none">
                          <input
                            value={row.area}
                            name="area"
                            //   onChange={(e) => handleInputChange(e, i)}
                          />
                        </TableCell>
                        <TableCell padding="none">
                          <input
                            value={row.type}
                            name="type"
                            //   onChange={(e) => handleInputChange(e, i)}
                          />
                        </TableCell>
                        <TableCell padding="none">
                          <input
                            value={row.majorCrops}
                            name="majorcrops"
                            //   onChange={(e) => handleInputChange(e, i)}
                          />
                        </TableCell>
                      </div>
                    ) : (
                      <div>
                        <TableCell component="th" scope="row">
                          {row.id}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {row.areaCode}
                        </TableCell>
                        <TableCell component="th" scope="row" align="center">
                          {row.area}
                        </TableCell>
                        <TableCell component="th" scope="row" align="center">
                          {row.type}
                        </TableCell>
                        <TableCell component="th" scope="row" align="center">
                          {row.majorCrops}
                        </TableCell>
                        <TableCell
                          component="th"
                          scope="row"
                          align="center"
                        ></TableCell>
                      </div>
                    )}
                    {isEdit ? (
                      <Button className="mr10" onClick={handleConfirm}>
                        {/* <ClearIcon /> */}clear
                      </Button>
                    ) : (
                      <Button className="mr10" onClick={handleConfirm}>
                        {/* <DeleteOutlineIcon /> */}delete
                      </Button>
                    )}
                    {showConfirm && (
                      <div>
                        <Dialog
                          open={showConfirm}
                          onClose={handleNo}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                          <DialogTitle id="alert-dialog-title">
                            {"Confirm Delete"}
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                              Are you sure to delete
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button
                              onClick={() => handleRemoveClick(i)}
                              color="primary"
                              autoFocus
                            >
                              Yes
                            </Button>
                            <Button
                              onClick={handleNo}
                              color="primary"
                              autoFocus
                            >
                              No
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </div>
                    )}
                  </TableRow>
                </div>
              );
            })}
          </TableBody>
        </Table>
        </TableContainer>
      </Box>
    </TableBody>
  );
};

export default CultivationInputTable;
