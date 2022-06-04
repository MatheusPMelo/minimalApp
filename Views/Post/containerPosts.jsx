import React from "react";
import { Card } from "react-native-shadow-cards";
import { View, Text, StyleSheet, Image, SafeAreaView, Button } from "react-native";

const goSingle= () => {
  alert('Não temos ester eggs aqui... volte mais tarde')
}

function ContainerPosts() {
  return (
    <SafeAreaView>
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
          flexDirection: 'row'
        }}
      >
        <View style={styles.mainHeader}>
          <Image
            style={styles.imgContent}
            source={require("../../src/img/bannerImage.jpg")}
          />
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={styles.titleContent}>Title</Text>
            <Text style={styles.divider}></Text>
            <Text style={styles.textContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illum
              quaerat dolorum eaque
            </Text>
          </View>
          <Button title="Ver Mais" onPress={goSingle}/>
        </View>
        <View style={styles.mainHeader}>
          <Image
            style={styles.imgContent}
            source={require("../../src/img/bannerImage.jpg")}
          />
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={styles.titleContent}>Title</Text>
            <Text style={styles.divider}></Text>
            <Text style={styles.textContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illum
              quaerat dolorum eaque
            </Text>
          </View>
          <Button title="Ver Mais" onPress={goSingle}/>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
          flexDirection: 'row'
        }}
      >
        <View style={styles.mainHeader}>
          <Image
            style={styles.imgContent}
            source={require("../../src/img/bannerImage.jpg")}
          />
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={styles.titleContent}>Title</Text>
            <Text style={styles.divider}></Text>
            <Text style={styles.textContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illum
              quaerat dolorum eaque
            </Text>
          </View>
          <Button title="Ver Mais" onPress={goSingle}/>
        </View>
        <View style={styles.mainHeader}>
          <Image
            style={styles.imgContent}
            source={require("../../src/img/bannerImage.jpg")}
          />
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={styles.titleContent}>Title</Text>
            <Text style={styles.divider}></Text>
            <Text style={styles.textContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illum
              quaerat dolorum eaque
            </Text>
          </View>
          <Button title="Ver Mais" onPress={goSingle}/>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
          flexDirection: 'row'
        }}
      >
        <View style={styles.mainHeader}>
          <Image
            style={styles.imgContent}
            source={require("../../src/img/bannerImage.jpg")}
          />
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={styles.titleContent}>Title</Text>
            <Text style={styles.divider}></Text>
            <Text style={styles.textContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illum
              quaerat dolorum eaque
            </Text>
          </View>
          <Button title="Ver Mais" onPress={goSingle}/>
        </View>
        <View style={styles.mainHeader}>
          <Image
            style={styles.imgContent}
            source={require("../../src/img/bannerImage.jpg")}
          />
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={styles.titleContent}>Title</Text>
            <Text style={styles.divider}></Text>
            <Text style={styles.textContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illum
              quaerat dolorum eaque
            </Text>
          </View>
          <Button title="Ver Mais" onPress={goSingle}/>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
          flexDirection: 'row',

        }}
      >
        <View style={styles.mainHeader}>
          <Image
            style={styles.imgContent}
            source={require("../../src/img/bannerImage.jpg")}
          />
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={styles.titleContent}>Title</Text>
            <Text style={styles.divider}></Text>
            <Text style={styles.textContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illum
              quaerat dolorum eaque
            </Text>
          </View>
          <Button title="Ver Mais" onPress={goSingle}/>
        </View>
        <View style={styles.mainHeader}>
          <Image
            style={styles.imgContent}
            source={require("../../src/img/bannerImage.jpg")}
          />
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={styles.titleContent}>Title</Text>
            <Text style={styles.divider}></Text>
            <Text style={styles.textContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illum
              quaerat dolorum eaque
            </Text>
          </View>
          <Button title="Ver Mais" onPress={goSingle}/>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
          flexDirection: 'row'
        }}
      >
        <View style={styles.mainHeader}>
          <Image
            style={styles.imgContent}
            source={require("../../src/img/bannerImage.jpg")}
          />
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={styles.titleContent}>Title</Text>
            <Text style={styles.divider}></Text>
            <Text style={styles.textContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illum
              quaerat dolorum eaque
            </Text>
          </View>
          <Button title="Ver Mais" onPress={goSingle}/>
        </View>
        <View style={styles.mainHeader}>
          <Image
            style={styles.imgContent}
            source={require("../../src/img/bannerImage.jpg")}
          />
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={styles.titleContent}>Title</Text>
            <Text style={styles.divider}></Text>
            <Text style={styles.textContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illum
              quaerat dolorum eaque
            </Text>
          </View>
          <Button title="Ver Mais" onPress={goSingle}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainHeader: {
    backgroundColor: '#fff',
    width: 160,
    height: '94%',
    padding: "3%",
    margin: 15,
    borderRadius: 20,
  },
  imgContent: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    resizeMode: 'cover'
  },
  titleContent: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  divider:{
    width: '70%',
    height: 1,
    backgroundColor: "#2e2e2e",
    marginBottom: 10
  },
  textContent: {
    textAlign: 'center',
    fontSize: 15
  }
});

export default ContainerPosts;
