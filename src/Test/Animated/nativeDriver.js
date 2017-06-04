/**
 * Created by chengyong.lin on 17/6/1.
 */

'use strict';

import React, { Component } from 'react';
import {
    Animated,
} from 'react-native';

export default class AnimatedScrollView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Initial value for property
            animatedValue: new Animated.Value(0),
        };
    }
    componentDidMount() {
        // Animate over time
        Animated.timing(this.state.animatedValue, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true, // <-- Add this
        }).start();
    }
    render() {
        let {children} = this.props;
        return (
            // specific animated component
            <Animated.ScrollView // <-- Use the Animated ScrollView wrapper
                scrollEventThrottle={1} // <-- Use 1 here to make sure no events are ever missed
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: this.state.animatedValue } } }],
                    { useNativeDriver: true } // <-- Add this
                )}
            >
                {children}
            </Animated.ScrollView>
        );
    }
}
