import React from 'react';
import Header from './include/header';
import Sidebar from './include/sidebar';
import Footer from './include/footer';

function AdminLayout({children}) {
  return (
    <body className="hold-transition sidebar-mini layout-fixed">
      <div className="wrapper">
        {/* Preloader */}
        <div className="preloader flex-column justify-content-center align-items-center">
          <img className="animation__shake" src="assets/dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60"/>
        </div>
        <Header />
        <Sidebar />
        <main>{children}</main>
        <Footer />
        <aside className="control-sidebar control-sidebar-dark">
        {/* Control sidebar content goes here */}
        </aside>
      </div>
    </body>
  )
}

export default AdminLayout