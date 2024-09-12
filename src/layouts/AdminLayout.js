import React from 'react';
import Header from './include/header';
import Sidebar from './include/sidebar';
import Footer from './include/footer';
import './assets/plugins/fontawesome-free/css/all.min.css'
import './assets/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css'
import './assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css'
import './assets/plugins/jqvmap/jqvmap.min.css'
import './assets/dist/css/adminlte.min.css'
import './assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css'
import './assets/plugins/daterangepicker/daterangepicker.css'
import './assets/plugins/summernote/summernote-bs4.min.css'

function AdminLayout({children}) {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <main>{children}</main>
      <Footer />
      <aside className="control-sidebar control-sidebar-dark">
      </aside>
    </div>
  )
}

export default AdminLayout