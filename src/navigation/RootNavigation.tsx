import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../screens/home/page';
import DetailPage from '../screens/detail/page';

export type RootStackParamList = {
  Home: undefined;
  Detail: { id: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{ title: '홈' }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailPage}
        options={{ title: '상세' }}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;
