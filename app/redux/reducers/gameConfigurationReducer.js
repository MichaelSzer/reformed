import * as configureGameActionTypes from '../actionTypes/configureGameActionTypes';

const gameConfigurationReducer = (state = { status: 'NONE', error: '' }, action) => {
    switch(action.type){

        case configureGameActionTypes.FETCHING_SERVER:
            return {
                ...state,
                status: 'FETCHING'
            };

        case configureGameActionTypes.ERROR_CONFIGURATION:
                return {
                    ...state,
                    status: 'ERROR',
                    error: action.payload.error
                };
        
        case configureGameActionTypes.SUCCESS_CONFIGURATION:
            return {
                ...state,
                status: 'SUCCESS',
                error: ''
            };

        default:
            return state;
    }
}

export default gameConfigurationReducer;