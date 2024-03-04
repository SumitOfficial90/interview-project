import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About, Blog, Contact, Home, BlogDetails, Products } from '../pages';

export default function index() { 
  return (
    <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog/:id" element={<BlogDetails/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/products" element={<Products/>} />
    </Routes>
  )
}