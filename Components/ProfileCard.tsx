// src/components/ProfileCard.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Profile } from '../type/Profile';

interface Props {
  profile: Profile;
  onPress: () => void;
}

const ProfileCard: React.FC<Props> = ({ profile, onPress }) => (
  <View style={styles.card}>
    <Text style={styles.name}>{profile.name}</Text>
    <Text style={styles.email}>{profile.email}</Text>
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>View Profile</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default ProfileCard;
 