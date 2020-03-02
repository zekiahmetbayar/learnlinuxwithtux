import 'react-native-gesture-handler';
import * as React from 'react';
import { CardStyleInterpolators,createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { homePage} from './src/Pages/homePage';
import { Levels } from './src/Pages/Levels';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
    headerShown: false,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
  }}
  >
        <Stack.Screen name="homePage" component={homePage} />
        <Stack.Screen name="Levels" component={Levels} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}