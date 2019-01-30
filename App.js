import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity
} from "react-native";

import bgImage from "./images/235194710-elementary-os-wallpapers-pack.jpg";
import logo from "./images/logo.png";
import Icon from "react-native-vector-icons/Ionicons";

const { width: WIDTH } = Dimensions.get("window");

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      showPass: true,
      press: false
    };
  }

  showPass = () => {
    if (!this.state.press) this.setState({ showPass: false, press: true });
    else this.setState({ showPass: true, press: false });
  };

  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.logoText}>REACT NATIVE</Text>
        </View>

        <View style={styles.inputContainer}>
          <Icon
            style={styles.inputIcon}
            name={"ios-person"}
            size={28}
            color={"rgba(255,255,255,0.7)"}
          />
          <TextInput
            placeholder={"Username"}
            style={styles.input}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon
            style={styles.inputIcon}
            name={"ios-lock"}
            size={28}
            color={"rgba(255,255,255,0.7)"}
          />
          <TextInput
            placeholder={"Password"}
            style={styles.input}
            secureTextEntry={this.state.showPass}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="transparent"
          />

          <TouchableOpacity
            onPress={this.showPass.bind(this)}
            style={styles.btnEye}
          >
            <Icon
              name={!this.state.press ? "ios-eye" : "ios-eye-off"}
              size={26}
              color={"rgba(255,255,255, 0.7)"}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 120,
    height: 120
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 100
  },
  logoText: {
    color: "teal",
    fontSize: 28,
    fontWeight: "500",
    marginTop: 0,
    opacity: 0.8
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0,0,0,0.35)",
    color: "rgba(255,255,255,0.7)",
    marginHorizontal: 25
  },
  inputContainer: {
    marginTop: 10
  },
  inputIcon: {
    position: "absolute",
    top: 8,
    left: 37
  },
  logo: {
    width: 200,
    height: 250
  },
  btnEye: {
    position: "absolute",
    top: 8,
    right: 37
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    backgroundColor: "#432577",
    justifyContent: "center",
    marginTop: 20
  },
  text: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 16,
    textAlign: "center"
  }
});
