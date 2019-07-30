import { combineReducers } from 'redux';
import gameConfigurationReducer from './gameConfigurationReducer';
import gameSettingsReducer from './gameSettingsReducer';
import pointsReducer from './pointsReducer';

export default rootReducer = combineReducers(
    {
        gameConfiguration: gameConfigurationReducer,
        gameSettings: gameSettingsReducer,
        points: pointsReducer
    }
);