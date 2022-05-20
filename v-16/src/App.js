import "./App.css";
import ColumnChartComponent from "./Components/ColumnChartComponent";
import InteractiveCandleStick from "./Components/InteractiveCandleStick";
import MultipleSeriesOnTimeAxis from "./Components/MultipleSeriesOnTimeAxis";
import PieChart2d from "./Components/PieChart2d";
import PopulationGrowth from "./Components/PopulationGrowth";
import RatingMeter from "./Components/RatingMeter";
import SimpleBarChart from "./Components/SimpleBarChart";
import SimpleBubbleChart from "./Components/SimpleBubbleChart";
import SimpleChordDiagram from "./Components/SimpleChordDiagram";
import SimpleGanttChart from "./Components/SimpleGanttChart";
import SimpleLineChart from "./Components/SimpleLineChart";
import SimpleParetoChart from "./Components/SimpleParetoChart";
import SimpleRadar from "./Components/SimpleRadar";
import SimpleScatter from "./Components/SimpleScatter";
import SimpleTreeMap from "./Components/SimpleTreeMap";

function App() {
  return (
    <div className="App">
      <ColumnChartComponent />
      <SimpleBarChart />
      <SimpleLineChart />
      <SimpleBarChart />
      <PieChart2d />
      <SimpleBubbleChart />
      <SimpleScatter />
      <SimpleParetoChart />
      <RatingMeter />
      <SimpleGanttChart />
      <SimpleTreeMap />
      <SimpleRadar />
      <MultipleSeriesOnTimeAxis />
      <InteractiveCandleStick />
      <SimpleChordDiagram />
      <PopulationGrowth />
    </div>
  );
}

export default App;
