import "./home.css";
import Header from "../../components/header/header"
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar.JSX";

import React from 'react'

export default function Home() {
  return (
    <div>
        <Header />
        <div className="home">
            <Posts />
            <Sidebar />
        </div>
    </div>
  )
}
