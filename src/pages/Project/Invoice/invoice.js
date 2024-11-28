import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useParams } from 'react-router-dom';

function Invoice() {
  // const { projectId } = useParams();
  // const [projectfiles, setProjectfiles] = useState(null);

  // useEffect(() => {
  //   async function fetchProjectfiles() {
  //     try {
  //       const response = await axios.get(`${process.env.REACT_APP_API_URL}/projectfiles/${projectId}`);
  //       console.log("Full response:", response.data);  // Inspect the response
  //       setProjectfiles(response.data.data[0]);  // If data is an array, take the first element
  //     } catch (error) {
  //       console.error("Error fetching Projectfile data:", error);
  //     }
  //   }
  //   fetchProjectfiles();
  // }, [projectId]);

  // if (!projectfiles) {
  //   return <p>Loading invoice...</p>;
  // }

  return (
    <AdminLayout>
      <div className="content-wrapper">
        <div className="invoice p-3 mb-3">
          <div className="row">
            <div className="col-12">
              <h4>
                <img height="40px" className='rounded-circle' src="../../../assets/dist/img/logo.jpg" alt='logo' />
                Code Crafter
              </h4>
            </div>
          </div>

          <div className="row invoice-info">
            <div className="col-sm-4 invoice-col">
              From
              <address>
                <strong>Code Crafter</strong><br/>
                Prem Bagan<br/>
                Sector#4, Uttara, Dokkhin Khan, Dhaka-1230<br/>
                Phone: (+880) 1559 075 906<br/>
                Email: info@codecrufter.com
              </address>
            </div>
            <div className="col-sm-4 invoice-col">
              To
              <address>
                <strong>Micle Wiliems</strong><br/>
                Awotta,<br/>
                Awotta, Canada<br/>
                Phone: (555) 539-1037<br/>
                Email: miclewiliems@gmail.com
              </address>
            </div>
            <div className="col-sm-4 invoice-col">
              {/* <b>Invoice {projectfiles?.id}</b><br/> */}
              <b>Customer ID:</b> 4F3S8J<br/>
              <b>Order ID:</b> DFD17DEX<br/>
              <b>Invoice Date:</b> {new Date().toLocaleDateString()}<br/>
            </div>
          </div>

          <div className="row">
            <div className="col-12 table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Sl</th>
                    <th>Project Type</th>
                    <th>Project Name</th>
                    <th>Project Id</th>
                    <th>Total Pay</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#1</td>
                    <td>Web Application</td>
                    <td>Code Crufter</td>
                    <td>326</td>
                    <td>$3000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <p className="lead">Payment Methods:</p>
              <img src="../../../assets/dist/img/credit/visa.png" alt="Visa"/>
              <img src="../../../assets/dist/img/credit/mastercard.png" alt="Mastercard"/>
              <img src="../../../assets/dist/img/credit/american-express.png" alt="American Express"/>
              <img src="../../../assets/dist/img/credit/paypal2.png" alt="Paypal"/>
            </div>
          </div>

          <div className="row no-print">g
            <div className="col-12">
              <a href="javascript:void(0)" click={window.print()} target="_blank" className="btn btn-default"><i className="fas fa-print"></i> Print</a>
              <button type="button" className="btn btn-success float-right"><i className="far fa-credit-card"></i> Submit Payment</button>
              <button type="button" className="btn btn-primary float-right" style={{marginRight: "5px;"}}><i className="fas fa-download"></i> Generate PDF</button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Invoice;
