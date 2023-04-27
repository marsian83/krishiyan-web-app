import React, { useEffect, useState } from "react";
import * as Api from "../../Services/Api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../Components/layouts/Header";
import moment from "moment";
import { Icon } from "@iconify/react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";

const SearchBar = (props: any) => (
  <>
    <input
      type="text"
      onInput={(e: any) => {
        props?.setSearchQuery(e.target.value);
      }}
      className="text-[#13490A] !outline-none bg-transparent w-full font-normal text-center"
      placeholder="Search... By Trade Name"
    />
  </>
);

const SearchBarCart = (props: any) => (
  <>
    <input
      type="text"
      onInput={(e: any) => {
        props?.setSearchQuery(e.target.value);
      }}
      className="text-[#13490A] !outline-none bg-transparent w-full font-normal text-center"
      placeholder="Search... Cart"
    />
  </>
);

const filterData = (query: any, data: any) => {
  if (!query) {
    return data;
  } else {
    let filterdData = data.filter((d: any) =>
      d?.tradeName?.toLowerCase().includes(query)
    );
    return filterdData;
  }
};

const filterDataCart = (query: any, data: any) => {
  if (!query) {
    return data;
  } else {
    let filterdData = data.filter((d: any) =>
      d?.itemId?.tradeName?.toLowerCase().includes(query)
    );
    console.log(filterdData);
    
    return filterdData;
  }
};

