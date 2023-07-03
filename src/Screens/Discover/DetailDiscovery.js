import { View, Text } from "react-native";
import React from "react";
import { useLayoutEffect } from "react";

const DetailDiscovery = ({ route, navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
          headerTitle: () => (
            <View className="">
              <Text className="text-2xl text-center font-bold">{item.title}</Text>
            </View>
          ),
        });
      }, [navigation]);
  const { item } = route.params;
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  );
};

export default DetailDiscovery;
