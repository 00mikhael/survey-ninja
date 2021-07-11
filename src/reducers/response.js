import {
    SAVE_RESPONSE,
    RETRIEVE_RESPONSE_LIST,
    RETRIEVE_RESPONSE_ITEM
} from '../actions/type'

const initialState = { responseList: null, currentResponse: null }

const responseReducer = (responses = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case SAVE_RESPONSE:
            if (responses.responseList) {
                return {
                    currentResponse: payload,
                    responseList: [payload, ...responses.responseList]
                }
            }
            return { currentResponse: null, responseList: payload }
        case RETRIEVE_RESPONSE_LIST:
            return { currentResponse: null, responseList: payload }
        case RETRIEVE_RESPONSE_ITEM:
            if (payload.data) {
                return { ...responses, currentResponse: payload.data }
            }
            let response = null
            if (payload.designation) {
                response = responses.responseList?.find(resp => {
                    return (
                        resp.designation.toLowerCase() ===
                        payload.designation.toLowerCase()
                    )
                })
            }
            return { ...responses, currentResponse: response }
        default:
            return responses
    }
}

export default responseReducer
