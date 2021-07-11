import {
    SAVE_RESPONSE,
    RETRIEVE_RESPONSE_LIST,
    RETRIEVE_RESPONSE_ITEM
} from './type'

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

export const retrieveResponseItem = designation => async dispatch => {
    dispatch({
        type: RETRIEVE_RESPONSE_ITEM,
        payload: {
            designation
        }
    })
    try {
        const res = await ResponseService.getByDesignation(designation)
        dispatch({
            type: RETRIEVE_RESPONSE_ITEM,
            payload: {
                designation,
                data: res.data
            }
        })
        return Promise.resolve(res)
    } catch (err) {
        return Promise.reject(err)
    }
}

export const retrieveResponseList = () => async dispatch => {
    try {
        const res = await ResponseService.retrieveResponseList()
        dispatch({
            type: RETRIEVE_RESPONSE_LIST,
            payload: res.data.responseList
        })
    } catch (err) {
        console.log(err)
    }
}
