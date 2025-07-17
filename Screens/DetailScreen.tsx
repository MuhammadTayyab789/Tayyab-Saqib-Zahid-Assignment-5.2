// src/screens/DetailScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

interface Props {
  route: DetailScreenRouteProp;
}

const DetailScreen: React.FC<Props> = ({ route }) => {
  const { profile } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>{profile.name}</Text>
      <Text style={styles.label}>Email:</Text>
      <Text style={styles.text}>{profile.email}</Text>

      <Text style={styles.label}>Phone:</Text>
      <Text style={styles.text}>{profile.phone}</Text>

      <Text style={styles.label}>Company:</Text>
      <Text style={styles.text}>{profile.company}</Text>

      <Text style={styles.label}>Department:</Text>
      <Text style={styles.text}>{profile.department}</Text>

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
  },
  text: {
    fontSize: 15,
    marginTop: 4,
    color: '#333',
  },
});

export default DetailScreen;
