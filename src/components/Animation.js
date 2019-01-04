import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';

export default class Animation extends Component {

    constructor() {
        super();
        this.animatedValue = new Animated.Value(0);
        this.spinValue = new Animated.Value(0);

        this.spin = this.spin.bind(this);
    }

    componentDidMount() {
        this.animate();
        this.spin();
    }

    animate() {
        this.animatedValue.setValue(0)
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear
            }
        ).start(() => this.animate())
    }

    spin() {
        this.spinValue.setValue(0);
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear
            }
        ).start(() => this.spin());
    }

    render() {

        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })

        const movingMargin = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 300, 0]
        })

        return (
            <Animated.View style={{ flex: 1, alignItems: "center", marginTop: movingMargin }}>
                <Animated.Image source={require('../../assets/NY1.jpg')} style={{ transform: [{ rotate: spin }] }} />
            </Animated.View>
        );
    }
}