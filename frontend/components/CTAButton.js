import React from 'react'
import { Text, View } from 'react-native'
import Colors from '../constants/Colors'

export const CTAButton = ({ text, marginTop }) => (
  <View
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
      EFTERFRÅGA KURS
    </Text>
  </View>
)
