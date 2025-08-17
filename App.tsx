import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { LoginScreen } from './screens/LoginScreen';
import { RegisterScreen } from './screens/RegisterScreen';
import { HomeScreen } from './screens/HomeScreen';
import { TaskFormScreen } from './screens/TaskFormScreen';

export type NavgiateStack = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
  TaskForm: undefined;
};

const Stack = createNativeStackNavigator<NavgiateStack>();

export default function App() {
  return (
    
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator 
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#f8f9fa' }
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TaskForm" component={TaskFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}