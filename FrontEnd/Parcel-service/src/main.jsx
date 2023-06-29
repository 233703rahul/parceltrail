import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './Login-component/Login.jsx'
import Register from './Login-component/Register.jsx'
import Home from './Home-component/Home.jsx'
import Landing from './LandingComponent/Landing.jsx'
import AddParcel from './AddParcel/AddParcel.jsx'
import SearchParcel from './Home-component/SearchParcel.jsx'
import TrackParcel from './Home-component/TrackParcel.jsx'
import Dashboard from './Home-component/Dashboard.jsx'
import { ChakraProvider } from '@chakra-ui/react'


function App() {
    return (
        <ChakraProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                
                <Route path="/home">
                    <Route index element={<Home/>} />
                    <Route path="/home/AddParcel" element={<AddParcel/>}/>
                    <Route path="/home/SearchParcel" element={<SearchParcel/>} />
                    <Route path="/home/TrackParcel" element={<TrackParcel/>} />
                    <Route path="/home/dashboard" element={<Dashboard/>} />
                </Route>
          
                
            </Routes>
        </BrowserRouter>
        </ChakraProvider>

    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
     <App />
    //  <App />
    //  <Register />
    // <Home/>
    //    <Login />
  
    // <Landing />


)
