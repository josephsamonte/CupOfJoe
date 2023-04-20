import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function App() {
  const [coffeeAmount, setCoffeeAmount] = useState("");
  const [strength, setStrength] = useState("Strong");

  const calculateRatio = () => {
    let ratio;
    if (strength === "Strong") {
      ratio = 15;
    } else if (strength === "Medium") {
      ratio = 16;
    } else {
      ratio = 17;
    }
    const coffee = parseFloat(coffeeAmount) || 0;
    const waterAmount = coffee * ratio;
    return {
      ratio: ratio.toFixed(2),
      waterAmount: waterAmount.toFixed(2)
    };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coffee Ratio Calculator</Text>
      <Text style={styles.label}>Amount of Coffee (in grams)</Text>
      <TextInput
        style={styles.input}
        value={coffeeAmount}
        onChangeText={text => setCoffeeAmount(text)}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Strength</Text>
      <Picker
        style={styles.picker}
        selectedValue={strength}
        onValueChange={itemValue => setStrength(itemValue)}
      >
        <Picker.Item label="Strong" value="Strong" />
        <Picker.Item label="Medium" value="Medium" />
        <Picker.Item label="Weak" value="Weak" />
      </Picker>
      <Text style={styles.label}>Water-to-Coffee Ratio</Text>
      <Text style={styles.result}>{calculateRatio().ratio}</Text>
      <Text style={styles.label}>Water Amount (in milliliters)</Text>
      <Text style={styles.result}>{calculateRatio().waterAmount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5deb3",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold"
  },
  picker: {
    width: "100%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10
  },
  result: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10
  }
});
