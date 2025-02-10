import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screens/Login';
import List from './app/screens/List';
import Details from './app/screens/Details';
import { useState } from 'react';
import { User } from 'firebase/auth';

const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout() {
    return (
      <InsideStack.Navigator>
        <InsideStack.Screen name="My todos" component={List} />
        <InsideStack.Screen name="details" component={Details} />
      </InsideStack.Navigator>
    );
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

