import * as gameSettingsActionTypes from '../actionTypes/gameSettingsActionTypes';

const gameSettingsReducer = (state = { users: {}, pointsToWin: 0, numberOfUsers: 0, gameKey: 123456 }, action) => {

    switch(action.type){

        case gameSettingsActionTypes.SET_GAME_SETTINGS:
            return {
                ...state,
                pointsToWin: action.payload.pointsToWin,
                users: action.payload.users,
                numberOfUsers: action.payload.numberOfUsers,
                gameKey: action.payload.gameKey
            }

        default:
            return state;
    }
}

export default gameSettingsReducer;