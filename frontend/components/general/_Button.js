import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { colors, _text } from '../../styles/_base'
import { _Text } from './_Text'

export const _Button = ({ text, onPress, hollow, bgColor, txtColor }) => {
  const _hollow = {
    backgroundColor: 'none',
    borderWidth: 2,
    borderColor: colors[bgColor],
  }
  const _filled = {
    backgroundColor: colors[bgColor],
  }
  const bgStyle = hollow ? _hollow : _filled

  // prettier-ignore
  const type =
    txtColor === 'white' ? 'mb_16_white'
  : txtColor === 'green' ? 'mb_16_green'
  : ''

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
        padding: 20,
        ...bgStyle,
      }}>
      <_Text type={type} text={text} />
    </TouchableOpacity>
  )
}
