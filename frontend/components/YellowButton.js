import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export const YellowButton = ({ text, onPress, hollow }) => {
  const _hollow = {
    backgroundColor: 'none',
    borderWidth: 2,
    borderColor: '#F8E71C',
  }
  const _filled = {
    backgroundColor: '#F8E71C',
  }
  const _style = hollow ? _hollow : _filled

  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 7,
        ..._style,
      }}>
      <Text
        style={{
          fontSize: 16,
          color: hollow ? '#F8E71C' : '#242424',
          fontFamily: 'montserrat-bold',
          margin: 20,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}
