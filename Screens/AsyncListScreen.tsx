// App.tsx
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Swipeable } from "react-native-gesture-handler";

export default function AsyncListScreen() {
  const [todos, setTodos] = useState<string[]>([]);
  const [text, setText] = useState("");

  // Load from storage on mount
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const saved = await AsyncStorage.getItem("todos");
        if (saved) setTodos(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load todos", e);
      }
    };
    loadTodos();
  }, []);

  // Save whenever todos change
  useEffect(() => {
    AsyncStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([...todos, text.trim()]);
    setText("");
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const renderRightActions = (index: number) => (
    <TouchableOpacity
      style={styles.deleteButton}
      onPress={() => deleteTodo(index)}
    >
      <Text style={styles.deleteText}>Delete</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My To-Do List</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todos}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Swipeable renderRightActions={() => renderRightActions(index)}>
            <View style={styles.todoItem}>
              <Text style={styles.todoText}>{item}</Text>
            </View>
          </Swipeable>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },
  addButton: {
    backgroundColor: "#007BFF",
    marginLeft: 10,
    padding: 14,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  todoItem: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  todoText: { fontSize: 16, color: "#333" },
  deleteButton: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    borderRadius: 8,
    marginBottom: 10,
  },
  deleteText: { color: "#fff", fontWeight: "bold" },
});
