import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import ApexCharts from './pai'

// import Chart from 'primevue/chart';


function Dashboard() {
  return (
    <AdminLayout>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Dashboard</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className='Container'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='col-md-6'>
                  <ApexCharts/>
                </div>
                <div className='col-md-6'>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AdminLayout>       
  )
}

export default Dashboard




