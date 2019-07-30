import { createSwitchNavigator } from 'react-navigation';
import GameConfigurationScreen from '../screens/gameConfiguration';
import GameMainScreen from '../screens/gameMain';

const MainSwitchNavigator = createSwitchNavigator(
    {
        GameConfiguration: { 
            screen: GameConfigurationScreen
        },

        GameMain: {
            screen: GameMainScreen
        }
    },
    {
        initialRouteName: 'GameConfiguration'
    }
);

export default MainSwitchNavigator;