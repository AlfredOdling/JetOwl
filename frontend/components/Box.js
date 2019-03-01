import React from 'react'
import { Text, View } from 'react-native'
import { LinearGradient } from 'expo'

import { BoxLine } from './BoxLine'

export const Box = ({ index }) => {
  const _index = index - 1
  const content = {
    titles: ['Efterfråga en \nsnabbkurs', 'Bestäm \nmöte med \nmentor', 'Ta din nya \nskräddarsydda \nkurs'],
    paragraphs: [
      'Gör en enkel efterfrågan där du beskriver vad du vill lära dig och hur mycket du är villig att betala.',
      'Få ett erbjudande av en mentor som besitter kunskaperna du söker. Bestäm var och när ni ska mötas. Betalningen reserveras på ditt kort.',
      'Träffa din mentor på utsatt tid och plats och få din skräddarsydda snabbkurs. Godkänn betalningen efteråt. \nKlart & betalt!'
    ],
    colors: ['#74D4FF', '#7492FF', '#74B9FF'],
    marginTop: [140, 40, 40]
  }

  return (
    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: content.marginTop[_index] }}>
      <LinearGradient colors={['#2B2B2B', '#1C1C1C']} style={{ padding: 40 }}>

        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Text
            style={{
              fontSize: 100,
              color: content.colors[_index],
              fontFamily: 'montserrat-bold',
            }}>{_index}</Text>

          <Text
            style={{
              marginLeft: 15,
              fontSize: 19,
              color: content.colors[_index],
              fontFamily: 'montserrat-bold',
            }}>{content.titles[_index]}</Text>
        </View>
        <BoxLine color={content.colors[_index]} />

        <Text
          style={{
            fontSize: 16,
            color: 'white',
            fontFamily: 'roboto-regular',
            marginTop: 15
          }}>{content.paragraphs[_index]}</Text>

      </LinearGradient>
    </View>
  )
}