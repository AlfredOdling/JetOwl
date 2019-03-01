import React from 'react'
import { View } from 'react-native'
import { colors, layout } from '../styles/_base'
import { _Image } from '../components/general/_Image'
import { _Text } from '../components/general/_Text'
import { _Icon } from '../components/general/_Icon'
import { _Space } from '../components/general/_Space'
import { viewWidth } from '../styles/utils'

const { _flexColumn, _flexRow, _spaceCrossAxis, _spaceMainAxis } = layout

export const ProfileSquare = () => (
  <View
    style={{
      ..._flexColumn,
      ..._spaceCrossAxis['center'],
      backgroundColor: colors.grey,
      padding: 40,
      // width: viewWidth(85),
    }}>
    <View style={{ ..._flexRow, ..._spaceMainAxis['flexStart'] }}>
      <_Icon require={require('../assets/svgs/edit.svg')} />
      <_Icon require={require('../assets/svgs/settings.svg')} />
    </View>
    <_Space amount={30} />

    <_Image radius={110} uri="http://placekitten.com/g/200/300" />
    <_Space amount={30} />
    <_Text type="mb_24_white" text="Anna Hellström" />
    <_Text type="mb_24_white" text="25 år, Stockholm" />
    <_Space amount={30} />

    <View style={{ ..._flexRow, ..._spaceMainAxis['flexStart'] }}>
      <_Icon require={require('../assets/svgs/star.svg')} />
      <_Space amount={5} />
      <_Icon require={require('../assets/svgs/star.svg')} />
      <_Space amount={5} />
      <_Icon require={require('../assets/svgs/star.svg')} />
      <_Space amount={5} />
      <_Icon require={require('../assets/svgs/star.svg')} />
      <_Space amount={5} />
      <_Icon require={require('../assets/svgs/star.svg')} />
    </View>
  </View>
)
