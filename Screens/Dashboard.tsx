import React, { useState, useRef, useEffect,useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Switch,
  StatusBar,
  Button,
  Modal,
  TouchableOpacity
} from 'react-native';
 import { useTranslation } from 'react-i18next'
 import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';
 


import { Trans } from 'react-i18next';
import '../local/index';
const DashboardScreen = () => {
  // 🌗 Theme toggle
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark(prev => !prev);
  
  const navigation = useNavigation();
   const [visible, setVisible] = useState(false);
 const { t, i18n } = useTranslation()
  // Animations
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideDown = useRef(new Animated.Value(-200)).current;
  const slideUp = useRef(new Animated.Value(200)).current;
  const slideRight = useRef(new Animated.Value(200)).current;
  const slideLeft = useRef(new Animated.Value(-200)).current;

 const switchLanguage = () => {
 const newLang = i18n.language === 'en' ? 'ur' : 'en';
i18n.changeLanguage(newLang);
 };
 const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);


 const gotoOutflows = () => {
     navigation.navigate('OutFlows');
  };
 const gotoAddUSer = () => {
     navigation.navigate('AddUser');
  };
 const gotoAllUsers = () => {
     navigation.navigate('AllUsers');
  };

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const slidedown = () => {
    Animated.timing(slideDown, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const slideup = () => {
    Animated.timing(slideUp, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const slideright = () => {
    Animated.timing(slideRight, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const slideleft = () => {
    Animated.timing(slideLeft, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  
  useEffect(() => {
    slidedown();
    slideup();
    slideright();
    slideleft();
    fadeIn();
  }, []);

  // 🎨 Dynamic colors based on theme
  const themeStyles = {
    container: {
      backgroundColor: isDark ? '#121212' : '#cfbebeff',
    },
    text: {
      color: isDark ? '#ffffff' : '#B10808',
    },
    box: {
      backgroundColor: isDark ? '#333' : '#d1aaaaff',
    },
  };

  return (
    <View style={[styles.container, themeStyles.container]}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />

      {/* 🌗 Theme toggle switch */}
      <View style={styles.toggleRow}>
        <Text style={[styles.subtitletext, themeStyles.text]}>
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </Text>
        <Switch value={isDark} onValueChange={toggleTheme} />
      </View>

      <View style={styles.titleContainer}>
        <Animated.View style={{ transform: [{ translateY: slideDown }] }}>
          <Text style={[styles.titletext, themeStyles.text]}>
           {t('welcome')} Tayyab
          </Text>
        </Animated.View>
      </View>

      <Text style={styles.subtitletext}>{t('Date')} </Text> 

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Animated.View style={{ transform: [{ translateX: slideLeft }] }}>
          <View style={[styles.box, themeStyles.box]}>
             <TouchableOpacity onPress={gotoAddUSer }>
            <Text style={[styles.subtitletext, themeStyles.text]}>
              Inflows PKR 100,000
            </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>

        <Animated.View style={{ transform: [{ translateX: slideRight }] }}>
          <View style={[styles.box, themeStyles.box]} >
            <TouchableOpacity onPress={gotoAllUsers }>
              <Text style={[styles.subtitletext, themeStyles.text]}>
              Outflows PKR 60,000
            </Text>
            </TouchableOpacity>
            
          </View>
        </Animated.View>
      </View>

      <View style={{ marginTop: 20 }}>
        <Animated.View style={{ transform: [{ translateX: slideLeft }] }}>
          <View style={[styles.box3, themeStyles.box]}>
            <Text style={[styles.subtitletext, themeStyles.text]}>
              Remaining PKR 40,000
            </Text>
          </View>
        </Animated.View>
      </View>

      <View style={{ marginTop: 20 }}>
        <Animated.View style={{ transform: [{ translateX: slideRight }] }}>
          <View style={[styles.box3, themeStyles.box]}>
            <Text style={[styles.subtitletext, themeStyles.text]}>
              Save / Invest
            </Text>
          </View>
        </Animated.View>
      </View>

      <View style={{ marginTop: 20 }}>
        <Animated.View style={{ transform: [{ translateX: slideLeft }] }}>
          <View style={[styles.box3, themeStyles.box]}>
            <Text style={[styles.subtitletext, themeStyles.text]}>
              Dashboard
            </Text>
          </View>
        </Animated.View>
      </View>

      <Animated.View style={{ transform: [{ translateY: slideUp }] }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 60,
          }}
        >
          {['FAQs', 'Call Us', 'Complaints'].map(label => (
            <Text
              key={label}
              style={[styles.subtitletext, themeStyles.text]}
            >
              {label}
            </Text>
          ))}
        </View>
      </Animated.View>
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
 <Text style={{ fontSize: 20 }}>{t('welcome')}</Text>
 <Button title={t('change_lang')} onPress={switchLanguage} />
 </View>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    flexDirection: 'column',
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    marginVertical: 2,
  },
  titletext: {
    fontSize: 24,
    fontWeight: '700',
  },
  subtitletext: {
    fontSize: 20,
    fontWeight: '600',
  },
  box: {
    height: 60,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    borderRadius: 8,
  },
  box3: {
    height: 60,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    borderRadius: 8,
    alignSelf: 'center',
  },
});
