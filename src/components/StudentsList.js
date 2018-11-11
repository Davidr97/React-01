import React from 'react';
import StudentItem from './StudentItem';


const StudentsList = ({students, showStudent}) => {
    return (

        students.map(student => <StudentItem key={student.id} student={student} showStudent={showStudent}/>)

    )
};



export default StudentsList;