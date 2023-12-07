import React from "react"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Head from "next/head"

const Layout = ({ children }) => {
  return (
    <div className=" font-serif bg-gradient-to-r from-black from-10% to-blue-grey
    min-h-screen text-sky-600/95 mb-2 ">
      <Head>
        <title>FILMO</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
