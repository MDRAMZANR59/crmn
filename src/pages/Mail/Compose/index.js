import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";
function Compose() {
  const [errors, setErrors] = useState([]);

  const [inputs, setInputs] = useState({id:'', projectName:'', projectType:'', doHoPr:'', frontLiAndFrame:'', backLib:'', frontEndLan:'', backLang:'', database:'', firstName:'', lastName:'', phone:'', companyName:'', projectDes:'', badget:'', advance:'', duration:'', endDate:''});
      const navigate=useNavigate();
      const {id} = useParams();
      
      function getDatas(){
          axios.get(`${process.env.REACT_APP_API_URL}/projectfiles/${id}`).then(function(response) {
              setInputs(response.data.data);
          });
      }
  
      useEffect(() => {
          if(id){
              getDatas();
          }
      }, []);
  
      const handleChange = (event) => {
          const name = event.target.name;
          const value = event.target.value;
          setInputs(values => ({...values, [name]: value}));
      }
  
      const handleSubmit = async(e) => {
          e.preventDefault();
          console.log(inputs)
          
          try{
              let apiurl='';
              if(inputs.id!=''){
                  apiurl=`/projectfiles/edit/${inputs.id}`;
              }else{
                  apiurl=`/projectfiles/create`;
              }
              
              let response= await axios({
                  method: 'post',
                  responsiveTYpe: 'json',
                  url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                  data: inputs
              });
              navigate('/project/TransfaringProject')
          } 
          catch(e){
              console.log(e);
          }
      }


    return (
        <AdminLayout>
        {/* Content Wrapper. Contains page content */}
          <div className="content-wrapper">
          {/* Content Header (Page header) */}
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1>Compose</h1>
                  </div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item active">Compose</li>
                    </ol>
                  </div>
                </div>
              </div> {/*<!-- /.container-fluid */}
            </section>

          {/* Main content */}
            <section className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card card-primary card-outline">
                      <div className="card-header">
                        <h3 className=" d-inline card-title me-5">Compose New Message</h3>
                        <label required className="me-2">Mail Type</label>
                        <div className="form-group d-inline">
                            <label htmlFor="rushMail" value="Rush Mail" className="d-inline">Rush Mail</label>
                            <input
                                value={inputs.rushMail}
                                onChange={handleChange}
                                className={`me-3${errors.rushMail ? 'is-invalid' : ''}`}
                                id="rushMail" 
                                type="radio" 
                                name="mail" />
                                {errors.rushMail && <div className="invalid-feedback">{errors.rushMail}</div>}
                        
                            <label htmlFor="notice" value="Client">Notice</label>
                            <input 
                                value={inputs.rushMail}
                                onChange={handleChange}
                                className={`${errors.rushMail ? 'is-invalid' : ''}`} 
                                id="notice" 
                                type="radio" 
                                name="mail" /> 
                                {errors.rushMail && <div className="invalid-feedback">{errors.rushMail}</div>}
                        </div>
                      </div>
                    {/* /.card-header */}
                      <div className="card-body">
                        <div className="form-group">
                          <input className="form-control" type="email" name="reciver" placeholder="To:"/>
                        </div>
                        <div className="form-group">
                          <input className="form-control" type="text" name="subject" placeholder="Subject:"/>
                        </div>
                        <div className="form-group">
                          
                            <textarea id="compose-textarea" name="bodyMassage" className="form-control" style={{height: "300px"}} ></textarea>
                        </div>
                        <div className="form-group">
                          <div className="btn btn-default btn-file">
                            <i className="fas fa-paperclip"></i> Attachment
                            <input type="file" name="attachment"/>
                          </div>
                          <p className="help-block">Max. 32MB</p>
                        </div>
                      </div>
                    {/* /.card-body */}
                      <div className="card-footer">
                        <div className="float-right">
                          <button type="submit" className="btn btn-primary"><i className="far fa-envelope"></i> Send</button>
                        </div>
                        <Link to="/mail/mailBox"><button type="reset" className="btn btn-default"><i className="fas fa-times"></i> Discard</button></Link>
                      </div>
                    {/* /.card-footer */}
                    </div>
                  {/* /.card */}
                  </div>
                {/* /.col */}
                </div>
              {/* /.row */}
              </div> {/*<!-- /.container-fluid */}
            </section>
          {/* /.content */}
          </div>
        {/* /.content-wrapper */}
        </AdminLayout>
    );
}

export default Compose;
