import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'
import DrawerNavigtion from '../../DrawerNavigation'

const Event = ({navigation}) => {
  return (
    <View>
    {/* <DrawerNavigtion/> */}
      <Button  onPress={()=> navigation.navigate('high-risk')}> click</Button>
    </View>
  )
}

export default Event
