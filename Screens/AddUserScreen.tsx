import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const AddUsercreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddUser = async () => {
    if (!username || !email || !name) {
      Alert.alert('Error', 'Username, Email, and Name are required.');
      return;
    }

    try {
      await firestore().collection('users').add({
        username,
        email,
        name,
        companyName: companyName || null,
        phone: phone || null,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
      Alert.alert('Success', 'User added!');
      setUsername(''); setEmail(''); setName(''); setCompanyName(''); setPhone('');
    } catch (error) {
     if (error instanceof Error) {
    console.error(error.message);
    Alert.alert('Error', error.message);
  } else {
    console.error(error);
    Alert.alert('Error', String(error));
  }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Username" value={username} onChangeText={setUsername} style={styles.input} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Company Name (optional)" value={companyName} onChangeText={setCompanyName} style={styles.input} />
      <TextInput placeholder="Phone (optional)" value={phone} onChangeText={setPhone} style={styles.input} />
      
      <TouchableOpacity style={styles.button} onPress={handleAddUser}>
        <Text style={styles.buttonText}>Add User</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddUsercreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 ,marginTop:100},
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 12, padding: 10, borderRadius: 6 },
  button: { backgroundColor: '#B10808', padding: 14, borderRadius: 6, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
