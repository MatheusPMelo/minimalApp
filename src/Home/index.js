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

import Post from './posts';

// import { Container } from './styles';

function HomeScreen({}) {
  return (
    <SafeAreaView>
      <ScrollView style={{}}>
        <View style={styles.mainHeader}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Image
              style={styles.imgContent}
              source={require("../img/bannerImage.jpg")}
            />
          </View>
          <View style={styles.containerTitle}>
            <Text style={styles.contentTitle}>Title</Text>
            <Text style={styles.divider}></Text>
          </View>
          <View style={styles.containerDescription}>
            <Text style={styles.contentDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              corrupti saepe omnis veniam, quo error. Reprehenderit pariatur.
            </Text>
          </View>
        </View>

        {/* content page */}
        <Post />
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainHeader: {
    backgroundColor: "#fff",
    margin: 15,
    padding: 10,
    borderRadius: 20,
    flex: 1,
    justifyContent: "center",
    position: "relative",
  },
  imgContent: {
    width: 340,
    height: 250,
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
    width: 100,
    height: 2,
    backgroundColor: "#000",
    marginTop: 5,
    marginBottom: 5,
    opacity: 0.4,
  },
});

export default HomeScreen;
