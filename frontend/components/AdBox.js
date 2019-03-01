import React from 'react'
import { Text, View } from 'react-native'
import { viewWidth } from '../styles/utils'

import { WhiteLine } from './WhiteLine'

export const AdBox = ({ index }) => {
  const _index = index - 1
  const content = {
    titles: ['Rendering av film i Cinema 4D Lite'],
    paragraphs: ['Inom två veckor'],
    colors: ['#74D4FF'],
  }

  return (
    <View
      style={{
        width: viewWidth(80),
        display: 'flex',
        alignItems: 'center',
        marginTop: 40,
        backgroundColor: '#2B2B2B',
        padding: 40,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 7,
      }}>
      <Text
        style={{
          fontSize: 18,
          color: 'white',
          fontFamily: 'montserrat-bold',
          textAlign: 'center',
        }}>
        {content.titles[_index]}
      </Text>
      <WhiteLine />

      <Text
        style={{
          fontSize: 14,
          color: 'white',
          fontFamily: 'roboto-regular',
        }}>
        {content.paragraphs[_index]}
      </Text>
    </View>
  )
}
