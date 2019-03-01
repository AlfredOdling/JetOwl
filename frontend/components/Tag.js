import React from 'react'
import { View } from 'react-native'
import { _Text } from './general/_Text'

export const Tag = ({ text }) => (
  <View
    style={{
      backgroundColor: 'none',
      borderWidth: 2,
      borderColor: '#F8E71C',
      padding: 10,
    }}>
    <_Text type="rr_14_white" text={text} />
  </View>
)
