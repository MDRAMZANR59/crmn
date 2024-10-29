import React, { useEffect, useState } from 'react';
import axios from '../../../components/axios';
import AdminLayout from '../../../layouts/AdminLayout'
import { Link } from 'react-router-dom';


function UserList() {
  const[data, setData]=useState([]);
    useEffect(() => {
        getDatas();
    }, []);
  
    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/user/index`).then(function(response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/user/${id}`).then(function(response){
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
                                    {/* <th>User Type</th> */}
                                    <th>Name</th>
                                    <th>Employe Id</th>
                                    <th>Customer Id</th>
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
                                  <td>{d.name}</td>
                                  <td>02</td>
                                  <td>02</td>
                                  <td>{d.nid}</td>
                                  <td>{d.dob}</td>
                                  <td>{d.email}</td>
                                  <td>{d.phone}</td>
                                  <td>{d.joiningDate}</td>
                                  <td>{d.designation}</td>
                                  <td>{d.expart}</td>
                                  <td>{d.department}</td>
                                  <td>
                                      {
                                          d.signature?.split(',').map((src, i) => (
                                              <img src={`${process.env.REACT_APP_BACKEND_URL}/user/${src}`} alt="userSignature" style={{ width:"50px", height:'50px', padding:'0px' }}/>
                                          ))
                                      }
                                  </td>
                                  <td>
                                      {
                                          d.photo?.split(',').map((src, i) => (
                                              <img src={`${process.env.REACT_APP_BACKEND_URL}/user/${src}`} alt="UserPhoto" style={{ width:"50px", height:'50px', padding:'0px' }}/>
                                          ))
                                      }
                                  </td>
                                  <td><span>{d.state}</span><span>{d.post}</span><span>{d.zipCode}</span><span>{d.upozila}</span><span>{d.districts}</span><span>{d.country}</span></td>
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