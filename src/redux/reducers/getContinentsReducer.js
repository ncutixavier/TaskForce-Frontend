import { GET_CONTINENTS_FAIL, GET_CONTINENTS_REQUEST, GET_CONTINENTS_SUCCESS } from '../types'

const initialState = {
    loading: 'block',
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
                loading: 'block'
            }
        case GET_CONTINENTS_SUCCESS:
            return {
                loading: 'none',
                data: action.payload,
                error: ''
            }
        case GET_CONTINENTS_FAIL:
            return {
                loading: 'none',
                data: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default getContinentsReducer
