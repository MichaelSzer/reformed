import * as gameSettingsActionTypes from '../actionTypes/gameSettingsActionTypes';

export const setGameSettings = (users, pointsToWin, numberOfUsers, gameKey) => ({
    type: gameSettingsActionTypes.SET_GAME_SETTINGS,
    payload: {
        users,
        pointsToWin,
        numberOfUsers,
        gameKey
    }
});