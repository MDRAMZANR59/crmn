import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout'


function UserList() {
  const[data, setData]=useState([]);
  const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` }
  };
  useEffect(() => {
      getDatas();
  }, []);

  function getDatas() {
      axios.get(`${process.env.REACT_APP_API_URL}/user/index`,config).then(function(response) {
          setData(response.data.data);
      });
  }
  const deleteData = (id) => {
      axios.delete(`${process.env.REACT_APP_API_URL}/user/${id}`,config).then(function(response){
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
                <h1 className="m-0">Add New User</h1>
              </div>{/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">User</a></li>
                  <li className="breadcrumb-item active">Add</li>
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
                    <h3 class="card-title">User form</h3>
                </div>
                <div class="card-body">
                    <div className="container mt-1">
                        <table className='table table-responsive table-sm text-nowrap text-center'>
                            <thead>
                                <tr>
                                    <th>#SL</th>
                                    <th>User Type</th>
                                    <th>Name</th>
                                    <th>Employe Id</th>
                                    <th>NID</th>
                                    <th>DOB</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Joining Date</th>
                                    <th>Dasignation</th>
                                    <th>Expart</th>
                                    <th>Department</th>
                                    <th>Signature</th>
                                    <th>Photo</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                              {data && data.map((d, key) =>
                                <tr key={d.id}>
                                  <td className="text-bold-500">{key+1}</td>
                                  <td>{d.role_id}</td>
                                  <td>{d.name}</td>
                                  <td>{d.usermeta.employeId}</td>
                                  <td>{d.usermeta.nid}</td>
                                  <td>{d.usermeta.dob}</td>
                                  <td>{d.usermeta.email}</td>
                                  <td>{d.usermeta.phone}</td>
                                  <td>{d.usermeta.joiningDate}</td>
                                  <td>{d.usermeta.designation}</td>
                                  <td>{d.usermeta.expart}</td>
                                  <td>{d.usermeta.department}</td>
                                  <td>{d.usermeta.signature}</td>
                                  <td>{d.usermeta.photo}</td>
                                  <td><span>{d.usermeta.state}</span><span>{d.usermeta.post}</span><span>{d.usermeta.zipCode}</span><span>{d.usermeta.upozila}</span><span>{d.usermeta.districts}</span><span>{d.usermeta.country}</span></td>
                                  <td>
                                      <Link to={`/user/edit/${d.id}`} className='btn btn-info' >Edit</Link>
                                      <button type='button' onClick={() => deleteData(d.id)} className='btn btn-danger'>Delete</button>
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

export default UserList;