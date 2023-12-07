import React from "react"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Head from "next/head"

const Layout = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-sky-950 to-indigo-950">
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