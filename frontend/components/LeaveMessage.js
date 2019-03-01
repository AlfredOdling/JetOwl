import React from 'react'
import { View } from 'react-native'
import { _Text } from '../components/general/_Text'
import { colors } from '../styles/_base'
import { viewWidth } from '../styles/utils'

export const LeaveMessage = () => (
  <View
    style={{
      backgroundColor: colors.grey,
      height: viewWidth(40),
      width: viewWidth(80),
      padding: 20,
    }}>
    <_Text
      type="rr_16_lightgrey"
      text="Lämna ett meddelande till Anna där du presenterar dig!"
    />
  </View>
)
