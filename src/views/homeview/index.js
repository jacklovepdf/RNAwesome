/**
 * Created by chengyong.lin on 17/5/14.
 */
import React, { Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput
//    TouchableHighlight
} from 'react-native';
import DashLine from 'rn-dashline';
import ListViewBasics from '../../Test/ListViewBasics';
import {examples} from '../../Test/ActionSheetIOS';

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
                <Text style={styles.title}>TextInput Demo1</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
                <DashLine lineWidth={1} />
                <Text style={styles.title}>ListView Demo2</Text>
                <ListViewBasics/>
                <Text style={styles.title}>ActionSheetIOS Demo3</Text>
                {/*{}*/}
            </View>
        );
    }
}
// add style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        marginTop: 20,
        paddingHorizontal: 10
    },
    title: {
        textAlign: 'center',
        fontSize: 16,
        color: '#616161',
        lineHeight: 24
    }
});
//The AppRegistry just tells React Native which component is the root one for the whole application.
AppRegistry.registerComponent('RNAwesome', () => RNAwesome);
