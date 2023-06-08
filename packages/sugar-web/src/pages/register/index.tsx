import { View, Picker } from "@tarojs/components";
import {
  AtForm,
  AtButton,
  AtInput,
  AtList,
  AtListItem,
  AtFloatLayout,
} from "taro-ui";
import { User } from "./type";

import "./index.scss";
import { useState } from "react";
// import Taro from "@tarojs/taro";

const HOME_TOWN = ["美国", "中国", "巴西", "日本"];
const EDUCATION_LEVEL = ["初中", "高中", "大专", "本科", "硕士", "博士"];
const HC_LEVEL = ["双无", "有车无房", "有房无车", "有房有车"];
const SEX = ["男", "女"];
const DRINK_LEVEL = ["不喝", "偶尔", "经常"];
const SMOKING_level = ["不吸", "偶尔", "经常"];
const CAR_LEVEL = ["未购车", "已经购车", "需要时购置"];
const HOUSE_LEVEL = [
  "未购房",
  "正在考虑购房",
  "已购房有贷款",
  "已购房无贷款",
  "暂无购房能力",
];
const ETHNICITY = ["汉族", "回族", "维吾尔族", "苗族", "彝族", "其他少数民族"];
const REVENUE = [
  "<3k",
  "3~5k",
  "5~8k",
  "8~10k",
  "1~1.5w",
  "1.5~2w",
  "2~3w",
  "3~4w",
  ">4w",
];
const CAREER = [
  "上班族",
  "自由职业",
  "在校生",
  "求职中",
  "个体户老板",
  "事业单位",
  "教师",
  "护士",
  "医生",
  "服务业",
];

const Register = () => {
  const [basicInfo, setBasicInfo] = useState<User>(Object);

  const [nameEdit, setNameEdit] = useState<boolean>(false);

  // const handleLogin = () => {
  //   Taro.navigateTo({
  //     url: "/pages/home/index",
  //   });
  // };

  function handleChange(value: any, key: string) {
    console.log(value);

    setBasicInfo({ ...basicInfo, [key]: value });
  }
  function onSubmit() {
    console.log(basicInfo);
  }

  function editName() {
    setNameEdit(!nameEdit);
  }

  return (
    <View className="register-container">
      <AtForm onSubmit={onSubmit}>
        <AtInput
          name="nickName"
          title="昵称"
          placeholder="昵称"
          value={basicInfo?.nickName}
          onChange={(value) => handleChange(value, "nickName")}
        />

        <AtList>
          <AtListItem
            title="姓名"
            extraText={basicInfo?.name}
            arrow="right"
            onClick={editName}
          />
        </AtList>
        <AtFloatLayout
          isOpened={nameEdit}
          title="这是个标题"
          onClose={editName}
          scrollTop={10}
        >
          <AtInput
            name="name"
            placeholder="编辑姓名"
            value={basicInfo?.name}
            onChange={(value) => handleChange(value, "name")}
          />
        </AtFloatLayout>

        <Picker
          mode="selector"
          range={EDUCATION_LEVEL}
          onChange={(e) => handleChange(e.detail.value, "education")}
        >
          <AtList>
            <AtListItem
              title="学历"
              extraText={EDUCATION_LEVEL[basicInfo?.education]}
              arrow="right"
            />
          </AtList>
        </Picker>

        <Picker
          mode="date"
          value={basicInfo?.birthday}
          onChange={(e) => handleChange(e.detail.value, "birthday")}
        >
          <AtList>
            <AtListItem
              title="生日"
              extraText={basicInfo?.birthday}
              arrow="right"
            />
          </AtList>
        </Picker>

        <Picker
          mode="selector"
          range={HC_LEVEL}
          onChange={(e) => handleChange(e.detail.value, "hc")}
        >
          <AtList>
            <AtListItem
              title="房车情况"
              extraText={HC_LEVEL[basicInfo?.hc]}
              arrow="right"
            />
          </AtList>
        </Picker>

        <Picker
          mode="selector"
          range={SEX}
          onChange={(e) => handleChange(e.detail.value, "sex")}
        >
          <AtList>
            <AtListItem
              title="性别"
              extraText={SEX[basicInfo?.sex]}
              arrow="right"
            />
          </AtList>
        </Picker>

        <Picker
          mode="selector"
          range={DRINK_LEVEL}
          onChange={(e) => handleChange(e.detail.value, "drinking")}
        >
          <AtList>
            <AtListItem
              title="喝酒情况"
              extraText={DRINK_LEVEL[basicInfo?.drinking]}
              arrow="right"
            />
          </AtList>
        </Picker>

        <Picker
          mode="selector"
          range={SMOKING_level}
          onChange={(e) => handleChange(e.detail.value, "smoking")}
        >
          <AtList>
            <AtListItem
              title="抽烟情况"
              extraText={SMOKING_level[basicInfo?.smoking]}
              arrow="right"
            />
          </AtList>
        </Picker>

        <Picker
          mode="selector"
          range={CAR_LEVEL}
          onChange={(e) => handleChange(e.detail.value, "car")}
        >
          <AtList>
            <AtListItem
              title="购车情况"
              extraText={CAR_LEVEL[basicInfo?.car]}
              arrow="right"
            />
          </AtList>
        </Picker>

        <Picker
          mode="selector"
          range={HOUSE_LEVEL}
          onChange={(e) => handleChange(e.detail.value, "house")}
        >
          <AtList>
            <AtListItem
              title="购房情况"
              extraText={HOUSE_LEVEL[basicInfo?.house]}
              arrow="right"
            />
          </AtList>
        </Picker>

        <Picker
          mode="selector"
          range={ETHNICITY}
          onChange={(e) => handleChange(e.detail.value, "ethnicity")}
        >
          <AtList>
            <AtListItem
              title="民族"
              extraText={ETHNICITY[basicInfo?.ethnicity]}
              arrow="right"
            />
          </AtList>
        </Picker>

        <Picker
          mode="selector"
          range={REVENUE}
          onChange={(e) => handleChange(e.detail.value, "revenue")}
        >
          <AtList>
            <AtListItem
              title="收入"
              extraText={REVENUE[basicInfo?.revenue]}
              arrow="right"
            />
          </AtList>
        </Picker>

        <Picker
          mode="selector"
          range={CAREER}
          onChange={(e) => handleChange(e.detail.value, "career")}
        >
          <AtList>
            <AtListItem
              title="职业"
              extraText={CAREER[basicInfo?.career]}
              arrow="right"
            />
          </AtList>
        </Picker>

        <Picker
          mode="selector"
          range={HOME_TOWN}
          onChange={(e) => handleChange(HOME_TOWN[e.detail.value], "home")}
        >
          <AtList>
            <AtListItem
              title="家乡"
              extraText={basicInfo?.home}
              arrow="right"
            />
          </AtList>
        </Picker>

        <Picker
          mode="region"
          // range={selector}
          // regionData={habitation}
          onChange={(e) => handleChange(e.detail.value, "habitation")}
        >
          <AtList>
            <AtListItem
              title="现居地"
              extraText={basicInfo?.habitation}
              arrow="right"
            />
          </AtList>
        </Picker>

        <AtButton formType="submit">提交</AtButton>
      </AtForm>
    </View>
  );
};

export default Register;
