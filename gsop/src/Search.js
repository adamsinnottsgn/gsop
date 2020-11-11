import React, { Component } from 'react';
import { 
  StyleSheet,
  View 
} from 'react-native';
import { Button, ButtonGroup, Input } from 'react-native-elements';

export class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedIndex: 0,
      searchQuery: '',
    }
    this.updateIndex = this.updateIndex.bind(this)
    console.log
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  render() {
    const buttons = ['MPRN', 'Address', 'Post Code']
    const { selectedIndex } = this.state
    return (
      <View style={styles.searchContainer}>
        <Input
          placeholder='Search'
          onChangeText={value => this.setState({ searchQuery: value })}
          inputStyle={{fontFamily: 'poppins', color: "white", height: 60}}
          placeholderTextColor={"white"}
        />    
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          buttonStyle={{color: "#EA5B0C", backgroundColor: "#0079C0"}}
          selectedButtonStyle={{color: "#EA5B0C", backgroundColor: "#405976"}}
          textStyle={{fontFamily: 'poppins', color: "white"}}
          containerStyle={{height: 80, marginBottom: 10}}
        />
        <Button
          title="Search"
          onPress={() => {this.props.getData(this.state.searchQuery, this.state.selectedIndex)}}
          buttonStyle={{fontFamily: 'poppins', color: "white", backgroundColor: "#0079C0", height: 80}}
          loading={this.props.loading}
          textStyle={{fontFamily: 'poppins', color: "white"}}
          containerStyle={{marginLeft: 10, marginRight: 10, marginBottom: 10}}
          raised
        />
        <Button
          title="Clear"
          onPress={() => {this.props.reset()}}
          buttonStyle={{fontFamily: 'poppins', color: "white", backgroundColor: "#0079C0", height: 80}}
          containerStyle={{marginLeft: 10, marginRight: 10}}
          raised
        />
      </View>
    )
  }
}

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    marginBottom: 10,
    backgroundColor: "rgba(0,0,0,0)"
  }
})