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

        const { title } = this.props;
        const { username, character } = this.state;

        return(
            <View style={styles.viewMain}>
                <Text style={styles.textUserNumber}>
                    {`${title}`}
                </Text>
                <View style={{ height: 16 }} />
                <TextInput 
                    onChangeText={this.handleOnChangeTextUsername}
                    style={styles.inputText}
                    placeholder={'Username'}
                    value={username}
                />
                <View style={{ height: 6 }} />
                <TextInput 
                    onChangeText={this.handleOnChangeTextCharacter}
                    style={styles.inputText}
                    placeholder={'Character'}
                    value={character}
                />
                <View style={{ height: 10 }} />
            </View>
        );
    }

    static getDerivedStateFromProps(props, state){
        const { user } = props;

        return {
            username: user.username,
            character: user.character
        }
    }
}

export default PlayerConfig;