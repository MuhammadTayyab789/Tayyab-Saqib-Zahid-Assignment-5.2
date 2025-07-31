import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Switch,
  StatusBar,
} from 'react-native';

const DashboardScreen = () => {
  // 🌗 Theme toggle
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark(prev => !prev);

  // Animations
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideDown = useRef(new Animated.Value(-200)).current;
  const slideUp = useRef(new Animated.Value(200)).current;
  const slideRight = useRef(new Animated.Value(200)).current;
  const slideLeft = useRef(new Animated.Value(-200)).current;

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
      backgroundColor: isDark ? '#121212' : '#ffffff',
    },
    text: {
      color: isDark ? '#ffffff' : '#B10808',
    },
    box: {
      backgroundColor: isDark ? '#333' : '#F9E6E6',
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
            Welcome Tayyab
          </Text>
        </Animated.View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Animated.View style={{ transform: [{ translateX: slideLeft }] }}>
          <View style={[styles.box, themeStyles.box]}>
            <Text style={[styles.subtitletext, themeStyles.text]}>
              Inflows PKR 100,000
            </Text>
          </View>
        </Animated.View>

        <Animated.View style={{ transform: [{ translateX: slideRight }] }}>
          <View style={[styles.box, themeStyles.box]}>
            <Text style={[styles.subtitletext, themeStyles.text]}>
              Outflows PKR 60,000
            </Text>
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
