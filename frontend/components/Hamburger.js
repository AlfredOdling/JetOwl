import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Svg } from 'expo'
import { DrawerActions } from 'react-navigation-drawer'

export const Hamburger = ({ props }) => {
  const { navigation } = props
  const { dispatch } = navigation

  return (
    <TouchableOpacity onPress={() => dispatch(DrawerActions.toggleDrawer())}>
      <Svg height={100} width={100} style={{ opacity: 0.98 }}>

        <Svg.Rect
          x={0}
          y={2}
          width={27}
          height={1}
          strokeWidth={3}
          stroke="white"
        />

        <Svg.Rect
          x={0}
          y={13}
          width={19}
          height={1}
          strokeWidth={3}
          stroke="white"
        />

      </Svg>
    </TouchableOpacity>
  )
}