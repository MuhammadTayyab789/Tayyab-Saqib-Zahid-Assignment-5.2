import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';

// Define a User type that matches your Firestore schema
interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  companyName?: string; // optional
  phone?: string;       // optional
}

const AllUsersScreen = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('users')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        const data: User[] = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as User[]; // casting ensures TS knows the type
        setUsers(data);
      });

    return () => unsubscribe();
  }, []);
// Add this in your AllUsersScreen component
useEffect(() => {
  const fetchAllData = async () => {
    try {
      const snapshot = await firestore().collection('users').get();
      console.log('Total documents:', snapshot.size);
      snapshot.forEach(doc => {
        console.log('Document ID:', doc.id);
        console.log('Document data:', doc.data());
      });
    } catch (error) {
      console.log('Error:', error);
    }
  };
  
  fetchAllData();
}, []);
  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id}
      style={styles.container}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.text}>Username: {item.username}</Text>
          <Text style={styles.text}>Name: {item.name}</Text>
          <Text style={styles.text}>Email: {item.email}</Text>
          {item.companyName && <Text>Company: {item.companyName}</Text>}
          {item.phone && <Text>Phone: {item.phone}</Text>}
        </View>
      )}
    />
  );
};

export default AllUsersScreen;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    paddingTop: 50, 
    marginTop:80
  },
  card: {
    padding: 15,
    margin: 10,
    borderWidth: 2,
    borderColor: '#b86b6bff',
    borderRadius: 8,
   
    
  },
  text: {
    fontSize: 14,
    marginBottom: 4,
  },
});
