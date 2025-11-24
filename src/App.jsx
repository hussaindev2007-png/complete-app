

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./component/Header";
import Home from "./pages/Home";
import NotFound from "./pages/not";
import Collection from "./pages/Colection";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductD";  // 👈 Correct name
import Footer from "./component/Footer";

import AddCard from "./component/Add";
import CheackOut from "./component/CheackOut";

const App = () => {
  return (
    <div>
 <Header />

<Routes>
<Route index element={<Home />} />
<Route path="/products" element={<Collection />} />
<Route path="/Add" element={<AddCard/>} />
<Route path="/CheackOut" element={<CheackOut/>} />
<Route path="/products/:id" element={<ProductDetails />} />
        


        
        <Route path="*" element={<NotFound />} />
      </Routes>
<ToastContainer />
 <Footer /> 
    </div>
  );
};

export default App;
