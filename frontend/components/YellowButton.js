import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'

export const YellowButton = ({ text, onPress, marginTop }) => (
  <TouchableOpacity
    onPress={() => onPress}
    style={{
      backgroundColor: '#F8E71C',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      shadowOffset: { width: 0, height: 0 },
      shadowColor: 'black',
      shadowOpacity: 1,
      shadowRadius: 7,
    }}>
    <Text
      style={{
        fontSize: 16,
        color: '#242424',
        fontFamily: 'montserrat-bold',
        margin: 20,
      }}>
      {text}
    </Text>
  </TouchableOpacity>
)