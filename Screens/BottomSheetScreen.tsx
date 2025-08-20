import 'react-native-reanimated';
import React, { useState, useRef, useMemo } from "react";
import {
  View,
  Text,
  Button,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

export default function BottomSheetScreen() {
  // --- Modal State ---
  const [modalVisible, setModalVisible] = useState(false);

  // --- Bottom Sheet ---
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["25%", "40%"], []);

  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <View style={styles.container}>
      {/* Button 1: Open Modal */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Open Info Modal</Text>
      </TouchableOpacity>

      {/* Button 2: Open Bottom Sheet */}
      <TouchableOpacity style={styles.button} onPress={openBottomSheet}>
        <Text style={styles.buttonText}>Open Bottom Sheet</Text>
      </TouchableOpacity>

      {/* Modal Component */}
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              This is an informative modal message!
            </Text>
            <Button title="Dismiss" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>

      {/* Bottom Sheet Component */}
      <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={snapPoints}>
        <View style={styles.sheetContent}>
          <Text style={styles.sheetTitle}>More Options</Text>
          <TouchableOpacity style={styles.sheetButton}>
            <Text style={styles.sheetButtonText}>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sheetButton}>
            <Text style={styles.sheetButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f6f6f3ff",
  },
  button: {
    backgroundColor: "#dd1f1fff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  modalText: {
    marginBottom: 15,
    fontSize: 16,
    textAlign: "center",
  },
  sheetContent: {
    flex: 1,
    padding: 20,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
  },
  sheetButton: {
    paddingVertical: 12,
    backgroundColor: "#db1919ff",
    borderRadius: 8,
    marginVertical: 6,
    alignItems: "center",
  },
  sheetButtonText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
