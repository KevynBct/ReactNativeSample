import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const ANIMATION_SCENE_NAME = 'ANIMATION_SCENE';

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
  },
});

export default class NavigationScreen extends Component {

    static navigationOptions = {
      title: 'Animation',
    };
  
    render() {
      return (
  
        <View style={styles.constainer}>
          <Text>Test animation</Text>
        </View>
  
      );
    }
  }