import { View, Text } from "@tarojs/components";
import { AtButton, AtList, AtListItem, AtTabBar } from "taro-ui";
import { Swiper, SwiperItem } from "@tarojs/components";
import "./index.scss";
import { useEffect, useState } from "react";
import { AtTabs, AtTabsPane } from "taro-ui";
import { AtNavBar } from 'taro-ui'
import Taro from "@tarojs/taro";
import { Picker } from '@tarojs/components'
import { AtGrid } from "taro-ui";
import { AtAvatar } from "taro-ui";
const DATA = new Array(15).fill({
  title: "学历",
  desc: "高中",
});
const selector= ['大专', '高中', '本科', '研究生']
type User = any;
const Index = () => {
  const [tab, setTab] = useState(0);
  const [selectorChecked,setSelectorChecked] =  useState('大专');
  const [uses, setUsers] = useState<Array<User>>(
    new Array(45).fill({ name: "用户1" })
  );
  const handleTabChange = (t) => {
    setTab(t);
  };
  useEffect(() => {
    if (tab == 4) {
      // Taro.navigateTo({
      //   url: "/pages/login/index",
      // });
    }
  }, [tab]);

  const onChange = e => {
    setSelectorChecked(selector[e.detail.value])
  }

  // Taro.navigateTo({
  //   url: "/pages/home/index",
  // });
  return (
    <View className="index">
     
      {tab == 0 && (
        <View>
          <Swiper
            indicatorColor="#999"
            indicatorActiveColor="#333"
            circular
            indicatorDots
            autoplay
          >
            <SwiperItem>
              <View className="demo-text-1">活动111</View>
            </SwiperItem>
            <SwiperItem>
              <View className="demo-text-2">活动112</View>
            </SwiperItem>
            <SwiperItem>
              <View className="demo-text-3">活动113</View>
            </SwiperItem>
          </Swiper>
          <AtList>
            {uses.map((user) => (
              <AtListItem title={user.name} note="描述信息" />
            ))}
          </AtList>
        </View>
      )}
      {tab == 1 && (
        <View>
          <AtGrid
            data={new Array(12).fill({
              image:
                "https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png",
              value: "领会员",
            })}
          />
        </View>
      )}
      {tab == 2 && (
        <View className="my-container">
          <View className="avatar-container">
            <AtAvatar image="https://jdc.jd.com/img/200"></AtAvatar>
          </View>

          <AtList>
            {DATA.map((item, index) => (
                <Picker mode='selector' range={selector} onChange={onChange}>
              <AtListItem
                key={index}
                title={item.title}
                extraText={selectorChecked}
                arrow="right"
              /></Picker>
            ))}
          </AtList>
        </View>
      )}
      <AtTabBar
        fixed
        tabList={[
          { title: "广场", iconType: "sketch", text: "新会员！" },
          { title: "专区", iconType: "tag" },
          // { title: "", iconType: "camera" },
          // { title: "红娘", iconType: "folder" },
          { title: "我的", iconType: "user" },
        ]}
        onClick={handleTabChange}
        current={tab}
      />
    </View>
  );
};

export default Index;
