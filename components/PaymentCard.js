import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import QRCode from 'react-native-qrcode-svg';
import tw from 'tailwind-react-native-classnames';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native-elements';
import { selectPrice } from '../slices/navSlice';
import { useSelector } from 'react-redux';


const PaymentCard = () => {
    // Define the wallet address
    const btcAddress = "bc1qw4rl87l07cp73lh86paj8xkfnrzxxs7dtddjtt"
    const ltcAddress = "ltc1qupcd7cduyakxd9ln9l9flnztu8jv2qqfnzn3sq"

    const price = useSelector(selectPrice);
    const [selectedAddress, setSelectedAddress] = useState(null);

    const handleBTCClick = () => {
        setSelectedAddress(btcAddress);
    };

    const handleLTCClick = () => {
        setSelectedAddress(ltcAddress);
    }

    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
        <View>
            <Text style={tw`text-center py-5 text-xl -mt-10`}>Payment Method</Text>
            <View style={tw`flex-row justify-between mx-5 mb-4`}>
            <TouchableOpacity
                style={tw`flex-row items-center justify-center py-3 px-8 mb-3 bg-gray-500 rounded-lg`}
                onPress={handleBTCClick}
                >
                <Image
                    source={{ uri: 'https://s2.coinmarketcap.com/static/img/coins/200x200/1.png' }} // Use your local or URL Bitcoin logo
                    style={tw`w-6 h-6 mr-3`}
                />
                <Text style={tw`text-white text-lg`}>Bitcoin</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={tw`flex-row items-center justify-center py-3 px-8 mb-3 bg-gray-500 rounded-lg`}
                onPress={handleLTCClick}
                >
                <Image
                    source={{ uri: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png' }} // Use your local or URL Litecoin logo
                    style={tw`w-6 h-6 mr-3`}
                />
                <Text style={tw`text-white text-lg`}>Litecoin</Text>
            </TouchableOpacity>
            </View>
            <Text style={tw`text-lg text-center mb-2 text-black-500`}>Total: £{price}</Text>
            {selectedAddress && (
                <View style={tw`mt-5 justify-center items-center`}>
                <Text style={tw`text-sm text-center mb-2 text-gray-500`}>Wallet Address: {selectedAddress}</Text>
                <QRCode value={selectedAddress} size={100} />
                </View>
      )}
      </View>
      
    </SafeAreaView>
  );
};

export default PaymentCard

const styles = StyleSheet.create({})