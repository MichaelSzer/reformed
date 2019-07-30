import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

class PlayerButton extends PureComponent {

    render(){

        const { username, character, points, containerStyle, addPoint } = this.props;

        return(
            <TouchableOpacity onPress={() => addPoint(username)} style={{...styles.viewMain, ...containerStyle}}>
                <Text style={styles.textUsername}>
                    {username}
                </Text>
                <Text style={styles.textCharacter}>
                    {character}
                </Text>
                <Text style={styles.textPoints}>
                    {points}
                </Text>
            </TouchableOpacity>
        );
    }
}

export default PlayerButton;