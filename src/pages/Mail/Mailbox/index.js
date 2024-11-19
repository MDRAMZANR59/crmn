import React,{useState} from "react";
import { Link } from 'react-router-dom';
import AdminLayout from '../../../layouts/AdminLayout';
import MailList from './MailList';
import SentMail from "../SentMail";
import Trash from "../Trash";
function MailBox() {
    // const [header, setHeader ] = useState("inbox");
    const [mailType, setMailType ] = useState("inbox");
    const changeTab=(e)=>{
        setMailType(e)
    }
    return (
        <AdminLayout>
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Inbox</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><Link to="/">Mail</Link></li>
                                    <li className="breadcrumb-item active">Inbox</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main content */}
                <section className="content">
                    <div className="row">
                        <div className="col-md-3">
                            <Link to='/mail/mailbox/compose' className="btn btn-primary btn-block mb-3">Compose</Link>
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Mail Box</h3>
                                </div>
                                <div className="card-body p-0">
                                    <ul className="nav nav-pills flex-column">
                                        <li className="nav-item active">
                                            <button onClick={(e)=>{changeTab('inbox')}} className="nav-link">
                                                <i className="fas fa-inbox"></i> Inbox
                                            </button>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <button onClick={(e)=>{changeTab('sent')}} className="nav-link">
                                                <i className="fas fa-envelope"></i> Sent
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button onClick={(e)=>{changeTab('trash')}} className="nav-link">
                                                <i className="fas fa-envelope"></i> Trash
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* /.col */}
                        <div className="col-md-9">
                            {mailType=='inbox' && 
                                <MailList name="mail Inbox" />
                            }
                            {mailType=='sent' && 
                                <SentMail name="Sent mail" />
                            }
                            {mailType=='trash' && 
                                <Trash name="Trash mail" />
                            }
                           
                        </div>
                    </div>
                </section>
            </div>
        </AdminLayout>
    );
}

export default MailBox;
