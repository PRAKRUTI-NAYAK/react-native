import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1a1a1a',
    },
    box: {
        backgroundColor: 'white',
        padding: 30,
        borderRadius: 1,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 15,
        width: '100%',
        maxWidth: 400,
        textAlign: 'center',
        marginVertical: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
    },
    buttonBox: {
        flex: 1,
        marginHorizontal: 5,
        backgroundColor: '#3d3d3d',
        borderRadius: 1,
        overflow: 'hidden',
    },
    welcomeButton: {
        padding: 15,
        borderRadius: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#007bff',
        elevation: 2, 
    },
    title: {
        color: 'black',
        fontSize: 28,
        marginBottom: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    subtitle: {
        color: 'black',
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    text: {
        color: '#ffffff',
        textAlign: 'center',
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#2c2c2c',
        paddingVertical: 10,
        paddingTop: 50,
        width: '100%',
        position: 'absolute',
        top: 0,
        zIndex: 1,
    },
    navbarButton: {
        color: 'white',
        textAlign: 'center',
        fontSize: 17,
    },
    input: {
        width: '100%',
        height: 50,
        paddingHorizontal: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#444',
        borderRadius: 1,
        backgroundColor: '#3d3d3d',
        color: 'white',
    },
    button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 1,
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
    },
});

export default styles;