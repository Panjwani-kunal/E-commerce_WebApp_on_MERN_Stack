import React, { useState } from "react";
import AddGarment from "../Pages/AddGarment";
import AllGarment from "../Pages/AllGarment";
import AllCustomer from "../Pages/AllCustomer";
import AllOrders from "../Pages/AllOrders";
import Dashboard from "../Pages/Dashboard";
import { Nav,Navbar, Offcanvas} from "react-bootstrap";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi"
//import logo from "../ydlogo.png"
import {MdOutlineDashboardCustomize, MdOutlineGroup} from "react-icons/md"
import { RiShirtLine } from "react-icons/ri";
import {ImBoxAdd} from "react-icons/im"
import {TbClipboardList} from "react-icons/tb"
const Main = () => {

        const [isShow, setisShow] = useState(false);

        function handleClose(){
            setisShow(false)
        };
        function handleOpen(){
            setisShow(true)
        };

    return <div>
        <BrowserRouter>
            <Navbar className="navbar" >
                <Navbar.Brand>
                    <GiHamburgerMenu onClick={() => handleOpen()} className="ic" />
                </Navbar.Brand> 

            </Navbar>

        <Offcanvas show={isShow} onHide={handleClose} className="offcanva" scroll={true} backdrop={false} >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Garments Admin</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className="navlinks flex-column" >
                    <NavLink onClick={() => handleClose()}>
                        <Link to="/" className='sidelink'><MdOutlineDashboardCustomize/> Dashboard</Link>
                    </NavLink>
                    <NavLink onClick={() => handleClose()}>
                        <Link to="/AddGarment" className='sidelink'><ImBoxAdd/> Add Garments</Link>
                    </NavLink>
                    <NavLink onClick={() => handleClose()}>
                        <Link to="/AllGarments" className='sidelink'><RiShirtLine/> All Garments</Link>
                    </NavLink>
                    <NavLink onClick={() => handleClose()}>
                        <Link to="/AllCustomer" className='sidelink'><MdOutlineGroup/> All Customers</Link>
                    </NavLink>
                    <NavLink onClick={() => handleClose()}>
                        <Link to="/AllOrders" className='sidelink'><TbClipboardList/> All Orders</Link>
                    </NavLink>
                </Nav>
            </Offcanvas.Body>
        </Offcanvas>
        
        <Routes>
            <Route path='/' element={<Dashboard />}></Route>
            <Route path='/AddGarment' element={<AddGarment />}></Route>
            <Route path='/AllGarments' element={<AllGarment />}></Route>
            <Route path='/AllCustomer' element={<AllCustomer />}></Route>
            <Route path='/AllOrders' element={<AllOrders />}></Route>
        </Routes>

        </BrowserRouter>
        </div>
    }

export default Main
