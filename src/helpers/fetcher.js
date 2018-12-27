
export const fetcherModule = () => {

    const fetchResults = (url, type) => fetch(url, type)
        .then(response => response.json());

    const postResults = (url, type) => fetch(url, type);

    return {
        fetchResults,
        postResults
    }
};