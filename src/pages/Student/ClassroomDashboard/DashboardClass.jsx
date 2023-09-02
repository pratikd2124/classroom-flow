import React from 'react'
import Navigation from './Navigation'
import ReactApexChart from 'react-apexcharts';


const DashboardClass = () => {

    const PieChart = () => {
        const pieOptions = {
          labels: ['Apples', 'Bananas', 'Cherries', 'Dates'],
        };
      
        const pieSeries = [44, 55, 13, 33];
      
        return (
          <ReactApexChart
            options={pieOptions}
            series={pieSeries}
            type="pie"
            width="380"
          />
        );
      };
      
      const BarChart = () => {
        const barOptions = {
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          },
        };
      
        const barSeries = [
          {
            name: 'Series 1',
            data: [30, 40, 25, 50, 49, 60, 70, 91, 125],
          },
        ];
      
        return (
          <ReactApexChart
            options={barOptions}
            series={barSeries}
            type="bar"
            height="350"
          />
        );
      };
      
      const AreaChart = () => {
        const areaOptions = {
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          },
          yaxis: {
            min: 0,
            max: 100,
          },
        };
      
        const areaSeries = [
          {
            name: 'Series A',
            data: [30, 40, 25, 50, 49, 60, 70, 91],
          },
          {
            name: 'Series B',
            data: [22, 30, 20, 40, 39, 50, 60, 82],
          },
        ];
      
        return (
          <ReactApexChart
            options={areaOptions}
            series={areaSeries}
            type="area"
            height="350"
          />
        );
      };
      
  return (
      <div>DashboardClass
          <PieChart />
      <BarChart />
      <AreaChart />
    </div>
  )
}

export default DashboardClass




