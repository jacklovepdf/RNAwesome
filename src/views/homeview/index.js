/**
 * Created by chengyong.lin on 17/5/14.
 */
import React, { Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight
} from 'react-native';
import DashLine from 'rn-dashline';

export default class RNAwesome extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ""
        };
    }
    render() {
        return (
            //A View is useful as a container for other components, to help control style and layout.
            <View style={styles.container}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
                <DashLine style={{flex: 1, margin: 5}} lineWidth={2} />
            </View>
        );
    }
}
// add style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    }
});
//The AppRegistry just tells React Native which component is the root one for the whole application.
AppRegistry.registerComponent('RNAwesome', () => RNAwesome);
