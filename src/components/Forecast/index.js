import React from 'react'
import { View, Text } from 'react-native'

export default function Forecast({ data }) {
  return (
    <View>
      <Text>{data.date}</Text>
    </View>
  )
}
