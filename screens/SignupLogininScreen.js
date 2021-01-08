import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import db from "../config";
import firebase from "firebase";

export default class WelcomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      emailId: "",
      password: "",
    };
  }

  userLogin = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
        return Alert.alert("Successfully Logged in");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.errorMessage;
        return Alert.alert(errorMessage);
      });
  };

  userSignUp = (emailId, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailId, password)
      .then(() => {
        return Alert.alert("User added Successfully");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.errorMessage;
        return Alert.alert(errorMessage);
      });
  };

  render() {
    return (
      <View style={styles.container}>
      <Image
      style={styles.imageIcon}
      source={{
        uri:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlXUVzo4swxlDM5p350qA18b0NLMKUTNd8Vg&usqp=CAU',
      }}
    />
        <View style={styles.profileContainer}>
          <Text style={styles.title}>No Buy. No Sale. Just Exchange</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TextInput
            style={styles.loginBox}
            placeholder="example@barter.com"
            placeholderTextColor="rgb(128, 127, 128)"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                emailId: text,
              });
            }}
          />

          <TextInput
            style={styles.loginBox}
            secureTextEntry={true}
            placeholder="password"
            placeholderTextColor="rgb(128, 127, 128)"
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />
          <TouchableOpacity
            style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
            onPress={() => {
              this.userLogin(this.state.emailId, this.state.password);
            }}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.userSignUp(this.state.emailId, this.state.password);
            }}
          >
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(236, 236, 236)",
  },
  profileContainer: {
    marginTop:25,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "300",
    paddingBottom: 30,
    color: "rgb(128, 127, 128)",
    alignSelf:'center',
    marginLeft:20
  },
  loginBox: {
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: "rgb(128, 127, 128)",
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
    color:'black'
  },
  button: {
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "rgb(128, 127, 128)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10.32,
    elevation: 16,
    fontWeight:'bold'
  },
  buttonText: {
    color: "#ffff",
    fontWeight: "200",
    fontSize: 20,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
  },
  imageIcon:{
    width:250, 
    height:200,
    alignSelf:'center',
    marginTop:40,
    borderRadius:10
  }
});
