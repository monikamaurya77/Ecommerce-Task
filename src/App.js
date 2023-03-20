import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import CreateAccount from "./components/CreateAccount";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from './components/ProtectedRoute';
import Product from './components/Product';
import Nav from './components/Nav';
import User from './components/User';
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/nav" element={<Nav/>}/>
          <Route
            path="/home"
            element={
              //if we want our Home page only be acessable only when we are loged in the we use ProtectedRoute
              <ProtectedRoute> 
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path='/product' element={<Product/>} />
          <Route path='/user' element={<User/>} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/productdetails" element={ProductDetails}/>
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
