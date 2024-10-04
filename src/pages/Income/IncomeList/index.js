import React, { useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';

function IncomeList() {
    const [formData, setFormData] = useState([]);
    const [errors, setErrors] = useState([]);

    const handleChange = (e) => {
        return true;
    };

    const handleSubmit = (e) => {
        return true;
    };

    return (
        <AdminLayout>
            <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Income List</h1>
              </div>{/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Income</a></li>
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
                    <h3 class="card-title">Income List</h3>
                    <div className="float-right">
                      <label className="me-2" htmlFor="startDate" >From</label>
                      <input id="startDate" className="me-2" type="date" />
                      <label className="me-2" htmlFor="endDate" >To</label>
                      <input id="endDate" type="date" />
                    </div>
                </div>
                <div class="card-body">
                    <div className="container mt-5">
                        <table className='table table-responsive text-nowrap text-center '>
                            <thead>
                                <tr>
                                    <th>#SL</th>
                                    <th>Routs Of Income</th>
                                    <th>Customer Id</th>
                                    <th>Project Id</th>
                                    <th>Project Name</th>
                                    <th>Customer Name</th>
                                    <th>Phone</th>
                                    <th>Start Date</th>
                                    <th>Estimated End Date</th>
                                    <th>Status</th>
                                    <th>First Pay</th>
                                    <th>Second Pay</th>
                                    <th>Last Pay</th>
                                    <th>Pay Status</th>
                                    <th>Pay Date And Time</th>
                                    <th>Total Income</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>01</td>
                                    <td>Pc App Devolopment</td>
                                    <td>AX58DC1</td>
                                    <td>DFF589D</td>
                                    <td>Code Crufter</td>
                                    <td>Md Mukut</td>
                                    <td>+880 1559-075906</td>
                                    <td>16/01/2024</td>
                                    <td>16/01/2025</td>
                                    <td>Running</td>
                                    <td>Null</td>
                                    <td>$2000</td>
                                    <td>Null</td>
                                    <td>100%</td>
                                    <td>01/10/2024 <strong>11:35:50 AM</strong></td>
                                    <td>$30000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
          </div>
        </section>
        </div>
        </AdminLayout>
    );
}

export default IncomeList;