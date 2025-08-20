import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';
import auth from '@react-native-firebase/auth';
   import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
    const gotoSignUP =()=>{
   navigation.navigate("Signup Screen")
    }
  const handleLogin = async () => {
  if (!email || !password) {
    Alert.alert('Error', 'Please enter both email and password.');
    return;
  }
  
  try {
    await auth().signInWithEmailAndPassword(email, password);
    Alert.alert('Success', 'Logged in successfully!');
    // navigate to dashboard
    // navigation.navigate('Dashboard');
    navigation.reset({
        index: 0,
        routes: [{ name: "Dashboard" }], // 👈 reset so user can't go back
      });
  } catch (error) {
    console.error(error);
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
        <View style={styles.titleContainer}>
          <Text style={styles.titletext}>Welcome to Infinity</Text>
           <Text style={styles.titletext}> Save & Grow</Text>
           <Text style={styles.titletext}> Smart Money, Smart Live</Text>
        </View>

       {/* <TextInput
          style={styles.input}
          placeholder="User name"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />*/}
        <TextInput style={styles.input}
        placeholder="Login ID"
        
          value= {email}
          onChangeText={setEmail}
        />   
        

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2} onPress={gotoSignUP}>
          <Text style={styles.signuptext}>Sign up </Text>
        </TouchableOpacity>

      {/*  <View style={{ alignItems: 'center', marginTop: 16 }}>
          <View style={styles.box}>
            <Text>abc</Text>
               </View>
</View>*/}

      </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8ededff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#eecbcbff',
    flexDirection:"column"
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    marginVertical:2,
  },
  titletext: {
    fontSize:24,
    fontWeight: '700',
    color: '#B10808',
  },
   subtitletext: {
    fontSize:20,
    fontWeight: '600',
    color: '#B10808',
  },
  input: {
    height: 50,
    backgroundColor: '#fffff',
    borderRadius: 5,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    elevation: 5,
  },
  button: {
    backgroundColor: '#B10808',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  button2: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signuptext: {
    color: '#B10808',
    fontSize: 16,
    fontWeight: 'bold',
  },
  box:{
   backgroundColor: '#F9E6E6',
   height:120,
   width:120,
   justifyContent:'center',
   alignItems:'center',
      

  }
});
