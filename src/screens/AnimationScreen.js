import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Animation from '../components/Animation';

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
          <Animation />
        </View>

      );
    }
}
