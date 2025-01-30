import React from "react"
import { View, Text, StyleSheet } from "react-native"

import { LinearGradient } from "expo-linear-gradient"

import { Ionicons } from "@expo/vector-icons"

export default function Header({ background, weather }) {
  return (
    <LinearGradient style={styles.header} colors={background}>
      <Text style={styles.date}>{weather.results.date}</Text>

      <Text style={styles.city}>{weather.results.city_name}</Text>

      <Ionicons name="cloud" size={150} color="#FFF" />

      <Text style={styles.temperature}>{weather.results.temp}°</Text>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  header: {
    width: "95%",
    height: "55%",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 8,
  },
  date: {
    color: "#FFF",
    fontSize: 18,
  },
  city: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  temperature: {
    color: "#FFF",
    fontSize: 80,
    fontWeight: "bold",
  },
})
