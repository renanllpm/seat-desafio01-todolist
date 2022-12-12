import { View, Text, TouchableOpacity, Image } from 'react-native';

import { styles } from './styles';

import Checked from '../../assets/Check.png';

import Unchecked from '../../assets/UnCheck.png';

import Remove from '../../assets/Remove.png';


interface Todo {
    text: string;
    checked: boolean;
}

interface TaskProps {
    todo: Todo;
    handleRemove: (todo: string) => void;
    handleCheck: (todo: string) => void;
}

export function Task({ todo, handleRemove, handleCheck }: TaskProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handleCheck(todo.text)} style={styles.btnCheck}>
                <Image source={todo.checked ? Checked : Unchecked} />
            </TouchableOpacity>
            <Text style={styles.textTodo}>{todo.text}</Text>
            <TouchableOpacity onPress={() => handleRemove(todo.text)} style={styles.btnRemove}>
                <Image source={Remove} />
            </TouchableOpacity>
        </View>
    );
}