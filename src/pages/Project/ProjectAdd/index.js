import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function ProjectAdd() {
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
                                        <label htmlFor="doHoProvider">Domain And Hosting Provider<sup className=" text-danger">*</sup></label><br/>
                                        <div className="form-group">
                                            <label htmlFor="codeCrafters" value="Code Crafters" className="d-inline">Code Crafters</label>
                                            <input
                                                value={inputs.CodeCrafters}
                                                onChange={handleChange}
                                                className={`${errors.CodeCrafters ? 'is-invalid' : ''}`}
                                                id="codeCrafters" 
                                                type="radio" 
                                                name="doHoPr" />
                                                {errors.CodeCrafters && <div className="invalid-feedback">{errors.CodeCrafters}</div>}
                                       
                                            <label htmlFor="client" value="Client">Client</label>
                                            <input 
                                                value={inputs.Client}
                                                onChange={handleChange}
                                                className={`${errors.client ? 'is-invalid' : ''}`} 
                                                id="client" 
                                                type="radio" 
                                                name="doHoPr" /> 
                                                {errors.client && <div className="invalid-feedback">{errors.client}</div>}
                                        </div>
                                        
                                        <h4 htmlFor="">Require Language/Framework</h4>
                                        <label><strong>Select Front-End Libraries & Framework</strong></label><hr/>
                                        <div className="form-group">
                                            {/* React */}
                                            <label htmlFor="react">React</label>
                                            <input
                                                value="react"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.react ? 'is-invalid' : ''}`}
                                                name="frontLiAndFrame" type="radio" id="react"/>
                                            {errors.react && <div className="invalid-feedback">{errors.react}</div>}

                                            <label htmlFor="vue">Vue</label>
                                            <input
                                                value="vue"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.vue ? 'is-invalid' : ''}`}
                                                name="frontLiAndFrame" type="radio" id="vue"/>
                                            {errors.vue && <div className="invalid-feedback">{errors.vue}</div>}

                                            <label htmlFor="angular">Angular</label>
                                            <input
                                                value="angular"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.angular ? 'is-invalid' : ''}`}
                                                name="frontLiAndFrame" type="radio" id="angular"/>
                                            {errors.angular && <div className="invalid-feedback">{errors.angular}</div>}

                                            <label htmlFor="svelte">Svelte</label>
                                            <input
                                                value="svelte"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.svelte ? 'is-invalid' : ''}`}
                                                name="frontLiAndFrame" type="radio" id="svelte"/>
                                            {errors.svelte && <div className="invalid-feedback">{errors.svelte}</div>}

                                            <label htmlFor="solid">SolidJS</label>
                                            <input
                                                value="solid"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.solid ? 'is-invalid' : ''}`}
                                                name="frontLiAndFrame" type="radio" id="solid"/>
                                            {errors.solid && <div className="invalid-feedback">{errors.solid}</div>}

                                            <label htmlFor="ember">Ember</label>
                                            <input
                                                value="ember"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.ember ? 'is-invalid' : ''}`}
                                                name="frontLiAndFrame" type="radio" id="ember"/>
                                            {errors.ember && <div className="invalid-feedback">{errors.ember}</div>}

                                            <label htmlFor="next">Next.js</label>
                                            <input
                                                value="next"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.next ? 'is-invalid' : ''}`}
                                                name="frontLiAndFrame" type="radio" id="next"/>
                                            {errors.next && <div className="invalid-feedback">{errors.next}</div>}

                                            <label htmlFor="nuxt">Nuxt.js</label>
                                            <input
                                                value="nuxt"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.nuxt ? 'is-invalid' : ''}`}
                                                name="frontLiAndFrame" type="radio" id="nuxt"/>
                                            {errors.nuxt && <div className="invalid-feedback">{errors.nuxt}</div>}

                                            <label htmlFor="jquery">jQuery</label>
                                            <input
                                                value="jquery"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.jquery ? 'is-invalid' : ''}`}
                                                name="frontLiAndFrame" type="radio" id="jquery"/>
                                            {errors.jquery && <div className="invalid-feedback">{errors.jquery}</div>}

                                            <label htmlFor="bootstrap">Bootstrap</label>
                                            <input
                                                value="bootstrap"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.bootstrap ? 'is-invalid' : ''}`}
                                                name="frontLiAndFrame" type="radio" id="bootstrap"/>
                                            {errors.bootstrap && <div className="invalid-feedback">{errors.bootstrap}</div>}

                                            <label htmlFor="tailwind">Tailwind CSS</label>
                                            <input
                                                value="tailwind"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.tailwind ? 'is-invalid' : ''}`}
                                                name="frontLiAndFrame" type="radio" id="tailwind"/>
                                            {errors.tailwind && <div className="invalid-feedback">{errors.tailwind}</div>}

                                            <label htmlFor="foundation">Foundation</label>
                                            <input
                                                value="foundation"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.foundation ? 'is-invalid' : ''}`}
                                                name="frontLiAndFrame" type="radio" id="foundation"/>
                                            {errors.foundation && <div className="invalid-feedback">{errors.foundation}</div>}

                                            <label htmlFor="alpine">Alpine.js</label>
                                            <input
                                                value="alpine"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.alpine ? 'is-invalid' : ''}`}
                                                name="frontLiAndFrame" type="radio" id="alpine"/>
                                            {errors.alpine && <div className="invalid-feedback">{errors.alpine}</div>}

                                            <label htmlFor="riot">Riot.js</label>
                                            <input
                                                value="riot"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.riot ? 'is-invalid' : ''}`}
                                                name="frontLiAndFrame" type="radio" id="riot"/>
                                            {errors.riot && <div className="invalid-feedback">{errors.riot}</div>}

                                        </div>
                                        <label><strong>Select Back-End Libraries</strong></label><hr/>
                                        <div className="form-group">
                                            <label htmlFor="express">Express</label>
                                            <input
                                                value="express"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.express ? 'is-invalid' : ''}`}
                                                name="backLib" type="radio" id="express"/>
                                            {errors.express && <div className="invalid-feedback">{errors.express}</div>}

                                            <label htmlFor="django">Django</label>
                                            <input
                                                value="django"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.django ? 'is-invalid' : ''}`}
                                                name="backLib" type="radio" id="django"/>
                                            {errors.django && <div className="invalid-feedback">{errors.django}</div>}

                                            <label htmlFor="flask">Flask</label>
                                            <input
                                                value="flask"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.flask ? 'is-invalid' : ''}`}
                                                name="backLib" type="radio" id="flask"/>
                                            {errors.flask && <div className="invalid-feedback">{errors.flask}</div>}

                                            <label htmlFor="spring">Spring</label>
                                            <input
                                                value="spring"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.spring ? 'is-invalid' : ''}`}
                                                name="backLib" type="radio" id="spring"/>
                                            {errors.spring && <div className="invalid-feedback">{errors.spring}</div>}

                                            <label htmlFor="rubyOnRails">Ruby on Rails</label>
                                            <input
                                                value="rubyOnRails"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.rubyOnRails ? 'is-invalid' : ''}`}
                                                name="backLib" type="radio" id="rubyOnRails"/>
                                            {errors.rubyOnRails && <div className="invalid-feedback">{errors.rubyOnRails}</div>}

                                            <label htmlFor="laravel">Laravel</label>
                                            <input
                                                value="laravel"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.laravel ? 'is-invalid' : ''}`}
                                                name="backLib" type="radio" id="laravel"/>
                                            {errors.laravel && <div className="invalid-feedback">{errors.laravel}</div>}

                                            <label htmlFor="aspnet">ASP.NET</label>
                                            <input
                                                value="aspnet"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.aspnet ? 'is-invalid' : ''}`}
                                                name="backLib" type="radio" id="aspnet"/>
                                            {errors.aspnet && <div className="invalid-feedback">{errors.aspnet}</div>}

                                            <label htmlFor="node">Node.js</label>
                                            <input
                                                value="node"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.node ? 'is-invalid' : ''}`}
                                                name="backLib" type="radio" id="node"/>
                                            {errors.node && <div className="invalid-feedback">{errors.node}</div>}

                                            <label htmlFor="phoenix">Phoenix</label>
                                            <input
                                                value="phoenix"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.phoenix ? 'is-invalid' : ''}`}
                                                name="backLib" type="radio" id="phoenix"/>
                                            {errors.phoenix && <div className="invalid-feedback">{errors.phoenix}</div>}

                                            <label htmlFor="gin">Gin</label>
                                            <input
                                                value="gin"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.gin ? 'is-invalid' : ''}`}
                                                name="backLib" type="radio" id="gin"/>
                                            {errors.gin && <div className="invalid-feedback">{errors.gin}</div>}

                                        </div>

                                        <br/><label><strong>Select Front-End language</strong></label><hr/>
                                        <div className="form-group">
                                            {/* JavaScript */}
                                            <label htmlFor="javascript">JavaScript</label>
                                            <input
                                                value="javascript"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.javascript ? 'is-invalid' : ''}`} 
                                                name="frontEndLan" 
                                                type="radio" 
                                                id="javascript" />
                                            {errors.javascript && <div className="invalid-feedback">{errors.javascript}</div>}

                                            {/* TypeScript */}
                                            <label htmlFor="typescript">TypeScript</label>
                                            <input
                                                value="typescript"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.typescript ? 'is-invalid' : ''}`} 
                                                name="frontEndLan" 
                                                type="radio" 
                                                id="typescript" />
                                            {errors.typescript && <div className="invalid-feedback">{errors.typescript}</div>}
                                        </div>
                                        <label><strong>Select Back-End Language</strong></label><hr/>
                                        <div className="form-group" >
                                            {/* PHP */}
                                            <label htmlFor="php">PHP</label>
                                            <input
                                                value="php"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.php ? 'is-invalid' : ''}`}
                                                name="backLang" type="radio" id="php"/>
                                            {errors.php && <div className="invalid-feedback">{errors.php}</div>}

                                            {/* Python */}
                                            <label htmlFor="python">Python</label>
                                            <input
                                                value="python"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.python ? 'is-invalid' : ''}`}
                                                name="backLang" type="radio" id="python"/>
                                            {errors.python && <div className="invalid-feedback">{errors.python}</div>}

                                            {/* Ruby */}
                                            <label htmlFor="ruby">Ruby</label>
                                            <input
                                                value="ruby"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.ruby ? 'is-invalid' : ''}`}
                                                name="backLang" type="radio" id="ruby"/>
                                            {errors.ruby && <div className="invalid-feedback">{errors.ruby}</div>}

                                            {/* Java */}
                                            <label htmlFor="java">Java</label>
                                            <input
                                                value="java"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.java ? 'is-invalid' : ''}`}
                                                name="backLang" type="radio" id="java"/>
                                            {errors.java && <div className="invalid-feedback">{errors.java}</div>}

                                            {/* C# */}
                                            <label htmlFor="csharp">C#</label>
                                            <input
                                                value="csharp"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.csharp ? 'is-invalid' : ''}`}
                                                name="backLang" type="radio" id="csharp"/>
                                            {errors.csharp && <div className="invalid-feedback">{errors.csharp}</div>}

                                            {/* Go */}
                                            <label htmlFor="go">Go</label>
                                            <input
                                                value="go"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.go ? 'is-invalid' : ''}`}
                                                name="backLang" type="radio" id="go"/>
                                            {errors.go && <div className="invalid-feedback">{errors.go}</div>}

                                            {/* Node.js */}
                                            <label htmlFor="nodejs">Node.js</label>
                                            <input
                                                value="nodejs"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.nodejs ? 'is-invalid' : ''}`}
                                                name="backLang" type="radio" id="nodejs"/>
                                            {errors.nodejs && <div className="invalid-feedback">{errors.nodejs}</div>}

                                            {/* Scala */}
                                            <label htmlFor="scala">Scala</label>
                                            <input
                                                value="scala"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.scala ? 'is-invalid' : ''}`}
                                                name="backLang" type="radio" id="scala"/>
                                            {errors.scala && <div className="invalid-feedback">{errors.scala}</div>}

                                            {/* Elixir */}
                                            <label htmlFor="elixir">Elixir</label>
                                            <input
                                                value="elixir"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.elixir ? 'is-invalid' : ''}`}
                                                name="backLang" type="radio" id="elixir"/>
                                            {errors.elixir && <div className="invalid-feedback">{errors.elixir}</div>}

                                            {/* Kotlin */}
                                            <label htmlFor="kotlin">Kotlin</label>
                                            <input
                                                value="kotlin"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.kotlin ? 'is-invalid' : ''}`}
                                                name="backLang" type="radio" id="kotlin"/>
                                            {errors.kotlin && <div className="invalid-feedback">{errors.kotlin}</div>}

                                            {/* .NET */}
                                            <label htmlFor="dotnet">.NET</label>
                                            <input
                                                value="dotnet"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.dotnet ? 'is-invalid' : ''}`}
                                                name="backLang" type="radio" id="dotnet"/>
                                            {errors.dotnet && <div className="invalid-feedback">{errors.dotnet}</div>}

                                            {/* Spring */}
                                            <label htmlFor="spring">Spring</label>
                                            <input
                                                value="spring"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.spring ? 'is-invalid' : ''}`}
                                                name="backLang" type="radio" id="spring"/>
                                            {errors.spring && <div className="invalid-feedback">{errors.spring}</div>}
                                        </div>

                                        <label><strong>Database</strong></label><hr/>
                                        <div className="form-group" >
                                            {/* MySQL */}
                                            <label htmlFor="mysql">MySQL</label>
                                            <input
                                                value="mysql"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.mysql ? 'is-invalid' : ''}`} 
                                                name="database" 
                                                type="radio" 
                                                id="mysql" />
                                            {errors.mysql && <div className="invalid-feedback">{errors.mysql}</div>}

                                            {/* PostgreSQL */}
                                            <label htmlFor="postgresql">PostgreSQL</label>
                                            <input
                                                value="postgresql"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.postgresql ? 'is-invalid' : ''}`} 
                                                name="database" 
                                                type="radio" 
                                                id="postgresql" />
                                            {errors.postgresql && <div className="invalid-feedback">{errors.postgresql}</div>}

                                            {/* MongoDB */}
                                            <label htmlFor="mongodb">MongoDB</label>
                                            <input
                                                value="mongodb"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.mongodb ? 'is-invalid' : ''}`} 
                                                name="database" 
                                                type="radio" 
                                                id="mongodb" />
                                            {errors.mongodb && <div className="invalid-feedback">{errors.mongodb}</div>}

                                            {/* SQLite */}
                                            <label htmlFor="sqlite">SQLite</label>
                                            <input
                                                value="sqlite"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.sqlite ? 'is-invalid' : ''}`} 
                                                name="database" 
                                                type="radio" 
                                                id="sqlite" />
                                            {errors.sqlite && <div className="invalid-feedback">{errors.sqlite}</div>}

                                            {/* Oracle */}
                                            <label htmlFor="oracle">Oracle</label>
                                            <input
                                                value="oracle"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.oracle ? 'is-invalid' : ''}`} 
                                                name="database" 
                                                type="radio" 
                                                id="oracle" />
                                            {errors.oracle && <div className="invalid-feedback">{errors.oracle}</div>}

                                            {/* MariaDB */}
                                            <label htmlFor="mariadb">MariaDB</label>
                                            <input
                                                value="mariadb"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.mariadb ? 'is-invalid' : ''}`} 
                                                name="database" 
                                                type="radio" 
                                                id="mariadb" />
                                            {errors.mariadb && <div className="invalid-feedback">{errors.mariadb}</div>}

                                            {/* Couchbase */}
                                            <label htmlFor="couchbase">Couchbase</label>
                                            <input
                                                value="couchbase"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.couchbase ? 'is-invalid' : ''}`} 
                                                name="database" 
                                                type="radio" 
                                                id="couchbase" />
                                            {errors.couchbase && <div className="invalid-feedback">{errors.couchbase}</div>}

                                            {/* Firebase */}
                                            <label htmlFor="firebase">Firebase</label>
                                            <input
                                                value="firebase"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.firebase ? 'is-invalid' : ''}`} 
                                                name="database" 
                                                type="radio" 
                                                id="firebase" />
                                            {errors.firebase && <div className="invalid-feedback">{errors.firebase}</div>}

                                            {/* Redis */}
                                            <label htmlFor="redis">Redis</label>
                                            <input
                                                value="redis"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.redis ? 'is-invalid' : ''}`} 
                                                name="database" 
                                                type="radio" 
                                                id="redis" />
                                            {errors.redis && <div className="invalid-feedback">{errors.redis}</div>}

                                            {/* Cassandra */}
                                            <label htmlFor="cassandra">Cassandra</label>
                                            <input
                                                value="cassandra"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.cassandra ? 'is-invalid' : ''}`} 
                                                name="database" 
                                                type="radio" 
                                                id="cassandra" />
                                            {errors.cassandra && <div className="invalid-feedback">{errors.cassandra}</div>}


                                        </div><br/>
                                        <div className="form-group">
                                            <label htmlFor="name">Client Name<sup className=" text-danger">*</sup></label>
                                            <input
                                            name="name"
                                            value={inputs.name}
                                            onChange={handleChange}
                                            className={`form-control ${errors.name ? 'is-invalid' : ''}`} placeholder="Client Name" required type="text" id="name" />
                                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone<sup className=" text-danger">*</sup></label>
                                            <input
                                             name="phone"
                                             value={inputs.phone}
                                             onChange={handleChange}
                                             className={`form-control ${errors.phone ? 'is-invalid' : ''}`} placeholder="Phone" required type="number" id="phone" />
                                            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email<sup className=" text-danger">*</sup></label>
                                            <input
                                             name="email"
                                             value={inputs.email}
                                             onChange={handleChange}
                                             className={`form-control ${errors.email ? 'is-invalid' : ''}`} placeholder="Email" required type="number" id="email" />
                                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="companyName">Client Company Name</label>
                                            <input
                                             name="companyName"
                                             value={inputs.companyName}
                                             onChange={handleChange}
                                             className={`form-control ${errors.companyName ? 'is-invalid' : ''}`} placeholder="Client Company Name" type="text" id="companyName" />
                                            {errors.companyName && <div className="invalid-feedback">{errors.companyName}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="description">Project Description<sup className=" text-danger">*</sup></label>
                                            <textarea
                                             name="description"
                                             value={inputs.description}
                                             onChange={handleChange}
                                             className={`form-control ${errors.description ? 'is-invalid' : ''}`} placeholder='Project Description' required id="description" rows="4"></textarea>
                                            {errors.description && <div className="invalid-feedback">{errors.description}</div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card card-secondary">
                                    <div className="card-header">
                                        <h3 className="card-title">Budget</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="estimatedBudget">Estimated budget<sup className=" text-danger">*</sup></label>
                                            <input
                                             name="estimatedBudget" 
                                             value={inputs.estimatedBudget}
                                             onChange={handleChange}
                                             className={`form-control ${errors.estimatedBudget ? 'is-invalid' : ''}`}required placeholder="Estimated budget" type="number" id="estimatedBudget" />
                                            {errors.estimatedBudget && <div className="invalid-feedback">{errors.estimatedBudget}</div>}
                                        </div>
                                         <div className="form-group">
                                            <label htmlFor="reciveDate">Recive Date</label>
                                            <input
                                             name="reciveDate"
                                             value={inputs.reciveDate}
                                             onChange={handleChange}
                                             className={`form-control ${errors.reciveDate ? 'is-invalid' : ''}`} placeholder="Recive Date" type="date" id="reciveDate"/>
                                            {errors.reciveDate && <div className="invalid-feedback">{errors.reciveDate}</div>}
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="eDuration">Estimated project duration</label>
                                            <input
                                             name="eDuration"
                                             value={inputs.eDuration}
                                             onChange={handleChange}
                                             className={`form-control ${errors.eDuration ? 'is-invalid' : ''}`} onClick={calDate} placeholder="Estimated duration" type="number" id="eDuration" />
                                            {errors.eDuration && <div className="invalid-feedback">{errors.eDuration}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="eEndDate">Estimated End Date</label>
                                            <input
                                             name="eEndDate"
                                             value={inputs.eEndDate}
                                             onChange={handleChange}
                                             className={`form-control ${errors.eEndDate ? 'is-invalid' : ''}`} placeholder="Estimated End Date" type="date" id="eEndDate"/>
                                            {errors.eEndDate && <div className="invalid-feedback">{errors.eEndDate}</div>}
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
