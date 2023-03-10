import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Alert,
  BackHandler,
  TouchableOpacity,
  ToastAndroid,
  KeyboardAvoidingView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  UserGroupIcon,
  PencilSquareIcon,
  PowerIcon,
  ClipboardDocumentListIcon,
  BellAlertIcon,
  CreditCardIcon,
  BanknotesIcon,
  NewspaperIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserMain from "./UserHomeRootComponent";
import Profilepic from "../../images/profilepic.jpg";
import Malesymbol from "../../images/malesymbol.png";
import Femalesymbol from "../../images/femalesymbol.png";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../services/UserData.reducer";

const UserSetting = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.user).token;
  const fname = useSelector((state) => state.user).firstName;
  const gender = useSelector((state) => state.user).gender;
  const lname = useSelector((state) => state.user).lastName;
  const about = useSelector((state) => state.user).about;
  const email = useSelector((state) => state.user).email;
  const phone = useSelector((state) => state.user).phoneNumber;
  const area = useSelector((state) => state.user).area;
  const address = useSelector((state) => state.user).address;
  const city = useSelector((state) => state.user).city;
  const pincode = useSelector((state) => state.user).pincode;
  const profession = useSelector((state) => state.user).profession;
  const experience = useSelector((state) => state.user).experience;

  const logOut = () => {
    const onClickOk = () => {
      const token = "";
      const _id = "";
      const firstName = "";
      const lastName = "";
      const gender = "";
      const email = "";
      const password = "";
      const phoneNumber = "";
      const area = "";
      const address = "";
      const city = "";
      const pincode = "";
      const profession = "";
      const experience = "";
      const about = "";
      const usertype = "";
      const workDemo = "";

      const user = {
        _id,
        firstName,
        lastName,
        gender,
        email,
        password,
        phoneNumber,
        area,
        address,
        city,
        pincode,
        profession,
        experience,
        about,
        usertype,
        workDemo,
      };

      dispatch(userData({ user, token }));
      ToastAndroid.show(
        `Log out Successfull!`,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );

      navigation.navigate("Login");
    };

    Alert.alert("Log out", "Are you sure , you want to log out ?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel",
      },
      {
        text: "Ok",
        onPress: () => onClickOk(),
      },
    ]);
  };

  if (token !== "") {
    return (
      <KeyboardAwareScrollView>
        <SafeAreaView style={{ marginBottom: 100 }}>
          <Image
            source={Profilepic}
            style={{
              height: 400,
              width: 400,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              // backgroundColor: "#E90064",
              bottom: 55,
              left: 20,
              backgroundColor: "white",
              width: 200,
              padding: 5,
              justifyContent: "space-evenly",
              alignItems: "center",
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 20, color: "#E90064" }}> {fname} </Text>
            <Text style={{ fontSize: 20, color: "#E90064" }}>{lname}</Text>
            <Image
              source={gender === "male" ? Malesymbol : Femalesymbol}
              style={{ height: 25, width: 25, tintColor: "aqua" }}
            />
          </View>
          {/* parent */}
          <View style={{ alignItems: "center", bottom: 30 }}>
            <View
              style={{
                // backgroundColor: "orange",
                width: "97%",
                height: "100%",
                // shadowColor: "#52006A",
                // elevation: 20,
                padding: 8,
              }}
            >
              <View
                style={{
                  backgroundColor: "pink",
                  padding: 8,
                  marginBottom: 10,
                  height: 200,
                  borderRadius: 9,
                  shadowColor: "#748c94",
                  elevation: 20,
                }}
              >
                <Text>Work demo</Text>
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity>
                    <Text>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text>Upload</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "white",
                  height: "auto",
                  padding: 15,
                  marginBottom: 10,
                  borderRadius: 9,
                  shadowColor: "#748c94",
                  elevation: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    marginTop: 10,
                    marginBottom: 10,
                    marginLeft: 10,
                  }}
                >
                  About
                </Text>
                <Text style={{ fontSize: 15 }}>{about}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {/* profile details */}
                <View
                  style={{
                    backgroundColor: "white",
                    width: 230,
                    justifyContent: "space-around",
                    padding: 12,
                    borderRadius: 9,
                    shadowColor: "#748c94",
                    elevation: 20,
                  }}
                >
                  <Text style={{ fontSize: 16 }}>{email}</Text>
                  <Text style={{ fontSize: 16 }}>{phone}</Text>
                  <Text style={{ fontSize: 16 }}>{area}</Text>
                  <Text style={{ fontSize: 16 }}>{address}</Text>
                  <Text style={{ fontSize: 16 }}>{city}</Text>
                  <Text style={{ fontSize: 16 }}>{pincode}</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      width: 140,
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ fontSize: 16 }}>{profession}</Text>
                    <Text style={{ fontSize: 16 }}>
                      {experience} yr. of Exp.
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#E90064",
                      height: 50,
                      // width: 120,
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                      borderRadius: 9,
                    }}
                  >
                    <Text style={{ fontSize: 16, color: "white" }}>
                      Change password
                    </Text>
                    <PencilSquareIcon size={20} color={"white"} />
                  </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#E90064",
                        height: 50,
                        width: 78,
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                        borderRadius: 9,
                      }}
                    >
                      <Text style={{ fontSize: 16, color: "white" }}>edit</Text>
                      <PencilSquareIcon size={20} color={"white"} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#E90064",
                        height: 50,
                        width: 100,
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                        borderRadius: 9,
                      }}
                      onPress={() => logOut()}
                    >
                      <Text style={{ fontSize: 16, color: "white" }}>
                        Logout
                      </Text>
                      <PowerIcon size={20} color={"white"} />
                    </TouchableOpacity>
                  </View>
                </View>
                {/* extra buttons */}
                <View
                  style={{
                    justifyContent: "space-around",
                    alignItems: "center",
                    width: 150,
                    height: 600,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: "white",
                      height: 70,
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      width: 110,
                      height: 100,
                      borderRadius: 8,
                      shadowColor: "#748c94",
                      elevation: 20,
                    }}
                  >
                    <ClipboardDocumentListIcon size={30} color={"#E90064"} />
                    <Text style={{ fontSize: 16 }}>Tasks history</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "white",
                      height: 70,
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      width: 110,
                      height: 100,
                      borderRadius: 8,
                      shadowColor: "#748c94",
                      elevation: 20,
                    }}
                  >
                    <BellAlertIcon size={30} color={"#E90064"} />
                    <Text style={{ fontSize: 16 }}>Notifications</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "white",
                      height: 70,
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      width: 110,
                      height: 100,
                      borderRadius: 8,
                      shadowColor: "#748c94",
                      elevation: 20,
                    }}
                  >
                    <CreditCardIcon size={30} color={"#E90064"} />
                    <Text style={{ fontSize: 16 }}>Payments</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "white",
                      height: 70,
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      width: 110,
                      height: 100,
                      borderRadius: 8,
                      shadowColor: "#748c94",
                      elevation: 20,
                    }}
                  >
                    <BanknotesIcon size={30} color={"#E90064"} />
                    <Text style={{ fontSize: 16 }}>My bids.</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "white",
                      height: 70,
                      alignItems: "center",
                      justifyContent: "space-around",
                      width: 110,
                      height: 100,
                      borderRadius: 8,
                      shadowColor: "#748c94",
                      elevation: 20,
                    }}
                  >
                    <NewspaperIcon size={30} color={"#E90064"} />
                    <Text style={{ fontSize: 16 }}>T&C apply*</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    );
  } else {
    return (
      <KeyboardAwareScrollView>
        <SafeAreaView style={{ marginBottom: 100 }}>
          {/* parent */}
          <View
            style={{
              justifyContent: "space-around",
              alignItems: "center",
              // width: 150,
              minHeight: 700,
              // backgroundColor: "green",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                height: 70,
                alignItems: "center",
                width: 310,
                height: 100,
                borderRadius: 8,
                shadowColor: "#748c94",
                elevation: 15,
                flexDirection: "row",
              }}
            >
              <InformationCircleIcon
                size={30}
                color={"#E90064"}
                style={{ paddingLeft: 60, paddingRight: 60 }}
              />
              <Text style={{ fontSize: 16 }}>About Taskify</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                height: 70,
                alignItems: "center",

                width: 310,
                height: 100,
                borderRadius: 8,
                shadowColor: "#748c94",
                elevation: 15,
                flexDirection: "row",
              }}
            >
              <UserGroupIcon
                size={30}
                color={"#E90064"}
                style={{ paddingLeft: 60, paddingRight: 60 }}
              />
              <Text style={{ fontSize: 16 }}>Customer support</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                height: 70,
                alignItems: "center",

                width: 310,
                height: 100,
                borderRadius: 8,
                shadowColor: "#748c94",
                elevation: 15,
                flexDirection: "row",
              }}
            >
              <QuestionMarkCircleIcon
                size={30}
                color={"#E90064"}
                style={{ paddingLeft: 60, paddingRight: 60 }}
              />
              <Text style={{ fontSize: 16 }}>FAQ's</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: "white",
                height: 70,
                alignItems: "center",

                width: 310,
                height: 100,
                borderRadius: 8,
                shadowColor: "#748c94",
                elevation: 15,
                flexDirection: "row",
              }}
            >
              <NewspaperIcon
                size={30}
                color={"#E90064"}
                style={{ paddingLeft: 60, paddingRight: 60 }}
              />
              <Text style={{ fontSize: 16 }}>T&C apply*</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                height: 70,
                alignItems: "center",

                width: 310,
                height: 100,
                borderRadius: 8,
                shadowColor: "#748c94",
                elevation: 15,
                flexDirection: "row",
              }}
              onPress={() => navigation.navigate("Login")}
            >
              <PowerIcon
                size={30}
                color={"#E90064"}
                style={{ paddingLeft: 60, paddingRight: 60 }}
              />
              <Text style={{ fontSize: 16 }}>Login</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    );
  }
};

export default UserSetting;
