import React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
  Animated,
} from "react-native";

import ContainerPosts from "./containerPosts";

function Post() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <ContainerPosts />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    backgroundColor: "#fff",
    margin: 15,
    padding: 10,
    borderRadius: 20,
    flex: 1,
    justifyContent: "center"
  },
  imgContent: {
    width: '90%',
    height: '100%',
    borderRadius: 15,
  },
  containerTitle: {
    marginTop: 20,
    marginBottom: 10,
    flex: 1,
    alignItems: "center",
  },
  contentTitle: {
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    opacity: 0.65,
  },
  containerDescription: {
    padding: 5,
  },
  contentDescription: {
    textAlign: "center",
    fontSize: 17,
  },

  divider: {
    //idth: 100,
    height: 2,
    backgroundColor: "#000",
    marginTop: 5,
    marginBottom: 5,
    opacity: 0.4,
  },
});
export default Post;
