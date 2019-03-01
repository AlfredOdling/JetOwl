import React from 'react'
import { Text, View } from 'react-native'
import Colors from '../constants/Colors'
import { Title } from '../components/Title'
import { YellowLine } from '../components/YellowLine'

export const AttentionText = () => (
  <View style={{ marginVertical: 200, display: 'flex', alignItems: 'flex-start' }}>
  <Title text={'Snabbkurser på beställning.'} />
  <YellowLine width='95%' />

  <Title marginTop={20} text={'Personliga möten.'} />
  <YellowLine width='60%' />
</View>
)