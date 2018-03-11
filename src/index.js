/**
 * app entrance
 * Created by chengyong.lin on 17/5/14.
 */

//rn原生组件
import React, {Component} from 'react';
import {
    AppRegistry,
    NavigatorIOS,
    View,
    Text
} from 'react-native';

//第三方组件
import { StackNavigator, TabNavigator } from 'react-navigation';

//pages of app
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
//Home.navigationOptions = {
//    title: 'HomeView',
//};

// class RNAwesome extends Component{
//
//     render(){
//         return <Text>1111</Text>
//     }
// }
const RNAwesome = StackNavigator({
   Home: { screen: Home },
   Second: { screen: SecondView }
});

//The AppRegistry just tells React Native which component is the root one for the whole application.
AppRegistry.registerComponent('RNAwesome', () => RNAwesome);
