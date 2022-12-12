import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#272727',
    },
    logo: {
        backgroundColor: '#0D0D0D',
        alignItems: 'center',
        justifyContent: 'center',
        height: 219,
        paddingTop: 20,
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: -28,
        marginBottom: 12,
        paddingHorizontal: 24,
    },
    buttonText: {
        color: '#FDFCFE',
        fontSize: 24,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1e6f9f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        flex: 1,
        height: 54,
        backgroundColor: '#262626',
        borderRadius: 5,
        color: '#FDFCFE',
        padding: 16,
        marginRight: 12,
        borderColor: '#000',
        borderWidth: 1,
    },
    status: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 24,
        justifyContent: 'space-between',
        marginBottom: 24,
        marginTop: 16,
    },
    statusItem: {
        flexDirection: 'row',
    },
    statusCreate: {
        color: '#4EA8DE',
        fontSize: 16,
        marginRight: 12,
        fontWeight: 'bold',
    },
    statusDone: {
        color: '#8284FA',
        fontSize: 16,
        marginRight: 12,
        fontWeight: 'bold',
    },

    statusBadge: {
        borderRadius: 10,
        backgroundColor: '#808080',
        paddingRight: 8,
        paddingLeft: 8,
        color: '#FDFCFE',
        fontWeight: 'bold',
    },
});