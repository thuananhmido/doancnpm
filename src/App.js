
import Home from './pages/Home';
import Product from './pages/Product';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Category from './pages/Category';
import Cart from './pages/Cart';
import CheckoutComponent from './pages/Cart/components/CheckoutComponent/checkoutcomponent';
import AdminDashBoard from './pages/AdminDashboard';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route>
              <Route  path="/"  index element={<Home />} />
              <Route  path="*"  index element={<Home />} />
            </Route>
            <Route  path="/product"  index element={<Product />} />
            <Route  path="/product:id"  index element={<Product />} />
            <Route  path="/category"  index element={<Category />} />
            <Route  path="/cart"  index element={<Cart />} />
            <Route  path="/checkout"  index element={<CheckoutComponent/>} />
            <Route  path="/admin"  index element={<AdminDashBoard/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
