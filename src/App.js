import AboutPage from './Allpages/aboutpage';
import ContactPage from './Allpages/contactpage';
import LocationPage from './Allpages/locationspage';
import HomePage  from "./Allpages/homepage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from './Allpages/loginpage';
import { createContext, useState } from 'react';

export const Datashare=createContext()

function App() {
  
const[Login,setLogin]=useState(false)
const[data,setData]=useState([]);
  return (
   <>
   <Datashare.Provider value={{setLogin,data,setData}}>
   <BrowserRouter>
          <Routes>
              {
                Login
                ?(
                  <>
                <Route path="/home" element={<HomePage/>}></Route>
                <Route path="/location" element={<LocationPage/>}></Route>
                <Route path="/contact" element={<ContactPage/>}></Route>
                <Route path="/about" element={<AboutPage/>}></Route>            
                </>
                 ):(
                  <Route path='/' element={<LoginPage />}></Route>
              )}
            </Routes>
        </BrowserRouter>
        </Datashare.Provider>
   </>
  );
}

export default App;
