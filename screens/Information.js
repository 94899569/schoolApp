import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Information = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
        
      <Text>Coming soon...</Text>
      <TouchableOpacity onPress={()=>navigation.pop()}>
            <View style={{borderRadius: 20, width: 100, height: 40, backgroundColor: '#3367D5', alignItems: 'center', justifyContent: 'center', marginTop: 15}}><Text style={{color: '#fff'}}>Буцах</Text></View>
        </TouchableOpacity>
    </View>
  )
}

export default Information