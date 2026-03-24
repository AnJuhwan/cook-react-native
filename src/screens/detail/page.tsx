import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import { RootStackParamList } from '../../navigation/RootNavigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const DetailPage = ({ route, navigation }: Props) => {
  const { id } = route.params;
  return (
    <View>
      <Text>안녕하세요 디테일 입니다.</Text>
      <Text>ID: {id}</Text>
    </View>
  );
};

export default DetailPage;
