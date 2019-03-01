import React from 'react'
import { View } from 'react-native'
import { LinearGradient } from 'expo'
import { layout } from '../styles/_base'
import { _Text } from './general/_Text'
import { _Image } from './general/_Image'

const { _flexColumn, _spaceCrossAxis } = layout
const _styleText = {
  ..._flexColumn,
  ..._spaceCrossAxis['flexStart'],
  marginLeft: 20,
}

export const ProfileBrick = () => (
  <LinearGradient colors={['#2B2B2B', '#1C1C1C']}>
    <View style={{ ...layout._flexRow, ...layout._spaceMainAxis }}>
      <_Image
        uri="https://facebook.github.io/react-native/docs/assets/favicon.png"
        radius={50}
      />
      <View style={{ _styleText }}>
        <_Text text={'Anna Hellström'} type="rr_16_yellow" />
        <_Text text={'25 år, Stockholm'} type="rr_16_yellow" />
        <_Text text={'hej'} type="rm_16_white" />
      </View>
    </View>
  </LinearGradient>
)
