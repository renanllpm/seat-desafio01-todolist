import { Text, View, Image, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useState } from 'react';

import { styles } from './styles';

import Logo from '../../assets/Logo.png';

import { Task } from '../../components/Task';

interface Todo {
    text: string;
    checked: boolean;
}

export function Home() {

    const [todos, setTodos] = useState<Todo[]>([]);
    const [todo, setTodo] = useState<string>('');

    function handleAdd() {
        if (todo === '') {
            setTodo('');

            return Alert.alert('Você precisa digitar uma tarefa');
        }

        if (todos.find(item => item.text === todo)) {
            setTodo('');

            return Alert.alert('Você já tem essa tarefa cadastrada');
        }

        setTodos(prevState =>
            [...prevState, { text: todo, checked: false }]);
        setTodo('');

    }

    function handleRemove(todo: string) {

        Alert.alert('Remover tarefa', 'Tem certeza que deseja remover essa tarefa?', [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => setTodos(todos.filter(item => item.text !== todo))
            }
        ]);

    }

    function handleCheck(todo: string) {
        const newTodos = todos.map(item => {
            if (item.text === todo) {
                item.checked = !item.checked;
            }

            return item;
        });

        setTodos(newTodos);

    }

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={Logo} />
            </View>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={'#808080'}
                    onChangeText={setTodo}
                    value={todo}
                />
                <TouchableOpacity style={styles.button} onPress={handleAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.status}>
                <View style={styles.statusItem}>
                    <Text style={styles.statusCreate}>Criadas</Text>
                    <Text style={styles.statusBadge}>
                        {todos.length}
                    </Text>
                </View>
                <View style={styles.statusItem}>
                    <Text style={styles.statusDone}>Concluídas</Text>
                    <Text style={styles.statusBadge}>
                        {todos.filter(todo => todo.checked).length}
                    </Text>
                </View>
            </View>

            <View>
                <FlatList
                    data={todos}
                    keyExtractor={item => item.text}
                    renderItem={({ item }) => (
                        <Task
                            todo={item}
                            handleRemove={handleRemove}
                            handleCheck={handleCheck}
                        />
                    )}
                    ListEmptyComponent={() => (
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: 'bold',
                                marginBottom: 10,
                                color: '#ccc'
                            }}>Você ainda não tem tarefas cadastradas</Text>
                            <Text style={{
                                fontSize: 16,
                                marginBottom: 10,
                                color: '#808080'
                            }}>Crie tarefas e organize seus itens a fazer</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}