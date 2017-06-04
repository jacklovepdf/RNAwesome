/**
 * Created by chengyong.lin on 17/6/1.
 */

'use strict';

import React, { Component } from 'react';
import {
    Animated,
    onStartShouldSetPanResponder,
    onPanResponderRelease,
    PanResponder,
    UIExplorerButton,
    View,
    Text,
    Button,
    Easing
} from 'react-native';

export class FadeInView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Initial value for property
            fadeAnim: new Animated.Value(0),
        };
    }
    componentDidMount() {
        // Animate over time
        Animated.timing(
            // The animated value to drive
            this.state.fadeAnim,
            // end value
            {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
//                easing: Easing.back,
            }
            // Starts the animation (event)=>alert(JSON.stringify(event))
        ).start();
    }
    render() {
        let {style, children} = this.props;
        return (
            // Special animatable component
            <Animated.View
                style={{
                    ...style,
                    // Bind property to animated value
                    opacity: this.state.fadeAnim,
                    transform: [{
                        translateY: this.state.fadeAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
                        }),
                    },{
                        translateX: this.state.fadeAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
                        }),
                    }]

                }}
            >
                {children}
            </Animated.View>
        );
    }
}

export class DraggableView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pan: new Animated.ValueXY(), // inits to zero
        };
        this.state.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, {
                dx: this.state.pan.x, // x,y are Animated.Value
                dy: this.state.pan.y,
            }]),
            onPanResponderRelease: () => {
                Animated.spring(
                    this.state.pan,         // Auto-multiplexed
                    {toValue: {x: 0, y: 0}} // Back to zero
                ).start();
            },
        });
    }
    render() {
        return (
            <Animated.View
                {...this.state.panResponder.panHandlers}
                style={this.state.pan.getLayout()}>
                {this.props.children}
            </Animated.View>
        );
    }
}

export class TransformBounceView extends Component{
    constructor(){
        super();
        this.anim = this.anim || new Animated.Value(0);
        this.onPress = this.onPress.bind(this);
    }

    render() {
        return (
            <View>
                {/*<UIExplorerButton onPress={() => {*/}
                    {/*Animated.spring(this.anim, {*/}
                        {/*toValue: 0,   // Returns to the start*/}
                        {/*velocity: 3,  // Velocity makes it move*/}
                        {/*tension: -10, // Slow*/}
                        {/*friction: 1,  // Oscillate a lot*/}
                    {/*}).start(); }}>*/}
                    {/*Press to Fling it!*/}
                {/*</UIExplorerButton>*/}
                <Button
                    onPress={this.onPress}
                    title="Press to Fling it!"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                    style={{backgroundColor:"#000"}}
                />
                <Animated.View
                    style={[{
                        transform: [   // Array order matters
                            {scale: this.anim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [1, 4],
                            })},
                            {translateX: this.anim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 500],
                            })},
                            {rotate: this.anim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [
                                    '0deg', '360deg' // 'deg' or 'rad'
                                ],
                            })},
                        ]}
                    ]}>
                    <Text>Transforms!</Text>
                </Animated.View>
            </View>
        );
    }

    onPress(){
        Animated.spring(this.anim, {
            toValue: 0,   // Returns to the start
            velocity: 8,  // Velocity makes it move
            tension: -10, // Slow
            friction: 1,  // Oscillate a lot
        }).start();
    }
}

export class CompositeAnimation extends Component{
    constructor(){
        super();
        this.onPress = this.onPress.bind(this);
    }
    render(){
        //good, just compute the first time
        this.anims = this.anims || [1,2,3].map(
                () => new Animated.Value(0)
            );
        return (
            <View>
                <Button onPress={this.onPress}
                        title="Press Me"
                />
                {['Composite', 'Easing', 'Animations!'].map(
                    (text, ii) => (
                        <Animated.View
                            key={text}
                            style={[{
                                left: this.anims[ii]
                            }]}>
                            <Text>{text}</Text>
                        </Animated.View>
                    )
                )}
            </View>
        );
    }

    onPress(){
        var timing = Animated.timing;
        Animated.sequence([ // One after the other
            timing(this.anims[0], {
                toValue: 200,
                easing: Easing.linear,
            }),
            Animated.delay(400), // Use with sequence
            timing(this.anims[0], {
                toValue: 0,
                easing: Easing.elastic(2), // Springy
            }),
            Animated.delay(400),
            Animated.stagger(1000,
                this.anims.map((anim) => timing(
                    anim, {toValue: 200}
                )).concat(
                    this.anims.map((anim) => timing(
                        anim, {toValue: 0}
                    ))),
            ),
            Animated.delay(400),
            Animated.parallel([
                Easing.inOut(Easing.quad), // Symmetric
                Easing.back(1.5),  // Goes backwards first
                Easing.ease        // Default bezier
            ].map((easing, ii) => (
                timing(this.anims[ii], {
                    toValue: 320, easing, duration: 3000,
                })
            ))),
            Animated.delay(400),
            Animated.stagger(200,
                this.anims.map((anim) => timing(anim, {
                    toValue: 0,
                    easing: Easing.bounce, // Like a ball
                    duration: 2000,
                })),
            ),
        ]).start();
    }
}