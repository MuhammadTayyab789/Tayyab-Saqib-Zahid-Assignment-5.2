import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';

interface TwoButtonModalProps {
  visible: boolean;
  onYes: () => void;
  onNo: () => void;
  title?: string;
  message?: string;
}

const TwoButtonModal = (props: TwoButtonModalProps) => {
  return (
    <Modal
      visible={props.visible}
      transparent={true}
      animationType="slide"
      onRequestClose={props.onNo}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>{props.title }</Text>
          <Text style={styles.message}>{props.message }</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={props.onYes}>
              <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={props.onNo}>
              <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TwoButtonModal;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(27, 18, 18, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'white',
    borderColor: 'red',
    borderWidth: 1.5,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  buttonText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
