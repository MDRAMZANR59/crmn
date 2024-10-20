import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function ProjectAdd() {
    const [errors, setErrors] = useState([]);

    const [inputs, setInputs] = useState({id:'', projectName:'', projectType:'', doHoPr:'', frontLang:'', backLang:'', firstName:'', lastName:'', customerId:'', companyName:'', projectDes:'', badget:'', advance:'', duration:'', endDate:''});
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

    const calDate= (e)=>{
        e=parseInt(e.target.value)
            let p = {
            pDate: new Date(),  // Today
            pEDate: e  // Days to add
        };
        
        let date = new Date(new Date(p.pDate).setDate(p.pDate.getDate() + p.pEDate)).toDateString();
        
        // console.log(date); // 7 days from today
    }

    return (
        <AdminLayout>
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Project Add</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Project Add</li>
                                </ol>
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
                </section>

                {/* Main content */}
                <section className="content">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">General</h3>
                                        <div className="card-tools">
                                            <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                                <i className="fas fa-minus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="projectName">Project Name<sup className=" text-danger">*</sup></label>
                                            <input
                                            required
                                            value={inputs.projectName}
                                            onChange={handleChange}
                                            className={`form-control ${errors.projectName ? 'is-invalid' : ''}`}
                                            name="projectName" type="text" id="projectName" placeholder="Project Name"/>
                                            {errors.projectName && <div className="invalid-feedback">{errors.projectName}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label required htmlFor="projectType">Project Type<sup className=" text-danger">*</sup></label>
                                            <select
                                                value={inputs.projectType}
                                                onChange={handleChange}
                                                className={`form-control ${errors.projectType ? 'is-invalid' : ''}`}
                                                id="projectType" name="projectType">
                                                <option value="Select Type">Select Type</option>
                                                <option value="Web Application Devolopment">Web Application Devolopment</option>
                                                <option value="Pc App Devolopment">Pc App Devolopment</option>
                                                <option value="Android App Devolopment">Android App Devolopment</option>
                                            </select>
                                            {errors.projectType && <div className="invalid-feedback">{errors.projectType}</div>}
                                        </div>
                                        <label required htmlFor="doHoProvider">Domain And Hosting Provider<sup className=" text-danger">*</sup></label><br/>
                                        <div className="form-group">
                                            <label htmlFor="codeCrafters" value="Code Crafters" className="d-inline">Code Crafters</label>
                                            <input
                                                value={inputs.doHoPr}
                                                onChange={handleChange}
                                                className={`${errors.doHoPr ? 'is-invalid' : ''}`}
                                                id="codeCrafters" 
                                                type="radio" 
                                                name="doHoPr" />
                                                {errors.doHoPr && <div className="invalid-feedback">{errors.doHoPr}</div>}
                                       
                                            <label htmlFor="client" value="Client">Client</label>
                                            <input 
                                                value={inputs.doHoPr}
                                                onChange={handleChange}
                                                className={`${errors.doHoPr ? 'is-invalid' : ''}`} 
                                                id="client" 
                                                type="radio" 
                                                name="doHoPr" /> 
                                                 {errors.doHoPr && <div className="invalid-feedback">{errors.doHoPr}</div>}
                                        </div>
                                        
                                        <h4 htmlFor="expectedLanguage">Require Language/Framework</h4>
                                        <label><strong>Select Front-End Libraries & Framework</strong></label><hr/>
                                        <div className="form-group">
                                            {/* React */}
                                            <label htmlFor="react">React</label>
                                            <input
                                                value="react"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.framAlaibrary ? 'is-invalid' : ''}`}
                                                name="framAlaibrary" type="radio" id="react"/>
                                            {errors.framAlaibrary && <div className="invalid-feedback">{errors.framAlaibrary}</div>}

                                            <label htmlFor="vue">Vue</label>
                                            <input
                                                value="vue"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.framAlaibrary ? 'is-invalid' : ''}`}
                                                name="framAlaibrary" type="radio" id="vue"/>
                                            {errors.framAlaibrary && <div className="invalid-feedback">{errors.framAlaibrary}</div>}

                                            <label htmlFor="angular">Angular</label>
                                            <input
                                                value="angular"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.framAlaibrary ? 'is-invalid' : ''}`}
                                                name="framAlaibrary" type="radio" id="angular"/>
                                            {errors.framAlaibrary && <div className="invalid-feedback">{errors.framAlaibrary}</div>}

                                            <label htmlFor="svelte">Svelte</label>
                                            <input
                                                value="svelte"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.framAlaibrary ? 'is-invalid' : ''}`}
                                                name="framAlaibrary" type="radio" id="svelte"/>
                                            {errors.framAlaibrary && <div className="invalid-feedback">{errors.framAlaibrary}</div>}

                                            <label htmlFor="solid">SolidJS</label>
                                            <input
                                                value="solid"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.framAlaibrary ? 'is-invalid' : ''}`}
                                                name="framAlaibrary" type="radio" id="solid"/>
                                            {errors.framAlaibrary && <div className="invalid-feedback">{errors.framAlaibrary}</div>}

                                            <label htmlFor="ember">Ember</label>
                                            <input
                                                value="ember"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.framAlaibrary ? 'is-invalid' : ''}`}
                                                name="framAlaibrary" type="radio" id="ember"/>
                                            {errors.framAlaibrary && <div className="invalid-feedback">{errors.framAlaibrary}</div>}

                                            <label htmlFor="next">Next.js</label>
                                            <input
                                                value="next"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.framAlaibrary ? 'is-invalid' : ''}`}
                                                name="framAlaibrary" type="radio" id="next"/>
                                            {errors.framAlaibrary && <div className="invalid-feedback">{errors.framAlaibrary}</div>}

                                            <label htmlFor="nuxt">Nuxt.js</label>
                                            <input
                                                value="nuxt"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.framAlaibrary ? 'is-invalid' : ''}`}
                                                name="framAlaibrary" type="radio" id="nuxt"/>
                                            {errors.framAlaibrary && <div className="invalid-feedback">{errors.framAlaibrary}</div>}

                                            <label htmlFor="jquery">jQuery</label>
                                            <input
                                                value="jquery"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.framAlaibrary ? 'is-invalid' : ''}`}
                                                name="framAlaibrary" type="radio" id="jquery"/>
                                            {errors.framAlaibrary && <div className="invalid-feedback">{errors.framAlaibrary}</div>}

                                            <label htmlFor="bootstrap">Bootstrap</label>
                                            <input
                                                value="bootstrap"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.framAlaibrary ? 'is-invalid' : ''}`}
                                                name="framAlaibrary" type="radio" id="bootstrap"/>
                                            {errors.framAlaibrary && <div className="invalid-feedback">{errors.framAlaibrary}</div>}

                                            <label htmlFor="tailwind">Tailwind CSS</label>
                                            <input
                                                value="tailwind"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.framAlaibrary ? 'is-invalid' : ''}`}
                                                name="framAlaibrary" type="radio" id="tailwind"/>
                                            {errors.framAlaibrary && <div className="invalid-feedback">{errors.framAlaibrary}</div>}

                                            <label htmlFor="foundation">Foundation</label>
                                            <input
                                                value="foundation"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.framAlaibrary ? 'is-invalid' : ''}`}
                                                name="framAlaibrary" type="radio" id="foundation"/>
                                            {errors.framAlaibrary && <div className="invalid-feedback">{errors.framAlaibrary}</div>}
                                           
                                            <label htmlFor="alpine">Alpine.js</label>
                                            <input
                                                value="alpine"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.framAlaibrary ? 'is-invalid' : ''}`}
                                                name="framAlaibrary" type="radio" id="alpine"/>
                                            {errors.framAlaibrary && <div className="invalid-feedback">{errors.framAlaibrary}</div>}

                                            <label htmlFor="riot">Riot.js</label>
                                            <input
                                                value="riot"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.framAlaibrary ? 'is-invalid' : ''}`}
                                                name="framAlaibrary" type="radio" id="riot"/>
                                            {errors.framAlaibrary && <div className="invalid-feedback">{errors.framAlaibrary}</div>}
                                        </div>
                                        <label><strong>Select Back-End Libraries</strong></label><hr/>
                                        <div className="form-group">
                                            <label htmlFor="express">Express</label>
                                            <input
                                                value="express"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.framAlaibrary ? 'is-invalid' : ''}`}
                                                name="framAlaibrary" type="radio" id="express"/>
                                            {errors.framAlaibrary && <div className="invalid-feedback">{errors.framAlaibrary}</div>}

                                            <label htmlFor="django">Django</label>
                                            <input
                                                value="django"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.framAlaibrary ? 'is-invalid' : ''}`}
                                                name="framAlaibrary" type="radio" id="django"/>
                                            {errors.framAlaibrary && <div className="invalid-feedback">{errors.framAlaibrary}</div>}

                                            <label htmlFor="flask">Flask</label>
                                            <input
                                                value="flask"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.framAlaibrary ? 'is-invalid' : ''}`}
                                                name="framAlaibrary" type="radio" id="flask"/>
                                            {errors.framAlaibrary && <div className="invalid-feedback">{errors.framAlaibrary}</div>}

                                            <label htmlFor="spring">Spring</label>
                                            <input
                                                value="spring"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.framAlaibrary ? 'is-invalid' : ''}`}
                                                name="framAlaibrary" type="radio" id="spring"/>
                                            {errors.framAlaibrary && <div className="invalid-feedback">{errors.framAlaibrary}</div>}

                                            <label htmlFor="rubyOnRails">Ruby on Rails</label>
                                            <input
                                                value="rubyOnRails"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.framAlaibrary ? 'is-invalid' : ''}`}
                                                name="framAlaibrary" type="radio" id="rubyOnRails"/>
                                            {errors.framAlaibrary && <div className="invalid-feedback">{errors.framAlaibrary}</div>}

                                            <label htmlFor="laravel">Laravel</label>
                                            <input
                                                value="laravel"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.framAlaibrary ? 'is-invalid' : ''}`}
                                                name="framAlaibrary" type="radio" id="laravel"/>
                                            {errors.framAlaibrary && <div className="invalid-feedback">{errors.framAlaibrary}</div>}

                                            <label htmlFor="aspnet">ASP.NET</label>
                                            <input
                                                value="aspnet"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.framAlaibrary ? 'is-invalid' : ''}`}
                                                name="framAlaibrary" type="radio" id="aspnet"/>
                                            {errors.framAlaibrary && <div className="invalid-feedback">{errors.framAlaibrary}</div>}

                                            <label htmlFor="node">Node.js</label>
                                            <input
                                                value="node"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.framAlaibrary ? 'is-invalid' : ''}`}
                                                name="framAlaibrary" type="radio" id="node"/>
                                            {errors.framAlaibrary && <div className="invalid-feedback">{errors.framAlaibrary}</div>}

                                            <label htmlFor="phoenix">Phoenix</label>
                                            <input
                                                value="phoenix"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.framAlaibrary ? 'is-invalid' : ''}`}
                                                name="framAlaibrary" type="radio" id="phoenix"/>
                                            {errors.framAlaibrary && <div className="invalid-feedback">{errors.framAlaibrary}</div>}

                                            <label htmlFor="gin">Gin</label>
                                            <input
                                                value="gin"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.framAlaibrary ? 'is-invalid' : ''}`}
                                                name="framAlaibrary" type="radio" id="gin"/>
                                            {errors.framAlaibrary && <div className="invalid-feedback">{errors.framAlaibrary}</div>}
                                        </div>

                                        <br/><label><strong>Select Front-End language</strong></label><hr/>
                                        <div className="form-group">
                                            {/* JavaScript */}
                                            <label htmlFor="javascript">JavaScript</label>
                                            <input
                                                value="javascript"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.frontEndLan ? 'is-invalid' : ''}`} 
                                                name="frontEndLan" 
                                                type="radio" 
                                                id="javascript" />
                                            {errors.frontEndLan && <div className="invalid-feedback">{errors.frontEndLan}</div>}

                                            {/* TypeScript */}
                                            <label htmlFor="typescript">TypeScript</label>
                                            <input
                                                value="typescript"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.frontEndLan ? 'is-invalid' : ''}`} 
                                                name="frontEndLan" 
                                                type="radio" 
                                                id="typescript" />
                                            {errors.frontEndLan && <div className="invalid-feedback">{errors.frontEndLan}</div>}
                                        </div>
                                        <label><strong>Select Back-End Language</strong></label><hr/>
                                        <div className="form-group" >
                                            {/* PHP */}
                                            <label htmlFor="php">PHP</label>
                                            <input
                                                value="php"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.backLang ? 'is-invalid' : ''}`}
                                                name="backLang" type="radio" id="php"/>
                                            {errors.backLang && <div className="invalid-feedback">{errors.backLang}</div>}

                                            {/* Python */}
                                            <label htmlFor="python">Python</label>
                                            <input
                                                value="python"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.backLang ? 'is-invalid' : ''}`}
                                                name="backLang" type="radio" id="python"/>
                                            {errors.backLang && <div className="invalid-feedback">{errors.backLang}</div>}

                                            {/* Ruby */}
                                            <label htmlFor="ruby">Ruby</label>
                                            <input
                                                value="ruby"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.backLang ? 'is-invalid' : ''}`}
                                                name="backLang" type="radio" id="ruby"/>
                                            {errors.backLang && <div className="invalid-feedback">{errors.backLang}</div>}

                                            {/* Java */}
                                            <label htmlFor="java">Java</label>
                                            <input
                                                value="java"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.backLang ? 'is-invalid' : ''}`}
                                                name="backLang" type="radio" id="java"/>
                                            {errors.backLang && <div className="invalid-feedback">{errors.backLang}</div>}

                                            {/* C# */}
                                            <label htmlFor="csharp">C#</label>
                                            <input
                                                value="csharp"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.backLang ? 'is-invalid' : ''}`}
                                                name="backLang" type="radio" id="csharp"/>
                                            {errors.backLang && <div className="invalid-feedback">{errors.backLang}</div>}

                                            {/* Go */}
                                            <label htmlFor="go">Go</label>
                                            <input
                                                value="go"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.backLang ? 'is-invalid' : ''}`}
                                                name="backLang" type="radio" id="go"/>
                                            {errors.backLang && <div className="invalid-feedback">{errors.backLang}</div>}

                                            {/* Node.js */}
                                            <label htmlFor="nodejs">Node.js</label>
                                            <input
                                                value="nodejs"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.backLang ? 'is-invalid' : ''}`}
                                                name="backLang" type="radio" id="nodejs"/>
                                            {errors.backLang && <div className="invalid-feedback">{errors.backLang}</div>}

                                            {/* Scala */}
                                            <label htmlFor="scala">Scala</label>
                                            <input
                                                value="scala"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.backLang ? 'is-invalid' : ''}`}
                                                name="backLang" type="radio" id="scala"/>
                                            {errors.backLang && <div className="invalid-feedback">{errors.backLang}</div>}

                                            {/* Elixir */}
                                            <label htmlFor="elixir">Elixir</label>
                                            <input
                                                value="elixir"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.backLang ? 'is-invalid' : ''}`}
                                                name="backLang" type="radio" id="elixir"/>
                                            {errors.backLang && <div className="invalid-feedback">{errors.backLang}</div>}

                                            {/* Kotlin */}
                                            <label htmlFor="kotlin">Kotlin</label>
                                            <input
                                                value="kotlin"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.backLang ? 'is-invalid' : ''}`}
                                                name="backLang" type="radio" id="kotlin"/>
                                            {errors.backLang && <div className="invalid-feedback">{errors.backLang}</div>}

                                            {/* .NET */}
                                            <label htmlFor="dotnet">.NET</label>
                                            <input
                                                value="dotnet"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.backLang ? 'is-invalid' : ''}`}
                                                name="backLang" type="radio" id="dotnet"/>
                                            {errors.backLang && <div className="invalid-feedback">{errors.backLang}</div>}

                                            {/* Spring */}
                                            <label htmlFor="spring">Spring</label>
                                            <input
                                                value="spring"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.backLang ? 'is-invalid' : ''}`}
                                                name="backLang" type="radio" id="spring"/>
                                            {errors.backLang && <div className="invalid-feedback">{errors.backLang}</div>}

                                        </div>
                                        <label><strong>Database</strong></label><hr/>
                                        <div className="form-group" >
                                            {/* MySQL */}
                                            <label htmlFor="mysql">MySQL</label>
                                            <input
                                                value="mysql"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.database ? 'is-invalid' : ''}`} 
                                                name="database" 
                                                type="radio" 
                                                id="mysql" />
                                            {errors.database && <div className="invalid-feedback">{errors.database}</div>}

                                            {/* PostgreSQL */}
                                            <label htmlFor="postgresql">PostgreSQL</label>
                                            <input
                                                value="postgresql"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.database ? 'is-invalid' : ''}`} 
                                                name="database" 
                                                type="radio" 
                                                id="postgresql" />
                                            {errors.database && <div className="invalid-feedback">{errors.database}</div>}

                                            {/* MongoDB */}
                                            <label htmlFor="mongodb">MongoDB</label>
                                            <input
                                                value="mongodb"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.database ? 'is-invalid' : ''}`} 
                                                name="database" 
                                                type="radio" 
                                                id="mongodb" />
                                            {errors.database && <div className="invalid-feedback">{errors.database}</div>}

                                            {/* SQLite */}
                                            <label htmlFor="sqlite">SQLite</label>
                                            <input
                                                value="sqlite"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.database ? 'is-invalid' : ''}`} 
                                                name="database" 
                                                type="radio" 
                                                id="sqlite" />
                                            {errors.database && <div className="invalid-feedback">{errors.database}</div>}

                                            {/* Oracle */}
                                            <label htmlFor="oracle">Oracle</label>
                                            <input
                                                value="oracle"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.database ? 'is-invalid' : ''}`} 
                                                name="database" 
                                                type="radio" 
                                                id="oracle" />
                                            {errors.database && <div className="invalid-feedback">{errors.database}</div>}

                                            {/* MariaDB */}
                                            <label htmlFor="mariadb">MariaDB</label>
                                            <input
                                                value="mariadb"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.database ? 'is-invalid' : ''}`} 
                                                name="database" 
                                                type="radio" 
                                                id="mariadb" />
                                            {errors.database && <div className="invalid-feedback">{errors.database}</div>}

                                            {/* Couchbase */}
                                            <label htmlFor="couchbase">Couchbase</label>
                                            <input
                                                value="couchbase"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.database ? 'is-invalid' : ''}`} 
                                                name="database" 
                                                type="radio" 
                                                id="couchbase" />
                                            {errors.database && <div className="invalid-feedback">{errors.database}</div>}

                                            {/* Firebase */}
                                            <label htmlFor="firebase">Firebase</label>
                                            <input
                                                value="firebase"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.database ? 'is-invalid' : ''}`} 
                                                name="database" 
                                                type="radio" 
                                                id="firebase" />
                                            {errors.database && <div className="invalid-feedback">{errors.database}</div>}

                                            {/* Redis */}
                                            <label htmlFor="redis">Redis</label>
                                            <input
                                                value="redis"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.database ? 'is-invalid' : ''}`} 
                                                name="database" 
                                                type="radio" 
                                                id="redis" />
                                            {errors.database && <div className="invalid-feedback">{errors.database}</div>}

                                            {/* Cassandra */}
                                            <label htmlFor="cassandra">Cassandra</label>
                                            <input
                                                value="cassandra"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.database ? 'is-invalid' : ''}`} 
                                                name="database" 
                                                type="radio" 
                                                id="cassandra" />
                                            {errors.database && <div className="invalid-feedback">{errors.database}</div>}

                                        </div><br/>
                                        <div className="form-group">
                                            <label htmlFor="firstName">Client First Name<sup className=" text-danger">*</sup></label>
                                            <input
                                             value={inputs.firstName}
                                             onChange={handleChange}
                                             className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} name="firstName" placeholder="Client Frist Name" required type="text" id="firstName" />
                                            {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="lastName">Client Last Name<sup className=" text-danger">*</sup></label>
                                            <input
                                             value={inputs.lastName}
                                             onChange={handleChange}
                                             className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} name="lastName" placeholder="Client Last Name" required type="text" id="lastName" />
                                            {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone<sup className=" text-danger">*</sup></label>
                                            <input
                                             value={inputs.phone}
                                             onChange={handleChange}
                                             className={`form-control ${errors.phone ? 'is-invalid' : ''}`} name="phone" placeholder="Phone" required type="number" id="phone" />
                                            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="customerId">Customer ID<sup className=" text-danger">*</sup></label>
                                            <input
                                             value={inputs.customerId}
                                             onChange={handleChange}
                                             className={`form-control ${errors.customerId ? 'is-invalid' : ''}`} name="customerId" placeholder="Customer ID" required type="number" id="customerId" />
                                            {errors.customerId && <div className="invalid-feedback">{errors.customerId}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="clientCompany">Client Company Name</label>
                                            <input
                                             value={inputs.companyName}
                                             onChange={handleChange}
                                             className={`form-control ${errors.companyName ? 'is-invalid' : ''}`} name="companyName" placeholder="Client Company Name" type="text" id="clientCompany" />
                                            {errors.companyName && <div className="invalid-feedback">{errors.companyName}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputDescription">Project Description<sup className=" text-danger">*</sup></label>
                                            <textarea
                                             value={inputs.projectDes}
                                             onChange={handleChange}
                                             className={`form-control ${errors.projectDes ? 'is-invalid' : ''}`} name="projectDes" placeholder='Project Description' required id="inputDescription" rows="4"></textarea>
                                            {errors.projectDes && <div className="invalid-feedback">{errors.projectDes}</div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card card-secondary">
                                    <div className="card-header">
                                        <h3 className="card-title">Budget</h3>
                                        <div className="card-tools">
                                            <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                                <i className="fas fa-minus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="inputEstimatedBudget">Estimated budget<sup className=" text-danger">*</sup></label>
                                            <input
                                             value={inputs.badget}
                                             onChange={handleChange}
                                             className={`form-control ${errors.badget ? 'is-invalid' : ''}`} name="badget" required placeholder="Estimated budget" type="number" id="inputEstimatedBudget" />
                                            {errors.badget && <div className="invalid-feedback">{errors.badget}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="advance">Total Advance <sup className=" text-danger">*</sup></label>
                                            <input
                                             value={inputs.advance}
                                             onChange={handleChange}
                                             className={`form-control ${errors.advance ? 'is-invalid' : ''}`} name="advance" required placeholder="Advance" type="number" id="advance"/>
                                            {errors.advance && <div className="invalid-feedback">{errors.advance}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputEstimatedDuration">Estimated project duration</label>
                                            <input
                                             value={inputs.duration}
                                             onChange={handleChange}
                                             className={`form-control ${errors.duration ? 'is-invalid' : ''}`} name="duration" onClick={calDate} placeholder="Estimated duration" type="number" id="inputEstimatedDuration" />
                                            {errors.duration && <div className="invalid-feedback">{errors.duration}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputEstimatedEndDate">Estimated End Date</label>
                                            <input
                                             value={inputs.endDate}
                                             onChange={handleChange}
                                             className={`form-control ${errors.endDate ? 'is-invalid' : ''}`} name="endDate" placeholder="Estimated End Date" type="number" id="inputEstimatedEndDate"/>
                                            {errors.endDate && <div className="invalid-feedback">{errors.endDate}</div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <a href="#" className="btn btn-secondary">Cancel</a>
                                <input type="submit" value="Create new Porject" className="btn btn-success float-right"/>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </AdminLayout>
    );
}

export default ProjectAdd;
