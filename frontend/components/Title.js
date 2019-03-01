import React from 'react'
import { Text } from 'react-native'
import Colors from '../constants/Colors'

export const Title = ({ text, marginTop }) => (
  <Text
      style={{
        backgroundColor: 'transparent',
        fontSize: 19,
        color: '#F8E71C',
        fontFamily: 'montserrat-bold',
        marginTop
      }}>
      {text}
    </Text>
)