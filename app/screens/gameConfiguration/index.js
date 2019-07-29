import React, { Component } from 'react';
import { View, TextInput, Text, Button, ActivityIndicator, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { getGameConfiguration } from '../../redux/selectors/gameConfigurationSelectors';
import PlayerConfigComp from '../../components/playerConfig';
import styles from './styles.js';

class GameConfigurationScreen extends Component {
    
    state = {
        textKey: '',
        textPointToWin: '',
        numberOfUser: 3
    }

    constructor(props){
        super(props);

        this.usersConstructor();
    }

    users = [];

    handleTextKeyChange = (text) => {
        this.setState({ textKey: text });
    }

    handleTextPointsToWinChange = (text) => {
        this.setState({ textPointToWin: text });
    }

    handleTextUsernameChange = (userNumber) => (text) => {
        this.users[userNumber].username = text;
    }

    handleTextCharacterChange = (userNumber) => (text) => {
        this.users[userNumber].character = text;
    }

    usersConstructor = () => {
        for(let i = 0; i < this.state.numberOfUser; i++)
            this.users[i] = {
                username: '',
                character: ''
            };
    }

    generateUserComponent = () => {
        usersComponent = [];

        for(let i = 0; i < this.state.numberOfUser; i++)
            usersComponent.push([
                <PlayerConfigComp userTitle={`User ${i+1}`} key={0} 
                    handleOnChangeTextUsername={this.handleTextUsernameChange(i)}
                    handleOnChangeTextCharacter={this.handleTextCharacterChange(i)}
                />,
                <View style={{ height: 20 }} key={1} />   
            ]);

        return usersComponent;
    }

    render(){

        const { status } = this.props.gameConfiguration;

        if(status === 'FETCHING'){
            return(
                <ActivityIndicator size={'small'} color={'green'} />
            );
        }

        return(
            <View style={styles.viewMain}>
                <ScrollView style={styles.scrollView} contentContainerStyle={{ alignItems: 'center' }} >
                    <View style={{ height: 10 }} />
                    {
                    this.generateUserComponent()
                    }    
                </ScrollView>            
                <View style={{ height: 30 }} />
                <View style={{ height: 30 }} />
                <View style={styles.viewPointsToWin}>
                    <Text style={styles.textPointsToWin}>
                        {'Number of Points to Win:'}
                    </Text>
                    <TextInput 
                        keyboardType={'number-pad'}
                        maxLength={2}
                        style={styles.inputPointsToWin}
                        placeholder={'5'}
                        value={this.state.textPointToWin}
                        onChangeText={this.handleTextPointsToWinChange}
                    />
                </View>
                <View style={styles.viewKey}>
                    <Text style={styles.textKey}>
                        {'Key'}
                    </Text>
                    <TextInput 
                        keyboardType={'number-pad'}
                        maxLength={6}
                        style={styles.inputTextKey}
                        placeholder={'123401'}
                        value={this.state.textKey}
                        onChangeText={this.handleTextKeyChange}
                    />
                </View>
                <View style={{ height: 20 }} />
                <Button title={'Empezar'}
                        onPress={this.submitGameSettings} />
            </View>
        );
    }

    submitGameSettings = () => {
        console.log(this.users);
    }
}

export default connect((state) => ({
    gameConfiguration: getGameConfiguration(state)
}))(GameConfigurationScreen);