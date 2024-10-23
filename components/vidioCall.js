
// com.agoraapp

// import React, { useEffect, useState, useRef } from 'react';
// import { View, Button, StyleSheet, SafeAreaView, Text, PermissionsAndroid, Platform } from 'react-native';
// import RtcEngine, { VideoRenderMode } from 'react-native-agora';
// import { RtcLocalView, RtcRemoteView } from 'react-native-agora'; // Import video view components

// const VideoCall = () => {
//   const [engine, setEngine] = useState(null);
//   const [joined, setJoined] = useState(false);
//   const [roomId] = useState('test-room'); // Set your channel name
//   const rtcEngineRef = useRef(null);

//   useEffect(() => {
//     const init = async () => {
//       const rtcEngine = await RtcEngine.create('com.agoraapp');
//       rtcEngineRef.current = rtcEngine;
//       setEngine(rtcEngine);

//       // Set up listeners
//       rtcEngine.addListener('UserJoined', (uid) => {
//         console.log('User Joined: ', uid);
//       });

//       rtcEngine.addListener('UserOffline', (uid) => {
//         console.log('User Offline: ', uid);
//       });

//       // Request permissions
//       if (Platform.OS === 'android') {
//         await requestPermissions();
//       }
//     };

//     init();

//     return () => {
//       if (rtcEngineRef.current) {
//         rtcEngineRef.current.destroy();
//       }
//     };
//   }, []);

//   const requestPermissions = async () => {
//     try {
//       const granted = await PermissionsAndroid.requestMultiple([
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//         PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
//       ]);
//       return granted[PermissionsAndroid.PERMISSIONS.CAMERA] === PermissionsAndroid.RESULTS.GRANTED &&
//              granted[PermissionsAndroid.PERMISSIONS.RECORD_AUDIO] === PermissionsAndroid.RESULTS.GRANTED;
//     } catch (err) {
//       console.warn(err);
//       return false;
//     }
//   };

//   const joinChannel = async () => {
//     if (engine) {
//       await engine.enableVideo();
//       await engine.startPreview();
//       await engine.joinChannel(null, roomId, null, 0);
//       setJoined(true);
//     }
//   };

