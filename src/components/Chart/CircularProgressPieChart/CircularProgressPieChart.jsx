import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { styled } from "styled-components";
const MyCustomText = styled.div``;
const CircularProcessPieChart = ({
  circleSize,
  data,
  color,
  percent,
  txtColor,
}) => {
  return (
    <ResponsiveContainer width={circleSize} height={circleSize}>
      <PieChart width={circleSize} height={circleSize}>
        <text
          style={{
            fontFamily: "Roboto",
            fontSize: "26px",
            fontWeight: "700",
            color: `${txtColor}`,
          }}
          x={circleSize / 2 - 9}
          y={circleSize / 2}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {percent}
        </text>
        <text
          style={{
            fontFamily: "Roboto",
            fontSize: "18px",
            fontWeight: "700",
            color: `#000000`,
          }}
          x={circleSize / 2 + 15}
          y={circleSize / 2}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          %
        </text>

        <Pie
          data={data}
          dataKey="value"
          innerRadius="80%"
          outerRadius="100%"
          fill={color}
          startAngle={90}
          endAngle={-270}
          paddingAngle={0}
          blendStroke
        >
          <Cell key="test" fill="#E2E2E2" />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CircularProcessPieChart;
