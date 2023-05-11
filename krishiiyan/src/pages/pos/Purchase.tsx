import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Stack,
  TextField,
  Autocomplete,
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
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Header from "../../Components/layouts/Header";
import * as Api from "../../Services/Api";
import moment from "moment";
import { AddProductRequestPayload } from "../../Services/Api";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { CSVLink } from "react-csv";
var XLSX = require("xlsx");

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

const ProductType = [
  {
    label: "UNIFORM PRODUCT",
    value: "uniform",
  },
  {
    label: "DEALER SPECIFIC PRODUCT",
    value: "dealer-specific ",
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
  const navigate = useNavigate();
  const [products, setProducts] = useState<any>();
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [xlsxData, setXlsxData] = useState<any>();
  const [value, setValue] = useState<any>(0);
  const [dealerSpecificProducts, setDealerSpecificProducts] = useState<any>();
  const [expiredProducts, setExpiredProducts] = useState<any>();
  const [remainingOneMonthsToExpire, setRemainingOneMonthsToExpire] =
    useState<any>();
  const [returnedProducts, setReturnedProducts] = useState<any>();

  const [selectedProductName, setSelectedProductName] = useState("");
  const [selectedProductDetails, setSelectedProductDetails] = useState<any>();
  const product_trade_names = products?.map(
    (product: any) => product?.tradeName
  );

  const [loadingCsv, setLoadingCsv] = useState(false);
  const [dealer, setDealer] = useState<any>();

  //Get dealer profile
  const getDealer = async () => {
    const [err, res] = await Api.getDealer();
    if (res) {
      setDealer(res?.data);
    }
  };

  const [productType, setProductType] = useState("");
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
      let uniform_products = res.data.filter(
        (prod: any) => prod.productType === "uniform"
      );
      setProducts(uniform_products);
      let dealer_specific_products = res.data.filter(
        (prod: any) => prod.productType === "dealer-specific"
      );
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

  //Get product by tradename
  const get_product_by_tradename = async () => {
    const [err, res] = await Api.getProductByTradename(selectedProductName);
    if (res) {
      setSelectedProductDetails(res.data);
    }
  };

  useEffect(() => {
    const init = async () => {
      await getDealer();
      await getProducts();
      await get_product_by_tradename();
      await get_expired_products();
    };
    init();
  }, [selectedProductName]);

  const handleChangeProductType = async (e: any, value: any) => {
    setProductType(value.value);
  };

  const addProduct = async () => {
    setLoading(true);
    if (productType && selectedProductDetails) {
      if (productType === "dealer-specific ") {
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
          searchKeywords: searchKeywords,
          crop: crop,
        };
        const [error, response] = await Api.createDealerSpecificProduct(
          payloadObj
        );
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
      }
      if (productType === "uniform") {
        const payloadObj: AddProductRequestPayload = {
          activeIngridient: selectedProductDetails.activeIngridient,
          tradeName: selectedProductDetails.tradeName,
          productDescription: selectedProductDetails.productDescription,
          category: selectedProductDetails.productCategory,
          measuringUnit: selectedProductDetails.measuringUnit,
          volume: selectedProductDetails.volume,
          quantity: quantity,
          dateOfPurchase: dateOfPurchase,
          expiryDate: expiryDate,
          MRP: MRP,
          procurementDiscout: procurementDiscout,
          searchKeywords: selectedProductDetails.searchKeywords,
          crop: selectedProductDetails.crop,
        };
        const [error, response] = await Api.createUniformProduct(payloadObj);
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
      }
    }

    setLoading(false);
  };

  const showBatches = async (productDetail: any) => {
    navigate("/product-batches", {
      state: {
        Batches: productDetail.batches,
      },
    });
  };

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

  const fileName = "Krishiyan-Product-Template(Dealer-specific)";
  let excelData;
  if (dealer?.excel_data_download.toString() === "false") {
    excelData = ProductTemplateDealerSpecific;
  } else {
    excelData = dealerSpecificProducts;
  }

  const addBulkProduct = async () => {
    if (xlsxData) {
      for (const item of xlsxData) {
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
          procurementDiscout: item.procurementDiscount,
          searchKeywords: item.searchKeywords,
          crop: item.crop,
        };

        const [error, response] = await Api.createDealerSpecificProduct(
          payloadObj
        );
        if (error) {
          toast.error(error?.data, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        if (response) {
          console.log(response);    
        }
      }
    } else {
      alert("Please upload xlsx file.");
    }
  };
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
            <Tab label="Add Bulk Products." {...a11yProps(2)} />
          </Tabs>
        </Box>
        {/* Select Product type */}
        <TabPanel value={value} index={0}>
          <Stack spacing={2} sx={{ p: 5 }}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={5}>
              <Autocomplete
                onChange={handleChangeProductType}
                id="plantation-select"
                fullWidth
                options={ProductType}
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select Product Type"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password",
                    }}
                  />
                )}
              />
            </Stack>

            {productType === "uniform" ? (
              <>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={5}>
                  <Autocomplete
                    onChange={(e: any, value: any) =>
                      setSelectedProductName(value)
                    }
                    id="plantation-select"
                    fullWidth
                    options={product_trade_names}
                    autoHighlight
                    // getOptionLabel={(option) => option.label}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Product TradeName"
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "new-password",
                        }}
                      />
                    )}
                  />
                  {selectedProductDetails?.activeIngridient ? (
                    <TextField
                      fullWidth
                      id="outlined-read-only-input"
                      label="Active Ingredient"
                      defaultValue={selectedProductDetails?.activeIngridient}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  ) : (
                    <></>
                  )}
                </Stack>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={5}>
                  {selectedProductDetails?.productDescription ? (
                    <TextField
                      fullWidth
                      multiline
                      rows={3}
                      id="outlined-read-only-input"
                      label="Product Description"
                      defaultValue={selectedProductDetails?.productDescription}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  ) : (
                    <></>
                  )}

                  {selectedProductDetails?.category ? (
                    <TextField
                      fullWidth
                      id="outlined-read-only-input"
                      label="Product Category"
                      defaultValue={selectedProductDetails?.category}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  ) : (
                    <></>
                  )}
                </Stack>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={5}>
                  {selectedProductDetails?.measuringUnit ? (
                    <TextField
                      fullWidth
                      id="outlined-read-only-input"
                      label="Measuring Unit"
                      defaultValue={selectedProductDetails?.measuringUnit}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  ) : (
                    <></>
                  )}
                  {selectedProductDetails?.volume ? (
                    <TextField
                      fullWidth
                      id="outlined-read-only-input"
                      label="Volume"
                      defaultValue={selectedProductDetails?.volume}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  ) : (
                    <></>
                  )}
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
                </Stack>
                <Stack direction={{ xs: "row", sm: "row" }} spacing={5}>
                  <Box sx={{ width: "100%" }}>
                    <Typography sx={{ color: "grey" }}>
                      Date of purchase
                    </Typography>
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
              </>
            ) : (
              <></>
            )}

            {productType === "dealer-specific " ? (
              <>
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
                  {/* <TextField
                    type="text"
                    required={true}
                    fullWidth
                    id="base"
                    variant="outlined"
                    label="Selling Price"
                    onChange={(e: any) => setsellingPrice(e.target.value)}
                  /> */}
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
                    <Typography sx={{ color: "grey" }}>
                      Date of purchase
                    </Typography>
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
              </>
            ) : (
              <></>
            )}
            <Box>
              {productType ? (
                <LoadingButton
                  loading={loading}
                  onClick={addProduct}
                  variant="contained"
                  sx={{ mt: 2 }}
                >
                  Submit
                </LoadingButton>
              ) : (
                <></>
              )}
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
                      Procurement Discount
                    </TableCell>

                    <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                      Batches
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
                          {row?.procurementDiscount}%
                        </TableCell>
                        <TableCell sx={{ border: 1 }}>
                          <IconButton onClick={() => showBatches(row)}>
                            <Icon
                              icon="fluent:arrow-forward-20-regular"
                              height={40}
                              width={40}
                              color="grey"
                            />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </TabPanel>

        {/* Add Bulk Products.  */}
        <TabPanel value={value} index={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            {excelData <= 0 || excelData === undefined ? (
              <></>
            ) : (
              <Button
                variant="contained"
                sx={{ backgroundColor: "#05AB2A", height: "fix-layout" }}
              >
                <CSVLink
                  data={excelData}
                  filename={fileName}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  {loading ? "Loading csv..." : "Download Product Template"}
                </CSVLink>
              </Button>
            )}
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
          </Box>
          {xlsxData === undefined ? (
            <></>
          ) : (
            <>
              <TableContainer sx={{ minWidth: 500 }}>
                <Table
                  sx={{ border: "2px solid", mt: 3 }}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{ border: "1px solid", fontWeight: "bold" }}
                      >
                        Product ID
                      </TableCell>
                      <TableCell
                        sx={{ border: "1px solid", fontWeight: "bold" }}
                      >
                        Trade Name
                      </TableCell>
                      <TableCell
                        sx={{ border: "1px solid", fontWeight: "bold" }}
                      >
                        Category
                      </TableCell>
                      <TableCell
                        sx={{ border: "1px solid", fontWeight: "bold" }}
                      >
                        Unit
                      </TableCell>
                      <TableCell
                        sx={{ border: "1px solid", fontWeight: "bold" }}
                      >
                        Volume
                      </TableCell>
                      <TableCell
                        sx={{ border: "1px solid", fontWeight: "bold" }}
                      >
                        Quantity
                      </TableCell>
                      <TableCell
                        sx={{ border: "1px solid", fontWeight: "bold" }}
                      >
                        Date Of Purchase
                      </TableCell>
                      <TableCell
                        sx={{ border: "1px solid", fontWeight: "bold" }}
                      >
                        Expiry Date
                      </TableCell>
                      <TableCell
                        sx={{ border: "1px solid", fontWeight: "bold" }}
                      >
                        MRP
                      </TableCell>
                      {/* <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                    Procurement Price
                  </TableCell>
                  <TableCell sx={{ border: "1px solid", fontWeight: "bold" }}>
                    Selling Price
                  </TableCell> */}
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
                            <TableCell sx={{ border: 1 }}>
                              ₹{row?.MRP}
                            </TableCell>
                            {/* <TableCell sx={{ border: 1 }}>
                          ₹{row?.procuredPrice}
                        </TableCell>
                        <TableCell sx={{ border: 1 }}>
                          ₹{row?.sellingPrice}
                        </TableCell> */}
                          </TableRow>
                        ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                <Button
                  onClick={addBulkProduct}
                  variant="contained"
                  sx={{ backgroundColor: "#05AB2A", height: "fix-layout" }}
                >
                  Submit
                </Button>
              </Box>
            </>
          )}
        </TabPanel>
      </Box>
    </div>
  );
};

export default Purchase;

const ProductTemplateDealerSpecific = [
  {
    ActiveIngridient: "",
    TradeName: "",
    ProductDescription: "",
    Category: "",
    MeasuringUnit: "",
    Volume: "",
    Quantity: "",
    DateOfPurchase: "",
    ExpiryDate: "",
    MRP: "",
    ProcurementDiscount: "",
    SearchKeywords: [],
    Crop: [],
  },
];
