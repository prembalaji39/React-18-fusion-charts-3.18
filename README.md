# React Fusion Charts Demo v3.17

# Tech Stack

- ReactJS (16/17/18)
- Fusion Charts (v3.18.0)
- React Fusion Charts ([v4.1.0 draft](https://github.com/fusioncharts/react-fusioncharts-component/tree/Red-9163-react))

## Demo

- React 16 version: https://rfc-318-v16.netlify.app/
- React 17 version: https://rfc-318-v17.netlify.app/
- React 18 version: https://rfc-318-v18.netlify.app/

## Getting Started

### Starting from scratch

1. Create a react application:
   ```
   npx create-react-app my-app
   ```
2. Install the required fusion chart dependencies
   ```
   cd my-app
   npm install fusioncharts react-fusioncharts --save
   ```
3. Add a component to use React Fusion Chart components

   ```javascript
   import FusionCharts from "fusioncharts";
   import Charts from "fusioncharts/fusioncharts.charts";
   import ReactFC from "react-fusioncharts";
   import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

   ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

   const chartConfigs = {
     type: "column2d",
     width: 600,
     height: 400,
     dataFormat: "json",
     dataSource: {
       chart: {
         caption: "Countries With Most Oil Reserves [2017-18]",
         subCaption: "In MMbbl = One Million barrels",
         xAxisName: "Country",
         yAxisName: "Reserves (MMbbl)",
         numberSuffix: "K",
         theme: "fusion",
       },
       data: [
         {
           label: "Venezuela",
           value: "290",
         },
         {
           label: "Saudi",
           value: "260",
         },
         {
           label: "Canada",
           value: "180",
         },
         {
           label: "Iran",
           value: "140",
         },
         {
           label: "Russia",
           value: "115",
         },
         {
           label: "UAE",
           value: "100",
         },
         {
           label: "US",
           value: "30",
         },
         {
           label: "China",
           value: "30",
         },
       ],
     },
   };

   const Column2d = () => <ReactFC {...chartConfigs} />;

   export default Column2d;
   ```

4. Import the Chart into App.js

   ```javascript
   import React, { version } from "react";
   import Column2d from "./Column2d";

   const App = () => (
     <div>
       <h1>React Fusion Charts: {version}</h1>
       <Column2d />
     </div>
   );

   export default App;
   ```

### Using this repo

1. Clone this repo
2. Navigate to any of the subfolders (v-16 / v-17 / v-18)
   ```
   cd v-16
   ```
3. Install the dependencies
   ```
   npm install
   ```
4. Run the application
   ```
   npm start
   ```
