import React, { useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';

function ExpensesReport() {
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
                  <h1 className="m-0">Expense Report</h1>
                </div>{/* /.col */}
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Expense</a></li>
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
                      <h3 class="card-title">Expense Report</h3>
                      <div className="float-right">
                        <label className="me-2" htmlFor="sortBy" >Sort By</label>
                          <select style={{outline:"none",border:"none"}}>
                              required
                              id="incomeRout"
                              name="incomeRout"
                              value={formData.incomeRout}
                              onChange={handleChange}
                              className={`form-control ${errors.incomeRout ? 'is-invalid' : ''}`}>
                              <option value="4">Approved</option>
                              <option value="5">Pending</option>
                          </select>
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
                                      <th>Routs Of Expense</th>
                                      <th>Discription</th>
                                      <th>Prove</th>
                                      <th>Status</th>
                                      <th>Total Expense</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>01</td>
                                      <td>Entertainment</td>
                                      <td>Tea Cost From Mama Store</td>
                                      <td>
                                        <ul className="list-unstyled">
                                          <li><img className="w-25" src="../../../assets/dist/img/avatar.png"/><br/><em>Cash Memo</em></li>
                                          <li><img className="w-25" src="../../../assets/dist/img/avatar.png"/><br/><em>Photo With Customer</em></li>
                                        </ul>
                                      </td>
                                      <td>Approved</td>
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
  )
}

export default ExpensesReport