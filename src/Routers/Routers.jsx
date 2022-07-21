import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Blog from "../Pages/Blog";
import Dashbord from "../Pages/Dashbord";
import AddBlog from "../Pages/AddBlog";
import BlogAll from "../Pages/BlogAll";
import ContactAll from "../Pages/ContactAll";



export default function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" exact={true} element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/dashbord" element={<Dashbord />}>
          <Route path="addblog" element={<AddBlog />} />
          <Route path="blogall" element={<BlogAll />} />
          <Route path="contactall" element={<ContactAll />} />
        </Route>
      </Routes>
    </>
  )
}
