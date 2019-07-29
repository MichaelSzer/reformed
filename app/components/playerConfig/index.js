import React, { PureComponent } from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';

class PlayerConfig extends PureComponent {

    state = {
        username: '',
        character: ''
    }

    handleOnChangeTextUsername = (text) => {
        const { handleOnChangeTextUsername } = this.props;

        handleOnChangeTextUsername(text);
        this.setState({ username: text });
    }

    handleOnChangeTextCharacter = (text) => {
        const { handleOnChangeTextCharacter } = this.props;

        handleOnChangeTextCharacter(text);
        this.setState({ character: text });
    }

    render(){

        const { userTitle } = this.props;

        return(
            <View style={styles.viewMain}>
                <Text style={styles.textUserNumber}>
                    {`${userTitle}`}
                </Text>
                <View style={{ height: 16 }} />
                <TextInput 
                    onChangeText={this.handleOnChangeTextUsername}
                    style={styles.inputText}
                    placeholder={'Username'}
                />
                <View style={{ height: 6 }} />
                <TextInput 
                    onChangeText={this.handleOnChangeTextCharacter}
                    style={styles.inputText}
                    placeholder={'Character'}
                />
                <View style={{ height: 10 }} />
            </View>
        );
    }
}

export default PlayerConfig;