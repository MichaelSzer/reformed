import * as configureGameActionTypes from '../actionTypes/configureGameActionTypes';
import axios from 'axios';

const fetchServer = () => ({ type: configureGameActionTypes.FETCHING_SERVER });

const successConfiguration = () => ({ type: configureGameActionTypes.SUCCESS_CONFIGURATION });

const errorConfiguration = (error) => ({ type: configureGameActionTypes.ERROR_CONFIGURATION, payload: { error } });

export const configureGame = (key, pointsToWin, users) => (dispatch) => {

    dispatch(fetchServer());

    const httpConfig = {
        method: 'POST',
        url: `http://192.168.0.125:8080/games/${key}/setGamemaster`,
        data: {
            pointsToWin,
            users
        }
    };

    axios(httpConfig).then( res => {
        dispatch(successConfiguration());
    }).catch( err => {
        console.log(err.data);
        dispatch(errorConfiguration(err.data.error));
    });
}