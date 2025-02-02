import React from "react"

import { createDrawerNavigator } from "@react-navigation/drawer"

import Home from "./pages/Home"

const Drawer = createDrawerNavigator()

function Routes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen options={{ headerShown: false }} name="Home" component={Home} />
    </Drawer.Navigator>
  )
}

export default Routes
