import 'react-native-gesture-handler';
import * as React from 'react';
import { CardStyleInterpolators,createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { homePage} from './src/Pages/homePage';
import { sectionsPage } from './src/Pages/sectionsPage';
import { sectionPage } from './src/Pages/sectionPage';
import { stagesPage } from './src/Pages/stagesPage';
import { qPage } from './src/Pages/qPage';
import { endPage } from './src/Pages/endPage';
import { levelsPage } from './src/Pages/levelsPage';
import { infoPage } from './src/Pages/infoPage';

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
        <Stack.Screen name="levelsPage" component={levelsPage} />
        <Stack.Screen name="sectionPage" component={sectionPage} />  
        <Stack.Screen name="sectionsPage" component={sectionsPage} />
        <Stack.Screen name="stagesPage" component={stagesPage} />
        <Stack.Screen name="qPage" component={qPage} />
        <Stack.Screen name="endPage" component={endPage} />
        <Stack.Screen name="infoPage" component={infoPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}