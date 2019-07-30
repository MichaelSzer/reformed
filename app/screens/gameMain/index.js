import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import PlayerButton from '../../components/playerButton';
import { requestAddPoint } from '../../redux/actions/pointsAction';
import { getPoints } from '../../redux/selectors/pointsSelectors';
import { getGameSettings } from '../../redux/selectors/gameSettingsSelectors';

class GameMainScreen extends PureComponent {

    generatePlayerButtons = () => {

        const { users } = this.props.gameSettings;
        console.log(users);
        const userComponents = [];
        for(let i = 0; i < Object.keys(users).length; i++){
            const user = users[Object.keys(users)[i]];
            const username = Object.keys(users)[i];
            userComponents.push(<PlayerButton addPoint={this.addPoint} points={this.props.points[username]} username={`${username}`} character={`${user.character}`} key={i} />);
        }

        const viewTwoPlayersComponents = [];
        for(i = 0; i < userComponents.length; i += 2){
            viewTwoPlayersComponents.push(
                <View style={styles.viewTwoPlayersButton} key={i}>
                    {
                        (i+1 < userComponents.length? [userComponents[i], userComponents[i+1]] : userComponents[i])
                    }
                </View>
            );
        }

        return viewTwoPlayersComponents;
    }

    addPoint = (username) => {
        this.props.requestAddPoint(username);
    }

    render(){

        console.log(this.props.points);

        return(
            <View style={styles.viewMain}>
                {
                    this.generatePlayerButtons()
                }
            </View>
        );
    }
}

export default connect((state) => ({ 
    points: getPoints(state),
    gameSettings: getGameSettings(state)
}), { requestAddPoint })(GameMainScreen);