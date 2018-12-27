import React from 'react';
import {Link} from "react-router-dom";


const StudentItem = ({student}) => {

    return (
        <tr>
            <th scope="row">{student.id}</th>
            <td>
                <span className="text-white">{student.firstName}</span>
            </td>
            <td>
                <span className="text-white">{student.lastName}</span>
            </td>
            <td>
                <p>
                    <Link to={{
                        pathname : `/student/edit/${student.id}`,
                        state : student
                    }}>
                        <button className="btn btn-outline-info btn-sm mr-2" data-title="Edit">
                            <span className="fa fa-pencil"/>
                        </button>
                    </Link>
                    <Link to={{
                        pathname : `/student/${student.id}`,
                        state : student
                    }}>
                        <button className="btn btn-outline-warning btn-sm mr-2" data-title="View">
                            <span className="fa fa-eye"/>
                        </button>
                    </Link>
                </p>
            </td>
        </tr>
    )
};



export default StudentItem;