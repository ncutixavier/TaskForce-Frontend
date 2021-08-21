import { GET_CONTINENTS_FAIL, GET_CONTINENTS_REQUEST, GET_CONTINENTS_SUCCESS } from '../types'

const initialState = {
    loading: false,
    data: [],
    error: ''
}

/*
*@ params state
*@ params action
*/

const getContinentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTINENTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_CONTINENTS_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case GET_CONTINENTS_FAIL:
            return {
                loading: false,
                data: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default getContinentsReducer
