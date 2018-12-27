import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const StudyProgramItem = ({studyProgram, deleteStudyProgram}) => {

    const removeStudyProgram = () => {
        deleteStudyProgram(studyProgram);
    };

    return (
        <tr>
            <th scope="row">{studyProgram.id}</th>
            <td>
                <span className="text-white">{studyProgram.name}</span>
            </td>
            <td>
                <p>
                    <Link to={{
                        pathname : `studyProgram/edit/${studyProgram.id}`,
                        state : studyProgram
                    }}>
                        <button className="btn btn-outline-info btn-sm mr-2" data-title="Edit">
                            <span className="fa fa-pencil"/>
                        </button>
                    </Link>
                    <button className="btn btn-outline-danger btn-sm" data-title="Delete" onClick={removeStudyProgram}>
                        <span className="fa fa-trash"/>
                    </button>
                </p>
            </td>
        </tr>
    )

};


export default StudyProgramItem;