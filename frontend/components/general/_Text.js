import React from 'react'
import { Text } from 'react-native'
import { _text } from '../../styles/_base'

export const _Text = ({ type, text, textAlignCenter }) => {
  return (
    <Text
      style={{
        ..._text[type],
        textAlign: textAlignCenter ? 'center' : 'auto',
      }}>
      {text}
    </Text>
  )
}
