import React from 'react';
import { 
  ActivityIndicator,
  StyleSheet,
  View
} from 'react-native';
import { Avatar, ListItem } from 'react-native-elements'


function Customers (props) {
  console.log(props)
  return (
    <View>
      {props.loading ? 
      <ActivityIndicator animating={true} size="large" color="#17a2b8"/> : props.data.map((user, i) => (
          <ListItem key={i} bottomDivider>
            <Avatar 
              size="large"
              source={ user.psr
                ? require('../assets/psr_customer.png')
                : require('../assets/not_psr_customer.png')} />
            <ListItem.Content>
              <ListItem.Title style={styles.title}>{
                (user.firstName ? user.firstName + " " : "" ) +
                (user.middleName ? user.middleName + " " : "") + 
                (user.surname ? user.surname : "")}
              </ListItem.Title>
              <ListItem.Subtitle style={styles.subtitle}>{
                (Array.isArray(user.addresses) &&  user.addresses.length) ?
                (("buildingMoniker" in user.addresses[0]) ? user.addresses[0].buildingMoniker  + " " : "" ) +
                (("roadName" in user.addresses[0]) ? user.addresses[0].roadName  + " " : "" ) +
                (("postTown" in user.addresses[0]) ? user.addresses[0].postTown  + " " : "" ) +
                (("county" in user.addresses[0]) ? user.addresses[0].county  + " " : "" ) +
                (("postCode" in user.addresses[0]) ? user.addresses[0].postCode  + " " : "" )
                  : ""}
              </ListItem.Subtitle>
              <ListItem.Subtitle style={styles.subtitle}>{
                (Array.isArray(user.addresses) &&  user.addresses.length) ?
                (("MPRN" in user.addresses[0]) ? "MPRN: " +user.addresses[0].MPRN  + " " : "" )
                  : ""}
              </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
      ))}
      {props.loading ? <ActivityIndicator /> : props.data.map((user, i) => (
          <ListItem key={i} bottomDivider>
            <Avatar 
              size="large"
              source={ user.psr
                ? require('../assets/psr_customer.png')
                : require('../assets/not_psr_customer.png')} />
            <ListItem.Content>
              <ListItem.Title style={styles.title}>{
                (user.firstName ? user.firstName + " " : "" ) +
                (user.middleName ? user.middleName + " " : "") + 
                (user.surname ? user.surname : "")}
              </ListItem.Title>
              <ListItem.Subtitle style={styles.subtitle}>{
                (Array.isArray(user.addresses) &&  user.addresses.length) ?
                (("buildingMoniker" in user.addresses[0]) ? user.addresses[0].buildingMoniker  + " " : "" ) +
                (("roadName" in user.addresses[0]) ? user.addresses[0].roadName  + " " : "" ) +
                (("postTown" in user.addresses[0]) ? user.addresses[0].postTown  + " " : "" ) +
                (("county" in user.addresses[0]) ? user.addresses[0].county  + " " : "" ) +
                (("postCode" in user.addresses[0]) ? user.addresses[0].postCode  + " " : "" )
                  : ""}
              </ListItem.Subtitle>
              <ListItem.Subtitle style={styles.subtitle}>{
                (Array.isArray(user.addresses) &&  user.addresses.length) ?
                (("MPRN" in user.addresses[0]) ? "MPRN: " +user.addresses[0].MPRN  + " " : "" )
                  : ""}
              </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
      ))}
      {props.loading ? <ActivityIndicator /> : props.data.map((user, i) => (
          <ListItem key={i} bottomDivider>
            <Avatar 
              size="large"
              source={ user.psr
                ? require('../assets/psr_customer.png')
                : require('../assets/not_psr_customer.png')} />
            <ListItem.Content>
              <ListItem.Title style={styles.title}>{
                (user.firstName ? user.firstName + " " : "" ) +
                (user.middleName ? user.middleName + " " : "") + 
                (user.surname ? user.surname : "")}
              </ListItem.Title>
              <ListItem.Subtitle style={styles.subtitle}>{
                (Array.isArray(user.addresses) &&  user.addresses.length) ?
                (("buildingMoniker" in user.addresses[0]) ? user.addresses[0].buildingMoniker  + " " : "" ) +
                (("roadName" in user.addresses[0]) ? user.addresses[0].roadName  + " " : "" ) +
                (("postTown" in user.addresses[0]) ? user.addresses[0].postTown  + " " : "" ) +
                (("county" in user.addresses[0]) ? user.addresses[0].county  + " " : "" ) +
                (("postCode" in user.addresses[0]) ? user.addresses[0].postCode  + " " : "" )
                  : ""}
              </ListItem.Subtitle>
              <ListItem.Subtitle style={styles.subtitle}>{
                (Array.isArray(user.addresses) &&  user.addresses.length) ?
                (("MPRN" in user.addresses[0]) ? "MPRN: " +user.addresses[0].MPRN  + " " : "" )
                  : ""}
              </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
      ))}
    </View>
  )
}

export default Customers;

const styles = StyleSheet.create({
    container: {
      margin: 70
    },
    title: {
      fontSize: 20,
      color: '#3F3F3F',
    },
    subtitle: {
      color: '#A5A5A5',
    },
})