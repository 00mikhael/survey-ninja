import {
    SAVE_RESPONSE,
    RETRIEVE_RESPONSES,
    RETRIEVE_RESPONSE
} from '../actions/type'

const initialState = null

const responseReducer = (responses = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case SAVE_RESPONSE:
            if (responses) {
                return [payload, ...responses]
            }
            return [payload]
        case RETRIEVE_RESPONSES:
            return payload
        case RETRIEVE_RESPONSE:
            return
        default:
            return responses
    }
}

export default responseReducer
