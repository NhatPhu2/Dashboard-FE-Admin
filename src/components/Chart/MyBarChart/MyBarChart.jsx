
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from 'antd';


const MyBarChart = () =>{
  const data = [
    {
      name: 'Jan',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Mar',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Apr',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Jun',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Jul',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Aug',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Sep',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Jul',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Nov',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Dec',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
    return (
      <ResponsiveContainer width="100%" height={384} >
         <BarChart
          barGap={0}
          width={860}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis tickLine={false} axisLine={false} dataKey="name" />
          <Bar radius={[50,50,0,0]} dataKey="uv" fill="#AEAEAE" />
          <Bar radius={[50,50,0,0]} dataKey="pv" fill="#FF6F61" />
        </BarChart>
      </ResponsiveContainer>
    );
  }

  export default MyBarChart
