import React, { useState, useEffect } from "react";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const UpdateProduct = (props: any) => {
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState<DialogProps["maxWidth"]>("md"); //xs,sm,md,false,lg,xl
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
            Update Product
          </Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ mt: 2 }}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={5}>
            <TextField
              required={true}
              fullWidth
              id="base"
              label="MRP"
              variant="outlined"
              defaultValue={props?.ProductDetails?.MRP}
            />
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={5}>
            <TextField
              required={true}
              fullWidth
              id="base"
              label="Quantity"
              variant="outlined"
              defaultValue={props?.ProductDetails?.quantity}
            />
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end", p: 3 }}>
          <Button variant="contained"> Submit</Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateProduct;
