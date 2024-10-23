import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Text, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { NavigationContainer } from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  const [Array, setArray] = useState([
    {
      userId: '194435152',
      userHash:
        '665ee9e0381d42485bc4ad610dd81cee118c3ca3dc7e88c40ce18b6ede91192eb16c2e9c7f67fafc6a2cca8d653539355e537047cc73aced3b6d9301535631cd',
      username: 'ammar',
      lastName: 'saad',
      storeId: '2',
      tokenTime: 1694025699,
      userLevel: '0',
      nickName: 'x_ngjksjshoeieh',
      userPicture:
        'https://likecard-space.fra1.digitaloceanspaces.com/superapp_profilePics/194435152-1691391347.479435.png',
      langId: 2,
      coins: 2000,
      token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxOTQ0MzUxNTIiLCJ1c2VySGFzaCI6IjY2NWVlOWUwMzgxZDQyNDg1YmM0YWQ2MTBkZDgxY2VlMTE4YzNjYTNkYzdlODhjNDBjZTE4YjZlZGU5MTE5MmViMTZjMmU5YzdmNjdmYWZjNmEyY2NhOGQ2NTM1MzkzNTVlNTM3MDQ3Y2M3M2FjZWQzYjZkOTMwMTUzNTYzMWNkIiwidXNlcm5hbWUiOiJhbW1hciIsImxhc3ROYW1lIjoic2FhZCIsInN0b3JlSWQiOiIyIiwidG9rZW5UaW1lIjoxNjk0MDI1Njk5LCJ1c2VyTGV2ZWwiOiIwIiwibmlja05hbWUiOiJ4X25namtzanNob2VpZWgiLCJ1c2VyUGljdHVyZSI6Imh0dHBzOi8vbGlrZWNhcmQtc3BhY2UuZnJhMS5kaWdpdGFsb2NlYW5zcGFjZXMuY29tL3N1cGVyYXBwX3Byb2ZpbGVQaWNzLzE5NDQzNTE1Mi0xNjkxMzkxMzQ3LjQ3OTQzNS5wbmciLCJsYW5nSWQiOjIsImNvaW5zIjoyMDAwfQ.ocqPjXs2zu60dmvkXK_Px9ccqeCKrcQgiOyAGcNAOds',
    },
    {
      userId: '904435152',
      userHash:
        '665ee9e0381d42485bc4ad610dd81cee118c3ca3dc7e88c40ce18b6ede91192eb16c2e9c7f67fafc6a2cca8d653539355e537047cc73aced3b6d9301535631cd',
      username: 'Ahmed',
      lastName: 'Ellabban',
      storeId: '2',
      tokenTime: 1694025699,
      userLevel: '0',
      nickName: 'x_ngjksjshoeieh',
      userPicture:
        'https://likecard-space.fra1.digitaloceanspaces.com/superapp_profilePics/194435152-1691391347.479435.png',
      langId: 2,
      coins: 1000,
      token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI5MDQ0MzUxNTIiLCJ1c2VySGFzaCI6IjY2NWVlOWUwMzgxZDQyNDg1YmM0YWQ2MTBkZDgxY2VlMTE4YzNjYTNkYzdlODhjNDBjZTE4YjZlZGU5MTE5MmViMTZjMmU5YzdmNjdmYWZjNmEyY2NhOGQ2NTM1MzkzNTVlNTM3MDQ3Y2M3M2FjZWQzYjZkOTMwMTUzNTYzMWNkIiwidXNlcm5hbWUiOiJBaG1lZCIsImxhc3ROYW1lIjoiRWxsYWJiYW4iLCJzdG9yZUlkIjoiMiIsInRva2VuVGltZSI6MTY5NDAyNTY5OSwidXNlckxldmVsIjoiMCIsIm5pY2tOYW1lIjoieF9uZ2prc2pzaG9laWVoIiwidXNlclBpY3R1cmUiOiJodHRwczovL2xpa2VjYXJkLXNwYWNlLmZyYTEuZGlnaXRhbG9jZWFuc3BhY2VzLmNvbS9zdXBlcmFwcF9wcm9maWxlUGljcy8xOTQ0MzUxNTItMTY5MTM5MTM0Ny40Nzk0MzUucG5nIiwibGFuZ0lkIjoyLCJjb2lucyI6MTAwMH0.ivz3pPM9Rwl-gk3cI0r8av97VUhSGWQl4pPmqFAcvOI',
    },
    {
      userId: '902235152',
      userHash:
        '665ee9e0381d42485bc4ad610dd81cee118c3ca3dc7e88c40ce18b6ede91192eb16c2e9c7f67fafc6a2cca8d653539355e537047cc73aced3b6d9301535631cd',
      username: 'Taha',
      lastName: 'Mirza',
      storeId: '2',
      tokenTime: 1694025699,
      userLevel: '0',
      nickName: 'x_ngjksjshoeieh',
      userPicture:
        'https://likecard-space.fra1.digitaloceanspaces.com/superapp_profilePics/194435152-1691391347.479435.png',
      langId: 2,
      coins: 1500,
      token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI5MDIyMzUxNTIiLCJ1c2VySGFzaCI6IjY2NWVlOWUwMzgxZDQyNDg1YmM0YWQ2MTBkZDgxY2VlMTE4YzNjYTNkYzdlODhjNDBjZTE4YjZlZGU5MTE5MmViMTZjMmU5YzdmNjdmYWZjNmEyY2NhOGQ2NTM1MzkzNTVlNTM3MDQ3Y2M3M2FjZWQzYjZkOTMwMTUzNTYzMWNkIiwidXNlcm5hbWUiOiJUYWhhIiwibGFzdE5hbWUiOiJNaXJ6YSIsInN0b3JlSWQiOiIyIiwidG9rZW5UaW1lIjoxNjk0MDI1Njk5LCJ1c2VyTGV2ZWwiOiIwIiwibmlja05hbWUiOiJ4X25namtzanNob2VpZWgiLCJ1c2VyUGljdHVyZSI6Imh0dHBzOi8vbGlrZWNhcmQtc3BhY2UuZnJhMS5kaWdpdGFsb2NlYW5zcGFjZXMuY29tL3N1cGVyYXBwX3Byb2ZpbGVQaWNzLzE5NDQzNTE1Mi0xNjkxMzkxMzQ3LjQ3OTQzNS5wbmciLCJsYW5nSWQiOjIsImNvaW5zIjoxNTAwfQ.opNbG4jmFxAmXKbumtGz7DXicCnwoipQs5g08tNkbCA',
    },
    {
      userId: '12402235152',
      userHash:
        '665ee9e0381d42485bc4ad610dd81cee118c3ca3dc7e88c40ce18b6ede91192eb16c2e9c7f67fafc6a2cca8d653539355e537047cc73aced3b6d9301535631cd',
      username: 'Sara',
      lastName: 'Taha',
      storeId: '2',
      tokenTime: 1694025699,
      userLevel: '0',
      nickName: 'x_ngjksjshoeieh',
      userPicture:
        'https://likecard-space.fra1.digitaloceanspaces.com/superapp_profilePics/194435152-1691391347.479435.png',
      langId: 2,
      coins: 3000,
      token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxMjQwMjIzNTE1MiIsInVzZXJIYXNoIjoiNjY1ZWU5ZTAzODFkNDI0ODViYzRhZDYxMGRkODFjZWUxMThjM2NhM2RjN2U4OGM0MGNlMThiNmVkZTkxMTkyZWIxNmMyZTljN2Y2N2ZhZmM2YTJjY2E4ZDY1MzUzOTM1NWU1MzcwNDdjYzczYWNlZDNiNmQ5MzAxNTM1NjMxY2QiLCJ1c2VybmFtZSI6IlNhcmEiLCJsYXN0TmFtZSI6IlRhaGEiLCJzdG9yZUlkIjoiMiIsInRva2VuVGltZSI6MTY5NDAyNTY5OSwidXNlckxldmVsIjoiMCIsIm5pY2tOYW1lIjoieF9uZ2prc2pzaG9laWVoIiwidXNlclBpY3R1cmUiOiJodHRwczovL2xpa2VjYXJkLXNwYWNlLmZyYTEuZGlnaXRhbG9jZWFuc3BhY2VzLmNvbS9zdXBlcmFwcF9wcm9maWxlUGljcy8xOTQ0MzUxNTItMTY5MTM5MTM0Ny40Nzk0MzUucG5nIiwibGFuZ0lkIjoyLCJjb2lucyI6MzAwMH0.Wy3HRVpwTk4sYoBEjyMjpgRthaprz-G_KBPJZh8KQOw',
    },
    {
      userId: '18902235152',
      userHash:
        '665ee9e0381d42485bc4ad610dd81cee118c3ca3dc7e88c40ce18b6ede91192eb16c2e9c7f67fafc6a2cca8d653539355e537047cc73aced3b6d9301535631cd',
      username: 'No',
      lastName: 'Coins',
      storeId: '1',
      tokenTime: 1694025699,
      userLevel: '0',
      nickName: 'x_ngjksjshoeieh',
      userPicture:
        'https://likecard-space.fra1.digitaloceanspaces.com/superapp_profilePics/194435152-1691391347.479435.png',
      langId: 2,
      coins: 0,
      token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxODkwMjIzNTE1MiIsInVzZXJIYXNoIjoiNjY1ZWU5ZTAzODFkNDI0ODViYzRhZDYxMGRkODFjZWUxMThjM2NhM2RjN2U4OGM0MGNlMThiNmVkZTkxMTkyZWIxNmMyZTljN2Y2N2ZhZmM2YTJjY2E4ZDY1MzUzOTM1NWU1MzcwNDdjYzczYWNlZDNiNmQ5MzAxNTM1NjMxY2QiLCJ1c2VybmFtZSI6Ik5vIiwibGFzdE5hbWUiOiJDb2lucyIsInN0b3JlSWQiOiIxIiwidG9rZW5UaW1lIjoxNjk0MDI1Njk5LCJ1c2VyTGV2ZWwiOiIwIiwibmlja05hbWUiOiJ4X25namtzanNob2VpZWgiLCJ1c2VyUGljdHVyZSI6Imh0dHBzOi8vbGlrZWNhcmQtc3BhY2UuZnJhMS5kaWdpdGFsb2NlYW5zcGFjZXMuY29tL3N1cGVyYXBwX3Byb2ZpbGVQaWNzLzE5NDQzNTE1Mi0xNjkxMzkxMzQ3LjQ3OTQzNS5wbmciLCJsYW5nSWQiOjIsImNvaW5zIjowfQ.DB4Fz_m7NjRPogrBv0isS0A4w_Qod62974qH1f3J3kI',
    },
  ]);

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.ButtonContainer}
      onPress={() => {
        navigation.navigate('WebViewScreen', {
          itemUsername: item.username,
          itemToken: item.token,
        });

        console.log(item.username);
        console.log(item.token);
      }}>
      {/* <View style={styles.ButtonContainer}> */}
      <Text style={styles.username}>{item.username}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={Array}
        renderItem={renderItem}
        //   keyExtractor={item => item.username}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },
  webView: {
    flex: 1,
  },
  ButtonContainer: {
    width: '90%',
    height: 40,
    backgroundColor: '#ff0',
    marginBottom: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default HomeScreen;
