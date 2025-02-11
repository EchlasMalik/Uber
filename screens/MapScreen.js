import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import React, { useState } from 'react'
import Map from '../components/Map';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import PaymentCard from '../components/PaymentCard';
import MapView from 'react-native-maps';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

const MapScreen = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <View>

      <TouchableOpacity 
      onPress={() => navigation.navigate("HomeScreen")} 
      style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}
      >
        
        <Icon name="menu"/>
      </TouchableOpacity>

      <TextInput
          placeholder={`   From: ${origin && origin.description ? origin.description : "Where From?"}`}
          editable={false}
          style={tw`bg-white absolute top-16 z-20 p- rounded-lg ml-2 w-64 shadow-lg absolute right-8 h-12`}
        />

      <View style={tw` h-1/2`}>
        <Map/>
      </View>

      <View style={tw` h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="PaymentCard"
            component={PaymentCard}
            options={{
              headerShown: false,
            }}
          />
          
        </Stack.Navigator>
      </View>

    </View>
  )
}

export default MapScreen;

const styles = StyleSheet.create({})