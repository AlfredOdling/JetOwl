import React from 'react'
import { View } from 'react-native'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import { colors } from '../styles/_base'
import { viewWidth } from '../styles/utils'

export const Calendar_ = () => (
  <View style={{ width: viewWidth(80) }}>
    <Calendar
      theme={{
        backgroundColor: colors.grey,
        calendarBackground: colors.grey,
        textSectionTitleColor: '#b6c1cd',
        selectedDayTextColor: colors.green,
        dayTextColor: colors.green,
        textDisabledColor: '#d9e1e8',
        dotColor: '#00adf5',
        selectedDotColor: '#ffffff',
        arrowColor: 'orange',
        monthTextColor: colors.white,
        textMonthFontWeight: 'bold',
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16,
      }}
      // Collection of dates that have to be marked. Default = {}
      markedDates={{
        '2012-05-16': { selected: true, marked: true, selectedColor: 'blue' },
        '2012-05-17': { marked: true },
        '2012-05-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
        '2012-05-19': { disabled: true, disableTouchEvent: true },
      }}
    />
  </View>
)
