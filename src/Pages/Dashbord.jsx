import React from 'react'
import {Link, Outlet} from "react-router-dom"

export default function Dashbord() {
  return (
    <>
      <div className="sideBar">
        <Link to="/dashbord/addblog">Add Blog</Link>
        <Link to="/dashbord/blogall">All Blog</Link>
        <Link to="/dashbord/contactall">All Contact</Link>
      </div>
      <div className="mainContent">
        <Outlet />
      </div>
    </>
  )
}
