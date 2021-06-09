import {BrowserRouter,Route} from "react-router-dom"
import './App.css';
import Base from "../src/components/Base"
import Home from "../src/components/Home"
import Cart from "../src/components/Cart"
import CheckOut from "../src/components/Checkout"

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
