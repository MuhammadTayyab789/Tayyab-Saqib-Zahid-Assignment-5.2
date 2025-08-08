import React, { useState, useRef, useCallback } from 'react';
import { View, Text, Button, StyleSheet, ToastAndroid } from 'react-native';
import TwoButtonModal from '../Components/TwoButtonModals';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

const Outflow = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleYes = () => {
    ToastAndroid.show('You pressed Yes!', ToastAndroid.LONG);
    setModalVisible(false);
  };

  const handleNo = () => {
    setModalVisible(false);
  };

  const handleSheetChanges = useCallback((index: number) => {
    console.log('Bottom Sheet position:', index);
  }, []);

  const openBottomSheet = () => {
    bottomSheetRef.current?.expand(); // or .snapToIndex(0)
  };

  return (
    <View style={styles.container}>
      <Button title="Open Modal" onPress={() => setModalVisible(true)} />
      <Button title="Open Bottom Sheet" onPress={openBottomSheet} />

      {/* Modal */}
      <TwoButtonModal
        visible={modalVisible}
        onYes={handleYes}
        onNo={handleNo}
        title="Alert"
        message="Are you sure you want to proceed?"
      />

      {/* Bottom Sheet */}
      <BottomSheet
        ref={bottomSheetRef}
        index={-1} // hidden by default
        snapPoints={['25%', '50%']} // how far it expands
        onChange={handleSheetChanges}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>🎉 This is a bottom sheet!</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default Outflow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
  },
});
