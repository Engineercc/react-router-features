// @ts-nocheck
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { url } from './../utils';


const HomeLayout = () => {
  return (
    <>
      <nav>
        <NavLink to={url('home')} className={({ isActive }) => isActive && "myActive"}>
          Anasayfa
        </NavLink>
        <NavLink
          to={url('home.contact')}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "red" : "transparent",
          })}
        >
          İletişim
        </NavLink>
        <NavLink
          to={url('home.profile')}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "red" : "transparent",
          })}
        >
          Profile   
        </NavLink>
        <NavLink to={url('home.blog')}>
          {({ isActive }) => <>Blog{isActive && "(Aktif)"}</>}
        </NavLink>
      </nav>
      <Outlet/>
    </>
  );
};

export default HomeLayout;
