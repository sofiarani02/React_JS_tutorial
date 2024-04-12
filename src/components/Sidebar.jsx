import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <article className="sidebar">
      <ul className='s1'>
        <br />
        <h2>&gt; Learnings</h2>
        <li className='s21'><Link to="/day1" style={{ color: '#D3D3D3' }}>Day 1 - HTML, CSS and JS</Link></li>
        <li className='s21'><Link to="/day2" style={{ color: '#D3D3D3' }}>Day 2 - Local Storage</Link></li>
        <li className='s21'><Link to="/day3" style={{ color: '#D3D3D3' }}>Day 3 - React Introduction</Link></li>
        <li className='s21'><Link to="/day4" style={{ color: '#D3D3D3' }}>Day 4 - React-Lifecycle methods, Hooks, Webpack, Babel</Link></li>
        <li className='s21'><Link to="/day5" style={{ color: '#D3D3D3' }}>Day 5 - Comparisons in react and Java EMS</Link></li>
        <li className='s21'><Link to="/day6&7" style={{ color: '#D3D3D3' }}>Day 6 & 7 - Implement routing concept using vite </Link></li>

        <h2>&gt; Practice</h2>
        <li className='s21'><Link to="/practice1" style={{ color: '#D3D3D3' }}>Practice 1 - User CRUD Application using MUI</Link></li>
        <li className='s21'><Link to="/jobportal" style={{ color: '#D3D3D3' }}>Practice 2 - Job portal using MUI</Link></li>
        <li className='s21'><Link to="https://nm-group8.vercel.app/" style={{ color: '#D3D3D3' }}>Practice 3 - To do list</Link></li>
        <li className='s21'><Link to="https://insta-contacts.vercel.app/" style={{ color: '#D3D3D3' }}>Practice 4 - Insta-contact listing</Link></li>

        {/* Add additional links as needed */}

        <li>&nbsp;</li>
        <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
        {/* Add additional empty list items to create space at the bottom */}
      </ul>
    </article>
  );
}

export default Sidebar;
