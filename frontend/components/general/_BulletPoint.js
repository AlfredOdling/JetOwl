import React from 'react'
import { View } from 'react-native'
import { _Text } from './_Text'
import { _Icon } from './_Icon'
import { layout } from '../../styles/_base'
import { _Space } from './_Space'

const { _flexRow, _spaceMainAxis, _spaceCrossAxis } = layout

export const _BulletPoint = ({ require, text }) => {
  return (
    <View
      style={{
        ..._flexRow,
        ..._spaceMainAxis['flexStart'],
        ..._spaceCrossAxis['center'],
      }}>
      <_Icon require={require} />
      <_Space amount={10} />
      <_Text type="rr_14_white" text={text} />
    </View>
  )
}
