import React, { Component } from 'react';
import { 
  Image, 
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet, 
  Text, 
  View } from 'react-native';
import * as Font from 'expo-font';
import Amplify, { Auth, Hub } from 'aws-amplify';
import { Button } from 'react-native-elements';

import manual_awsmobile from './manual-aws-exports';
import { GsopApp } from './src/GsopApp';


Amplify.configure(manual_awsmobile);

// You can get the current config object
const currentConfig = Auth.configure();

export default class App extends Component {

  constructor(props) {
    super(props)
    console.log("Props: " + JSON.stringify(props))
    this.state = {
      fontLoaded: false,
      loggedIn: false,
    }

    this.signOut = this.signOut.bind(this);
  }

  signOut = () => {
    Auth.signOut({global: true})
    .then(data => console.log("Tried signing out: " + data))
    .catch (error => console.log('error signing out: ', error))
  }

  async componentDidMount() {
    await Font.loadAsync({
      'poppins': require('./assets/fonts/poppins/poppinsMedium.otf'),
    })
    // expo documentation recommends this approach, however a better
    // approach would be to wait for isLoaded to come back.
    // This way always assumes it comes back true.
    this.setState({ fontLoaded: true });
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
          case 'signIn':
              console.log("Sign In detected, data: " + JSON.stringify(data));
              this.checkUserLoggedIn();
              break;
          case 'signOut':
              console.log("Sign Out detected, data: " + data);
              break;
          case 'signIn_failure':
            console.log("Sign In failure, data: " + data);
            break;
          case 'cognitoHostedUI_failure':
              console.log('Sign in failure', data);
              break;
      }
    });
  }

  componentWillUnmount () {
    Hub.remove('auth')
  }

  checkUserLoggedIn = () => {
    Auth.currentAuthenticatedUser()
    .then(data => {
      console.log ("currentAuthenticated user resolved to true");
      this.setState({data:data, loggedIn: true})      
    })
    .catch(err => {
      console.log ("currentAuthenticated user resolved to false")
      this.setState({data:err, loggedIn: false})
    });
  }

  federatedSignIn = () => {
    Auth.federatedSignIn({provider: "OKTA"})
    .then(data => {
      // this.setState({data:data})
      console.log("We got some data back: " + JSON.stringify(data))
    })
    .catch(err => {
      this.setState({loggedIn: false})
      console.log("There was an error using Federated Sign In: ", err)
    });
  }

  signOut = () => {
    Auth.signOut()
    .then(data => {
      this.setState({loggedIn: false})
      console.log("You are now signed out: ", data);
    })
    .catch(err => {
      console.log("There was an error signing you out: ", err)
    })
  }


  render() {
    return (
      <ImageBackground
        source={require('./assets/SGN-hero-engineers-delivering-heat-and-comfort.png')}
        style={{width: '100%', height: '100%'}}
      >
        <SafeAreaView style={styles.mainContainer}>
          <ScrollView>
            <View>
              <View style={styles.header}>
                <Image
                  style={{width: 160, height: 67,}}
                  source={require('./assets/sgn-logo-masthead-white.png')}
                  />
                {
                  this.state.fontLoaded ? (
                    <Text style={styles.headerFontPoppins}>GSOP CHECK</Text>
                    ) : <Text style={styles.headerFont}>GSOP CHECK</Text>
                }
              </View>
              <View style={{flex: 5}}>
                {this.state.loggedIn === false ? 
                  <>
                    <Button
                      title="OKTA Sign In"
                      onPress={()=>this.federatedSignIn()}
                      buttonStyle={{fontFamily: 'poppins', color: "white", backgroundColor: "#0079C0", height: 100}}
                      textStyle={{fontFamily: 'poppins', color: "white"}}
                      containerStyle={{marginTop: 100, marginLeft: 20, marginRight: 20}}
                      raised
                    />
                  </>
                  :
                  <>
                    <GsopApp style={styles.gsopApp}/>
                  </>
                }
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
  }
};


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: 'rgba(255, 255, 255, 0.6)',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  headerFont: {
    fontFamily: 'poppins',
    fontSize: 40,
    color: '#ea5b0c',
    paddingTop: 10, 
  },
  headerFont: {
    // fontFamily: 'poppins',
    fontSize: 40,
    color: '#ea5b0c',
    paddingTop: 10, 
  },
  headerFontPoppins: {
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
    paddingTop: 70,
    paddingBottom: 20,
    // backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  
});
