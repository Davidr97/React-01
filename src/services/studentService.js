import {requestBuilderModule} from "../helpers/requestBuilder";
import {fetcherModule} from "../helpers/fetcher";

const requestBuilder = requestBuilderModule();
const fetcher = fetcherModule();

export const studentServiceModule = () => {

    const getAllStudents = () =>
        fetcher
            .fetchResults('http://localhost:8080/students', requestBuilder.getRequest());


    const getStudent = id =>
        fetcher
            .fetchResults(`http://localhost:8080/students/${id}`, requestBuilder.getRequest());

    const getAllStudentsInStudyProgram = id =>
        fetcher
            .fetchResults(`http://localhost:8080/students/by_study_program/${id}`, requestBuilder.getRequest());

    const addStudent = student =>
        fetcher
            .postResults('http://localhost:8080/students', requestBuilder.postRequest(JSON.stringify(student)));


    return {
        getAllStudents,
        getStudent,
        getAllStudentsInStudyProgram,
        addStudent
    }

};