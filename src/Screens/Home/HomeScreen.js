import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Avatar, Badge, BottomSheet, Button, Divider, ListItem } from "@rneui/base";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { SearchBar } from "@rneui/themed";
import { TouchableOpacity } from "react-native";
import HomeScreenNews from "../../Components/HomeScreenNews";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";
import OnlyforyouScreen from "../../Components/OnlyforyouScreen";
import axios from "axios";
import { useEffect } from "react";
import { Image } from "react-native";
import { ActivityIndicator } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [click, setClick] = useState("All");
  const [newsData, setNewsData] = useState([]);
  const [isLoanding, setIsLoanding] = useState(false);

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
  setIsLoanding(true);
  fetchData().then(()=>{
    setInterval(()=>{
      setIsLoanding(false)
    },2000)
  })
},[])

  const datasnews = newsData.articles


console.log(datasnews);

  const DATA = [
    {
      id: "1",
      title: "All",
    },
    {
      id: "2",
      title: "Sport",
    },
    {
      id: "3",
      title: "Education",
    },
    {
      id: "4",
      title: "Santé",
    },
    {
      id: "5",
      title: "Politique",
    },
    {
      id: "6",
      title: "Science",
    },
  ];
  // ];

  return (
    <SafeAreaView className="bg-white h-screen">
      <StatusBar style="dark" />

      <View className="ml-5 mt-5">
      <ScrollView>
        <View className="flex-row justify-between">
          <View className="flex-row items-center">
            <View>
              <Avatar
                size={70}
                rounded
                source={{
                  uri: "https://randomuser.me/api/portraits/men/36.jpg",
                }}
              />
            </View>
            <View className="ml-3">
              <Text className="text-gray-400">Good Morning</Text>
              <Text className="text-xl font-bold">Elie MK</Text>
            </View>
          </View>
          <View className="flex-row mx-4 items-center">
            <TouchableOpacity
              className="bg-gray-100 rounded-xl p-2"
              onPress={() => setIsVisible(true)}
            >
              <Ionicons name="search" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity className="ml-6 bg-gray-100 rounded-xl p-2">
              <Feather name="bell" size={24} color="black" />
              <View className="absolute ml-2 mt-3">
                <Badge status="primary" badgeStyle={{ marginLeft: 13 }} />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Breakin News */}

     
        <View>
          <View className="flex-row justify-between items-center my-5">
            <Text className="text-3xl font-bold">Breaking News</Text>
            <TouchableOpacity className="mx-4" onPress={()=>navigation.navigate('discovery')}>
              <Text className="text-blue-500 text-lg">See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            <HomeScreenNews />
          </ScrollView>
        </View>

        <View>
          <FlatList
            data={DATA}
            horizontal={true}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                className="mt-5 ml-3  items-center "
                onPress={() => navigation.navigate(item.title)}
              >
                <View
                  className={`rounded-xl transition ease-in-out duration-300 ${
                    click == item.title ? "bg-blue-500 " : "bg-gray-100"
                  }`}
                >
                  <Text
                    className={`text-xl  px-5 py-2 ${
                      click == item.title ? "text-white" : ""
                    } `}
                    onPress={() => setClick(item.title)}
                  >
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

        <View className="my-5">
          <View className="flex-row justify-between items-center my-5">
            <Text className="text-3xl font-bold">Only for You</Text>
            <TouchableOpacity className="mx-4" onPress={()=>navigation.navigate('discovery')}>
              <Text className="text-blue-500 text-lg">See All</Text>
            </TouchableOpacity>
          </View>
         {
          isLoanding? (
            <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="blue" />
        </View>
          ): (
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
            
        </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
4;
