import React, { useEffect, useState } from "react";
import Header from "../../Components/layouts/Header";
import * as Api from "../../Services/Api";
import { toast } from "react-toastify";
import moment from "moment";
import Weather from "./Weather";

const Credit = () => {
  let row: any = "5";
  let col: any = "20";
  const [openTab, setOpenTab] = useState("New");

  const [farmerMobile, setFarmerMobile] = useState("");
  const [farmerDetails, setFarmerDetails] = useState<any>();
  const [farmerCredits, setFarmerCredits] = useState<any>();

  const getFarmerCredits = async () => {
    const [err, res] = await Api.getFarmerCreditData(farmerDetails?._id);
    if (res) {
      // console.log(res,"farmerCredits");
      setFarmerCredits(res?.data?.farmerCreditData);
    }
  };

  useEffect(() => {
    const init = async () => {
      await getFarmerCredits();
    };
    init();
  }, [farmerMobile, farmerDetails]);

  //Credit
  const [eligibleAmount, setEligibleAmount] = useState("");
  const [creditPeriod, setCreditPeriod] = useState("");
  const [interestRate, setInterestRate] = useState("");

  const [reason, setReason] = useState(" ");
  const [total_payable_amount, set_total_payable_amount] = useState("");
  const [interest_amount, set_interest_amount] = useState("");
  const [due_date, set_due_date] = useState("");

  console.log({ total_payable_amount, interest_amount, due_date });

  // useEffect(() => {
  //   const getEligibleAmount = () => {
  //     setEligibleAmount(farmerDetails?.creditLimit);
  //   };
  //   getEligibleAmount();
  // }, [farmerDetails, farmerMobile]);

  const onChangeMobile = (e: any) => {
    setFarmerMobile(e.target.value);
  };

  const onChangeAmount = (e: any) => {
    setEligibleAmount(e.target.value);
  };

  const onChangePeriod = (e: any) => {
    setCreditPeriod(e.target.value);
  };

  const onChangeRate = (e: any) => {
    setInterestRate(e.target.value);
  };

  const onChangeReason = (e: any) => {
    setReason(e.target.value);
  };

  //Status
  const [credit_id, set_credit_id] = useState("");
  const [credit_details, set_credit_details] = useState<any>();

  const onChangeCreditNum = (e: any) => {
    set_credit_id(e.target.value);
  };

  //Pay Credit
  const [amn_payable, set_amn_payable] = useState("");
  const [payment_method, set_payment_method] = useState("cash");

  const onChangeAmountPayable = (e: any) => {
    set_amn_payable(e.target.value);
  };

  const onChangePaymentMethod = (e: any) => {
    set_amn_payable(e.target.value);
  };

  //Get Farmer Details {Search farmer by mobile number}
  const getFarmerByMobile = async () => {
    const [err, res] = await Api.getFarmer(farmerMobile);
    if (res) {
      setFarmerDetails(res?.data);
      setEligibleAmount(res?.data?.creditLimit);
    }
  };

  //Get credit amount Info
  const getcreditamountInfo = async () => {
    const [err, res] = await Api.FarmerCreditAmountInfo(
      eligibleAmount,
      creditPeriod,
      interestRate
    );
    if (res) {
      set_total_payable_amount(res?.data?.TotalPayableAmount);
      set_interest_amount(res?.data?.InterestAmount);
      set_due_date(res?.data?.DueDate);
    }
  };

  const onClickEnter = async () => {
    await getFarmerByMobile();
  };

  useEffect(() => {
    const init = async () => {
      // await getFarmerByMobile();
      await getcreditamountInfo();
    };
    init();
  }, [farmerMobile, eligibleAmount, creditPeriod, interestRate]);

  const sanctionCredit = async () => {
    if (farmerDetails && eligibleAmount) {
      const [err, res] = await Api.createFarmerCredit(
        eligibleAmount,
        reason,
        creditPeriod,
        interestRate,
        total_payable_amount,
        due_date,
        interest_amount,
        farmerDetails._id
      );

      if (err) {
        toast.error(err?.data, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      if (res) {
        getFarmerCredits();
        toast.success(
          `${eligibleAmount} Credit sanctioned to ${farmerDetails?.name}`,
          {
            position: toast.POSITION.TOP_RIGHT,
          }
        );
        console.log(res, "Credit sanctioned response__________");
      }
    }
  };

  useEffect(() => {
    const getCreditDetails = async () => {
      if (credit_id) {
        const [err, res] = await Api.getCreditTxInfo(credit_id);
        if (res) {
          console.log("Credit details________", res.data.credit);
          set_credit_details(res.data.credit);
        }
      }
    };
    getCreditDetails();
  }, [credit_id]);

  const payCredit = async () => {
    const [err, res] = await Api.payCredit(
      credit_id,
      amn_payable,
      payment_method
    );
    if (err) {
      toast.error(err.data, {
        position: toast.POSITION.TOP_RIGHT,
      });
      if (res) {
        getFarmerCredits();
        toast.success(`Paid Success!`, {
          position: toast.POSITION.TOP_RIGHT,
        });

        console.log(res, "Credit pay response__________");
      }
    }
  };

  //get eligible amount
  // useEffect(() => {
  //   const getFarmerEligibleAmount = async () => {
  //     const [err,res] = await Api.farmerCreditLimit(farmerDetails?._id)

  //   };
  // }, [farmerDetails,farmerMobile]);

  return (
    <div>
      <Header title="Farmer Relationship Management" subtitle="Credit" />
      <section className="font-roboto">
        {/* Input Search box */}
        <div className="grid grid-cols-[70%_30%] items-center box-border w-full">
          <div className="grid grid-cols-[35%_45%_15%_5%] mt-7 flex-row items-center w-full">
            <label className="text-[#13490A] font-roboto font-extrabold text-sm flex justify-center">
              Farmer Mobile Number
            </label>
            <input
              type="text"
              className="bg-[#F3FFF1] h-8 lg:w-[86%] xl:w-[90%] lg:ml-2 xl:ml-[1%] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md p-2"
              onChange={onChangeMobile}
            />
            <button
              type="submit"
              onClick={onClickEnter}
              className="bg-[#05AB2A] text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 w-[6vw] rounded text-sm font-thin"
            >
              ENTER
            </button>
            <Weather />
          </div>
          {farmerDetails ? (
            <div className="mt-6 leading-4">
              <p className="text-[#000000] font-bold">
                Name:{" "}
                <span className="text-[#FB0404]">{farmerDetails?.name}</span>
              </p>
              <p className="text-[#000000] font-bold">
                Area :{" "}
                <span className="text-[#FB0404]">
                  {farmerDetails?.address?.state}
                </span>
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </section>
      {farmerDetails ? (
        <section className="font-roboto">
          {/* Tab Button */}

          <div className=" w-[78%] flex justify-center">
            <div className="flex gap-x-[10%] mt-2 w-[30%]">
              <button
                className={`text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] flex justify-center w-[6vw] py-1 px-3 rounded text-sm font-thin ${
                  openTab === "Status" ? "bg-[#05AB2A]" : "bg-[#526D4E]"
                }`}
                onClick={() => {
                  setOpenTab("Status");
                }}
              >
                Status
              </button>
              <button
                className={`text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] flex justify-center w-[6vw] py-1 px-4 rounded text-sm font-thin ${
                  openTab === "New" ? "bg-[#05AB2A]" : "bg-[#526D4E]"
                }`}
                onClick={() => {
                  setOpenTab("New");
                }}
              >
                New
              </button>
              <button
                className={`text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] flex justify-center w-[6vw] py-1 px-4 rounded text-sm font-thin ${
                  openTab === "Pay" ? "bg-[#05AB2A]" : "bg-[#526D4E]"
                }`}
                onClick={() => {
                  setOpenTab("Pay");
                }}
              >
                Pay
              </button>
            </div>
          </div>

          {/* Status */}
          <div className={openTab === "Status" ? "block" : "hidden"}>
            {/* <form className="grid grid-cols-[35%_45%_15%_5%] mt-7 flex-row items-center w-full">
              <label className="text-[#13490A] font-roboto font-extrabold text-sm flex justify-center">
                Credit Number
              </label>
              <input
                type="text"
                className="bg-[#F3FFF1] h-8 lg:w-[86%] xl:w-[90%] lg:ml-2 xl:ml-[1%] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md p-2"
                onChange={onChangeCreditNum}
              />
            </form> */}
            <section className="grid grid-cols-[25%_28%] text-center items-center my-4">
              {farmerCredits ? (
                <table className="table-auto bg-[#6E776D] border-collapse border ml-[21%] w-[74vw] lg:w-[70vw] text-sm font-semibold mt-10">
                  <thead>
                    <tr className="text-[#FFFFFF] h-7 font-medium">
                      <th className="border-r-4 border-[#6E776D]">
                        Credit Date
                      </th>
                      <th className="border-r-4 border-[#6E776D]">
                        Eligible Amount
                      </th>
                      <th>Credit Number</th>
                      <th>Credit Period</th>
                      <th>Interest Rate</th>
                      <th>Interest Amount</th>
                      <th>Total Payable Amount</th>
                      <th>Due Date</th>
                      <th>Payment Status</th>
                      <th>Remaining Payable Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {farmerCredits?.map((credit: any) => (
                      <tr className="bg-[#DEDEDE] h-10">
                        <td className="border-r-4 border-[#6E776D]">
                          {moment(credit?.createdAt).format("DD/MM/YYYY")}
                        </td>
                        <td className="border-r-4 border-[#6E776D]">
                          {credit?.eligibleAmount}
                        </td>
                        <td className="border-r-4 border-[#6E776D]">
                          {credit?.billNumber}
                        </td>
                        <td className="border-r-4 border-[#6E776D]">
                          {credit?.creditPeriod} months
                        </td>
                        <td className="border-r-4 border-[#6E776D]">
                          {credit?.interestRate} %
                        </td>
                        <td className="border-r-4 border-[#6E776D]">
                          {credit?.interestAmount}
                        </td>
                        <td className="border-r-4 border-[#6E776D]">
                          {credit?.totalPayableAmount}
                        </td>
                        <td className="border-r-4 border-[#6E776D]">
                          {credit?.dueDate}
                        </td>
                        <td className="border-r-4 border-[#6E776D]">
                          {credit?.paymentStatus}
                        </td>
                        {credit?.remainingPayableAmount !== "" &&
                        credit?.remainingPayableAmount !== undefined ? (
                          <td>{credit?.remainingPayableAmount}</td>
                        ) : (
                          <></>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <></>
              )}
            </section>
          </div>

          {/* Credit */}
          <div className={openTab === "New" ? "block" : "hidden"}>
            <div className="grid grid-cols-[25%_28%] text-center items-center my-4">
              <label className="text-[#13490A] font-extrabold text-sm mx-5">
                Eligible Amount
              </label>
              <input
                type="text"
                className="bg-[#F3FFF1]  h-8 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md p-2"
                defaultValue={farmerDetails?.creditLimit}
                onChange={onChangeAmount}
                disabled
              />
              {/*  */}
            </div>
            <div className="grid grid-cols-[70%_28%_15%] text-center items-center my-2">
              {Number(eligibleAmount) > Number(farmerDetails?.creditLimit) ? (
                <p className="text-center font-extrabold text-md text-[#ff0000]">
                  Maximum credit limit is {farmerDetails?.creditLimit}.
                </p>
              ) : null}
            </div>
            <div className="grid grid-cols-[25%_28%_15%] text-center items-center my-4">
              <label className="text-[#13490A] font-extrabold text-sm mx-5">
                Reason
              </label>
              <input
                type="text"
                className="bg-[#F3FFF1]  h-8 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md p-2"
                onChange={onChangeReason}
              />
            </div>
            <div className="grid grid-cols-[53%_47%] my-4">
              <div className="grid grid-cols-[47%_53%] text-center items-center">
                <label className="text-[#13490A] font-extrabold text-sm mx-5">
                  Credit Period
                </label>
                <input
                  placeholder="In Months"
                  type="text"
                  className="bg-[#F3FFF1]  h-8 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md p-2"
                  onChange={onChangePeriod}
                />
              </div>
              <div className="grid grid-cols-[45%_50%] items-center">
                <label className="text-[#13490A] flex-[1] text-cente font-extrabold text-sm mx-5">
                  Due Date
                </label>
                <input
                  type="text"
                  className="bg-[#F3FFF1]  h-8 w-35 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md p-2"
                  value={due_date}
                />
              </div>
            </div>
            <div className="grid grid-cols-[53%_47%] my-4">
              <div className="grid grid-cols-[47%_53%] text-center items-center">
                <label className="text-[#13490A] font-extrabold text-sm mx-5">
                  Interest Rate
                </label>
                <input
                  type="text"
                  className="bg-[#F3FFF1]  h-8 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md p-2"
                  onChange={onChangeRate}
                />
              </div>
              <div className="grid grid-cols-[45%_50%] items-center">
                <label className="text-[#13490A] flex-[1] text-cente font-extrabold text-sm mx-5">
                  Total Payable Amount
                </label>
                <input
                  type="text"
                  className="bg-[#F3FFF1]  h-8 w-35 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md p-2"
                  value={total_payable_amount}
                />
              </div>
            </div>
            <div className="grid grid-cols-[53%_47%] my-4">
              <div className="grid grid-cols-[47%_53%] text-center items-center">
                <label className="text-[#13490A] font-extrabold text-sm mx-5">
                  Total Payable Amount
                </label>
                <input
                  type="text"
                  className="bg-[#F3FFF1]  h-8 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md p-2"
                  value={total_payable_amount}
                />
              </div>
              <div className="grid grid-cols-[45%_50%] items-center">
                <label className="text-[#13490A] flex-[1] text-cente font-extrabold text-sm mx-5">
                  Interest Amount
                </label>
                <input
                  type="text"
                  className="bg-[#F3FFF1]  h-8 w-35 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md p-2"
                  value={interest_amount}
                />
              </div>
            </div>
            <div className="w-[78%] flex justify-center">
              <button
                type="submit"
                className="bg-[#05AB2A] text-[#F3FFF1] flex justify-center shadow-[0px_4px_3px_rgba(0,0,0,0.25)] w-16 py-1 px-4 rounded text-sm font-thin"
                onClick={sanctionCredit}
              >
                Sanction
              </button>
            </div>
          </div>

          {/* Credit Pay */}
          <div className={openTab === "Pay" ? "block" : "hidden"}>
            <div className="">
              <div className="grid grid-cols-[25%_28%] text-center items-center my-4">
                <label className="text-[#13490A]  font-roboto font-extrabold text-sm mx-5">
                  Credit Number
                </label>
                <input
                  type="text"
                  className="bg-[#F3FFF1]  h-8  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md"
                  onChange={onChangeCreditNum}
                />
              </div>
              {credit_details ? (
                <>
                  <div className="grid grid-cols-[25%_28%] text-center items-center my-4">
                    <label className="text-[#13490A]  font-roboto font-extrabold text-sm mx-5">
                      Detail
                    </label>
                    <div className="p-1 bg-[#F3FFF1]">
                      <h1 className="text-start font-bold">
                        Credit Date :{" "}
                        {moment(credit_details?.createdAt).format("MM/DD/YYYY")}
                      </h1>
                      <h1 className="text-start font-bold">
                        Due Date : {credit_details?.dueDate}
                      </h1>
                      <h1 className="text-start font-bold">
                        Amount : {credit_details?.totalPayableAmount}
                      </h1>
                      {credit_details?.remainingPayableAmount !== "" &&
                      credit_details?.remainingPayableAmount !== undefined ? (
                        <h1 className="text-start font-bold">
                          Remaining Payable Amount:{" "}
                          {credit_details?.remainingPayableAmount}
                        </h1>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-[25%_28%] text-center items-center my-4">
                    <label className="text-[#13490A]  font-roboto font-extrabold text-sm mx-5">
                      Amount Payable
                    </label>
                    <input
                      type="text"
                      className="bg-[#F3FFF1]  h-8  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md"
                      onChange={onChangeAmountPayable}
                    />
                  </div>
                  <div className="grid grid-cols-[25%_28%_15%] text-center items-center my-4">
                    <label className="text-[#13490A]  font-roboto font-extrabold text-sm mx-5">
                      Payment Method
                    </label>
                    <input
                      type="text"
                      value={payment_method}
                      className="bg-[#F3FFF1] h-8 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md"
                      onChange={onChangePaymentMethod}
                    />
                    {/* <img
                      src="Images/Dropdown.png"
                      className="ml-4 text-center rounded-full"
                    /> */}
                  </div>
                  <div className="w-[78%] flex justify-center">
                    <button
                      onClick={payCredit}
                      className="bg-[#05AB2A] text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] w-16 py-1 px-4 rounded text-sm font-thin"
                    >
                      Pay
                    </button>
                  </div>
                </>
              ) : (
                <></>
              )}
              {/*  */}
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Credit;
