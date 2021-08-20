import { GET_CONTINENTS_FAIL, GET_CONTINENTS_REQUEST, GET_CONTINENTS_SUCCESS } from '../types'
import axios from 'axios'

export const getContinentsAction = () => async dispatch => {
    try {
        dispatch(getContinentsRequest)
        
        const res = await axios.get('https://corona.lmao.ninja/v2/continents?yesterday=true&sort')
        // console.log(res)
        dispatch(getContinentsSuccess(res.data))
    } catch (error) {
        console.log(error.response)
        dispatch(getContinentsError(error))
    }
}

export const getContinentsRequest = () => {
    return {
        type: GET_CONTINENTS_REQUEST
    }
}

export const getContinentsSuccess = (data) => {
    return {
        type: GET_CONTINENTS_SUCCESS,
        payload: data
    }
}

export const getContinentsError = (error) => {
    return {
        type: GET_CONTINENTS_FAIL,
        payload: error
    }
}
