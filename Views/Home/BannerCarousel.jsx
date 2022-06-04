import * as React from 'react';
import {
    Text, 
    View,
    SafeAreaView,
    Image} from 'react-native';
import { Card } from 'react-native-shadow-cards';

import Carousel from 'react-native-snap-carousel';

export default class App extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:5,
          carouselItems: [
          {
              title:"title 1",
              text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          },
          {
              title:"title 2",
              text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          },
          {
              title:"title 3",
              text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          },
          {
              title:"title 4",
              text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          },
          {
              title:"title 5",
              text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          },
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <Card style={{
                backgroundColor:'white',
                borderRadius: 15,
                height: 400,
                width: 350,
                flex: 1,
                alignItems: 'center',
                margin: 20
            }}>
                <Image source={require('../../src/img/bannerImage.jpg')} style={{
                    width: '90%',
                    height: 200,
                    padding: 20,
                    margin: 20,
                    borderRadius: 10
                }} />
                <Text style={{
                    fontSize: 35,
                    fontWeight: 'bold',
                    opacity: 0.7
                }}>{item.title.toUpperCase()}</Text>
                <Text style={{
                    width: '70%',
                    height: 1,
                    backgroundColor: '#000',
                    marginTop: 10,
                    marginBottom: 10,
                    opacity: 0.7

                }}></Text>
                <Text style={{
                    marginRight: 20,
                    marginLeft: 20,
                    fontSize: 20
                }}>{item.text}</Text>
          </Card>

        )
    }

    render() {
        return (
          <SafeAreaView style={{
                flex: 1,               
          }}>
            <View style={{ flex: 1, flexDirection:'row', alignItems: 'center', margin: 20}}>
                <Carousel
                  layout={'stack'}
                  layoutCardOffset={`18`}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={500}
                  itemWidth={390}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}

