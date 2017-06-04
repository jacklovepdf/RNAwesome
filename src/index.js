/**
 * Created by chengyong.lin on 17/5/14.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    NavigatorIOS
} from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';
import Home from './views/homeview';
import SecondView from './views/secondview';

//export  class RNAwesome extends Component {
//    constructor(){
//        super();
//        this._handleNavigationRequest = this._handleNavigationRequest.bind(this);
//    }
//    render() {
//        return (
//            <NavigatorIOS
//                ref='nav'
//                initialRoute={{
//                    component: Home,
//                    title: 'HomeView',
//                    rightButtonTitle: 'Add',
//                    onRightButtonPress: this._handleNavigationRequest,
//                    itemWrapperStyle:{backgroundColor: '#ffffcc'}
//                }}
//                style={{flex: 1}}
//                barTintColor='#996699'
//                itemWrapperStyle={{backgroundColor: '#ffffcc'}}
//                tintColor='#ff8300'
//                titleTextColor='#ff8300'
//                translucent={true}
//            />
//        );
//    }
//
//    _handleNavigationRequest(){
//        this.refs.nav.push({
//            component: SecondView,
//            title: 'SecondView',
//            passProps: { param: 'paramValue' },
//            barTintColor: '#996699',
//        });
//    }
//}
//top-level navigator component
Home.navigationOptions = {
    title: 'HomeView',
};
const RNAwesome = StackNavigator({
    Home: { screen: Home },
    Second: { screen: SecondView}
});

//The AppRegistry just tells React Native which component is the root one for the whole application.
AppRegistry.registerComponent('RNAwesome', () => RNAwesome);
