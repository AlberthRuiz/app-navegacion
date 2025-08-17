import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput,
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Styles } from '../styles/Styles';

export const LoginScreen = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login:', { email, password });
    navigation.navigate('Home');
  };

  const handleRegister = () => {
    console.log('Navegando a Register...');
    navigation.navigate('Register');
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.content}>
        <View style={Styles.iconContainer}>
          <View style={Styles.iconCircle}>
            <Ionicons name="lock-closed" size={32} color="#ffffff" />
          </View>
        </View>
        
        <Text style={Styles.titleLarge}>Iniciar Sesión</Text>
        
        <View style={Styles.formContainer}>
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

          <TouchableOpacity 
            style={Styles.primaryButtonWithMargin} 
            onPress={handleLogin}
            activeOpacity={0.8}
          >
            <Text style={Styles.primaryButtonText}>Iniciar Sesión</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={Styles.link} 
            onPress={handleRegister}
            activeOpacity={0.8}
          >
            <Text style={Styles.linkText}>¿No tienes cuenta? Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};


