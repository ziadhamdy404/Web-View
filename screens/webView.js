// import React from 'react';
// import VideoCall from './components/vidioCall';

// const App = () => {
//   return <VideoCall />;
// };

// export default App;

import React, {useEffect, useState} from 'react';
import {StyleSheet, View,Text} from 'react-native';
import {WebView} from 'react-native-webview';

const WebViewScreen = ({route}) => {

    const { 
      itemUsername,
      itemToken
     } = route.params;
     
  
  const [token,setToken]=useState("");
useEffect(()=>{
  setToken(itemToken)
},[]);

  return (
    <View style={styles.container}>


<Text>{itemUsername}</Text>
      <WebView
        source={{
          uri: 'https://manjam.shop/?token='+token ,
        }}
        style={styles.webView}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
});

export default WebViewScreen;
