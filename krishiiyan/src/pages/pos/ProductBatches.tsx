import { Typography } from "@material-tailwind/react";
import Header from "../../Components/layouts/Header";
import { useLocation } from "react-router-dom";
import { TableContainer } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import moment from "moment";


interface CustomState {
  Batches: any;
}
const ProductBatches = () => {
  const location = useLocation();
  const state = location.state as CustomState;
  
  return (
    <div>
      <Header title="Pos" subtitle="Product Batches" />
      <Typography
        variant="h2"
        sx={{ fontWeight: "bold", fontSize: "medium", mt: 5 }}
      >
        Product Batches
      </Typography>
      <div className="p-4">
        <TableContainer sx={{ minWidth: 400 }}>
          <Table sx={{ border: "2px solid" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                  Batch Id
                </TableCell>
                <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                  Product
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
                  Batch
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.Batches?.length > 0 &&
                state.Batches.map((row: any) => (
                  <TableRow
                    key={row._id}
                    sx={{
                      border: 1,
                    }}
                  >
                    <TableCell sx={{ border: 1 }}>{row?._id}</TableCell>
                    <TableCell sx={{ border: 1 }}>{row?.productName}</TableCell>
                    <TableCell sx={{ border: 1 }}>{row?.quantity}</TableCell>
                    <TableCell sx={{ border: 1 }}>
                      {moment(row?.purchaseDate)?.format("DD-MM-YY")}
                    </TableCell>
                    <TableCell sx={{ border: 1 }}>
                      {moment(row?.expiryDate)?.format("DD-MM-YY")}
                    </TableCell>
                    <TableCell sx={{ border: 1 }}>
                      <Typography sx={{ fontWeight: "bold" }}>
                        {row?.batchName}
                      </Typography>
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

export default ProductBatches;
