// import React from 'react';
// import VideoCall from './components/vidioCall';

// const App = () => {
//   return <VideoCall />;
// };

// export default App;



import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import WebViewScreen from './screens/webView';

const Stack = createNativeStackNavigator();

const App = () => {

  
  return (
    <NavigationContainer
    
    >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}
        options={{ headerShown: false }}
        />
        <Stack.Screen name="WebViewScreen" component={WebViewScreen}
        options={{ headerShown: false }}
        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
