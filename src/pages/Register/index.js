import React, { useState } from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../Api/AllApi';

function Register() {
    const [inputs, setInputs] = useState([]);
    const navigate = useNavigate();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await register(inputs);
        //navigate('/login')
    }
  return (
    <AuthLayout>
        <div className="text-center mb-5">
            <img src="assets_admin/images/hospital-logo.png" height="48" className='mb-4'/>
            <h3>Sign Up</h3>
            <p>Please fill the form to register.</p>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-12 col-12">
                    <div className="form-group">
                        <label htmlFor="first-name">Full Name</label>
                        <input type="text" id="first-name" className="form-control" onChange={handleChange} name="name"/>
                    </div>
                </div>
                <div className="col-md-12 col-12">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="form-control" onChange={handleChange} name="email"/>
                    </div>
                </div>
                <div className="col-md-12 col-12">
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" id="password" className="form-control" onChange={handleChange} name="password"/>
                    </div>
                </div>
                <div className="col-md-12 col-12">
                    <div className="form-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="text" id="password" className="form-control" onChange={handleChange} name="c_password"/>
                    </div>
                </div>
               
            </div>
                <Link to="/login">Have an account? Login</Link>      
            <div className="clearfix">
                <button className="btn btn-primary float-right">Submit</button>
            </div>
        </form>
                   
    </AuthLayout>
  )
}

export default Register

// import React, { useState } from 'react';
// import AuthLayout from '../../layouts/AuthLayout';
// import { Link, useNavigate } from 'react-router-dom';
// import { register } from '../../Api/AllApi';

