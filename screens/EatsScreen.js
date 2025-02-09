import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const EatsScreen = () => {

  const openHelpLink = () => {
    Linking.openURL('https://help.uber.com');
  };
  const navigation = useNavigation();

  return (

    
    <View style={tw`flex-1 justify-center items-center p-5`}>

      <TouchableOpacity 
      onPress={() => navigation.navigate("HomeScreen")} 
      style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}
      >
        
        <Icon name="menu"/>
      </TouchableOpacity>

      <Text style={tw`text-2xl text-center font-bold mb-6`}>
        Uber Eats is currently not available in your region
      </Text>
      <TouchableOpacity
        onPress={openHelpLink}
        style={tw`bg-gray-500 py-3 px-8 rounded-full`}
      >
        <Text style={tw`text-white text-lg font-semibold text-center`}>
          Visit Help Center
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default EatsScreen

const styles = StyleSheet.create({})