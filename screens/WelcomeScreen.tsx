import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Styles } from '../styles/Styles';

export const WelcomeScreen = () => {
  const navigation = useNavigation<any>();
  const handleStart = () => {
    console.log('Comenzar...');
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.content}>
        <View style={Styles.iconContainer}>
          <View style={Styles.iconCircle}>
            <Ionicons name="checkmark" size={40} color="#ffffff" />
          </View>
        </View>
        
        <Text style={Styles.title}>TaskManager</Text>
        <Text style={Styles.subtitle}>Organiza tu día de manera eficiente</Text>
        
        <TouchableOpacity 
          style={Styles.primaryButtonLarge} 
          onPress={handleStart}
          activeOpacity={0.8}
        >
          <Text style={Styles.primaryButtonText}>Comenzar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


