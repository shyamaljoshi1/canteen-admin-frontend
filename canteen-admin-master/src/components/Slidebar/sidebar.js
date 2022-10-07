import React, { useState } from "react";
import './sidebar.css';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import { FaBars,FaHistory,FaUserFriends,FaStore,FaHome } from "react-icons/fa";


const Sidebar =()=>{
    const [isOpen, setIsOpen] = useState(true);
    return(
        <ProSidebar style={{position:'fixed',backgroundColor:'#D9D9D9'}} toggled={true}  collapsed={isOpen}>
            <Menu className="sideBar" iconShape="circle" >
                <MenuItem onClick={() => setIsOpen(!isOpen)}> 
                    <FaBars size='2rem' color="#3C3D47"/>
                </MenuItem>
                <MenuItem className="sideBar__menu" onClick={() => setIsOpen(true)} icon={<FaHome  style={{backgroundColor:'#3C3D47'}} />}>
                    Home
                    <Link to="/home" />
                </MenuItem>
                <MenuItem onClick={() => setIsOpen(true)} className="sideBar__menu" icon={<FaHistory  style={{backgroundColor:'#3C3D47'}} />}>
                    View History
                    <Link to="/history" />
                </MenuItem>
                <MenuItem onClick={() => setIsOpen(true)} className="sideBar__menu" icon={<FaUserFriends  style={{backgroundColor:'#3C3D47'}} />}>
                    User Details
                <Link to="/staff" />
                </MenuItem>
                <SubMenu title="Stock Entry" className="sideBar__menu" icon={<FaStore  style={{backgroundColor:'#3C3D47'}} />}>
                    <MenuItem onClick={() => setIsOpen(true)} className="sideBar__submenu">
                        Product
                    <Link to="/product" />
                    </MenuItem>
                    <MenuItem onClick={() => setIsOpen(true)} className="sideBar__submenu">
                        Catagory
                    <Link to="/catagory" />
                    </MenuItem>
                </SubMenu>
            </Menu>
        </ProSidebar>
    )
}

export default Sidebar;