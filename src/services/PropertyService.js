const propertyUrl = `${process.env.REACT_APP_PROXY_URL}/api/properties`; // server property
                                                                         // endpoint to be
                                                                         // finalized
const userUrl = `${process.env.REACT_APP_PROXY_URL}/api/users`; // user property endpoint to be
                                                                // finalized

const findPropertiesForCity = (location, offset = 0) => {
    return (
        fetch(`${propertyUrl}?location=${location}&offset=${offset}`)
            .then(response => response.json())
    )
}

const findPropertyById = (propertyId) => {
    return (
        fetch(`${propertyUrl}/${propertyId}`)
            .then(response => response.json())
    )
}


const findSpecificPropertyById = (propertyId) => {
    return (
        fetch(`${propertyUrl}/bridge/${propertyId}`)
            .then(response => response.json())
    )
}

const createProperty = (property) => {
    return (
        fetch(propertyUrl, {
            method: "POST",
            body: JSON.stringify(property),
            headers: {"content-type": "application/json"}
        })
            .then(response => response.json())
    )
}

const deleteProperty = (propertyId) => {
    return (
        fetch(`${propertyUrl}/${propertyId}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    )
}

const updateProperty = (propertyId, property) => {
    return (
        fetch(`${propertyUrl}/${propertyId}`, {
            method: "PUT",
            body: JSON.stringify(property),
            headers: {"content-type": "application/json"}
        })
            .then(response => response.json())
    )
}

// return hosted properties for a landlord
const findHostedProperties = (userId) => {
    return (
        fetch(`${userUrl}/${userId}/properties`)
            .then(response => response.json())
    )
}

// return favourite properties for a specific user (customer)
const findFavouriteProperties = (userId) => {
    return (
        fetch(`${userUrl}/${userId}/favourites`)
            .then(response => {
                return response.json()
            })
    )
}

// mark a property as favourite for a user
const createFavProperty = (userId, zpid) => {
    const favMapping = {"userId": userId, "zpid": zpid};
    return (
        fetch(`${propertyUrl}/addFav`, {
            method: "POST",
            body: JSON.stringify(favMapping),
            headers: {"content-type": "application/json"}
        })
            .then(response => response.json())
    )
}

// unmark a favourite property for a user
const deleteFavProperty = (userId, zpid) => {
    return (
        fetch(`${propertyUrl}/${zpid}/favourites/${userId}`, {
            method: "DELETE",
        })
            .then(response => response.json())
    )
}

const isPropertyFavouritesForUser = (userId, zpid) => {
    return (
        fetch(`${propertyUrl}/${zpid}/favourites/${userId}`)
            .then(response => {
                return response.json()
            })
    )
}

const countInterestedUsers = (zpid) => {
    return (
        fetch(`${propertyUrl}/${zpid}/favourites/`)
            .then(response => {
                return response.json()
            })
    )
}

export default {
    findPropertiesForCity,
    findPropertyById,
    createProperty,
    deleteProperty,
    updateProperty,
    findHostedProperties,
    createFavProperty,
    deleteFavProperty,
    findFavouriteProperties,
    isPropertyFavouritesForUser,
    countInterestedUsers,
    findSpecificPropertyById
}
