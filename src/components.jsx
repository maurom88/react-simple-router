import React from "react";

import { Link, Routes, Route } from 'react-router-dom';

export function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>
        This is the home page
      </p>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h2>About</h2>
      <p>
        This is the about page
      </p>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <p>
        This is the contact page
      </p>
    </div>
  );
}

export function Navigation() {
  return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
  )
}

export function MyRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  )
}