import * as configureGameActionTypes from '../actionTypes/configureGameActionTypes';
import { setGameSettings } from './gameSettingsActions';
import { initiatePoints } from './pointsAction';
import axios from 'axios';

const fetchServer = () => ({ type: configureGameActionTypes.FETCHING_SERVER });

const successConfiguration = () => ({ type: configureGameActionTypes.SUCCESS_CONFIGURATION });

const errorConfiguration = (error) => ({ type: configureGameActionTypes.ERROR_CONFIGURATION, payload: { error } });

export const configureGame = (key, pointsToWin, numberOfUsers, users) => (dispatch) => {

    dispatch(fetchServer());

    const httpConfig = {
        method: 'POST',
        url: `http://192.168.0.125:8080/games/${key}/setGamemaster`,
        data: {
            pointsToWin,
            users,
            numberOfUsers
        }
    };

    axios(httpConfig).then( res => {
        dispatch(successConfiguration());
        dispatch(setGameSettings(users, pointsToWin, numberOfUsers, key));

        const usernames = Object.keys(users);
        dispatch(initiatePoints(usernames));
    }).catch( err => {
        console.log(err.response.data);
        dispatch(errorConfiguration(err.response.data.error));
    });
}