import React from 'react'
import { View } from 'react-native'
import { colors, layout } from '../styles/_base'
import { _Text } from './general/_Text'
import { _Space } from './general/_Space'

const { _flexColumn, _spaceCrossAxis, _spaceMainAxis } = layout

export const CoursesSquare = ({ number, text, buttonText }) => (
  <View
    style={{
      shadowOffset: { width: 0, height: 0 },
      shadowColor: 'black',
      shadowOpacity: 0.3,
      shadowRadius: 7,
    }}>
    <View
      style={{
        backgroundColor: colors.grey,
        ..._flexColumn,
        ..._spaceCrossAxis['center'],
        padding: 20,
      }}>
      <_Text type="mb_24_white" text={number} />
      <_Space amount={5} />
      <_Text type="rr_14_white" text={text} />
    </View>

    <View
      style={{
        backgroundColor: colors.yellow,
        ..._spaceMainAxis['center'],
        padding: 20,
      }}>
      <_Text type="mb_14_black" text={buttonText} />
    </View>
  </View>
)
