import {requestBuilderModule} from "../helpers/requestBuilder";
import {fetcherModule} from "../helpers/fetcher";

const requestBuilder = requestBuilderModule();
const fetcher = fetcherModule();

export const studyProgramServiceModule = () => {

    const getAllStudyPrograms = () =>
        fetcher
            .fetchResults('http://localhost:8080/study_programs', requestBuilder.getRequest());

    const deleteStudyProgram = id =>
        fetcher
            .fetchResults(`http://localhost:8080/study_programs/${id}`, requestBuilder.deleteRequest());

    const addStudyProgram = studyProgram =>
        addOrUpdateStudyProgram(studyProgram);

    const updateStudyProgram = studyProgram =>
        addOrUpdateStudyProgram(studyProgram);

    const addOrUpdateStudyProgram = studyProgram =>
        fetcher
            .fetchResults('http://localhost:8080/study_programs', requestBuilder.postRequest(JSON.stringify(studyProgram)));

    return {
        getAllStudyPrograms,
        deleteStudyProgram,
        addStudyProgram,
        updateStudyProgram
    }


};