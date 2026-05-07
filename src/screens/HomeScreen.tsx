import {
    StatusBar,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    Keyboard,
} from 'react-native';

import styles from '../styles/HomeStyles';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Task = {
    id: string;
    title: string;
    done: boolean;
}

const TASKS_STORAGE_KEY = '@totlist:tasks';

export default function HomeScreen() {

    const [taskText, setTaskText] = useState<string>('');
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    useEffect(() => {
        async function loadTasks() {
            try {
                const savedTasks = await AsyncStorage.getItem(TASKS_STORAGE_KEY);
                if (savedTasks) {
                    setTasks(JSON.parse(savedTasks));
                }
            } catch (error) {
                console.warn('Falha ao carregar tarefas', error);
            } finally {
                setIsInitialLoad(false);
            }
        }

        loadTasks();
    }, []);

    useEffect(() => {
        async function saveTasks() {
            if (isInitialLoad) {
                return;
            }

            try {
                await AsyncStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
            } catch (error) {
                console.warn('Falha ao salvar tarefas', error);
            }
        }

        saveTasks();
    }, [tasks, isInitialLoad]);

    function addTask(){
        const trimmedTask = taskText.trim();

        if(!trimmedTask){
            alert('Digite uma tarefa antes de adicionar');
            return;
        }

        const newTask: Task = {
            id: String(Date.now()),
            title: trimmedTask,
            done: false,
        };

        setTasks((currentTasks) => [newTask, ...currentTasks]);

        setTaskText('');
        Keyboard.dismiss();
    }

    function renderItem({item}: {item: Task}){
        return (
            <View style={styles.taskCard}>
                <TouchableOpacity
                    style={styles.taskContent}
                    onPress={() => toggleTaskDone(item.id)}
                    activeOpacity={0.8}
                >
                    <View style={[styles.checkCircle, item.done && styles.checkCircleDone]}>
                        {item.done && <Text style={styles.checkIcon}>✓</Text>}
                    </View>

                    <Text style={[styles.taskText, item.done && styles.taskTextDone]}>
                        {item.title}
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => deleteTask(item.id)}
                    activeOpacity={0.8}
                >
                    <Text style={styles.deleteButtonText}>Excluir</Text>
                </TouchableOpacity>
            </View>
        );

    }

    function toggleTaskDone(id: string){
        setTasks((currentTasks) => 
            currentTasks.map((task) =>
                task.id === id ? {...task, done: !task.done} : task
            )
        );
    }

    function deleteTask(id: string){
        setTasks((currentTasks) =>
            currentTasks.filter((task) => task.id !== id)
        );
    }

    return (
        <View style={styles.container}>
            
            <StatusBar 
                barStyle="dark-content"
                backgroundColor="#f5f7fb"
            />

            <View style={styles.header}>
                <Text style={styles.title}>To-do List</Text>
                <Text style={styles.subtitle}>Organizador de tarefas</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite uma tarefa"
                    value={taskText}
                    onChangeText={setTaskText}
                    onSubmitEditing={addTask}
                />

                <TouchableOpacity
                    style={styles.addButton}
                    activeOpacity={0.8}
                    onPress={addTask}
                >
                    <Text style={styles.addButtonText}>
                        Adicionar
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.summaryContainer}>
                
                <View style={styles.summaryCard}>
                    <Text style={styles.summaryNumber}>{tasks.length}</Text>
                    <Text style={styles.summarylabel}>Total</Text>
                </View>

                <View style={styles.summaryCard}>
                    <Text style={styles.summaryNumber}>{tasks.filter((task) => !task.done).length}</Text>
                    <Text style={styles.summarylabel}>Pendentes</Text>
                </View>

                <View style={styles.summaryCard}>
                    <Text style={styles.summaryNumber}>{tasks.filter((task) => task.done).length}</Text>
                    <Text style={styles.summarylabel}>Concluídas</Text>
                </View>
                
                </View>


                <FlatList
                data = {tasks}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContent}
                ListEmptyComponent={
                    <View style={styles.emptyState}>
                        <Text style={styles.emptyTitle}>Nenhuma tarefa cadastrada</Text>
                        <Text style={styles.emptyText}>Adicione sua primeira tarefa</Text>
                    </View>
                }
                />

            

        </View>
    );
}