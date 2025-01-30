import React from "react"
import { TouchableOpacity, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { Feather } from "@expo/vector-icons"

export default function Menu() {
  const navigation = useNavigation()

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.openDrawer()}>
      <Feather name="menu" size={36} color="#373737" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 9,
    width: 70,
    height: 70,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    left: 15,
    top: 30,
    elevation: 5,
    shadowOpacity: 0.2,
  },
})
