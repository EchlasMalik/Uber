import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { Icon, Image } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import { selectPrice, selectTravelTimeInformation, setPrice } from '../slices/navSlice'
import { useDispatch } from 'react-redux'

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
]

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const[selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  const dispatch = useDispatch();
  const price = useSelector(selectPrice);

  const handlePress = () => {

    const calculatedPrice = Math.round(travelTimeInformation?.duration?.value * SURGE_CHARGE_RATE * selected?.multiplier) / 100;

    // Dispatch the setPrice action to save the price in Redux
    dispatch(setPrice(calculatedPrice));

    // Navigate to PaymentCard screen
    navigation.navigate("PaymentCard");
    console.log(calculatedPrice);
  };

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity 
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-5 p-3 -mt-10`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl -mt-10`}>Select a Ride - {travelTimeInformation?.distance?.text}</Text>
      </View>

      <FlatList style={tw`-mt-3`} data={data} keyExtractor={item => item.id}
        renderItem={({item:{ id, title, multiplier, image}, item}) => (
          <TouchableOpacity 
            onPress={() => setSelected(item)}
            style={tw`flex-row justify-between items-center px-10 ${id === selected?.id && "bg-gray-200"}`}>
            <Image
              style={{
                width: 100,
                height: 90,
                resizeMode: "contain",
              }}
              source={{uri: image}}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>{travelTimeInformation?.duration?.text} Travel Time</Text>
            </View>
            <Text style={tw`text-xl`}>
            
            {new Intl.NumberFormat('en-gb', {
              style: 'currency',
              currency: 'GBP'
            }).format(

              (travelTimeInformation?.duration?.value * SURGE_CHARGE_RATE * multiplier) / 100
            )}
            
            </Text>
          </TouchableOpacity>
          
        )}
      />

      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          onPress={handlePress} 
          disabled={!selected} 
          style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}>
          <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})