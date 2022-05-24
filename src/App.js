
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
import { ToastContainer, toast } from 'react-toastify';
import PurchaseProduct from './pages/PurchaseProducts';
import Parts from './pages/Home/Parts';
import MyOrders from './pages/Dashboard/MyOrders';
import AddAReview from './pages/Dashboard/AddAReview';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>


      <Route path="/" element={<Home />} />

      <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="reviews" element={<AddAReview></AddAReview>}></Route>
          
        </Route>

      <Route path="/parts" element={<Parts />} />
      <Route path="/parts/:partsId" element={<RequireAuth> <PurchaseProduct /></RequireAuth>} />
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
