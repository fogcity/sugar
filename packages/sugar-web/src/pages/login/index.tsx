import { View, Text } from "@tarojs/components";
import { AtButton } from "taro-ui";

import "./index.scss";
import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";

const Login = () => {
  const [permission, setPermission] = useState(false);
  const handleLogin = () => {
    Taro.navigateTo({
      url: "/pages/home/index",
    });
  };
  useEffect(() => {}, []);
  return (
    <View className="login-container">
      <Text className="title">XXXXXXX</Text>
      <Text className="sub-title">XXXXXXXXXXXXXXXXXXXXXXXXXX</Text>

      <AtButton
        disabled={!permission}
        onClick={handleLogin}
        type="primary"
        className="login-button"
      >
        立即登录
      </AtButton>
      <View className="permission-container">
        <input
          type="checkbox"
          onChange={() => setPermission((v) => !v)}
          id="scales"
          name="scales"
          style={{ marginRight: "1em" }}
          checked={permission}
        />
        同意
        <Text className="permission" style={{ margin: "0 .5em" }}>
          {"<<" + "注册协议" + ">>"}
        </Text>
        <Text className="permission">{"<<" + "隐私协议" + ">>"}</Text>
      </View>
    </View>
  );
};

export default Login;
