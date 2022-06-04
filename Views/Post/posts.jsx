import React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
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
  
});
export default Post;
