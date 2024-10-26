import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Dashboard() {
  return (
    <AdminLayout>
      <div className="container">
        <div className='Container-fluid'>
          {/*Header*/}
          <div className='col-md-9'>
            <div me-2>
              <img src=".." />
            </div>
            <div className='card'>
              <div className='card-title bg-dard'>
                Appoinment History
              </div>
              <div className='card-body bg-info'>
                <table>
                  <thead>
                    <tr>
                      <th>Doctor</th>
                      <th>Patient</th>
                      <th>Reserved</th>
                      <th>Schedule</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Md Ramzan</td>
                      <td>Md Mukut</td>
                      <td>
                        <p className='border border-pill'>Serial:20</p>
                        <p className='border border-pill'><i class="fas fa-file-alt"></i></p>
                      </td>
                      <td>
                        
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>

      </div>
    </AdminLayout>       
  )
}

export default Dashboard




{/* <div className="content-wrapper">
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
</div> */}