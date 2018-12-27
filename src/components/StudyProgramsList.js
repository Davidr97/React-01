import React from 'react';
import StudyProgramItem from "./StudyProgramItem";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const StudyProgramsList = ({valid,studyPrograms, addStudyProgram, deleteStudyProgram}) => {

    const invalid = valid ? '' : <div className="bg-danger py-3 text-center text-white">
        The study program already has students.
    </div>;

    if(studyPrograms) {
        return (
            <div className="col-5 mb-4">
                {invalid}
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">Home</li>
                        <li className="breadcrumb-item active" aria-current="page">Study programs</li>
                    </ol>
                </nav>
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>

                        <th scope="col"/>
                    </tr>
                    </thead>
                    <tbody>
                    {studyPrograms.map(s => <StudyProgramItem key={s.id} studyProgram={s} addStudyProgram={addStudyProgram}
                                                                        deleteStudyProgram={deleteStudyProgram}/>)}
                    </tbody>

                </table>
                <div className="text-center">
                    <Link to='/studyPrograms/addNew'>
                        <input type="submit" className="btn btn-info" value="Add study program"/>
                    </Link>
                </div>
            </div>
        )
    }else{
        return null;
    }
};

export default StudyProgramsList;