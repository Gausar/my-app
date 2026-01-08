import { Box } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

export const MyPieChart = (props) => {
  return (
    <Box className="item">
      <PieChart
        series={[
          {
            innerRadius: 60,
            outerRadius: 80,
            data: props.data,
            cornerRadius: 80,
            paddingAngle: 3,
          },
        ]}
        {...props.settings}
      />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        sx={{
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        <div style={{ fontSize: 16, fontWeight: 600 }}>{props.title}</div>
        <div style={{ fontSize: 14, fontWeight: 600 }}>{props.value}%</div>
        <div style={{ fontSize: 12, color: "#666" }}>{props.label}</div>
      </Box>
    </Box>
  );
};
