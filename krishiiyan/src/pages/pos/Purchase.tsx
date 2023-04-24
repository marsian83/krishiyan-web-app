import React, { useEffect, useState } from "react";
import {
  Box,
  Stack,
  TextField,
  Autocomplete,
  Typography,
  TableContainer,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { LoadingButton } from "@mui/lab";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Header from "../../Components/layouts/Header";
import * as Api from "../../Services/Api";
import moment from "moment";
import { AddProductRequestPayload } from "../../Services/Api";
import { toast } from "react-toastify";
const category = [
  {
    value: "Fertilizer",
  },
  {
    value: "Pesticide",
  },
  {
    value: "Fungicide",
  },
  {
    value: "Herbicide",
  },
  {
    value: "Seeds",
  },
  {
    value: "GrowthPromoter",
  },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Purchase = () => {
  const [value, setValue] = useState<any>(0);
  const [dealerSpecificProducts, setDealerSpecificProducts] = useState<any>();
  const [expiredProducts, setExpiredProducts] = useState<any>();
  const [remainingOneMonthsToExpire, setRemainingOneMonthsToExpire] =
    useState<any>();
  const [returnedProducts, setReturnedProducts] = useState<any>();

  // Add products state
  const [activeIngridient, setActiveIngredient] = useState("");
  const [tradeName, setTradeName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [measuringUnit, setMeasuringUnit] = useState("");
  const [volume, setVolume] = useState(0);
  const [quantity, setquantity] = useState("");
  const [dateOfPurchase, setDateOfPurchase] = useState("");
  const [expiryDate, setexpiryDate] = useState("");
  const [MRP, setMRP] = useState("");
  const [procurementDiscout, setProcurementDiscout] = useState("");
  const [sellingPrice, setsellingPrice] = useState("");
  const [searchKeywords, setsearchKeywords] = useState<any>();
  const [crop, setcrop] = useState<any>();

  const [loading, setLoading] = useState(false);

  //Handlechange for Tab
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // Fetch products
  const getProducts = async () => {
    const [err, res] = await Api.getDealerProducts();
    if (err) {
      console.log(err?.data);
    }
    if (res) {
      // setProducts(res?.data);
      let dealer_specific_products = res.data.filter(
        (prod: any) => prod.productType === "dealer-specific"
      );
      // console.log(dealer_specific_products,"dealer_specific_products_________");
      setDealerSpecificProducts(dealer_specific_products);
    }
  };

  //Get all expired products
  const get_expired_products = async () => {
    const [err, res] = await Api.getExpiredProducts();
    if (res) {
      console.log({ res });

      setExpiredProducts(res?.data);
    }
  };

  useEffect(() => {
    const init = async () => {
      await getProducts();
      await get_expired_products();
    };
    init();
  }, []);

  const addProduct = async () => {
    setLoading(true);
    const payloadObj: AddProductRequestPayload = {
      activeIngridient: activeIngridient,
      tradeName: tradeName,
      productDescription: productDescription,
      category: productCategory,
      measuringUnit: measuringUnit,
      volume: volume,
      quantity: quantity,
      dateOfPurchase: dateOfPurchase,
      expiryDate: expiryDate,
      MRP: MRP,
      procurementDiscout: procurementDiscout,
      sellingPrice: sellingPrice,
      searchKeywords: searchKeywords,
      crop: crop,
    };
    const [error, response] = await Api.createDealerSpecificProduct(payloadObj);
    if (error) {
      toast.error(error?.data, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    if (response) {
      console.log(response);
      toast.success("Product created!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    setLoading(false);
  };

  console.log({ expiredProducts });

  return (
    <div>
      <Header title="Pos" subtitle="Product" />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Add Product" {...a11yProps(0)} />
            <Tab label="Dealer Specific Products" {...a11yProps(1)} />
            <Tab label="Remaining 1 months to expire." {...a11yProps(2)} />
            <Tab label="Expired Products." {...a11yProps(3)} />
            <Tab label="Returned Products" {...a11yProps(4)} />
          </Tabs>
        </Box>
        {/* Add Product */}
        <TabPanel value={value} index={0}>
          <Stack spacing={2} sx={{ p: 5 }}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={5}>
              <TextField
                required={true}
                fullWidth
                id="base"
                label="Active Ingredient"
                variant="outlined"
                onChange={(e: any) => setActiveIngredient(e.target.value)}
              />
              <TextField
                required={true}
                fullWidth
                id="base"
                label="Trade Name"
                variant="outlined"
                onChange={(e: any) => setTradeName(e.target.value)}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={5}>
              <TextField
                multiline
                rows={3}
                required={true}
                fullWidth
                id="base"
                label="Product Description"
                variant="outlined"
                onChange={(e: any) => setProductDescription(e.target.value)}
              />
              <Autocomplete
                onChange={(e: any, value: any) =>
                  setProductCategory(value.value)
                }
                id="plantation-select"
                fullWidth
                options={category}
                autoHighlight
                getOptionLabel={(option) => option.value}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Choose Product Category"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password",
                    }}
                  />
                )}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={5}>
              <TextField
                required={true}
                fullWidth
                id="base"
                label="Measuring Unit"
                variant="outlined"
                onChange={(e: any) => setMeasuringUnit(e.target.value)}
              />
              <TextField
                required={true}
                fullWidth
                id="base"
                label="Volume"
                variant="outlined"
                onChange={(e: any) => setVolume(e.target.value)}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={5}>
              <TextField
                required={true}
                fullWidth
                id="base"
                label="Quantity"
                variant="outlined"
                onChange={(e: any) => setquantity(e.target.value)}
              />
              <TextField
                required={true}
                fullWidth
                id="base"
                label="MRP"
                variant="outlined"
                onChange={(e: any) => setMRP(e.target.value)}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={5}>
              <TextField
                required={true}
                fullWidth
                id="base"
                label="Procurement Discount(%)"
                variant="outlined"
                onChange={(e: any) => setProcurementDiscout(e.target.value)}
              />
              <TextField
                required={true}
                fullWidth
                id="base"
                label="Crops(separated by comma(,))"
                variant="outlined"
                onChange={(e: any) => setcrop(e.target.value)}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={5}>
              <TextField
                type="text"
                required={true}
                fullWidth
                id="base"
                variant="outlined"
                label="Selling Price"
                onChange={(e: any) => setsellingPrice(e.target.value)}
              />
              <TextField
                type="text"
                required={true}
                fullWidth
                id="base"
                variant="outlined"
                label="Search Keywords(separated by comma(,))"
                onChange={(e: any) => setsearchKeywords(e.target.value)}
              />
            </Stack>
            <Stack direction={{ xs: "row", sm: "row" }} spacing={5}>
              <Box sx={{ width: "100%" }}>
                <Typography sx={{ color: "grey" }}>Date of purchase</Typography>
                <TextField
                  onChange={(e: any) => {
                    let date = moment(e.target.value).toISOString();
                    setDateOfPurchase(date);
                  }}
                  type="date"
                  required={true}
                  fullWidth
                  id="base"
                  variant="outlined"
                />
              </Box>

              <Box sx={{ width: "100%" }}>
                <Typography sx={{ color: "grey" }}>Expiry date</Typography>
                <TextField
                  onChange={(e: any) => {
                    let date = moment(e.target.value).toISOString();
                    setexpiryDate(date);
                  }}
                  type="date"
                  required={true}
                  fullWidth
                  id="base"
                  variant="outlined"
                />
              </Box>
            </Stack>
            <Box>
              <LoadingButton
                loading={loading}
                onClick={addProduct}
                variant="contained"
                sx={{ mt: 2 }}
              >
                Submit
              </LoadingButton>
            </Box>
          </Stack>
        </TabPanel>

        {/* Product List */}
        <TabPanel value={value} index={1}>
          <div className="p-2">
            <TableContainer sx={{ minWidth: 400 }}>
              <Table sx={{ border: "2px solid" }} aria-label="simple table">
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
                      Procurement Discout
                    </TableCell>
                    <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                      Procurement Price
                    </TableCell>
                    <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                      Total Procured Amount
                    </TableCell>
                    <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                      MSP
                    </TableCell>
                    <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                      Selling Price
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dealerSpecificProducts?.length > 0 &&
                    dealerSpecificProducts.map((row: any) => (
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
                          {row?.procurementDiscout}%
                        </TableCell>
                        <TableCell sx={{ border: 1 }}>
                          ₹{row?.procuredPrice}
                        </TableCell>
                        <TableCell sx={{ border: 1 }}>
                          ₹{row?.totalProcuredAmount}
                        </TableCell>
                        <TableCell sx={{ border: 1 }}>₹{row?.MSP}</TableCell>
                        <TableCell sx={{ border: 1 }}>
                          ₹{row?.sellingPrice}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </TabPanel>

        {/* Remaining 1 months to expire. */}
        <TabPanel value={value} index={2}>
        <div>
            <TableContainer sx={{ minWidth: 400 }}>
              <Table sx={{ border: "2px solid" }} aria-label="simple table">
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
                      Procurement Discout
                    </TableCell>
                    <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                      Procurement Price
                    </TableCell>
                    <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                      Total Procured Amount
                    </TableCell>
                    <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                      MSP
                    </TableCell>
                    <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                      Selling Price
                    </TableCell>
                    <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                      Batches
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {remainingOneMonthsToExpire?.length > 0 &&
                    remainingOneMonthsToExpire
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
                          <TableCell sx={{ border: 1 }}>
                            {row?.volume}
                          </TableCell>
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
                            {row?.procurementDiscout}%
                          </TableCell>
                          <TableCell sx={{ border: 1 }}>
                            ₹{row?.procuredPrice}
                          </TableCell>
                          <TableCell sx={{ border: 1 }}>
                            ₹{row?.totalProcuredAmount}
                          </TableCell>
                          <TableCell sx={{ border: 1 }}>₹{row?.MSP}</TableCell>
                          <TableCell sx={{ border: 1 }}>
                            ₹{row?.sellingPrice}
                          </TableCell>
                        </TableRow>
                      ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </TabPanel>

        {/* Expired Products. */}
        <TabPanel value={value} index={3}>
          <div>
            <TableContainer sx={{ minWidth: 400 }}>
              <Table sx={{ border: "2px solid" }} aria-label="simple table">
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
                      Procurement Discout
                    </TableCell>
                    <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                      Procurement Price
                    </TableCell>
                    <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                      Total Procured Amount
                    </TableCell>
                    <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                      MSP
                    </TableCell>
                    <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                      Selling Price
                    </TableCell>
                    <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                      Batches
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {expiredProducts?.length > 0 &&
                    expiredProducts
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
                          <TableCell sx={{ border: 1 }}>
                            {row?.volume}
                          </TableCell>
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
                            {row?.procurementDiscout}%
                          </TableCell>
                          <TableCell sx={{ border: 1 }}>
                            ₹{row?.procuredPrice}
                          </TableCell>
                          <TableCell sx={{ border: 1 }}>
                            ₹{row?.totalProcuredAmount}
                          </TableCell>
                          <TableCell sx={{ border: 1 }}>₹{row?.MSP}</TableCell>
                          <TableCell sx={{ border: 1 }}>
                            ₹{row?.sellingPrice}
                          </TableCell>
                        </TableRow>
                      ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </TabPanel>

        {/* Returned Products */}
        <TabPanel value={value} index={4}>
        <div>
            <TableContainer sx={{ minWidth: 400 }}>
              <Table sx={{ border: "2px solid" }} aria-label="simple table">
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
                      Procurement Discout
                    </TableCell>
                    <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                      Procurement Price
                    </TableCell>
                    <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                      Total Procured Amount
                    </TableCell>
                    <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                      MSP
                    </TableCell>
                    <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                      Selling Price
                    </TableCell>
                    <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                      Batches
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {returnedProducts?.length > 0 &&
                    returnedProducts
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
                          <TableCell sx={{ border: 1 }}>
                            {row?.volume}
                          </TableCell>
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
                            {row?.procurementDiscout}%
                          </TableCell>
                          <TableCell sx={{ border: 1 }}>
                            ₹{row?.procuredPrice}
                          </TableCell>
                          <TableCell sx={{ border: 1 }}>
                            ₹{row?.totalProcuredAmount}
                          </TableCell>
                          <TableCell sx={{ border: 1 }}>₹{row?.MSP}</TableCell>
                          <TableCell sx={{ border: 1 }}>
                            ₹{row?.sellingPrice}
                          </TableCell>
                        </TableRow>
                      ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>

        </TabPanel>
      </Box>
    </div>
  );
};

export default Purchase;
