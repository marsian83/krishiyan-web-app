import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
    {
        name: "0 or less",
        Payable: 2000,
        Recievable: 0,
    },
    {
        name: "1 ~ 30",
        Payable: 4000,
        Recievable: 8300,
    },
    {
        name: "31 ~ 60",
        Payable: 0,
        Recievable: 400,
    },
    {
        name: "61 ~ 90",
        Payable: 2000,
        Recievable: 500,
    },
    {
        name: "Over 90",
        Payable: 0,
        Recievable: 0,
    },
];

export default function Bargraph() {
    return (
        <div className="shadow-[4px_4px_4px_4px_rgba(0,0,0,0.25)]">
            <div className="flex ">
                <p className="font-black my-3 mx-[4%]">Accounts Payable and Receivable</p>
            </div>
            <BarChart width={400} height={330} data={data}>
                {/* <CartesianGrid strokeDasharray="none" /> */}
                <XAxis dataKey="name" />
                <YAxis />
                <Legend verticalAlign="top" />
                <Bar dataKey="Payable" fill="#8884d8" />
                <Bar dataKey="Recievable" fill="#6495ED" />
            </BarChart>
        </div>
    );
}
