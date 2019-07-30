import React, { Component } from 'react';
import { View, TextInput, Text, Button, ActivityIndicator, ScrollView, Alert } from 'react-native';
import { connect } from 'react-redux';
import { getGameConfiguration } from '../../redux/selectors/gameConfigurationSelectors';
import { configureGame } from '../../redux/actions/configureGameActions';
import CheckUsers from '../../utils/CheckUsers';
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
                username: 'Michael',
                character: 'Martha'
            };
    }

    generateUserComponent = () => {
        usersComponent = [];

        for(let i = 0; i < this.state.numberOfUser; i++)
            usersComponent.push([
                <PlayerConfigComp title={`User ${i+1}`} key={0} user={this.users[i]} 
                    handleOnChangeTextUsername={this.handleTextUsernameChange(i)}
                    handleOnChangeTextCharacter={this.handleTextCharacterChange(i)}
                />,
                <View style={{ height: 20 }} key={1} />   
            ]);

        return usersComponent;
    }

    componentDidUpdate(){
        
        const { status, error } = this.props.gameConfiguration;

        if(this.submitted && status === 'ERROR'){
            Alert.alert('Error', error);
            this.submitted = false;
            this.setState({ textKey: '' });
        }else if(status === 'SUCCESS'){
            this.props.navigation.navigate('GameMain');
        }
    }

    render(){

        const { status, error } = this.props.gameConfiguration;
        console.log(status);

        if(status === 'FETCHING'){
            return(
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size={'large'} color={'green'} />
                </View>
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

    submitted = false;
    submitGameSettings = () => {

        const { textKey, textPointToWin } = this.state;

        if(textKey.length !== 6){
            Alert.alert('Ingrese la llave del juego', 'La llave del juego no fue ingresada de manera correcta.');
            return;
        }

        if(textPointToWin === ''){
            Alert.alert('Ingrese la cantidad de puntos para ganar', 'La cantidad de puntos para ganar no fue ingresada de manera correcta.');
            return;
        }

        if(!CheckUsers(this.users)){
            Alert.alert('Complete la información de los usuarios', 'Complete toda la información de los usuarios para poder continuar.');
            return;
        }

        this.submitted = true;

        const objUsers = {};
        this.users.forEach(user => {
            objUsers[user.username] = {...user};
            delete objUsers[user.username].username;
        });

        this.props.configureGame(textKey, textPointToWin, this.state.numberOfUser, objUsers);
    }
}

export default connect((state) => ({
    gameConfiguration: getGameConfiguration(state)
}), { configureGame })(GameConfigurationScreen);