const Sale = () => {
  let navigate = useNavigate();
  const [number, SetNumber] = useState<any>(true);
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [farmerID, setFarmerID] = useState("");
  const [farmerDetail, setFarmerDetail] = useState<any>();
  const [currentCultivation, setCurrentCultivation] = useState<any>();
  const [disclaimer, setDisclaimer] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQueryCart, setSearchQueryCart] = useState("");
  const [products, setProducts] = useState<any>();
  const [selectedProductDetails, setSelectedProductDetails] = useState<any>();
  const [farmerRecommendedProducts, setFarmerRecommendedProducts] =
    useState<any>();

  const [productCategory, setProductCategory] = useState("Pesticide");

 

  //========================================== Farmer Cart ===================================================
  const [cartItems, setCartItems] = useState<any>();
  const [totalPrice, setTotalPrice] = useState("");

  const dataFiltered = filterData(searchQuery, products);
  const cartDataFiltered = filterDataCart(searchQueryCart, cartItems);

  //Get Farmer Cart
  const getFarmerCart = async () => {
    const [cartErr, cartRes] = await Api.getFarmerCart(farmerDetail?._id);
    if (cartRes) {
      setCartItems(cartRes?.data?.cart);
      setTotalPrice(cartRes?.data?.totalPrice);
    }
  };
  useEffect(() => {
    const getFarmer = () => {
      getFarmerCart();
    };
    getFarmer();
  }, [farmerDetail]);

  //Add to cart
  const addToCart = async (itemid: string) => {
    if (farmerDetail?._id) {
      const [addToCartErr, addToCartRes] = await Api.addtoCart(
        farmerDetail?._id,
        itemid
      );
      if (addToCartErr) {
        toast.error(addToCartErr.data, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      if (addToCartRes) {
        toast.success("Product added to cart!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } else {
      toast.error("Farmer details not available.Plz provide farmer detail.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const AddToCartOnClickHandler = async (ItemID: string) => {
    await addToCart(ItemID);
    await getFarmerCart();
  };

  //Increase quantity
  const increaseQuantityHandler = async (itemid: string) => {
    const [addToCartErr, addToCartRes] = await Api.addtoCart(
      farmerDetail?._id,
      itemid
    );
    if (addToCartRes) {
      await getFarmerCart();
    }
  };

  //Reduce quantity
  const reduceQuantityHandler = async (itemid: string) => {
    const [reduceQuantityErr, reduceQuantityRes] = await Api.reduceCartItem(
      farmerDetail?._id,
      itemid
    );
    if (reduceQuantityErr) {
      toast.error(reduceQuantityErr.data, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    if (reduceQuantityRes) {
      await getFarmerCart();
      toast.success("Success!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  //Remove item from cart
  const removeItemHandler = async (itemid: string) => {
    const [removeQuantityErr, removeQuantityRes] = await Api.removeCartItem(
      farmerDetail?._id,
      itemid
    );
    if (removeQuantityErr) {
      toast.error(removeQuantityErr.data, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    if (removeQuantityRes) {
      await getFarmerCart();
      toast.success("Item successfully removed from cart.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  //=====================================================================================================
  const getProducts = async () => {
    const [err, res] = await Api.getDealerProducts();
    if (res) {
      setProducts(res?.data);
    }
  };
  const onChangeInput = (e: any) => {
    setFarmerID(e.target.value);
  };
  const getFarmerById = async () => {
    if (farmerID) {
      setLoading(true);
      const [err, res] = await Api.getFarmer(farmerID);
      if (err) {
        console.log(err);
        toast.error(err.data, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      if (res) {
        if (res?.data === null) {
          // toast.error("Farmer not found!", {
          //   position: toast.POSITION.TOP_RIGHT,
          // });
        }
        setFarmerDetail(res?.data);
      }

      setLoading(false);
    }
  };

  const onClickEnter = async () => {
    localStorage.setItem("Number", farmerID);
    await getFarmerById();
    SetNumber(false);
    setData(true);
  };

  //Get Farmer Cultivations
  useEffect(() => {
    const init = async () => {
      const [err, res] = await Api.getFarmerCultivationData(farmerDetail?._id);
      if (res) {
        let current_cultivation =
          res?.data?.farmerCultivationData[
            res?.data?.farmerCultivationData.length - 1
          ];
        setCurrentCultivation(current_cultivation);
      }
    };
    init();
  }, [farmerID, farmerDetail]);

  //Fetch farmer by mobile
  useEffect(() => {
    const init = async () => {
      await getFarmerById();
    };
    init();
  }, [farmerID]);

  //save farmer mobile in local storage
  useEffect(() => {
    if (
      !localStorage.Number ||
      localStorage.Number === "" ||
      localStorage.Number === undefined
    ) {
      return;
    } else if (localStorage.Number || !localStorage.Number === undefined) {
      setFarmerID(localStorage.Number);
      onClickEnter();
    }
  }, []);

  // Fetch products
  useEffect(() => {
    const init = () => {
      getProducts();
    };
    init();
  }, []);

  /**
   * Disclaimer:
   * Selling Price < MSP => You are selling at low price.
   * Selling Price = Procured Price => You are selling at low margin.
   * Selling Price < Procured Price => You are selling at loss.
   */
  const showDisclaimer = (
    sellingPrice: string,
    MSP: string,
    procuredPrice: string
  ) => {
    // console.log({ sellingPrice, MSP, procuredPrice });
    if (sellingPrice < MSP) {
      setDisclaimer("You are selling at low price.");
    } else if (sellingPrice === procuredPrice) {
      setDisclaimer("You are selling at low margin.");
    } else if (sellingPrice < procuredPrice) {
      setDisclaimer("You are selling at loss.");
    } else if (sellingPrice > MSP) {
      setDisclaimer("You are selling at high margin.");
    }
  };

  //Payment

  //Pay by cash
  const onClickPayHandler = async () => {
    if (cartItems.length > 0 && totalPrice !== undefined && farmerDetail) {
      console.log({ cartItems, totalPrice });
      const [createOrderErr, createOrderRes] = await Api.createFarmerOrder(
        cartItems,
        farmerDetail?._id,
        "paid",
        totalPrice
      );
      if (createOrderErr) {
        alert(createOrderErr?.data);
      }
      if (createOrderRes) {
        console.log(createOrderRes);
      }
      getFarmerCart();
    }
  };

  //Pay by credit
  const onClickPayByCreditHandler = async () => {
    if (cartItems.length > 0 && totalPrice !== undefined && farmerDetail) {
      console.log({ cartItems, totalPrice });
      const [createOrderErr, createOrderRes] = await Api.createFarmerOrder(
        cartItems,
        farmerDetail?._id,
        "payByCredit",
        totalPrice
      );
      if (createOrderErr) {
        alert(createOrderErr?.data);
      }
      if (createOrderRes) {
        console.log(createOrderRes);
      }
      getFarmerCart();
      navigate("/credit");
    }
  };

  //Get recommended products

  useEffect(() => {
    const getFarmerRecommendedProducts = async () => {
      const [err, res] = await Api.getRecommendedProducts(farmerDetail?._id);
      if (res) {
        let recommended_products = res.data.RecommendedProducts.filter(
          (o: any) => o.productId !== ""
        );
        setFarmerRecommendedProducts(recommended_products);
      }
    };
    getFarmerRecommendedProducts();
  }, [farmerDetail]);

  return (
    <div>
      <Header title="Pos" subtitle="Sale" />
      <section className="flex border border-[#13490A] border-collapse font-roboto h-[110vh]">
        <div className="flex flex-col flex-[4]">
          <div className="flex-[2] flex items-center gap-x-[3%] border border-black text-sm text-[#13490A] font-bold  ">
            {number ? (
              <>
                <label className="font-bold text-sm text-[#033E02] mb-1 text-base ml-2">
                  Mobile Number/Name/ID
                </label>
                <input
                  type="text"
                  className="bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[1%] text-center h-10 border border-[#033E02]"
                  style={{ width: "320px" }}
                  onChange={onChangeInput}
                />
                <button
                  className="bg-[#05AB2A] text-white font-thin tracking-wide w-20 h-9 flex items-center justify-center rounded-md text-base"
                  onClick={onClickEnter}
                >
                  ENTER
                </button>
                <button onClick={() => navigate('/new_registration')} className=" w-10 h-6 flex items-center justify-center rounded-md">
                  <img src="Images/plus.png" alt="plus" className="h-6 w-6" />
                </button>{" "}
              </>
            ) : null}
            {data ? (
              <div className="flex space-x-96 w-full p-2">
                <div className="right  font-bold flex-[1.2] text-start">
                  <p>Name : {farmerDetail?.name}</p>
                  <p>Phone : {farmerDetail?.mobile}</p>
                  <p>E-Mail : </p>
                  <p>Area : {farmerDetail?.address?.street}</p>
                  <p>Dealer: </p>
                </div>

                <div className="right  font-bold flex-[1.2] text-start">
                  <p>Type : {farmerDetail?.plantation_type}</p>
                  <div className="flex gap-2">
                    <div>Available Credit : </div>
                    <div className="text-[#FF0000]">
                      ₹ {farmerDetail?.creditLimit}
                    </div>
                  </div>
                  <p>
                    Member Since :{" "}
                    {moment(farmerDetail?.createdAt)?.format("DD-MM-YY")}
                  </p>
                  <p>Number Of Purchases : 0</p>
                  <p>Due: 0</p>
                </div>
              </div>
            ) : null}
          </div>

          <div className="flex-[10] flex">
            {/* 1st Window */}
            <div className="flex flex-col flex-1">
              <div
                className="flex justify-around  border-collapse h-10 shadow-sm"
                // style={{ backgroundColor: "rgb(242 242 242)" }}
              >
                <button
                  onClick={() => setProductCategory("Recommended")}
                  className={`border border-collapse border-black flex-1 text-sm font-bold ${
                    productCategory === "Recommended"
                      ? "bg-[#526D4E]"
                      : "bg-[#05AB2A]"
                  }`}
                >
                  Recommended
                </button>
                <button
                  onClick={() => setProductCategory("Seeds")}
                  className={`border border-collapse border-black flex-1 text-sm font-bold ${
                    productCategory === "Seeds"
                      ? "bg-[#526D4E]"
                      : "bg-[#05AB2A]"
                  }`}
                >
                  Seeds
                </button>
                <button
                  onClick={() => setProductCategory("Fertilizer")}
                  className={`border border-collapse border-black flex-1 text-sm font-bold ${
                    productCategory === "Fertilizer"
                      ? "bg-[#526D4E]"
                      : "bg-[#05AB2A]"
                  }`}
                >
                  Fertilizer
                </button>
                <button
                  onClick={() => setProductCategory("GrowthPromoter")}
                  className={`border border-collapse border-black flex-1 text-sm font-bold ${
                    productCategory === "GrowthPromoter"
                      ? "bg-[#526D4E]"
                      : "bg-[#05AB2A]"
                  }`}
                >
                  Growth Promoter
                </button>
                <button
                  onClick={() => setProductCategory("Pesticide")}
                  className={`border border-collapse border-black flex-1 text-sm font-bold ${
                    productCategory === "Pesticide"
                      ? "bg-[#526D4E]"
                      : "bg-[#05AB2A]"
                  }`}
                >
                  Pesticide
                </button>
                <button
                  onClick={() => setProductCategory("Fungicide")}
                  className={`border border-collapse border-black flex-1 text-sm font-bold ${
                    productCategory === "Fungicide"
                      ? "bg-[#526D4E]"
                      : "bg-[#05AB2A]"
                  }`}
                >
                  Fungicide
                </button>
                <button
                  onClick={() => setProductCategory("Herbicide")}
                  className={`border border-collapse border-black flex-1 text-sm font-bold ${
                    productCategory === "Herbicide"
                      ? "bg-[#526D4E]"
                      : "bg-[#05AB2A]"
                  }`}
                >
                  Herbicide
                </button>
              </div>
              <div
                className="shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-full"
                style={{ backgroundColor: "rgb(242 242 242)" }}
              >
                <SearchBar
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
              </div>
              {/* Product List for Sale */}

              {/* Recommended Product */}
              {productCategory === "Recommended" ? (
                <>
                  {farmerRecommendedProducts &&
                    farmerRecommendedProducts
                      // .filter((obj: any) => obj.category === "Seeds")
                      .sort((a: any, b: any) => b.quantity - a.quantity)
                      .map((product: any) => (
                        <>
                          <div
                            key={product?.productId}
                            className="flex justify-around p-2 mt-5 items-center"
                          >
                            <div>{product?.productId.slice(0, 8)}...</div>
                            <div>{product?.productName}</div>

                            <Tooltip title="Add to cart" arrow>
                              <IconButton
                                onClick={() =>
                                  AddToCartOnClickHandler(product?.productId)
                                }
                              >
                                <Icon
                                  icon="material-symbols:add-circle-outline"
                                  height={30}
                                  width={30}
                                  color="green"
                                />
                              </IconButton>
                            </Tooltip>
                            <button
                              onClick={() => setSelectedProductDetails(product)}
                              className="bg-[#05AB2A] text-white font-thin tracking-wide w-20 h-9 flex items-center justify-center rounded-md text-base p-2"
                            >
                              Details
                            </button>
                          </div>
                        </>
                      ))}
                </>
              ) : (
                <></>
              )}

              {/* Seeds */}
              {productCategory === "Seeds" ? (
                <>
                  {dataFiltered &&
                    dataFiltered
                      .filter((obj: any) => obj.category === "Seeds")
                      .sort((a: any, b: any) => b.quantity - a.quantity)
                      .map((product: any) => (
                        <>
                          <div
                            key={product?._id}
                            className="flex justify-around p-2 mt-5 items-center"
                          >
                            <div>{product?._id.slice(0, 8)}...</div>
                            <div>{product?.tradeName}</div>

                            <Tooltip title="Add to cart" arrow>
                              <IconButton
                                onClick={() =>
                                  AddToCartOnClickHandler(product?._id)
                                }
                              >
                                <Icon
                                  icon="material-symbols:add-circle-outline"
                                  height={30}
                                  width={30}
                                  color="green"
                                />
                              </IconButton>
                            </Tooltip>
                            <button
                              onClick={() => setSelectedProductDetails(product)}
                              className="bg-[#05AB2A] text-white font-thin tracking-wide w-20 h-9 flex items-center justify-center rounded-md text-base p-2"
                            >
                              Details
                            </button>
                          </div>
                        </>
                      ))}
                </>
              ) : (
                <></>
              )}
              {/* Fertilizer */}
              {productCategory === "Fertilizer" ? (
                <>
                  {dataFiltered &&
                    dataFiltered
                      .filter((obj: any) => obj.category === "Fertilizer")
                      .sort((a: any, b: any) => b.quantity - a.quantity)
                      .map((product: any) => (
                        <>
                          <div
                            key={product?._id}
                            className="flex justify-around p-2 mt-5 items-center"
                          >
                            <div>{product?._id.slice(0, 8)}...</div>
                            <div>{product?.tradeName}</div>

                            <Tooltip title="Add to cart" arrow>
                              <IconButton
                                onClick={() =>
                                  AddToCartOnClickHandler(product?._id)
                                }
                              >
                                <Icon
                                  icon="material-symbols:add-circle-outline"
                                  height={30}
                                  width={30}
                                  color="green"
                                />
                              </IconButton>
                            </Tooltip>
                            <button
                              onClick={() => setSelectedProductDetails(product)}
                              className="bg-[#05AB2A] text-white font-thin tracking-wide w-20 h-9 flex items-center justify-center rounded-md text-base p-2"
                            >
                              Details
                            </button>
                          </div>
                        </>
                      ))}
                </>
              ) : (
                <></>
              )}
              {/* Growth Promoter */}
              {productCategory === "GrowthPromoter" ? (
                <>
                  {dataFiltered &&
                    dataFiltered
                      .filter((obj: any) => obj.category === "GrowthPromoter")
                      .sort((a: any, b: any) => b.quantity - a.quantity)
                      .map((product: any) => (
                        <>
                          <div
                            key={product?._id}
                            className="flex justify-around p-2 mt-5 items-center"
                          >
                            <div>{product?._id.slice(0, 8)}...</div>
                            <div>{product?.tradeName}</div>

                            <Tooltip title="Add to cart" arrow>
                              <IconButton
                                onClick={() =>
                                  AddToCartOnClickHandler(product?._id)
                                }
                              >
                                <Icon
                                  icon="material-symbols:add-circle-outline"
                                  height={30}
                                  width={30}
                                  color="green"
                                />
                              </IconButton>
                            </Tooltip>
                            <button
                              onClick={() => setSelectedProductDetails(product)}
                              className="bg-[#05AB2A] text-white font-thin tracking-wide w-20 h-9 flex items-center justify-center rounded-md text-base p-2"
                            >
                              Details
                            </button>
                          </div>
                        </>
                      ))}
                </>
              ) : (
                <></>
              )}
              {/* Pesticide */}
              {productCategory === "Pesticide" ? (
                <>
                  {dataFiltered &&
                    dataFiltered
                      .filter((obj: any) => obj.category === "Pesticide")
                      .sort((a: any, b: any) => b.quantity - a.quantity)
                      .map((product: any) => (
                        <>
                          <div
                            key={product?._id}
                            className="flex justify-between p-4 mt-5 items-center"
                          >
                            <div className="justify-text">
                              {product?._id.slice(0, 8)}...
                            </div>
                            <div className="justify-text">
                              {product?.tradeName}
                            </div>
                            <div className="justify-text">
                              <Tooltip title="Add to cart" arrow>
                                <IconButton
                                  onClick={() =>
                                    AddToCartOnClickHandler(product?._id)
                                  }
                                >
                                  <Icon
                                    icon="material-symbols:add-circle-outline"
                                    height={30}
                                    width={30}
                                    color="green"
                                  />
                                </IconButton>
                              </Tooltip>
                            </div>
                            <button
                              onClick={() => setSelectedProductDetails(product)}
                              className="bg-[#05AB2A] text-white font-thin tracking-wide w-20 h-9 flex items-center justify-center rounded-md text-base p-2"
                            >
                              Details
                            </button>
                          </div>
                        </>
                      ))}
                </>
              ) : (
                <></>
              )}

              {/* Fungicide */}
              {productCategory === "Fungicide" ? (
                <>
                  {dataFiltered &&
                    dataFiltered
                      .filter((obj: any) => obj.category === "Fungicide")
                      .sort((a: any, b: any) => b.quantity - a.quantity)
                      .map((product: any) => (
                        <>
                          <div
                            key={product?._id}
                            className="flex justify-around p-2 mt-5 items-center"
                          >
                            <div>{product?._id.slice(0, 8)}...</div>
                            <div>{product?.tradeName}</div>

                            <Tooltip title="Add to cart" arrow>
                              <IconButton
                                onClick={() =>
                                  AddToCartOnClickHandler(product?._id)
                                }
                              >
                                <Icon
                                  icon="material-symbols:add-circle-outline"
                                  height={30}
                                  width={30}
                                  color="green"
                                />
                              </IconButton>
                            </Tooltip>
                            <button
                              onClick={() => setSelectedProductDetails(product)}
                              className="bg-[#05AB2A] text-white font-thin tracking-wide w-20 h-9 flex items-center justify-center rounded-md text-base p-2"
                            >
                              Details
                            </button>
                          </div>
                        </>
                      ))}
                </>
              ) : (
                <></>
              )}
              {/* Herbicide */}
              {productCategory === "Herbicide" ? (
                <>
                  {dataFiltered &&
                    dataFiltered
                      .filter((obj: any) => obj.category === "Herbicide")
                      .sort((a: any, b: any) => b.quantity - a.quantity)
                      .map((product: any) => (
                        <>
                          <div
                            key={product?._id}
                            className="flex justify-around p-2 mt-5 items-center"
                          >
                            <div>{product?._id.slice(0, 8)}...</div>
                            <div>{product?.tradeName}</div>

                            <Tooltip title="Add to cart" arrow>
                              <IconButton
                                onClick={() =>
                                  AddToCartOnClickHandler(product?._id)
                                }
                              >
                                <Icon
                                  icon="material-symbols:add-circle-outline"
                                  height={30}
                                  width={30}
                                  color="green"
                                />
                              </IconButton>
                            </Tooltip>
                            <button
                              onClick={() => setSelectedProductDetails(product)}
                              className="bg-[#05AB2A] text-white font-thin tracking-wide w-20 h-9 flex items-center justify-center rounded-md text-base p-2"
                            >
                              Details
                            </button>
                          </div>
                        </>
                      ))}
                </>
              ) : (
                <></>
              )}
            </div>

            {/* 2nd Window */}
            <div className="border border-black flex-[1]">
              <div
                className="h-10 flex items-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)] gap-x-5 pl-2"
                style={{ backgroundColor: "rgb(242 242 242)" }}
              >
                <label className="font-bold text-sms text-[#033E02]">
                  PRODUCT
                </label>
                 <SearchBarCart
                  searchQuery={searchQueryCart}
                  setSearchQuery={setSearchQueryCart}
                />
              </div>
              {/* Cart Items */}
              <div>
                {cartDataFiltered?.length <= 0 || cartDataFiltered === undefined ? (
                  <div className="flex items-center justify-center mt-5">
                    <label className="font-bold text-lg text-[#033E02]">
                      No Product in Farmer Cart.
                    </label>
                  </div>
                ) : (
                  <div className="p-2">
                    <h1 className="text-[#033E02] font-bold">Cart Items</h1>
                    <Table
                      sx={{ minWidth: 650, border: "2px solid" }}
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
                            Name
                          </TableCell>
                          <TableCell
                            sx={{ border: "1px solid", fontWeight: "bold" }}
                          >
                            Price/Unit
                          </TableCell>
                          <TableCell
                            sx={{ border: "1px solid", fontWeight: "bold" }}
                          >
                            Quantity
                          </TableCell>
                          <TableCell
                            sx={{ border: "1px solid", fontWeight: "bold" }}
                          >
                            Discount(%)
                          </TableCell>
                          <TableCell
                            sx={{ border: "1px solid", fontWeight: "bold" }}
                          >
                            Total
                          </TableCell>
                          <TableCell
                            sx={{ border: "1px solid", fontWeight: "bold" }}
                          >
                            Disclaimer
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {cartDataFiltered?.length > 0 &&
                          cartDataFiltered.map((row: any) => (
                            <TableRow
                              key={row._id}
                              sx={{
                                border: 1,
                              }}
                            >
                              <TableCell sx={{ border: 1 }}>
                                {row?.itemId?._id.slice(0, 5)}...
                              </TableCell>
                              <TableCell sx={{ border: 1 }}>
                                {row?.itemId?.tradeName}
                              </TableCell>
                              <TableCell sx={{ border: 1 }}>
                                ₹{row?.itemId?.sellingPrice}
                              </TableCell>
                              <TableCell sx={{ border: 1 }}>
                                <div className="flex gap-[0.5] items-center">
                                  {row?.quantity}
                                  <IconButton
                                    onClick={() =>
                                      increaseQuantityHandler(row?.itemId?._id)
                                    }
                                  >
                                    <Icon
                                      icon="material-symbols:add-circle-outline"
                                      height={20}
                                      width={20}
                                      color="green"
                                    />
                                  </IconButton>
                                  <IconButton
                                    onClick={() =>
                                      reduceQuantityHandler(row?.itemId?._id)
                                    }
                                  >
                                    <Icon
                                      icon="carbon:subtract-alt"
                                      height={20}
                                      width={20}
                                      color="green"
                                    />
                                  </IconButton>
                                </div>
                              </TableCell>
                              <TableCell sx={{ border: 1 }}>
                                {row?.itemId?.saleDiscout}
                              </TableCell>
                              <TableCell sx={{ border: 1 }}>
                                ₹
                                {Number(row?.itemId?.sellingPrice) *
                                  Number(row?.quantity)}
                              </TableCell>
                              <TableCell sx={{ cursor: "pointer", border: 1 }}>
                                <IconButton
                                  sx={{ cursor: "pointor" }}
                                  onClick={() =>
                                    showDisclaimer(
                                      row?.itemId?.sellingPrice,
                                      row?.itemId?.MSP,
                                      row?.itemId?.procuredPrice
                                    )
                                  }
                                >
                                  <Icon
                                    icon="ic:outline-remove-red-eye"
                                    height={20}
                                    width={20}
                                    color="green"
                                  />
                                </IconButton>
                              </TableCell>
                              <TableCell sx={{ cursor: "pointer", border: 1 }}>
                                <IconButton
                                  onClick={() =>
                                    removeItemHandler(row?.itemId?._id)
                                  }
                                >
                                  <Icon
                                    icon="ic:baseline-delete"
                                    height={20}
                                    width={20}
                                    color="green"
                                  />
                                </IconButton>
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>

                    <div className="mt-5">
                      <h1 className="text-[#033E02] font-bold">Disclaimer</h1>
                      <p className="text-lg font-bold text-[#033E02]">
                        {disclaimer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex-[4] border border-[#13490A] border-collapse font-bold text-lg flex flex-row justify-between text-justify">
            {selectedProductDetails ? (
              <>
                <div className="w-[70%] border border-[#13490A] h-fit">
                  {/* Name */}
                  <div className="flex p-1 gap-2">
                    <div>
                      {" "}
                      <h1 className="">Name:</h1>
                    </div>
                    <div>
                      <h1 className="">{selectedProductDetails?.tradeName}.</h1>
                    </div>
                  </div>
                  {/* Active Ingridient */}
                  <div className="flex p-2 gap-2">
                    <div>
                      {" "}
                      <h1 className="">Active Ingridient:</h1>
                    </div>
                    <div>
                      <h1 className="">
                        {selectedProductDetails?.activeIngridient}.
                      </h1>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="flex p-1 gap-2">
                    <div>
                      {" "}
                      <h1 className="">Description:</h1>
                    </div>
                    <div>
                      <h1 className="">
                        {selectedProductDetails?.productDescription}.
                      </h1>
                    </div>
                  </div>
                  {/* Crops */}
                  <div className="flex p-1 gap-2">
                    <div>
                      {" "}
                      <h1 className="">Crops:</h1>
                    </div>
                    <div className="flex gap-1">
                      {selectedProductDetails?.crop?.map((o: any) => (
                        <h1 className="">{o},</h1>
                      ))}
                    </div>
                  </div>
                  {/* Price */}
                  <div className="flex p-1 gap-2">
                    <div>
                      {" "}
                      <h1 className="">Price:</h1>
                    </div>
                    <div>
                      <h1 className="">
                        ₹{selectedProductDetails?.sellingPrice}/Unit
                      </h1>
                    </div>
                  </div>
                  {/* Category */}
                  <div className="flex p-1 gap-2">
                    <div>
                      {" "}
                      <h1 className="">Category:</h1>
                    </div>
                    <div>
                      <h1 className="">{selectedProductDetails?.category}</h1>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="p-5">
                <h1>Product Details</h1>
              </div>
            )}

            <div className="w-[30%] border border-[#13490A] h-fit">
              <div className="total flex justify-between py-4 border border-[#13490A] px-1">
                <p>Total</p>
                <p className="text-[#526D4E] font-normal">₹{totalPrice}</p>
              </div>
              <div>
                <div className="mt-20 px-1">
                  <p className="text-start">Payment Method</p>
                  <div className="flex justify-around flex-row mt-1 mb-1">
                    <button
                      onClick={() => onClickPayHandler()}
                      className="bg-[#05AB2A] text-white font-thin tracking-wide w-20 h-9 flex items-center justify-center rounded-md text-base"
                    >
                      Paid
                    </button>
                    <button
                      onClick={() => onClickPayByCreditHandler()}
                      className="bg-[#05AB2A] text-white font-thin tracking-wide w-25 p-4 h-9 flex items-center justify-center rounded-md text-base"
                    >
                      Pay by Credit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sale;
