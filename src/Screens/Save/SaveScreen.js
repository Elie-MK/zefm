import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteLike } from "../../../redux/redux";

const SaveScreen = () => {
  const navigation = useNavigation()
  const [mark, setMark] = useState(false);


  const dispatch = useDispatch();
  const state = useSelector((state)=>state.like)

  return (
    <SafeAreaView className=" bg-white h-screen">
      <View>
    {
      state.length < 1 && (
        <View>
          <Text>Vide</Text>
        </View>
      )
    }

    {
      state.length >= 1 && (
        <>
    {
      state.map((items, index)=>(
        <TouchableOpacity className="mx-4 flex-row items-center bg-gray-200 rounded-r-xl mb-2" onPress={()=>navigation.navigate('detail', {items})}  key={index}>
        <View className="flex-row items-center">
          <Image
            source={{
              uri: items?.img ,
              width: "50%",
              height: 150,
            }}
            style={{ borderRadius: 5 }}
          />
        </View>
        <View className="-mx-20 w-64">
          <Text className=""></Text>
          <Text className="text-xl font-bold">{items.detail.title}</Text>
        </View>
        <View className="absolute ml-80">
        <TouchableOpacity
              className="mr-5 p-4 rounded-full"
              onPress={()=>dispatch(deleteLike(items?.detail?.id))} 
            >
                <FontAwesome name="bookmark" size={25} color="black" />
   
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
      ))
    }
    </>
      )
    }
        </View>
    </SafeAreaView>
  );
};

export default SaveScreen;
