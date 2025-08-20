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
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

// Month data
const months = [
  { label: 'Jan', value: '01' },
  { label: 'Feb', value: '02' },
  { label: 'Mar', value: '03' },
  { label: 'Apr', value: '04' },
  { label: 'May', value: '05' },
  { label: 'Jun', value: '06' },
  { label: 'Jul', value: '07' },
  { label: 'Aug', value: '08' },
  { label: 'Sep', value: '09' },
  { label: 'Oct', value: '10' },
  { label: 'Nov', value: '11' },
  { label: 'Dec', value: '12' },
];

// Date data 1-31
const dates = Array.from({ length: 31 }, (_, i) => ({
  label: (i + 1).toString(),
  value: (i + 1).toString(),
}));

// Year data 1950 - 2025 (example)
const years = Array.from({ length: 76 }, (_, i) => ({
  label: (1950 + i).toString(),
  value: (1950 + i).toString(),
}));



const SignUpScreen = () => {
const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Dropdown states
  const [month, setMonth] = useState(null);
  const [date, setDate] = useState(null);
  const [year, setYear] = useState(null);

  // Focus states for dropdowns (optional, for styling)
  const [monthFocus, setMonthFocus] = useState(false);
  const [dateFocus, setDateFocus] = useState(false);
  const [yearFocus, setYearFocus] = useState(false);


  const handleSignUp = async () => {
  if (!email || !password) {
    Alert.alert('Error', 'Email and password are required.');
    return;
  }

  try {
    // Create user in Firebase Auth
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    const { uid } = userCredential.user;

    // Save user details to Firestore
    await firestore().collection('users').doc(uid).set({
      name: email,   // replace with your "Name" input
      email: email,
      dob: `${date}-${month}-${year}`,
      gender: 'Male', // or from selection
      createdAt: firestore.FieldValue.serverTimestamp(),
    });
   Alert.alert('Signup', 'Signup successfully!');
    navigation.reset({
  index: 0,
  routes: [{ name: "Login Screen" }],
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

  const gotoDashboard = () => {
     navigation.navigate('Dashboard');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.cameraCircle} />

        <TextInput
          style={styles.input}
          placeholder="Name"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#B10808"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
            placeholderTextColor="#B10808"
          value={email}
          onChangeText={setEmail}
        />

        

        <Text style={styles.dobtext}> Birth Date</Text>

        {/* DOB Dropdowns container */}
        <View style={styles.dobContainer}>
          {/* Month Dropdown */}
          <Dropdown
            style={[styles.dropdown, monthFocus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={months}
            labelField="label"
            valueField="value"
            placeholder="Month"
            value={month}
            onFocus={() => setMonthFocus(true)}
            onBlur={() => setMonthFocus(false)}
            onChange={item => {
              setMonth(item.value);
              setMonthFocus(false);
            }}
          />

          {/* Date Dropdown */}
          <Dropdown
            style={[styles.dropdown, dateFocus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={dates}
            labelField="label"
            valueField="value"
            placeholder="Date"
            value={date}
            onFocus={() => setDateFocus(true)}
            onBlur={() => setDateFocus(false)}
            onChange={item => {
              setDate(item.value);
              setDateFocus(false);
            }}
          />

          {/* Year Dropdown */}
          <Dropdown
            style={[styles.dropdown, yearFocus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={years}
            labelField="label"
            valueField="value"
            placeholder="Year"
            value={year}
            onFocus={() => setYearFocus(true)}
            onBlur={() => setYearFocus(false)}
            onChange={item => {
              setYear(item.value);
              setYearFocus(false);
            }}
          />
        </View>
         

          <View style={
            {
              flexDirection:'row',
              justifyContent: 'space-between'
              
            }
          }>
            <View style= {styles.box}>
               <Text style = {styles.placeholderStyle}>Male</Text>
            </View>
            <View style= {styles.box}> 
               <Text style = {styles.placeholderStyle}>Female</Text></View>
          </View>

             <TextInput
          style={styles.input}
          placeholder="Password"
            placeholderTextColor="#B10808"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={password}
            placeholderTextColor="#B10808"
          onChangeText={setPassword}
        />



        <TouchableOpacity style={styles.button2} onPress={handleSignUp}>
          <Text style={styles.signuptext}>Create Profile </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
    paddingTop: 30,
    backgroundColor: '#ffffff',
  },
  cameraCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#B10808',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 40,
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 16,
    marginBottom: 16,
   // borderColor: '#ccc',
    borderWidth: 1,
    elevation: 5,
    borderColor:'#B10808'

  },
  dobContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dropdown: {
    flex: 1,
    height: 50,
    //borderColor: 'gray',
    //borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginHorizontal: 4,
     borderWidth: 1,
      borderColor:'#B10808'
    

  },
  placeholderStyle: {
    fontSize: 16,
    color:"#B10808"
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  button2: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 2,
    backgroundColor: '#B10808',
    borderWidth:1,
    borderColor:'#B10808'
    
  },
  signuptext: {
    color: '#FFFFFf',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dobtext: {
    color: '#B10808',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop:20,
    marginBottom:20
  },
  box:{
   backgroundColor: '#Ffffff',
   height:120,
   width:120,
   justifyContent:'center',
   alignItems:'center',
   borderRadius:20,
   height:80,
   marginBottom:20,
    borderWidth: 1,
      borderColor:'#B10808',
      elevation:8,
      shadowOpacity:10
   
      

  }
});
