import { Routes ,Route} from "react-router-dom";
import Home from "./components/routes/Home.component";
import Navigation from "./components/routes/navigation/navigation.component";
import Authentication from "./components/routes/Authentication/Authentication.component";
import Shop from "./components/routes/shop/Shop.component";
import Checkout from "./components/routes/checkout/checkout.component";


const App = () => {
return (
  <Routes>
    <Route path="/" element={<Navigation/>}>
      <Route index element={<Home/>} />  
      <Route path="shop/*" element={<Shop/>} />  
      <Route path="auth" element={<Authentication/>} /> 
      <Route path="checkout" element={<Checkout/>} /> 
    </Route>
      

  </Routes>

)
};

export default App;