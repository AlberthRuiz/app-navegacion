import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput,
  TouchableOpacity, 
  SafeAreaView,
  ScrollView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Styles, getPriorityColor } from '../styles/Styles';
import type { Task } from '../types/task';

export const TaskFormScreen = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { task, isEditing } = route.params || {};
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Media');

  // Cargar datos de la tarea si estamos editando
  useEffect(() => {
    if (isEditing && task) {
      setTitle(task.title || '');
      setDescription(task.description || '');
      setDueDate(task.dueDate || '');
      setPriority(task.priority || 'Media');
    }
  }, [isEditing, task]);

  const handleSave = () => {
    const taskData = {
      title,
      description,
      dueDate,
      priority
    };
    
    if (isEditing) {
      console.log('Actualizar tarea:', { ...task, ...taskData });
    } else {
      console.log('Guardar nueva tarea:', taskData);
    }
    
    navigation.goBack();
  };

  const handleCancel = () => {
    console.log('Cancelar...');
    navigation.goBack();
  };

  const PriorityButton = ({ priorityLevel, isSelected, onPress }: { priorityLevel: string, isSelected: boolean, onPress: () => void }) => (
    <TouchableOpacity
      style={[
        Styles.priorityButton,
        { borderColor: getPriorityColor(priorityLevel) },
        isSelected && { backgroundColor: getPriorityColor(priorityLevel) }
      ]}
      onPress={onPress}
    >
      <Text style={[
        Styles.priorityButtonText,
        isSelected && Styles.priorityButtonTextSelected
      ]}>
        {priorityLevel}
      </Text>
    </TouchableOpacity>
  );



  return (
    <SafeAreaView style={Styles.containerGray}>
      <View style={Styles.header}>
        <View style={Styles.headerLeft}>
          <Ionicons name="create" size={24} color="#20B2AA" />
          <Text style={Styles.headerTitle}>
            {isEditing ? 'Editar Tarea' : 'Nueva Tarea'}
          </Text>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.formContainer}>
          <View style={Styles.inputContainerSmall}>
            <Text style={Styles.labelLarge}>Título</Text>
            <TextInput
              style={Styles.inputWhite}
              placeholder="Ingresa el título de la tarea"
              value={title}
              onChangeText={setTitle}
              autoCapitalize="sentences"
            />
          </View>

          <View style={Styles.inputContainerSmall}>
            <Text style={Styles.labelLarge}>Descripción</Text>
            <TextInput
              style={[Styles.inputWhite, Styles.textArea]}
              placeholder="Describe los detalles de la tarea..."
              value={description}
              onChangeText={setDescription}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
              autoCapitalize="sentences"
            />
          </View>

          <View style={Styles.inputContainerSmall}>
            <Text style={Styles.labelLarge}>Fecha límite</Text>
            <TextInput
              style={Styles.inputWhite}
              placeholder="dd/mm/yyyy"
              value={dueDate}
              onChangeText={setDueDate}
              keyboardType="numeric"
            />
          </View>

          <View style={Styles.inputContainerSmall}>
            <Text style={Styles.labelLarge}>Prioridad</Text>
            <View style={Styles.priorityContainer}>
              <PriorityButton
                priorityLevel="Alta"
                isSelected={priority === 'Alta'}
                onPress={() => setPriority('Alta')}
              />
              <PriorityButton
                priorityLevel="Media"
                isSelected={priority === 'Media'}
                onPress={() => setPriority('Media')}
              />
              <PriorityButton
                priorityLevel="Baja"
                isSelected={priority === 'Baja'}
                onPress={() => setPriority('Baja')}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={Styles.buttonContainer}>
        <TouchableOpacity 
          style={Styles.secondaryButton}
          onPress={handleCancel}
          activeOpacity={0.8}
        >
          <Text style={Styles.secondaryButtonText}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.saveButton}
          onPress={handleSave}
          activeOpacity={0.8}
        >
          <Text style={Styles.primaryButtonText}>Guardar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  content: {
    flex: 1,
  },
  formContainer: {
    padding: 20,
  },
  saveButton: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: '#20B2AA',
    marginLeft: 12,
  },
};

