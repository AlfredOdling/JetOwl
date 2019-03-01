import React from 'react'
import { Image } from 'react-native'
import { colors } from '../../styles/_base'

export const _Image = ({ radius, uri }) => {
  return (
    <Image
      style={{
        width: radius,
        height: radius,
        borderRadius: radius / 2,
        borderWidth: 2,
        borderColor: colors.yellow,
      }}
      source={{
        uri,
      }}
    />
  )
}
