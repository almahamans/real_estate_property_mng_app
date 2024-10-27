import React from 'react'
import { Outlet } from "react-router-dom";
import { Header } from '../components/layout/Header';

export const Home = () => {
    return (
      <section className="text-center p-9 m-9">
        <h1 className="font-bold uppercase text-red-800">Welcome</h1>
        <p>A website to help real estate to manage properties.</p>
      </section>
    );
}
