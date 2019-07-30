import axios from 'axios';
import * as pointsActionTypes from '../actionTypes/pointsActionTypes';
import { getGameSettings } from '../selectors/gameSettingsSelectors';

const addPoint = (username) => ({
    type: pointsActionTypes.ADD_POINT,
    payload: {
        username
    }
});

export const initiatePoints = (usernames) => ({
    type: pointsActionTypes.INITIATE_POINTS,
    payload: {
        usernames
    }
});

export const requestAddPoint = (username) => (dispatch, getState) => {

    const gameSettings = getGameSettings(getState());

    const httpConfig = {
        method: 'POST',
        url: `http://192.168.0.125:8080/games/${gameSettings.gameKey}/addPoint`,
        data: {
            username
        }
    };

    axios(httpConfig).then( res => {
        dispatch(addPoint(username));
    }).catch( err => {
        console.log(err.response.data);
    });
}