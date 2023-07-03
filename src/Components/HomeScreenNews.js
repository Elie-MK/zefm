import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

const HomeScreenNews = () => {
  return (
    <View>
        <View className="items-center">
        <Image
          source={{
            uri: "https://www.afrikmag.com/wp-content/uploads/2023/06/Messi-ou-Ronaldo-qui-est-le-GOAT-jpg.webp",
            width:"100%", 
            height:180
          }}
          style={{borderRadius:15}}
        />
        <View className="absolute mt-28 w-80 mx-2">
            <Text className=" text-white font-bold text-lg">Messi and Ronaldo score to reach historic landmarks</Text>
        </View>
        </View>
    </View>
  );
};

export default HomeScreenNews;
