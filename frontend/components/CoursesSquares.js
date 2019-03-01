import React from 'react'
import { View } from 'react-native'
import { layout } from '../styles/_base'
import { _Space } from './general/_Space'
import { CoursesSquare } from './CoursesSquare'

const { _flexRow, _spaceMainAxis } = layout

export const CoursesSquares = () => (
  <View style={{ ..._flexRow, ..._spaceMainAxis['center'] }}>
    <CoursesSquare number={0} text="Kurser givna" buttonText="SKAPA KURS" />
    <_Space amount={20} />
    <CoursesSquare
      number={0}
      text="Kurser tagna"
      buttonText="SKAPA FÖRFRÅGAN"
    />
  </View>
)
