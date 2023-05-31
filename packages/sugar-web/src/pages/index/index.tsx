import { View, Text } from "@tarojs/components";
import { AtButton, AtTabBar } from "taro-ui";

import "./index.scss";
import { useEffect } from "react";
import Taro from "@tarojs/taro";

const Index = () => {
  useEffect(() => {
    Taro.navigateTo({
      url: "/pages/home/index",
    });
  }, []);
  return <View className="index"></View>;
};

export default Index;
