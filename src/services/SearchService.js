// const propertyUrl = `${process.env.REACT_APP_PROXY_URL}`

export const getSearchResults = async (searchQuery) => {
    const svrUrl = "http://localhost:3000/properties/";
    const url = ``;
    const response = await fetch(svrUrl + url);
    let searchResults = await response.json();

    return searchResults;
}
