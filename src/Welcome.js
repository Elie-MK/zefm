import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { Button } from "@rneui/base";
import Color from "../Color";

const Welcome = ({navigation}) => {
  console.log(navigation);
  return (
      <View className="bg-gray-500">
      <View className="-mt-12">
        <Image resizeMode="contain" source={{
            uri:"https://www.francetvinfo.fr/pictures/-QRfiZ2nJn9VARGgwkvk-ij2cEA/1200x1200/2022/05/05/phpYiH2Az.jpg", 
            height:600, 
            width:520
        }} />
      </View>
      <View className="bg-white h-screen rounded-t-3xl -my-20">
        <View className="px-5 mt-16">
          <View>
            <Text className="text-4xl font-bold">
              Stay in the know with just one tap
            </Text>
            <Text className="text-lg mt-3 text-gray-400">
              Easily stay informed and up-to-date on the lates newws with just a tap.
            </Text>
          </View>
          <View className="items-center my-11">
          <Button buttonStyle={{
            borderRadius:40, 
            padding:18, 
            width:330
          }} title="Here we go" titleStyle={{fontSize:22, fontWeight:"bold"}} onPress={()=>navigation.replace(" ")} />
          </View>
        </View>
      </View>
      </View>
  );
};

export default Welcome;
