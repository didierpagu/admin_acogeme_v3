import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
   Bar ,
   Cell,  
   YAxis,
   Legend
} from "recharts";



export default function Chart({ title, data, dataKey, grid,title2,data2,dataKey2 }) {

  return (
    <div className="chart">
      

      <div className="chartItem">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="95%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>  
      </div>
      <div className="chartItem">
      <h3 className="chartTitle">{title2}</h3>
      <ResponsiveContainer width="95%" aspect={4 / 1}>
        <BarChart width={150} height={40} data={data2}>
        <XAxis dataKey="name" stroke="#5550bd" />
        <Tooltip />
          <Bar dataKey={dataKey2} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>



      </div>
 
  
    </div>
  );
}
