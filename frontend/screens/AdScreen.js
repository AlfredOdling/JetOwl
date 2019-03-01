import React from 'react'
import { View, ScrollView } from 'react-native'
import { LinearGradient } from 'expo'

import { Hamburger } from '../components/Hamburger'
import { HomeScreenStyles } from '../styles/HomeScreenStyles'
import { _Text } from '../components/general/_Text'
import { _Space } from '../components/general/_Space'
import { _BulletPoint } from '../components/general/_BulletPoint'
import { _Button } from '../components/general/_Button'

import { WhiteLine } from '../components/WhiteLine'
import { Tag } from '../components/Tag'
import { ProfileBrick } from '../components/ProfileBrick'

export default class AdScreen extends React.Component {
  render() {
    return (
      <ScrollView style={HomeScreenStyles}>
        <LinearGradient
          colors={['#2B2B2B', '#1C1C1C']}
          style={{ padding: 40, flex: 1 }}>
          <Hamburger props={this.props} />
          <_Text
            textAlignCenter
            type="mb_24_white"
            text="Rendering av film i Cinema 4D Lite"
          />
          <WhiteLine />
          <ProfileBrick />
          <_Space amount={20} />

          <_Text
            type="rr_16_white"
            text="Jag skulle vilja lära mig hur man gör en film i Cinema 4D (lite versionen) och hur man renderar filmen via någon typ av molntjänst."
          />
          <_Space amount={30} />

          <_Text type="mb_18_white" text="Efterfrågad kunskap" />
          <_Space amount={15} />

          <_BulletPoint
            require={require('../assets/svgs/check.svg')}
            text="Skapa en film i Cinema 
          4D Lite"
          />
          <_Space amount={10} />
          <_BulletPoint
            require={require('../assets/svgs/check.svg')}
            text="Rendera filmen i moln"
          />
          <_Space amount={40} />

          <_Text type="mb_18_white" text="Detaljer" />
          <_Space amount={15} />
          <_BulletPoint
            require={require('../assets/svgs/calendar.svg')}
            text="Inom två veckor"
          />
          <_Space amount={10} />
          <_BulletPoint
            require={require('../assets/svgs/geo.svg')}
            text="Stockholm, Sverige"
          />
          <_Space amount={30} />

          <_Text type="mb_18_white" text="Taggar" />
          <_Space amount={15} />
          <Tag text="Cinema 4D" />
          <_Space amount={10} />
          <Tag text="Rendering" />
          <_Space amount={10} />
          <Tag text="After Effects" />
          <_Space amount={80} />

          <_Button bgColor="green" txtColor="white" />
        </LinearGradient>
      </ScrollView>
    )
  }
}
