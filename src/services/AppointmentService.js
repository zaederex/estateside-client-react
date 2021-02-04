const userUrl = `${process.env.REACT_APP_PROXY_URL}/api/users`;
const propertyUrl = `${process.env.REACT_APP_PROXY_URL}/api/properties`;

const findAppointmentsForProperty = (propertyId) => {
    return (
        fetch(`${propertyUrl}/${propertyId}/appointments`)
            .then(response => response.json())
    )
}

const findAppointmentsForUser = (userId) => {
    return (
        fetch(`${userUrl}/${userId}/appointments`)
            .then(response => response.json())
    )
}

const createAppointmentForProperty = (zpid, appointment) => {
    return (
        fetch(`${propertyUrl}/${zpid}/appointments`, {
            method: "POST",
            body: JSON.stringify(appointment),
            headers: {"content-type": "application/json"}
        })
            .then(response => response.json())
    )
}

const createAppointmentForUser = (userId, appointment) => {
    return (
        fetch(`${userUrl}/${userId}/appointments`, {
            method: "POST",
            body: JSON.stringify(appointment),
            headers: {"content-type": "application/json"}
        })
            .then(response => response.json())
    )
}

const deleteAppointment = (zpid, userId) => {
    return (
        fetch(`${propertyUrl}/${zpid}/appointments/${userId}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    )
}

export default {
    findAppointmentsForProperty,
    findAppointmentsForUser,
    createAppointmentForProperty,
    createAppointmentForUser,
    deleteAppointment
}
