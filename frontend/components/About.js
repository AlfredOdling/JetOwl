import React from 'react'
import { View } from 'react-native'
import { colors, layout } from '../styles/_base'
import { _Text } from './general/_Text'
import { _Space } from './general/_Space'
import { viewWidth } from '../styles/utils'

const { _flexColumn, _flexRow, _spaceCrossAxis, _spaceMainAxis } = layout

export const About = () => (
  <View style={{ width: viewWidth(80) }}>
    <_Text type="mb_18_white" text="Kort om mig" />
    <_Space amount={10} />
    <_Text
      type="rr_16_white"
      text="Jag skulle vilja lära mig hur man gör en film i Cinema 4D (lite versionen) och hur man renderar filmen via någon typ av molntjänst."
    />
  </View>
)
