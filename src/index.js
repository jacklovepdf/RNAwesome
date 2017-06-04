/**
 * Created by chengyong.lin on 17/5/14.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    NavigatorIOS
} from 'react-native';
import Home from './views/homeview';

export default class RNAwesome extends Component {
    render() {
        return (
            <NavigatorIOS
                ref='nav'
                initialRoute={{
                    component: Home,
                    title: 'My Initial Scene',
                    rightButtonTitle: 'Add',
                    onRightButtonPress: () => this._handleNavigationRequest(),
                }}
                style={{flex: 1}}
            />
        );
    }

    _handleNavigationRequest(){
        this.refs.nav.push({
            component: Home,
            title: 'Genius',
            passProps: { myProp: 'genius' },
        });
    }
}

//The AppRegistry just tells React Native which component is the root one for the whole application.
AppRegistry.registerComponent('RNAwesome', () => RNAwesome);
