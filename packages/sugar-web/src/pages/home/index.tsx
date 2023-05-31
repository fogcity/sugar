import { View, Text } from "@tarojs/components";
import { AtButton, AtTabBar } from "taro-ui";

import "./index.scss";
import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";

const Index = () => {
  const [tab, setTab] = useState(0);
  const handleTabChange = (t) => {
    setTab(t);
  };
  useEffect(() => {
    if (tab == 4) {
      Taro.navigateTo({
        url: "/pages/login/index",
      });
    }
  }, [tab]);
  return (
    <View className="index">
      <AtTabBar
        fixed
        tabList={[
          { title: "广场", iconType: "bullet-list", text: "new" },
          { title: "专区", iconType: "bullet-list" },
          { title: "", iconType: "camera" },
          { title: "红娘", iconType: "folder" },
          { title: "我的", iconType: "user" },
        ]}
        onClick={handleTabChange}
        current={tab}
      />
    </View>
  );
};

export default Index;
