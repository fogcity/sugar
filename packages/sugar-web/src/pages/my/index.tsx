import { View, Text } from "@tarojs/components";
import { AtButton, AtTabBar, AtList, AtListItem } from "taro-ui";

import "./index.scss";
import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";

const DATA = [
  {
    title: "学历",
    desc: "高中",
  },
].fill({
  title: "学历",
  desc: "高中",
});

const Index = () => {
  return (
    <View className="index">
      <AtList>
        {DATA.map((item, index) => (
          <AtListItem
            key={index}
            title={item.title}
            extraText={item.desc}
            arrow="right"
          />
        ))}
      </AtList>
    </View>
  );
};

export default Index;
