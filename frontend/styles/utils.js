import { Dimensions } from 'react-native'

export function viewWidth(procent) {
  return Dimensions.get('window').width * procent * 0.01
}
