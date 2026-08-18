import Accordian from './components/accordian/index';
import RandomColorSelector from './components/colorselector/index';
import StarRating from './components/starRating/index';
import ImageSlider from './components/imageslider/index';
import LoadMoreData from './components/load-more-data/index';
import TreeView from './components/tree-view/index'
import QRCodeGenerator from './components/qr-code-generator';
import LightDarkMode from './components/light-dark-mode';
import ScrollIndicator from './components/scroll-indicator';

import menus from "./components/tree-view/data"
import './App.css';

function App() {
  return (
    <div className="App">
        {/* <Accordian/> */}
        {/* <RandomColorSelector/> */}
        {/* <StarRating/> */}
        {/* <LoadMoreData/> */}
        {/* <TreeView menus={menus}/> */}
        {/* <QRCodeGenerator/> */}
        {/* <LightDarkMode/> */}
        <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/>
    </div>
  );
}

export default App;