// function Register() {
//     const [inputs, setInputs] = useState([]);
//     const navigate = useNavigate();
//     const handleChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setInputs(values => ({ ...values, [name]: value }));
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         await register(inputs);
//         //navigate('/login')
//     }
//   return (
//     <AuthLayout>
//         <div className="text-center mb-5">
//             <img src="assets_admin/images/hospital-logo.png" height="48" className='mb-4'/>
//             <h3>Sign Up</h3>
//             <p>Please fill the form to register.</p>
//         </div>
//         <form onSubmit={handleSubmit}>
//             <div className="row">
//                 {/* <div className="col-md-12 col-12">
//                     <div className="form-group">
//                         <label htmlFor="first-name">Full Name</label>
//                         <input type="text" id="first-name" className="form-control" onChange={handleChange} name="name"/>
//                     </div>
//                 </div>
//                 <div className="col-md-12 col-12">
//                     <div className="form-group">
//                         <label htmlFor="email">Email</label>
//                         <input type="email" id="email" className="form-control" onChange={handleChange} name="email"/>
//                     </div>
//                 </div>
//                 <div className="col-md-12 col-12">
//                     <div className="form-group">
//                         <label htmlFor="password">Password</label>
//                         <input type="text" id="password" className="form-control" onChange={handleChange} name="password"/>
//                     </div>
//                 </div>
//                 <div className="col-md-12 col-12">
//                     <div className="form-group">
//                         <label htmlFor="password">Confirm Password</label>
//                         <input type="text" id="password" className="form-control" onChange={handleChange} name="c_password"/>
//                     </div>
//                 </div> */}
//                 <div className="col-md-12 col-12">
//                     <label htmlFor="name" className="form-label">Name By NID<sup className=" text-danger">*</sup></label>
//                     <input
//                         required
//                         placeholder="Name"
//                         type="text"
//                         className="form-control"
//                         id="name"
//                         name="name"
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="col-md-12 col-12">
//                     <label htmlFor="nid" className="form-label">NID Number<sup className="text-danger">*</sup></label>
//                     <input
//                         required
//                         placeholder="Nid Number"
//                         type="number"
//                         className="form-control"
//                         id="nid"
//                         name="nid"
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="col-md-12 col-12">
//                     <label htmlFor="dob" className="form-label">Date Of Birth<sup className="text-danger">*</sup></label>
//                     <input
//                         required
//                         placeholder="Date Of Birth"
//                         type="date"
//                         className="form-control"
//                         id="dob"
//                         name="dob"
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="col-md-12 col-12">
//                     <label htmlFor="email" className="form-label">Email<sup className="text-danger">*</sup></label>
//                     <input
//                         required
//                         placeholder="Email"
//                         type="email"
//                         className="form-control"
//                         id="email"
//                         name="email"
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="col-md-12 col-12">
//                     <label htmlFor="phone" className="form-label">Phone<sup className=" text-danger">*</sup></label>
//                     <input
//                         required
//                         placeholder="Contact"
//                         type="number"
//                         className="form-control"
//                         id="phone"
//                         name="phone"
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="col-md-12 col-12">
//                     <label htmlFor="employeId" className="form-label">Employe Id<sup className=" text-danger">*</sup></label>
//                     <input
//                         required
//                         placeholder="Employe Id"
//                         type="number"
//                         className="form-control"
//                         id="employeId"
//                         name="employeId"
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="col-md-12 col-12">
//                     <label htmlFor="designation" className="form-label">Designation<sup className=" text-danger">*</sup></label>
//                     <input
//                         required
//                         placeholder="designation"
//                         type="text"
//                         className="form-control"
//                         id="designation"
//                         name="designation"
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="col-md-12 col-12">
//                     <label htmlFor="signature" className="form-label">Signature<sup className=" text-danger">*</sup></label>
//                     <input
//                         required
//                         placeholder="signature"
//                         type="file"
//                         className="form-control"
//                         id="signature"
//                         name="signature"
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="col-md-12 col-12">
//                     <label htmlFor="photo" className="form-label">Photo<sup className=" text-danger">*</sup></label>
//                     <input
//                         required
//                         placeholder="Photo"
//                         type="file"
//                         className="form-control"
//                         id="photo"
//                         name="photo"
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="col-md-12 col-12">
//                     <label htmlFor="password" className="form-label">Password<sup className="text-danger">*</sup></label>
//                     <input
//                         required
//                         type="password"
//                         placeholder="Password"
//                         className="form-control"
//                         id="password"
//                         name="password"
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="col-md-12 col-12">
//                     <label htmlFor="name" className="form-label display-6">Address</label>
//                 </div>
//                 <div className="mb-6 col-md-6">
//                     <label htmlFor="country" className="form-label text-black">Country <span className=" text-danger">*</span></label>
//                     <select
//                         required
//                         id="country"
//                         name="country"
//                         onChange={handleChange}
//                         className="form-control">
//                         <option value="Select a country">Select a country</option>
//                         <option value="Bangladesh">Bangladesh</option>
//                         <option value="Algeria">Algeria</option>
//                         <option value="Afghanistan">Afghanistan</option>
//                         <option value="Ghana<">Ghana</option>
//                         <option value="Albania">Albania</option>
//                         <option value="Bahrain">Bahrain</option>
//                         <option value="Colombia">Colombia</option>
//                         <option value="Dominican Republic">Dominican Republic</option>
//                     </select>
//                 </div>
//                 <div className="col-md-12 col-12">
//                     <label htmlFor="districts" className="form-label">Districts<sup className="text-danger">*</sup></label>
//                     <input
//                         required
//                         placeholder="Districts"
//                         type="text"
//                         className="form-control"
//                         id="districts"
//                         name="districts"
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="col-md-12 col-12">
//                     <label htmlFor="upozila" className="form-label">Upozila<sup className="text-danger">*</sup></label>
//                     <input
//                         required
//                         placeholder="Upozila"
//                         type="text"
//                         className="form-control"
//                         id="upozila"
//                         name="upozila"
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="col-md-12 col-12">
//                     <label htmlFor="post" className="form-label">Post<sup className="text-danger">*</sup></label>
//                     <input
//                         required
//                         placeholder="Post"
//                         type="text"
//                         className="form-control"
//                         id="post"
//                         name="post"
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="col-md-12 col-12">
//                     <label htmlFor="zipCode" className="form-label">Zip Code<sup className=" text-danger">*</sup></label>
//                     <input
//                         required
//                         placeholder="Zip Code"
//                         type="number"
//                         className="form-control"
//                         id="zipCode"
//                         name="zipCode"
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="mb-6 col-md-6">
//                     <label htmlFor="state" className="form-label">State<sup className=" text-danger">*</sup></label>
//                     <input
//                         required
//                         placeholder="state"
//                         type="text"
//                         className="form-control"
//                         id="state"
//                         name="state"
//                         onChange={handleChange}
//                     />
//                 </div>
//             </div>
//                 <Link to="/login">Have an account? Login</Link>      
//             <div className="clearfix">
//                 <button className="btn btn-primary float-right">Submit</button>
//             </div>
//         </form>
                   
//     </AuthLayout>
//   )
// }

// export default Register