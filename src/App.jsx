import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Client/Home";
import Collection from "./pages/Client/Collection";
import About from "./pages/Client/About";
import Contact from "./pages/Client/Contact";
import PrivacyPolicy from "./pages/Client/PrivacyPolicy";
import ReturnExchange from "./pages/Client/ReturnExchange";
import ShippingDelivery from "./pages/Client/ShippingDelivery";
import Discount from "./pages/Client/Discount";
import ProductDetail from "./pages/Client/ProductDetail";
import TermsCondition from "./pages/Client/TermCondition";
import CMSLayout from "./components/Admin/CMSLayout";
import Category from "./pages/Admin/Category";
import ProductsCMS from "./pages/Admin/ProductCMS";
import ProductCMSDetail from "./pages/Admin/ProductCMSDetail";
import CollectionProduct from "./pages/Admin/CollectionProduct";
import UserCMS from "./pages/Admin/UserCMS";
import ClientLayout from "./components/Client/ClientLayout";
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route element={<ClientLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/discount" element={<Discount />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/termscondition" element={<TermsCondition />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/returnexchange" element={<ReturnExchange />} />
          <Route path="/shippingdelivery" element={<ShippingDelivery />} />
          <Route path="/cart" element={<cart />} />
          <Route path="/wishlist" element={<wishlist />} />
          <Route path="/forgotpassword" element={<forgotpassword />} />
          <Route path="/resetpassword" element={<resetpassword />} />
          <Route path="/profile" element={<profile />} />
        </Route>

        <Route path="/login" element={<login />} />
        <Route path="/register" element={<register />} />

        <Route path="/admin" element={<CMSLayout />}>
          <Route path="category" element={<Category />} />
          <Route path="all-product" element={<ProductsCMS />} />
          <Route path="product/:id" element={<ProductCMSDetail />} />
          <Route path="collection-product" element={<CollectionProduct />} />
          <Route path="all-user" element={<UserCMS />} />
          <Route path="" element={<ProductsCMS />} />
          <Route path="" element={<ProductCMSDetail />} />
          <Route path="" element={<CollectionProduct />} />
          <Route path="" element={<UserCMS />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
