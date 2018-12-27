import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




const StudentDetails = ({location}) => {

    const {id, firstName, lastName, studyProgram} = location.state;

    return (
        <div className="col-5">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/students">
                            Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item active">Students</li>
                </ol>
            </nav>
            <div className="card">
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{id}</li>
                        <li className="list-group-item">{firstName}</li>
                        <li className="list-group-item">{lastName}</li>
                        <li className="list-group-item">{studyProgram}</li>
                    </ul>
                </div>
            </div>
        </div>
    );

};


export default StudentDetails;