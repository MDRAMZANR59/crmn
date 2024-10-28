import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function Review() {
  const [errors, setErrors] = useState([]);

  const [inputs, setInputs] = useState({id:'', massage:'',});
      const navigate=useNavigate();
      const {id} = useParams();
      
      function getDatas(){
          axios.get(`${process.env.REACT_APP_API_URL}/review/${id}`).then(function(response) {
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
                  apiurl=`/review/edit/${inputs.id}`;
              }else{
                  apiurl=`/review/create`;
              }
              
              let response= await axios({
                  method: 'post',
                  responsiveTYpe: 'json',
                  url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                  data: inputs
              });
              navigate('/project/projectList')
          } 
          catch(e){
              console.log(e);
          }
      }

    return (
      <AdminLayout>
        <>
         
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Share Your Experiance</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Review</li>
            </ol>
          </div>
        </div>
      </div>{/* /.container-fluid */}
    </section>

    {/* Main content */}
    <section className="content">

      {/* Default box */}
      <div className="card">
        <div className="card-body row">
          <div className="col-5 text-center d-flex align-items-center justify-content-center">
            <div>
              <h2><strong>Overall Rating</strong></h2>
                <a name="s1" href="#"><i className="fas fa-star"></i></a>
                <a name="s2" href="#"><i className="fas fa-star"></i></a>
                <a name="s3" href="#"><i className="fas fa-star"></i></a>
                <a name="s4" href="#"><i className="fas fa-star"></i></a>
                <a name="s5" href="#"><i className="fas fa-star"></i></a>
            </div>
          </div>
          <div className="col-7">
            <div className="form-group">
               <label htmlFor="massage">Massage<sup className=" text-danger">*</sup></label>
                  <textarea
                  name="massage"
                  defaultValue={inputs.massage}
                  onChange={handleChange}
                  className={`form-control ${errors.massage ? 'is-invalid' : ''}`} placeholder='What Do You Think About Our Service?' required id="massage" rows="1"></textarea>
                  {errors.massage && <div className="invalid-feedback">{errors.massage}</div>}
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-primary" value="Send Feedback"/>
            </div>
          </div>
        </div>
      </div>

    </section>
    {/* /.content */}
  </div>
 
        </>
      </AdminLayout>
    );
}

export default Review;
