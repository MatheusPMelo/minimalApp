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

import BannerCarousel from './BannerCarousel'
import Posts from '../Post/posts';

// import { Container } from './styles';

function HomeScreen() {

  return (
    <SafeAreaView>
      <ScrollView>
        
        <View style={{
          flex: 1,
          alignItems: 'center'
        }}>
          <BannerCarousel />
          <Posts />
        </View>

        {/* content page */}
        
        
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
    width: '95%'
  },
  imgContent: {
    width: '100%',
    height: 260,
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
    width: '70%',
    height: 1,
    backgroundColor: "#000",
    opacity: 0.3,
  },
});

export default HomeScreen;
