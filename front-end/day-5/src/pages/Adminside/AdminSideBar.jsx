// import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/Admin/adminpage.css'

import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

function AdminSideBar(openSidebarToggle, OpenSidebar) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
    <div className='sidebar-title'>
        <div className='sidebar-brand'>
            <BsCart3  className='icon_header'/> ADMIN
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
    </div>

    <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
            <a href="">
                <BsGrid1X2Fill className='icon'/> Dashboard
            </a>
        </li>
        <li className='sidebar-list-item'>
            <Link to="/admin/appstatus">
                <BsFillArchiveFill className='icon'/> Application
            </Link>
        </li>
        <li className='sidebar-list-item'>
            <Link to="/admin/createjob">
                <BsFillGrid3X3GapFill className='icon'/> Create job
            </Link>
        </li>
        <li className='sidebar-list-item'>
            <Link to="/admin/payment">
                <BsPeopleFill className='icon'/> Payment
            </Link>
        </li>
        {/* <li className='sidebar-list-item'>
            <a href="">
                <BsListCheck className='icon'/> Inventory
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="">
                <BsMenuButtonWideFill className='icon'/> Reports
            </a>
        </li> */}
        <li className='sidebar-list-item'>
            <Link to="/login">
                <BsFillGearFill className='icon'/> LogOut
            </Link>
        </li>
    </ul>
</aside>
  )
}

export default AdminSideBar
