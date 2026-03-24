import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../../navigation/RootNavigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomePage = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>안녕하세요 홈입니다.</Text>
      <Button
        title="디테일 가기"
        onPress={() => navigation.navigate('Detail', { id: 1 })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomePage;
