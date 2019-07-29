import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    viewMain: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    viewKey: {
        width: '100%',
        height: 110,
        backgroundColor: '#eee',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },

    viewPointsToWin: {
        width: '100%',
        height: 50,
        backgroundColor: '#eee',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    textKey: {
        fontSize: 24,
        textAlign: 'center'
    },

    textPointsToWin: {
        fontSize: 16,
        textAlign: 'left',
        marginLeft: 12
    },

    inputTextKey: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 16,
        backgroundColor: 'white',
        fontSize: 14,
        width: 120,
        textAlign: 'center'
    },

    inputPointsToWin: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 16,
        backgroundColor: 'white',
        fontSize: 14,
        width: 80,
        height: 40,
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
    },

    scrollView: {
        width: '100%',
        maxHeight: '60%'
    }
});

export default styles;