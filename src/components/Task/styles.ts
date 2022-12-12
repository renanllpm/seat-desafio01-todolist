import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
        borderRadius: 5,
        padding: 12,
        marginRight: 24,
        marginLeft: 24,
        flexDirection: 'row',
        marginBottom: 12,
    },

    btnCheck: {
        paddingRight: 12,
        justifyContent: 'center',
    },
    btnRemove: {
        paddingRight: 12,
        justifyContent: 'center',
    },
    textTodo: {
        flex: 1,
        color: '#FDFCFE',
    },
});