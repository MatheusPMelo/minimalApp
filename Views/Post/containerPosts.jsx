import react, {Component} from 'react';
import {
  View,
  Text,
  FlatList
} from 'react-native';

import api from '../../src/services/api'
import InterfacePost from './InterfacePost'

class ContentPost extends Component{
  constructor(props){
    super(props)
      this.state = {
        post: []
    }
  }

  async componentDidMount() {
    const response = await api.get('posts')
    this.setState({
      post: response.data,
    })
  }

  render() {
    return(
      <View>
        <FlatList 
          data={this.state.post}
          keyExtractor={item => item.id.toString()}
          renderItem={ ( {item} ) => <InterfacePost data = {item} /> }
        />
      </View>
    )
  }
}

export default ContentPost;