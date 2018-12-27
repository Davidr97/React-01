import React from 'react';
import StudentItem from './StudentItem';
import StudyProgramItem from "./StudyProgramItem";
import {Link} from "react-router-dom";


const StudentsList = ({students}) => {
    if(students) {
        return (
            <div className="col-5 mb-4">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">Home</li>
                        <li className="breadcrumb-item active" aria-current="page">Students</li>
                    </ol>
                </nav>
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col"/>
                    </tr>
                    </thead>
                    <tbody>
                        {students.map(student => <StudentItem key={student.id} student={student}/>)}
                    </tbody>

                </table>
                <div className="text-center">
                    <Link to='/students/addNew'>
                        <input type="submit" className="btn btn-info" value="Add student"/>
                    </Link>
                </div>
            </div>
        )
    }else{
        return null;
    }
};



export default StudentsList;