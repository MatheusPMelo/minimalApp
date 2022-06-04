import React from "react";
import { Card } from "react-native-shadow-cards";
import { View, Text, StyleSheet, Image } from "react-native";



function ContainerPosts() {
  const contentPost =[
    {
      Title: 'Title',
      Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam corrupti saepe omnis veniam, quo error. Reprehenderit pariatur.'
    },
    {
      Title: 'Title',
      Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam corrupti saepe omnis veniam, quo error. Reprehenderit pariatur.'
    }
]
  return (
    <View style={{
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row'
    }}>
    
    </View>
  );
}

const styles = StyleSheet.create({
  mainHeader: {
    width: '50%',
    height: 300,
    margin: '3%',
    padding: '3%'
  },
  imgContent:{
    width: '100%',
    height: 200
  }
});

export default ContainerPosts;
