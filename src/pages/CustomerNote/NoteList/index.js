import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout'
import { Link } from 'react-router-dom';

function NoteList() {
  const[data, setData]=useState([]);
    useEffect(() => {
        getDatas();
    }, []);
  
    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/noteList/index`).then(function(response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/noteList/${id}`).then(function(response){
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
                <h1 className="m-0">Meetup List</h1>
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
                    <h3 class="card-title">Meetup Entry Form</h3>
                </div>
                <div class="card-body">
                    <div className="container mt-5">
                        <table className='table table-responsive text-nowrap text-center'>
                            <thead>
                                <tr>
                                    <th>#SL</th>
                                    <th>Customer Id</th>
                                    <th>Employe Id</th>
                                    <th>Note</th>
                                    <th>First Meet</th>
                                    <th>Next Meet</th>
                                    <th>Attachment</th>
                                    <th>Meetup Location</th>
                                    <th>Action</th>
                                  
                                </tr>
                            </thead>
                            <tbody>
                            {data && data.map((d, key) =>
                                <tr key={d.id} >
                                    {/* <td>{key+1}</td> */}
                                    <td>00{d.id}</td>
                                    <td>{d.customerId}</td>
                                    <td>{d.employeeId}</td>
                                    <td>{d.note}</td>
                                    <td>{d.firstMeet}</td>
                                    <td>{d.nextMeet}</td>
                                    <td>{d.attachment}</td>
                                    <td>{d.meetupLocation}</td>
                                    <td>
                                        <Link to={`/customer/edit/${d.id}`} className='btn btn-info'>Edit</Link>
                                        <button type='button' onClick={() => deleteData(d.id)} className='btn btn-danger' >Delete</button>
                                        <Link to='/mail/mailbox/compose' className="btn btn-primary btn-block mb-3">Mail</Link>
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

export default NoteList
