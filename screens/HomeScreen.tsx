import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  SafeAreaView,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { mockTasks, Task } from '../types/task'; // Trae los datos de las tareas desde un variable en del type task
import { useNavigation } from '@react-navigation/native';
import { Styles } from '../styles/Styles';
import { TaskItem } from '../components/TaskItem';

export const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const [tasks, setTasks] = useState(mockTasks);
  const [filter, setFilter] = useState('Todas');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'Pendientes') return !task.completed;
    if (filter === 'Completadas') return task.completed;
    return true;
  });

  const pendingTasksCount = tasks.filter(task => !task.completed).length;

  const toggleTask = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleAddTask = () => {
    console.log('Agregar nueva tarea...');
    navigation.navigate('TaskForm', {
      isEditing: false
    });
  };




  const renderTask = ({ item }: { item: Task }) => (
    <TaskItem 
      task={item} 
      onToggle={() => toggleTask(item.id)} 
    />
  );

  return (
    <SafeAreaView style={Styles.containerGray}>
      <View style={Styles.header}>
        <View style={Styles.headerLeft}>
          <Ionicons name="home" size={24} color="#20B2AA" />
          <Text style={Styles.headerTitle}>Mis Tareas</Text>
        </View>
        <View style={Styles.pendingBadge}>
          <Text style={Styles.pendingText}>{pendingTasksCount} pendientes</Text>
        </View>
      </View>

      <View style={Styles.filterContainer}>
        {['Todas', 'Pendientes', 'Completadas'].map(filterOption => (
          <TouchableOpacity
            key={filterOption}
            style={[
              Styles.filterButton,
              filter === filterOption && Styles.filterButtonActive
            ]}
            onPress={() => setFilter(filterOption)}
          >
            <Text style={[
              Styles.filterText,
              filter === filterOption && Styles.filterTextActive
            ]}>
              {filterOption}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredTasks}
        renderItem={renderTask}
        keyExtractor={item => item.id}
        style={Styles.taskList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={Styles.taskListContent}
      />

      <TouchableOpacity 
        style={Styles.addButton}
        onPress={handleAddTask}
        activeOpacity={0.8}
      >
        <Ionicons name="add" size={24} color="#ffffff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};



