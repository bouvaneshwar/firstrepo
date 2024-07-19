import React from "react";
import {Text, View } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

export default function Header({  }) {
  const { colors } = useTheme();
  const mycolor = colors.background;
  return (
    <View
      style={{
        marginTop:0,
        position:'static',
        top: 0,
        left: 0,
        right: 0,
        height: 45,
        backgroundColor:"black",
        flexDirection: "row",
        justifyContent: "space-between",
        elevation: 0,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          margin: 8,
        }}
      >
        <AntDesign
          style={{
            marginLeft: 10,
          }}
          name="youtube"
          size={32}
          color="red"
        />
        <Text
          style={{
            marginStart:10,
            fontSize: 22,
            marginLeft: 5,
            color: mycolor,
            fontWeight: "bold",
          }}
        >
          YouTube
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: 150,
          margin: 5,
        }}
      >
        <Ionicons name="videocam" size={32} color={mycolor} />
        <Ionicons
          name="search"
          size={32}
          color={mycolor}
        />
        <MaterialIcons
          name="account-circle"
          size={32}
          color={mycolor}
          />
      </View>
    </View>
  );
}
