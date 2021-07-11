import http from './http'

export const saveResponse = data => {
    return http().post('/api/responseList', data)
}

export const retrieveResponseList = async () => {
    return http().get('/api/responseList')
}

export const getByDesignation = designation => {
    return http().get(`/api/responseList/${designation}`)
}

const ResponseService = {
    saveResponse,
    retrieveResponseList,
    getByDesignation
}

export default ResponseService
