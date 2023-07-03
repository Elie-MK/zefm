import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import { Divider } from "@rneui/themed/dist";
import { ActivityIndicator } from "react-native";

const DIscoveryScreen = ({ navigation }) => {
  const [newsData, setNewsData] = useState([]);
  const [isloanding, setIsLoanding]=useState(false)

  const options = {
    method: 'GET',
    url: 'https://newsnow.p.rapidapi.com/',
    params: {
      q: 'everything',
      page: '1'
    },
    headers: {
      'X-RapidAPI-Key': 'a2204aedf3mshe6a88af86402b33p1b991cjsnc86f295cd8ac',
      'X-RapidAPI-Host': 'newsnow.p.rapidapi.com'
    }
};

async function fetchData() {
  try {
    const response = await axios.request(options);
    setNewsData(response.data);
  } catch (error) {
    console.error(error);
  }
}

useEffect(()=>{
  setIsLoanding(true)
  fetchData().then(()=>{
    setInterval(()=>{
      setIsLoanding(false)
    },2000)
  })
},[])

  const datasnews = newsData.articles
 
  return (
    <SafeAreaView className="bg-white h-screen">
      <ScrollView>
        {
          isloanding? (
            <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="blue" />
        </View>
          ):(
            <>
                  {
                  datasnews?.map((items, id)=>(
                    <TouchableOpacity
                  className=""
                  onPress={() => navigation.navigate("detail", { items })}
                  key={id}
                >
                  <View className="flex-row items-center">
                    <Image
                      resizeMode="contain"
                      source={{
                        uri: items?.urlToImage,
                        width: "50%",
                        height: 150,
                      }}
                      style={{ borderRadius: 10 }}
                    />
                    <View className="w-40  my-2">
                      <Text className="">{items.source_id}</Text>
                      <Text className="text-xl font-bold">
                        {items.title}
                      </Text>
                    </View>
                  </View>
                  <Divider/>
                </TouchableOpacity>
                  ))
                }
            </>
          )
        }
      </ScrollView>
    </SafeAreaView>
  );
};

export default DIscoveryScreen;
