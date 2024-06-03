import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const BarChart = ({ data }) => {
  return (
    <div style={{ height: '300px', width: '1000px' }}>
      <ResponsiveBar
        data={data}
      />
    </div>
  );
};

export default BarChart;