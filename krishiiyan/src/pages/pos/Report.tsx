import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Autocomplete,
  Typography,
  TableContainer,
} from "@mui/material";
import Header from "../../Components/layouts/Header";
import Linegraph from "../../Components/themes/LineChart";
import Piegraph from "../../Components/themes/PieChart";
import * as Api from "../../Services/Api";

const Report = () => {
  const [totalSales, setTotalSales] = useState("");
  const [currentInventoryValue, setCurrentInventoryValue] = useState("");
  const [totalTx, setTotalTx] = useState("");

  useEffect(() => {
    const init = async () => {
      const [err, res] = await Api.getDealerReport();
      if (err) {
        console.log(err);
      }
      if (res) {
        setCurrentInventoryValue(res.data.TotalInventoryValue);
        setTotalSales(res.data.TotalSales);
        setTotalTx(res.data.TotalOrders.length)
      }
    };
    init();
  }, []);

  return (
    <div>
      <Header title="Pos" subtitle="Report" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 7,
        }}
      >
        <Box>
          <Box sx={{ width: 150, p: 1, backgroundColor: "lightGreen" }}>
            <Typography>Total sales</Typography>
          </Box>
          <Box sx={{ backgroundColor: "lightGrey", mt: 1, width: 150, p: 5 }}>
            <Typography>₹{totalSales}</Typography>
          </Box>
        </Box>

        <Box>
          <Box
            sx={{ width: "fix-layout", p: 1, backgroundColor: "lightGreen" }}
          >
            <Typography>Current Inventory Value</Typography>
          </Box>
          <Box sx={{ backgroundColor: "lightGrey", mt: 1, width: 190, p: 5 }}>
            <Typography>₹{currentInventoryValue}</Typography>
          </Box>
        </Box>

        <Box>
          <Box sx={{ width: 150, p: 1, backgroundColor: "lightGreen" }}>
            <Typography>Total Transaction</Typography>
          </Box>
          <Box sx={{ backgroundColor: "lightGrey", mt: 1, width: 150, p: 5 }}>
            <Typography>{totalTx}</Typography>
          </Box>
        </Box>
      </Box>
      <div className="w-full flex justify-around my-[1%]">
        <div className="grid gap-y-5">
          <p>Daily Sales</p>
          <Linegraph />
        </div>
        <div className="grid gap-y-5">
          <p>Product Wise</p>
          <Piegraph />
        </div>
      </div>
    </div>
  );
};

export default Report;
