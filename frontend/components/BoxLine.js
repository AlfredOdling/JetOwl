import React from 'react'
import { Text, View } from 'react-native'
import Colors from '../constants/Colors'

export const BoxLine = ({ color }) => (
  <View style={{ backgroundColor: color, height: 2, width: '100%' }} />
)
