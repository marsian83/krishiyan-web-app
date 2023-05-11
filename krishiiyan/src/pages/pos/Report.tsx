import React, { useEffect, useState } from "react";
import { Box, Stack, TextField, Typography } from "@mui/material";
import Header from "../../Components/layouts/Header";
import Linegraph from "../../Components/themes/LineChart";
import Piegraph from "../../Components/themes/PieChart";
import * as Api from "../../Services/Api";
import moment from "moment";

const Report = () => {
  const [startDate, setStartDate] = useState<any>();
  const [endDate, setEndDate] = useState<any>();
  const [totalSales, setTotalSales] = useState("");
  const [totalOrders, setTotalOrders] = useState<any>();

  const [currentInventoryValue, setCurrentInventoryValue] = useState("");
  const [totalTx, setTotalTx] = useState("");

  const calculateTotalSales = () => {
    function sum_reducer(accumulator: any, currentValue: any) {
      return accumulator + currentValue;
    }
    if (!startDate && !endDate) {
      return totalOrders
    } else {
      const filteredData = totalOrders?.filter((o: any) => {
        const itemDate = moment(o.createdAt).format("DD-MM-YYYY");
        const start = moment(startDate).format("DD-MM-YYYY");
        const end = moment(endDate).format("DD-MM-YYYY");
        return itemDate >= start && itemDate <= end;
      });

      console.log({filteredData});
      
      let total_product_price = filteredData?.filter(
        (d: any) => d?.discountedPrice
      );
        
    // let total_sales = total_product_price?.reduce(sum_reducer);
      console.log({ filteredData, total_product_price });
    }
  };

  useEffect(() => {
    calculateTotalSales();
  }, [totalOrders, startDate, endDate]);

  useEffect(() => {
    const init = async () => {
      const [err, res] = await Api.getDealerReport();
      if (err) {
        console.log(err);
      }
      if (res) {
        setTotalOrders(res.data.TotalOrders);
        setCurrentInventoryValue(res.data.TotalInventoryValue);
        // setTotalSales(res.data.TotalSales);
        setTotalTx(res.data.TotalOrders.length);
      }
    };
    init();
  }, []);

  return (
    <div>
      <Header title="Pos" subtitle="Report" />
      <Stack spacing={2} sx={{ p: 3 }}>
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
