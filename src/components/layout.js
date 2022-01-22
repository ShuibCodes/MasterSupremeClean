 /* eslint-disable */
import PropTypes from "prop-types";
import React from "react";
import Header from "./header";
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div className="">
      <Header />
    
      <main className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        {children}
      </main>

      <Footer/>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
