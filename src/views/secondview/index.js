/**
 * Created by chengyong.lin on 17/6/4.
 */

'use strict';
import React, { Component} from "react";
import {
    NavigatorIOS,
    TouchableHighlight,
    Text,
    Button
} from "react-native";
import styles  from './styles';

export default class SecondView extends Component {
    //Nav options can be defined as a function of the screen's props:
    static navigationOptions = ({ navigation }) => ({
        title: `SecondView ${navigation.state.params.param}`,
        headerRight: <Button title="Info" onPress={()=>{}}/>
    });

/*   _handleBackPress() {
       this.props.navigator.pop();
   }

   _handleNextPress(nextRoute) {
       this.props.navigator.push(nextRoute);
   }*/

    render() {
        const nextRoute = {
            component: SecondView,
            title: 'SecondView',
            passProps: { myProp: 'bar' },
            itemWrapperStyle:{backgroundColor: '#ffffcc'}
        };
        // let { param }  = this.props.navigation.state.params;

        return(
            <SecondView style={styles.container}>
                <Text style={{marginTop: 200, alignSelf: 'center'}}>
                    chat!
                </Text>
            </SecondView>
        );
    }
}

