import React, {Component} from 'react';
import {
    View,
    Text,
    SafeAreaView
} from 'react-native'

import { Card } from 'react-native-shadow-cards';

class InterfacePost extends Component {
    render() {
        return( 
            <SafeAreaView>
                <Card style={{
                    
                    backgroundColor: '#fff',
                    margin: 20,
                    padding: '4%',
                    flex: 1,
                    alignItems: 'center',
                }}>
                    <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign:'center',
                    marginBottom: 10
                    }}>{this.props.data.title}</Text>
                    <Text style={{
                        textAlign: 'justify',
                        width: '70%'
                    }}>{this.props.data.body}</Text>
                </Card>
            </SafeAreaView>
        )
    }
}

export default InterfacePost