//   const leaveChannel = async () => {
//     if (engine) {
//       await engine.leaveChannel();
//       setJoined(false);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       {joined ? (
//         <View style={styles.callContainer}>
//           <Text style={styles.channelName}>Channel: {roomId}</Text>
//           <RtcLocalView.SurfaceView
//             style={styles.localVideo}
//             channelId={roomId}
//             renderMode={VideoRenderMode.Adaptive}
//           />
//           <Button title="Leave Channel" onPress={leaveChannel} />
//         </View>
//       ) : (
//         <Button title="Join Channel" onPress={joinChannel} />
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   callContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   localVideo: {
//     width: '100%',
//     height: '100%',
//   },
//   channelName: {
//     fontSize: 20,
//     marginBottom: 20,
//   },
// });

// export default VideoCall;


// import React, { useEffect, useState, useRef } from 'react';
// import { View, Button, StyleSheet, SafeAreaView, Text, PermissionsAndroid, Platform } from 'react-native';
// import RtcEngine, { VideoRenderMode } from 'react-native-agora';

// const VideoCall = () => {
//   const [engine, setEngine] = useState(null);
//   const [joined, setJoined] = useState(false);
//   const [roomId] = useState('test-room'); // Set your channel name
//   const rtcEngineRef = useRef(null);

//   useEffect(() => {
//     const init = async () => {
//       const rtcEngine = await RtcEngine.create('com.agoraapp');
//       rtcEngineRef.current = rtcEngine;
//       setEngine(rtcEngine);

//       // Set up listeners
//       rtcEngine.addListener('UserJoined', (uid) => {
//         console.log('User Joined: ', uid);
//       });

//       rtcEngine.addListener('UserOffline', (uid) => {
//         console.log('User Offline: ', uid);
//       });

//       // Request permissions
//       if (Platform.OS === 'android') {
//         await requestPermissions();
//       }
//     };

//     init();

//     return () => {
//       if (rtcEngineRef.current) {
//         rtcEngineRef.current.destroy();
//       }
//     };
//   }, []);

//   const requestPermissions = async () => {
//     try {
//       const granted = await PermissionsAndroid.requestMultiple([
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//         PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
//       ]);
//       return granted[PermissionsAndroid.PERMISSIONS.CAMERA] === PermissionsAndroid.RESULTS.GRANTED &&
//              granted[PermissionsAndroid.PERMISSIONS.RECORD_AUDIO] === PermissionsAndroid.RESULTS.GRANTED;
//     } catch (err) {
//       console.warn(err);
//       return false;
//     }
//   };

//   const joinChannel = async () => {
//     if (engine) {
//       await engine.enableVideo();
//       await engine.startPreview();
//       await engine.joinChannel(null, roomId, null, 0);
//       setJoined(true);
//     }
//   };

//   const leaveChannel = async () => {
//     if (engine) {
//       await engine.leaveChannel();
//       setJoined(false);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       {joined ? (
//         <View style={styles.callContainer}>
//           <Text style={styles.channelName}>Channel: {roomId}</Text>
//           <Button title="Leave Channel" onPress={leaveChannel} />
//         </View>
//       ) : (
//         <Button title="Join Channel" onPress={joinChannel} />
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   callContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   channelName: {
//     fontSize: 20,
//     marginBottom: 20,
//   },
// });

// export default VideoCall;


// import React, { useEffect, useState, useRef } from 'react';
// import { View, Button, StyleSheet, SafeAreaView, Text } from 'react-native';
// import RtcEngine from 'react-native-agora';

// const VideoCall = () => {
//   const [engine, setEngine] = useState(null);
//   const [joined, setJoined] = useState(false);
//   const [roomId, setRoomId] = useState('test-room'); // Your channel name
//   const [localStream, setLocalStream] = useState(null);
//   const [remoteStreams, setRemoteStreams] = useState([]);
//   const rtcEngineRef = useRef(null);

//   useEffect(() => {
//     const init = async () => {
//       const rtcEngine = await RtcEngine.create('com.agoraapp');
//       rtcEngineRef.current = rtcEngine;
//       setEngine(rtcEngine);

//       // Set up listeners
//       rtcEngine.addListener('UserJoined', (uid) => {
//         console.log('User Joined: ', uid);
//         setRemoteStreams((prev) => [...prev, uid]);
//       });

//       rtcEngine.addListener('UserOffline', (uid) => {
//         console.log('User Offline: ', uid);
//         setRemoteStreams((prev) => prev.filter(user => user !== uid));
//       });
//     };

//     init();

//     return () => {
//       if (rtcEngineRef.current) {
//         rtcEngineRef.current.destroy();
//       }
//     };
//   }, []);

//   const joinChannel = async () => {
//     if (engine) {
//       await engine.enableVideo();
//       await engine.startPreview();
//       await engine.joinChannel(null, roomId, null, 0);
//       setJoined(true);
//     }
//   };

//   const leaveChannel = async () => {
//     if (engine) {
//       await engine.leaveChannel();
//       setJoined(false);
//       setRemoteStreams([]);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       {joined ? (
//         <View style={styles.callContainer}>
//           <Text style={styles.channelName}>Channel: {roomId}</Text>
//           {/* Add your local video view here */}
//           <Button title="Leave Channel" onPress={leaveChannel} />
//         </View>
//       ) : (
//         <Button title="Join Channel" onPress={joinChannel} />
//       )}
//       {/* Render remote video streams here */}
//       {remoteStreams.map((uid) => (
//         <View key={uid} style={styles.remoteStream}>
//           <Text>Remote User: {uid}</Text>
//           {/* Implement a remote video view component here */}
//         </View>
//       ))}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   callContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   channelName: {
//     fontSize: 20,
//     marginBottom: 20,
//   },
//   remoteStream: {
//     height: 100,
//     width: 100,
//     borderWidth: 1,
//     borderColor: 'black',
//     margin: 5,
//   },
// });

// export default VideoCall;


import React, { useEffect, useState, useRef } from 'react';
import { View, Button, StyleSheet, SafeAreaView, Text, PermissionsAndroid, Platform, ScrollView } from 'react-native';
import RtcEngine, { VideoRenderMode } from 'react-native-agora';
import { RtcLocalView, RtcRemoteView } from 'react-native-agora';

const VideoCall = () => {
  const [engine, setEngine] = useState(null);
  const [joined, setJoined] = useState(false);
  const [remoteUsers, setRemoteUsers] = useState([]);
  const [roomId] = useState('test-room'); // Set your channel name
  const rtcEngineRef = useRef(null);

  useEffect(() => {
    const init = async () => {
      const rtcEngine = await RtcEngine.create('com.agoraapp');
      rtcEngineRef.current = rtcEngine;
      setEngine(rtcEngine);

      // Set up listeners
      rtcEngine.addListener('UserJoined', (uid) => {
        console.log('User Joined: ', uid);
        setRemoteUsers((prevUsers) => [...prevUsers, uid]); // Add remote user
      });

      rtcEngine.addListener('UserOffline', (uid) => {
        console.log('User Offline: ', uid);
        setRemoteUsers((prevUsers) => prevUsers.filter(user => user !== uid)); // Remove remote user
      });

      // Request permissions
      if (Platform.OS === 'android') {
        await requestPermissions();
      }
    };

    init();

    return () => {
      if (rtcEngineRef.current) {
        rtcEngineRef.current.destroy();
      }
    };
  }, []);

  const requestPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ]);
      return granted[PermissionsAndroid.PERMISSIONS.CAMERA] === PermissionsAndroid.RESULTS.GRANTED &&
             granted[PermissionsAndroid.PERMISSIONS.RECORD_AUDIO] === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const joinChannel = async () => {
    if (engine) {
      await engine.enableVideo();
      await engine.startPreview();
      await engine.joinChannel(null, roomId, null, 0);
      setJoined(true);
    }
  };

  const leaveChannel = async () => {
    if (engine) {
      await engine.leaveChannel();
      setJoined(false);
      setRemoteUsers([]); // Clear remote users on leave
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {joined ? (
        <View style={styles.callContainer}>
          <Text style={styles.channelName}>Channel: {roomId}</Text>
          <RtcLocalView.SurfaceView
            style={styles.localVideo}
            channelId={roomId}
            renderMode={VideoRenderMode.Adaptive}
          />
          <ScrollView style={styles.remoteContainer}>
            {remoteUsers.map(uid => (
              <RtcRemoteView.SurfaceView
                key={uid}
                style={styles.remoteVideo}
                uid={uid}
                channelId={roomId}
                renderMode={VideoRenderMode.Adaptive}
              />
            ))}
          </ScrollView>
          <Button title="Leave Channel" onPress={leaveChannel} />
        </View>
      ) : (
        <Button title="Join Channel" onPress={joinChannel} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  callContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  localVideo: {
    width: '100%',
    height: 300, // Adjust as needed
  },
  remoteContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  remoteVideo: {
    width: '45%', // Adjust to fit your layout
    height: 200,  // Adjust height as needed
    margin: 5,
  },
  channelName: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default VideoCall;
