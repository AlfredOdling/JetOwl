tabBarInfoContainer: {
   ...Platform.select({
     ios: {
       shadowColor: 'black',
       shadowOffset: { height: -3 },
       shadowOpacity: 0.1,
       shadowRadius: 3,
     },
     android: {
       elevation: 20,
     },
   }),
   alignItems: 'center',
   backgroundColor: '#fbfbfb',
   paddingVertical: 20,
 },

 export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };


// export class MonoText extends React.Component {
//   render() {
//     return <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />;
//   }
// }


HomeStack.navigationOptions = {
  tabBarLabel: 'Hem',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon
  //     focused={focused}
  //     name={
  //       Platform.OS === 'ios'
  //         ? `ios-information-circle${focused ? '' : '-outline'}`
  //         : 'md-information-circle'
  //     }
  //   />
  // ),
}