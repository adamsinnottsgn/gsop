import React, { Component } from 'react';
import { 
  Image, 
  ImageBackground,
  StyleSheet, 
  Text, 
  View } from 'react-native';
  import * as Font from 'expo-font';

export class App extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      fontLoaded: false,
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'poppins': require('./assets/fonts/poppins/poppinsMedium.otf'),
    })
    // expo documentation recommends this approach, however a better
    // approach would be to wait for isLoaded to come back.
    // This way always assumes it comes back true.
    this.setState({ fontLoaded: true })
  }

  render() {
    return (
      <ImageBackground
        source={require('./assets/SGN-hero-engineers-delivering-heat-and-comfort.png')}
        style={{width: '100%', height: '100%'}}
      >
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Image
            style={{width: 160, height: 67,}}
            source={require('./assets/sgn-logo-masthead-white.png')}
            />
          {
            this.state.fontLoaded ? (
              <Text style={styles.headerFont}>GSOP CHECK</Text>
              ) : null
          }
        </View>
        <View style={{flex: 5}}>
        {/* <CheckIT style={styles.checkITApp}/> */}
          {/* <Text style={{flex: 5}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut luctus nibh, vulputate varius enim. Proin ornare fringilla nulla sit amet sagittis. Fusce quis mauris sit amet sem sagittis iaculis et vel dui. Fusce non lacus ac massa iaculis vestibulum. Vivamus hendrerit, erat et pulvinar ornare, ligula nunc sagittis odio, vel porttitor lectus orci at lectus. Fusce non magna molestie, tincidunt lectus in, viverra dui. Duis elementum tortor orci, blandit tristique diam gravida a. Nulla facilisi. Mauris nisl risus, ultrices sed magna ut, rutrum hendrerit metus. Duis semper semper porta.</Text> */}
        </View>
        
      </View>
      </ImageBackground>
    );
  }
}

export default App

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  headerFont: {
    fontFamily: 'poppins',
    fontSize: 40,
    color: '#ea5b0c',
    paddingTop: 10, 
  },
  header: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  
});
