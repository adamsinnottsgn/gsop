import React, { Component } from 'react';
import { 
  View, 
  StyleSheet
} from 'react-native';

import { apiClientKey, apiClientSecret, apiEndPoint } from '../api-details'
import Search from './Search';
import Customers from './Customers';

export class GsopApp extends Component {

  constructor(props) {
    super(props)

    this.getData = this.getData.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.callApi = this.callApi.bind(this);
    this.reset = this.reset.bind(this);

    this.state = {
      apiData: [],
      jsonApiData: '',
      loading: false
    }
  }

  handleResponse = (response) => {
    console.log('Main response was: ', JSON.stringify(response))
    console.log(response)
    return response.json()
    .then(function (json) {
      if (response.ok) {
        return json;
      } else {
        return Promise.reject(response);
      }
    });
  };

  callApi = () => {
    fetch(apiEndPoint, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'client_id': apiClientKey,
        'client_secret' : apiClientSecret
      }
    })
    .then(this.handleResponse)
    .then((data) => {
      console.log('success', JSON.stringify(data));
      this.setState({apiData: data, jsonApiData: JSON.stringify(data), loading: false})
    })
    .catch(error => {
      console.log('There was an error', JSON.stringify(error));
    })
  }

  reset = () => {
    this.setState(
      {apiData: [], jsonApiData: '', loading: false})
  }

  getData = (query, queryCategory) => {
    this.setState(
      {apiData: [], jsonApiData: '', loading: true},
      this.callApi)
  }

  componentDidMount = () => {
    // this.getData()
  }

  render() {
    return (
      <View>
        <Search getData={this.getData} loading={this.state.loading} reset={this.reset} />
        <Customers style={styles.container} data={this.state.apiData} loading={this.state.loading}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 70
  }
})
