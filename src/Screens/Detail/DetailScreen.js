import { View, Text, Image, Share } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import { useEffect } from "react";
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addLike, deleteLike } from "../../../redux/redux";


const DetailScreen = ({ navigation, route }) => {
  const { items } = route.params;
  const dispatch = useDispatch();

const state = useSelector((state)=>state.cart)
const likestate = useSelector((state)=>state.like)

  const [mark, setMark] = useState(likestate.find(data=>(  data.id == items)) ? true : false);


  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: items.url, // Le contenu que vous souhaitez partager
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Partage réussi
          // console.log('Partage réussi');
        } else {
          // Partage annulé
          // console.log('Partage annulé');
        }
      } else if (result.action === Share.dismissedAction) {
        // Partage fermé
        console.log('Partage fermé');
      }
    } catch (error) {
      console.log(error.message);
    } }
    const likes = ()=>{
    mark ? dispatch(deleteLike(items)) : dispatch(addLike({detail:{img:items?.image,title:items?.title,id:items?.id}})) 
      setMark(!mark)
    }

  return (
    <SafeAreaView className="bg-white h-screen">
      <ScrollView className="px-6">
        <View className="flex-row justify-between items-center">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="p-4 bg-gray-100 rounded-full items-center justify-center"
          >
            <MaterialIcons name="arrow-back-ios" size={24} color="black" />
          </TouchableOpacity>
          <View className="flex-row justify-between px-2 items-center">
            <TouchableOpacity
              className="mr-5 p-4 bg-gray-100 rounded-full"
              onPress={likes}
            >
              {mark ? (
                <FontAwesome name="bookmark" size={25} color="black" />
              ) : (
                
                <FontAwesome name="bookmark-o" size={25} color="black" />
              )}
            </TouchableOpacity>
            <TouchableOpacity className="p-4 bg-gray-100 rounded-full" onPress={handleShare}>
              <MaterialIcons name="share" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-5">
          <Text className="text-3xl font-bold">
           { items?.title}
          </Text>

          <View className="my-2">
            <Image
              source={{
                uri: items.urlToImage,
                width: "100%",
                height: 200,
              }}
              style={{ borderRadius: 10 }}
            />
            <Text className="text-center text-gray-300 my-2">
              {items.publishedAt}
            </Text>
          </View>
          <View>
            <Text className="text-justify">
             {items.content}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;
