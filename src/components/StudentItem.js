import React from 'react';


const StudentItem = ({student, showStudent}) => {

    const showStudentWithId = () => {
        showStudent(student.id);
    };

    return (

        <tr>
            <th scope="row">{student.id}</th>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>
                <p>
                    <button className="btn btn-outline-info btn-sm" data-title="Edit" onClick={showStudentWithId}>
                        <span className="fa fa-pencil"/>
                    </button>
                </p>
            </td>
        </tr>

    )
};



export default StudentItem;