
export const requestBuilderModule = () => {

    const getRequest = () => request("GET");

    const deleteRequest = () => request("DELETE");

    const postRequest = body => ({...request("POST"),body});

    const request = method => {
        return {
            method,
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            }
        }
    };

    return {
        getRequest,
        deleteRequest,
        postRequest
    }
};