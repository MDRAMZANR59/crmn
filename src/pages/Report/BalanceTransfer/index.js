import React, { useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';

function CashTransfer() {
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
                  <h1 className="m-0">Income Report</h1>
                </div>{/* /.col */}
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Income</a></li>
                    <li className="breadcrumb-item active">Report</li>
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
                      <h3 class="card-title">Income Report</h3>
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
                                      <th>Transfer From</th>
                                      <th> </th>
                                      <th>Reciver</th>
                                      <th>Transtion Id</th>
                                      <th>Office Order</th>
                                      <th>Time And Date</th>
                                      <th>Ammount</th>
                                      <th>Total Transfared</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>01</td>
                                      <td>Bank</td>
                                      <td>To</td>
                                      <td>Bank</td>
                                      <td>A5DF94X</td>
                                      <td><img className="w-25" src="../../../assets/dist/img/avatar.png"/></td>
                                      <td><strong>7:53:20 AM</strong>05/10/2024</td>
                                      <td>$10000</td>
                                      <td>$20000000</td>
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

export default CashTransfer;