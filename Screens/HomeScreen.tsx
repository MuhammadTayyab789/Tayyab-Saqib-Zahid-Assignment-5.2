// src/screens/HomeScreen.tsx
import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import ProfileCard from '../Components/ProfileCard';
import { Profile } from '../type/Profile';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const profiles: Profile[] = [
  {
    id: '1',
    name: 'Saqib Zia',
    email: 'saqibzia@gmail.com',
    phone: '555-1234',
    department: 'Digital Lending',
    company: 'Bank Alfalah',
   
  },
  {
    id: '2',
    name: 'Muhammad Tayyab',
    email: 'muhammadtayyab@gmail.com',
    phone: '555-5678',
    department: 'Digital IT',
    company: 'Bank Alfalah',
   
  },
  // Add more profiles as needed
];

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={profiles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProfileCard
            profile={item}
            onPress={() => navigation.navigate('Detail', { profile: item })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    paddingTop: 16,
  },
});

export default HomeScreen;
