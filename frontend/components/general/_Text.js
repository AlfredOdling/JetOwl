import React from 'react'
import { Text } from 'react-native'
import { colors, fonts } from '../../styles/_base'

export const _Text = ({ type, text, marginTop }) => {
  const types = {
    mb_24_white: {
      fontFamily: fonts.mb,
      fontSize: 24,
      color: colors.white,
    },
    rr_16_yellow: {
      fontFamily: fonts.rr,
      fontSize: 16,
      color: colors.yellow,
    },
    rm_16_white: {
      fontFamily: fonts.rm,
      fontSize: 16,
      color: colors.white,
    },
  }

  return (
    <Text
      style={{
        marginTop,
        ...types[type],
      }}>
      {text}
    </Text>
  )
}
