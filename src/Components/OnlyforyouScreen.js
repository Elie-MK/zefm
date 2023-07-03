import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { ScrollView } from "react-native";

const DIscoveryScreen = ({ navigation }) => {

  const DATA = [
    {
      id: "1",
      title: "Sport",
      name: "sports-soccer",
    },
    {
      id: "2",
      title: "Education",
      name: "book",
    },
    {
      id: "3",
      title: "Santé",
      name: "medical-services",
    },
    {
      id: "4",
      title: "Politique",
      name: "account-balance",
    },
    {
      id: "4",
      title: "Sciences",
      name: "science",
    },
  ];
  return (
    <SafeAreaView className="bg-white h-screen">
      <View className="items-center ">
        <FlatList
          data={DATA}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="mt-5 ml-3  items-center"
              onPress={() => navigation.navigate("detaildiscovery", { item })}
            >
              <View className="bg-gray-100 p-5 items-center rounded-xl">
                <MaterialIcons name={item.name} size={140} color="black" />
                <Text className="text-2xl">{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

     
    </SafeAreaView>
  );
};

export default DIscoveryScreen;
