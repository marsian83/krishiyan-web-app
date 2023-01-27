import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "9",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "10",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "11",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "12",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "1",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "2",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "2",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "4",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "5",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "6",
    uv: 1890,
    pv: 4800,
  },
];

export default function Linegraph() {
  return (
    <div>
      <LineChart width={380} height={280} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line type="monotone" dataKey="pv" stroke="#13490A" activeDot={{ r: 8 }} />
      </LineChart >
    </div>
  );
}
