import React from "react"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Head from "next/head"

export const metadata = {
  title: "CineWorld",
  description: "A World of Cinema",
}

const Layout = ({ children }) => {
  return (
    <div>
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
