
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './pages/Blogs/Blogs';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RequireAuth from './pages/Login/RequireAuth';
import SignUp from './pages/Login/SignUp';
import Portfolio from './pages/Portfolio';
import Footer from './pages/Shared/Footer';
import Header from './pages/Shared/Header';
import NotFound from './pages/Shared/NotFound';
import { ToastContainer } from 'react-toastify';
import PurchaseProduct from './pages/PurchaseProducts';
import Parts from './pages/Home/Parts';
import MyOrders from './pages/Dashboard/MyOrders';
import AddAReview from './pages/Dashboard/AddAReview';
import MyProfile from './pages/Dashboard/MyProfile';
import AddProduct from './pages/Dashboard/AddProduct';
import ManageOrder from './pages/Dashboard/ManageOrder';
import ManageProduct from './pages/Dashboard/ManageProduct';
import AllUsers from './pages/Dashboard/AllUsers';
import Payment from './pages/Dashboard/Payment';
import RequireAdmin from './pages/Login/RequireAdmin';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>


      <Route path="/" element={<Home />} />

      <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='orders' element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<AddAReview></AddAReview>}></Route>
          <Route path="addProduct" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="allUsers" element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
          <Route path="manageOrders" element={<RequireAdmin><ManageOrder></ManageOrder></RequireAdmin>}></Route>
          <Route path="manageProducts" element={<RequireAdmin><ManageProduct></ManageProduct></RequireAdmin>}></Route>
          
        </Route>

      <Route path="/parts" element={<Parts />} />
      <Route path="/parts/:id" element={<RequireAuth> <PurchaseProduct /></RequireAuth>} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
