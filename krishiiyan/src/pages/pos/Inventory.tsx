import { useEffect, useState, useRef } from "react";
import Header from "../../Components/layouts/Header";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button, TableContainer } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as Api from "../../Services/Api";
import { Icon } from "@iconify/react";
import BulkAddProduct from "./BulkAddProduct";
import UpdateProduct from "./UpdateProduct";
import moment from "moment";
import { CSVLink } from "react-csv";

const FertilizerOption = [
  {
    value: "All",
  },
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

const SearchBar = (props: any) => (
  <>
    <TextField
      id="search-bar"
      onInput={(e: any) => {
        props?.setSearchQuery(e.target.value);
      }}
      label="Search Inventory Products.."
      variant="outlined"
      placeholder="Search... By Trade Name"
      // fullWidth
      sx={{ width: 400 }}
    />
  </>
);

const filterData = (query: any, data: any, selectedProduct?: any) => {
  let selected_category = selectedProduct || "All";
  if (!query) {
    return data;
  } else {
    let filterdData = data.filter(
      (d: any) => d?.tradeName?.toLowerCase().includes(query)
      // && d?.category?.toLowerCase().includes(selected_category)
    );
    return filterdData;
  }
};

const Inventory = () => {
  const navigate = useNavigate();
  const [productTemplate, setProductTemplate] = useState<any>();
  const [products, setProducts] = useState<any>();
  const [selectedProduct, setSelectedProduct] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [dealer, setDealer] = useState<any>();
  const [singleProductDetails, setSingleProductDetails] = useState<any>();
  const [expiredProducts,setExpiredProducts] = useState<any>()

  const fileName = "Krishiyan-Product-Template(Admin)";
  let excelData;
  if (dealer?.excel_data_download.toString() === "false") {
    excelData = productTemplate?.ProductTemplate!;
  } else {
    excelData = products;
  }

  //Add bulk product model
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Update Product model
  const [openUpdateModel, setOpenUpdateModel] = useState(false);
  const handleOpenUpdateModel = () => setOpenUpdateModel(true);
  const handleCloseUpdateModel = () => setOpenUpdateModel(false);

  const onChangeProduct = (e: any, value: any) => {
    setSelectedProduct(value.value);
  };
  const dataFiltered = filterData(searchQuery, products, selectedProduct);

  // Fetch products
  const getProducts = async () => {
    const [err, res] = await Api.getDealerProducts();
    if (res) {
      setProducts(res?.data);
    }
  };

  
  //Fetch Admin Product template
  const getAdminProductTemplate = async () => {
    const [err, res] = await Api.getProductTemplate();
    if (err) {
      alert(err?.data);
    }
    if (res) {
      setProductTemplate(res?.data);
    }
  };

  //Get dealer profile
  const getDealer = async () => {
    const [err, res] = await Api.getDealer();
    if (res) {
      setDealer(res?.data);
    }
  };

  useEffect(() => {
    const init = async () => {
      await getDealer();
      await getProducts();
      await getAdminProductTemplate();
      
    };
    init();
  }, []);

  const onClickUpdate = (productDetails: any) => {
    setSingleProductDetails(productDetails);
    handleOpenUpdateModel();
  };

  const showBatches = async (productDetail: any) => {
    navigate("/product-batches", {
      state: {
        Batches: productDetail.batches,
      },
    });
  };

  return (
    <div>
      <Header title="Pos" subtitle="Inventory" />
      <section className=" box-border p-[1.5%] ">
        <div className="font-roboto flex justify-between p-2">
          <Autocomplete
            onChange={onChangeProduct}
            id="plantation-select"
            sx={{ width: 240 }}
            options={FertilizerOption}
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
          <div>
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>

          <div className="flex gap-1">
            {excelData <= 0 || excelData === undefined ? (
              <></>
            ) : (
              <Button
                variant="contained"
                sx={{ backgroundColor: "#05AB2A", height: "fix-layout" }}
              >
                <CSVLink
                  // headers={headers}
                  data={excelData}
                  filename={fileName}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  {loading ? "Loading csv..." : "Download"}
                </CSVLink>
              </Button>
            )}

            <Button
              onClick={handleOpen}
              variant="contained"
              sx={{ backgroundColor: "#05AB2A" }}
            >
              Upload
            </Button>
          </div>
        </div>
        <p className="text-[#13490A] font-bold text-start mt-2 p-2">
          Product List
        </p>

        {selectedProduct === "All" ? (
          <>
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
                  {dataFiltered?.length > 0 &&
                    dataFiltered
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
                          {/* <TableCell sx={{ cursor: "pointer", border: 1 }}>
                            <IconButton onClick={() => onClickUpdate(row)}>
                              <Icon
                                icon="mdi:pencil-circle"
                                height={40}
                                width={40}
                                color="grey"
                              />
                            </IconButton>
                          </TableCell> */}
                        </TableRow>
                      ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ) : (
          <></>
        )}

        {selectedProduct === "Fertilizer" ? (
          <>
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
                  {dataFiltered?.length > 0 &&
                    dataFiltered
                      .filter((obj: any) => obj.category === selectedProduct)
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
                          {/* <TableCell sx={{ cursor: "pointer", border: 1 }}>
                            <IconButton onClick={() => onClickUpdate(row)}>
                              <Icon
                                icon="mdi:pencil-circle"
                                height={40}
                                width={40}
                                color="grey"
                              />
                            </IconButton>
                          </TableCell> */}
                        </TableRow>
                      ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ) : (
          <></>
        )}

        {selectedProduct === "Pesticide" ? (
          <>
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
                  {dataFiltered?.length > 0 &&
                    dataFiltered
                      .filter((obj: any) => obj.category === selectedProduct)
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
                          {/* <TableCell sx={{ cursor: "pointer", border: 1 }}>
                            <IconButton onClick={() => onClickUpdate(row)}>
                              <Icon
                                icon="mdi:pencil-circle"
                                height={40}
                                width={40}
                                color="grey"
                              />
                            </IconButton>
                          </TableCell> */}
                        </TableRow>
                      ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ) : (
          <></>
        )}

        {selectedProduct === "Fungicide" ? (
          <>
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
                  {dataFiltered?.length > 0 &&
                    dataFiltered
                      .filter((obj: any) => obj.category === selectedProduct)
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
                          {/* <TableCell sx={{ cursor: "pointer", border: 1 }}>
                            <IconButton onClick={() => onClickUpdate(row)}>
                              <Icon
                                icon="mdi:pencil-circle"
                                height={40}
                                width={40}
                                color="grey"
                              />
                            </IconButton>
                          </TableCell> */}
                        </TableRow>
                      ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ) : (
          <></>
        )}

        {selectedProduct === "Herbicide" ? (
          <>
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
                  {dataFiltered?.length > 0 &&
                    dataFiltered
                      .filter((obj: any) => obj.category === selectedProduct)
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
                          {/* <TableCell sx={{ cursor: "pointer", border: 1 }}>
                            <IconButton onClick={() => onClickUpdate(row)}>
                              <Icon
                                icon="mdi:pencil-circle"
                                height={40}
                                width={40}
                                color="grey"
                              />
                            </IconButton>
                          </TableCell> */}
                        </TableRow>
                      ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ) : (
          <></>
        )}

        {selectedProduct === "Seeds" ? (
          <>
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
                  {dataFiltered?.length > 0 &&
                    dataFiltered
                      .filter((obj: any) => obj.category === selectedProduct)
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
                          {/* <TableCell sx={{ cursor: "pointer", border: 1 }}>
                            <IconButton onClick={() => onClickUpdate(row)}>
                              <Icon
                                icon="mdi:pencil-circle"
                                height={40}
                                width={40}
                                color="grey"
                              />
                            </IconButton>
                          </TableCell> */}
                        </TableRow>
                      ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ) : (
          <></>
        )}

        {selectedProduct === "GrowthPromoter" ? (
          <>
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
                  {dataFiltered?.length > 0 &&
                    dataFiltered
                      .filter((obj: any) => obj.category === selectedProduct)
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
                          {/* <TableCell sx={{ cursor: "pointer", border: 1 }}>
                            <IconButton onClick={() => onClickUpdate(row)}>
                              <Icon
                                icon="mdi:pencil-circle"
                                height={40}
                                width={40}
                                color="grey"
                              />
                            </IconButton>
                          </TableCell> */}
                        </TableRow>
                      ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ) : (
          <></>
        )}

        {/* <div className="p-2">
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
                {dataFiltered?.length > 0 &&
                  dataFiltered
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
                        <TableCell sx={{ cursor: "pointer", border: 1 }}>
                          <IconButton onClick={() => onClickUpdate(row)}>
                            <Icon
                              icon="mdi:pencil-circle"
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
        </div> */}

        <div></div>
      </section>
      <BulkAddProduct
        open={open}
        handleClose={handleClose}
        dealer={dealer}
        getProducts={getProducts}
      />
      <UpdateProduct
        open={openUpdateModel}
        handleClose={handleCloseUpdateModel}
        dealer={dealer}
        ProductDetails={singleProductDetails}
      />
    </div>
  );
};

export default Inventory;
