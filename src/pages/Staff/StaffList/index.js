import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout'
import { Link } from 'react-router-dom';

function StaffList() {
  const[data, setData]=useState([]);
  useEffect(() => {
      getDatas();
  }, []);

  function getDatas() {
      axios.get(`${process.env.REACT_APP_API_URL}/staff/index`).then(function(response) {
          setData(response.data.data);
      });
  }
  const deleteData = (id) => {
      axios.delete(`${process.env.REACT_APP_API_URL}/staff/${id}`).then(function(response){
          getDatas();
      });
  }
  return (
    <AdminLayout>
        <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Staff List</h1>
              </div>{/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Customer</a></li>
                  <li className="breadcrumb-item active">List</li>
                </ol>
              </div>{/* /.col */}
            </div>{/* /.row */}
          </div>{/* /.container-fluid */}
        </div>
        {/* /.content-header */}

        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div class="card card-default">
                <div class="card-header">
                    <h3 class="card-title">Customer Form</h3>
                </div>
                <div class="card-body">
                    <div className="container mt-5">
                        <table className='table table-responsive text-nowrap text-center '>
                            <thead>
                                <tr>
                                    <th>#SL</th>
                                    <th>Name</th>
                                    <th>DOB</th>
                                    <th>NID</th>
                                    <th>Phone</th>
                                    <th>Employe Id</th>
                                    <th>Joining Date</th>
                                    <th>Designation</th>
                                    <th>Email</th>
                                    <th>Photo</th>
                                    <th>Signature</th>
                                    <th>Status</th>
                                    <th>New Project/Type</th>
                                    <th>Running Project</th>
                                    <th>Action</th>
                                    <th>Project Reg No</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                              {data && data.map((d, key) =>
                                <tr key={d.id}>
                                    <td>00{key+1}</td>
                                    <td>{d.name}</td>
                                    <td>{d.dob}</td>
                                    <td>{d.nid}</td>
                                    <td>{d.phone}</td>
                                    <td>{d.employeId}</td>
                                    <td>{d.joiningDate}</td>
                                    <td>{d.designation}</td>
                                    <td>{d.email}</td>
                                    <td>{d.photo}</td>
                                    <td>{d.signature}</td>
                                    <td>Status</td>
                                    <td>Next</td>
                                    <td>Next</td>
                                    <td>Next</td>
                                    <td>Next</td>
                                    <td><span>{d.zipCode}</span><span>{d.state}</span><span>{d.upozila}</span><span>{d.districts}</span><span>{d.country}</span></td>
                                    <td >
                                        <Link to={`/staff/edit/${d.id}`} className='btn btn-info'>Edit</Link>
                                        <button type='button' onClick={() => deleteData(d.id)} className='btn btn-danger' >Delete</button>
                                        <Link to="/staff/staffList/MailStaff" className='btn btn-primary'>Mail</Link>
                                        <Link to="/staff/warningStaff/WarningNotice" className='btn btn-warning' href='#'>Sent Warning</Link>
                                    </td>
                                </tr>
                                 )}
                           </tbody>
                        </table>
                    </div>
                </div>
            </div>
          </div>
        </section>
        </div>
    </AdminLayout>       
  )
}

export default StaffList
