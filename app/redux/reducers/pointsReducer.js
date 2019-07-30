import * as pointsActionTypes from '../actionTypes/pointsActionTypes';

const pointsReducer = (state = {}, action) => {

    switch(action.type){

        case pointsActionTypes.INITIATE_POINTS:
            const points = {};
            action.payload.usernames.forEach( username => {
                points[username] = 0;
            })
            return points;

        case pointsActionTypes.ADD_POINT:
            const username = action.payload.username;
            return {
                ...state,
                [username]: state.users[username] + 1
            }

        default:
            return state;
    }
}

export default pointsReducer;