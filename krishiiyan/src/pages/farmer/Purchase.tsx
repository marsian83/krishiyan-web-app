import React, { useEffect, useState } from "react";
import Header from "../../Components/layouts/Header";
import * as Api from "../../Services/Api";
import { toast } from "react-toastify";
import {
  Autocomplete,
  Box,
  MenuItem,
  TableContainer,
  TextField,
} from "@mui/material";
import { getCrops, getvariteyByCropId } from "../../Services/Api";
import moment from "moment";
import Weather from "./Weather";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const Purchase = () => {
  const [loading, setLoading] = useState(false);
  const [receivedData, setReceivedData] = useState(false);
  const [farmerID, setFarmerID] = useState("");
  const [farmerDetail, setFarmerDetail] = useState<any>();
  const [fetchData, setFetchData] = useState(false);
  const [farmerOrders, setFarmerOrders] = useState<any>();

  const onChangeInput = (e: any) => {
    setFarmerID(e.target.value);
  };

  const getFarmerById = async () => {
    if (farmerID) {
      setLoading(true);
      const [err, res] = await Api.getFarmer(farmerID);
      if (err) {
        console.log(err);
      }
      if (res) {
        console.log(res);

        setFarmerDetail(res?.data);
      }

      setLoading(false);
    }
  };

  const onClickEnter = async () => {
    localStorage.setItem("Number", farmerID);
    await getFarmerById();
  };
  useEffect(() => {
    if (fetchData) {
      onClickEnter();
    }
  }, [fetchData]);

  useEffect(() => {
    if (localStorage.Number) {
      setFarmerID((prev: any) => localStorage.Number);
      setFetchData(true);
    }
  }, []);

  //Get farmer purchases
  useEffect(() => {
    const getFarmerOrders = async () => {
      const [err, res] = await Api.getFarmerPurchases(farmerDetail._id);
      console.log({ res });
      setFarmerOrders(res?.data);
    };
    getFarmerOrders();
  }, [farmerDetail]);

  return (
    <div>
      <Header title="Farmer Relationship Management" subtitle="Purchase" />
      <section>
        <div className="grid grid-cols-[70%_30%] items-center box-border w-full">
          <div className="grid grid-cols-[35%_45%_15%_5%] mt-7 flex-row items-center w-full">
            <label className="text-[#13490A] font-roboto font-extrabold text-sm flex justify-center">
              Farmer Mobile Number
            </label>
            <input
              onChange={onChangeInput}
              type="text"
              className="bg-[#F3FFF1] h-8 lg:w-[86%] xl:w-[90%] lg:ml-2 xl:ml-[1%] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md pr-3 pl-3"
            />
            <button
              type="submit"
              onClick={onClickEnter}
              className="bg-[#05AB2A] text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 w-[6vw] rounded text-sm font-thin"
            >
              ENTER
            </button>
          </div>
          {farmerDetail ? (
            <div className="mt-6 leading-4 ml-16">
              <p className="text-[#000000]  text-start">
                Name:{" "}
                <span className="text-[#FB0404] font-bold">
                  {farmerDetail?.name}
                </span>
              </p>
              <p className="text-[#000000]   text-start">
                Area :{" "}
                <span className="text-[#FB0404] font-bold">
                  {farmerDetail?.address?.city}
                </span>
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>

        <section className="mt-10">
          {farmerDetail ? (
            <>
              <TableContainer sx={{ minWidth: 400 }}>
                <Table sx={{ border: "2px solid" }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{ border: "1px solid", fontWeight: "bold" }}
                      >
                        Date
                      </TableCell>
                      <TableCell
                        sx={{ border: "1px solid", fontWeight: "bold" }}
                      >
                        ID
                      </TableCell>
                      {/* <TableCell
                        sx={{ border: "1px solid", fontWeight: "bold" }}
                      >
                        Product
                      </TableCell> */}
                      <TableCell
                        sx={{ border: "1px solid", fontWeight: "bold" }}
                      >
                        Amount
                      </TableCell>
                      <TableCell
                        sx={{ border: "1px solid", fontWeight: "bold" }}
                      >
                        Status
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {farmerOrders?.length > 0 &&
                      farmerOrders.map((row: any) => (
                        <TableRow
                          key={row._id}
                          sx={{
                            border: 1,
                          }}
                        >
                          <TableCell sx={{ border: 1 }}>
                            {moment(row?.createdAt).format("DD/MM/YYYY")}
                          </TableCell>
                          <TableCell sx={{ border: 1 }}>
                            {row?._id.slice(0, 5)}...
                          </TableCell>
                          {/* <TableCell sx={{ border: 1 }}>
                            {row?.items?.map((item: any) => {
                              <>
                                <Box>{item?.item?.tradeName}</Box>
                              </>;
                            })}
                          </TableCell> */}
                          <TableCell sx={{ border: 1 }}>
                            {" "}
                            ₹{row?.totalPrice}
                          </TableCell>
                          <TableCell sx={{ border: 1 }}>
                            {row?.paymentStatus}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          ) : (
            <></>
          )}
        </section>
      </section>
    </div>
  );
};

export default Purchase;
