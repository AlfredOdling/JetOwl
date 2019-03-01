import React from 'react'
import { DrawerItems, SafeAreaView } from 'react-navigation'
import { ScrollView } from 'react-native'

export const DrawerContent = ({ props }) => (
  <ScrollView>
    <SafeAreaView
      style={{ backgroundColor: 'red', padding: 40 }}
      forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
)
