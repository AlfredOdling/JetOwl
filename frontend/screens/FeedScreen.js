import React from 'react'
import {
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Button,
} from 'react-native'
import { LinearGradient } from 'expo'

import { Hamburger } from '../components/Hamburger'
import { AdBox } from '../components/AdBox'
import { CTAButton } from '../components/CTAButton'
import { AttentionText } from '../components/AttentionText'
import { HomeScreenStyles } from '../styles/HomeScreenStyles'

export default class FeedScreen extends React.Component {
  render() {
    return (
      <ScrollView style={HomeScreenStyles}>
        <LinearGradient
          colors={['#2B2B2B', '#1C1C1C']}
          style={{ padding: 40, flex: 1 }}>
          <Hamburger props={this.props} />
          <CTAButton />

          <AdBox index={1} />
          <AdBox index={1} />
          <AdBox index={1} />
          <AdBox index={1} />
          <AdBox index={1} />
        </LinearGradient>
      </ScrollView>
    )
  }
}
