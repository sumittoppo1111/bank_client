
import './App.css';
import UpdateTransaction from "./components/customerTransactin/TransactionForm";
import CashBook from './components/customerRecord/CashBook';
import BankBook from './components/customerRecord/BankBook';
import NavBar from './components/NavBar/NavBar';
import Member from "./components/customerRecord/member";
import Promotor from "./components/customerRecord/promotors";
import Account from "./components/customerRecord/Account";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Test from "./components/customerTransactin/test";



function App() {
 
  

  return (
    
    <BrowserRouter>

    <NavBar/>
    <Routes>
    <Route path="/" element={<Member/>}/>
    <Route path="/account" element={<Account/>}/>
    <Route path="/promotors" element={<Promotor/>}/>
    <Route path="/transaction" element ={<UpdateTransaction/>}/>
    
    <Route path="/cashbook" element={<CashBook/> }/>
    <Route path="/bankbook" element={<BankBook/>}/>
    <Route path="/bankbook/:companyaccount" element={<Test/>}/>
    
    
    
    </Routes>
   
    </BrowserRouter>
    
    
    
    
  );
}

export default App;
