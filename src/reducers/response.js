import {
    SAVE_RESPONSE,
    RETRIEVE_RESPONSES,
    RETRIEVE_RESPONSE,
    UPDATE_RESPONSE
} from '../actions/type'

const initialState = { responseList: null, currentResponse: null }

const responseReducer = (responses = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case SAVE_RESPONSE:
            if (responses.responseList) {
                return {
                    currentResponse: null,
                    responseList: [payload, ...responses.responseList]
                }
            }
            return { currentResponse: null, responseList: [payload] }
        case RETRIEVE_RESPONSES:
            return payload
        case RETRIEVE_RESPONSE:
            if (payload.data) {
                return { ...responses, currentResponse: payload.data }
            }
            let response = null
            if (payload.designation) {
                response = responses.responseList.find(resp => {
                    return (
                        resp.designation.toLowerCase() ===
                        payload.designation.toLowerCase()
                    )
                })
            }

            return { ...responses, currentResponse: response }
        case UPDATE_RESPONSE:
            if (payload.data) {
                return {
                    ...responses,
                    currentResponse: {
                        ...responses.currentResponse,
                        ...payload.data
                    }
                }
            }
            return responses
        default:
            return responses
    }
}

export default responseReducer
