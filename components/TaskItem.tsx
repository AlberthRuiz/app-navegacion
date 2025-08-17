
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { Task } from '../types/task';
import { Styles, getPriorityColor, colors } from '../styles/Styles';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
}
export const TaskItem = ({ task, onToggle }: TaskItemProps) => {
  const navigation = useNavigation<any>();
  
  const handleEdit = () => {
    console.log('Editar tarea:', task.id);
    navigation.navigate('TaskForm', {
      task: task,
      isEditing: true
    });
  };

  return (
    <View style={Styles.card}>
      <View style={Styles.taskHeader}>
        <TouchableOpacity 
          style={[Styles.checkbox, task.completed && Styles.checkboxCompleted]}
          onPress={() => onToggle(task.id)}
        >
          {task.completed && <Ionicons name="checkmark" size={16} color={colors.white} />}
        </TouchableOpacity>
        
        <View style={Styles.taskInfo}>
          <Text style={[Styles.taskTitle, task.completed && Styles.taskCompleted]}>
            {task.title}
          </Text>
          <View style={Styles.taskMeta}>
            <View style={[Styles.priorityBadge, { backgroundColor: getPriorityColor(task.priority) }]}>
              <Text style={Styles.priorityText}>{task.priority}</Text>
            </View>
            <Text style={Styles.taskDate}>{task.dueDate}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={Styles.editButton}
          onPress={handleEdit}
        >
          <Ionicons name="create-outline" size={20} color={colors.info} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
