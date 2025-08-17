import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput,
  TouchableOpacity, 
  SafeAreaView,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Styles } from '../styles/Styles';

export const RegisterScreen = () => {
  const navigation = useNavigation<any>();    
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCreateAccount = () => {
    console.log('Register:', { fullName, email, password, confirmPassword });
    navigation.navigate('Login');
  };

  const handleBackToLogin = () => {
    console.log('Volver a Login...');
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView contentContainerStyle={Styles.scrollContent}>
        <View style={Styles.contentWithPadding}>
          <View style={Styles.iconContainer}>
            <View style={Styles.iconCircle}>
              <Ionicons name="person-add" size={32} color="#ffffff" />
            </View>
          </View>
          
          <Text style={Styles.titleLarge}>Registro</Text>
          
          <View style={Styles.formContainer}>
            <View style={Styles.inputContainer}>
              <Text style={Styles.label}>Nombre completo</Text>
              <TextInput
                style={Styles.input}
                placeholder="Ingresa tu nombre completo"
                value={fullName}
                onChangeText={setFullName}
                autoCapitalize="words"
                autoCorrect={false}
              />
            </View>

            <View style={Styles.inputContainer}>
              <Text style={Styles.label}>Email</Text>
              <TextInput
                style={Styles.input}
                placeholder="Ingresa tu email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <View style={Styles.inputContainer}>
              <Text style={Styles.label}>Contraseña</Text>
              <TextInput
                style={Styles.input}
                placeholder="Ingresa tu contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <View style={Styles.inputContainer}>
              <Text style={Styles.label}>Confirmar contraseña</Text>
              <TextInput
                style={Styles.input}
                placeholder="Confirma tu contraseña"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <TouchableOpacity 
              style={Styles.primaryButtonWithMargin} 
              onPress={handleCreateAccount}
              activeOpacity={0.8}
            >
              <Text style={Styles.primaryButtonText}>Crear Cuenta</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={Styles.link} 
              onPress={handleBackToLogin}
              activeOpacity={0.8}
            >
              <Text style={Styles.linkText}>¿Ya tienes cuenta? Iniciar sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


