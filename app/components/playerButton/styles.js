import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    viewMain: {
        width: '45%',
        height: 200,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#42A5F5',

        // Border
        borderRadius: 30,
        borderWidth: 3,
        borderColor: 'white'
    },

    textUsername: {
        fontSize: 24,
        color: 'white',
        textDecorationLine: 'underline',
        marginTop: 10
    },

    textCharacter: {
        fontSize: 18,
        color: 'white',
        marginTop: 4
    },
    
    textPoints: {
        fontSize: 44,
        color: 'white',
        marginTop: 'auto',
        marginBottom: 'auto'
    }
});

export default styles;