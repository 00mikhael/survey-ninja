import { SAVE_RESPONSE, RETRIEVE_RESPONSES, RETRIEVE_RESPONSE } from './types'

import ResponseService from '../services/response'

export const saveResponse = response => async dispatch => {
    try {
        const res = await ResponseService.saveResponse(response)
        dispatch({
            type: SAVE_RESPONSE,
            payload: res.data
        })

        return Promise.resolve(res.data)
    } catch (err) {
        return Promise.reject(err)
    }
}

export const retrieveResponses = () => async dispatch => {
    try {
        const res = await ResponseService.retrieveAll()
        dispatch({
            type: RETRIEVE_RESPONSES,
            payload: res.data.posts
        })

        return Promise.resolve(res)
    } catch (err) {
        return Promise.reject(err)
    }
}

export const retrieveResponse = designation => async dispatch => {
    try {
        const res = await ResponseService.getByDesignation(designation)
        dispatch({
            type: RETRIEVE_RESPONSE,
            payload: res.data
        })

        return Promise.resolve(res)
    } catch (err) {
        return Promise.reject(err)
    }
}
