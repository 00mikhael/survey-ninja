import http from './http'

export const saveResponse = data => {
    return http().post('/api/responses', data)
}

export const retrieveAll = async () => {
    return http().get('/api/responses')
}

export const getByDesignation = designation => {
    return http().get(`/api/responses/${designation}`)
}

const ResponseService = {
    saveResponse,
    retrieveAll,
    getByDesignation
}

export default ResponseService
