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
    TouchableHighlight,
    Animated,
    NavigatorIOS,
    Button,
    ScrollView
} from 'react-native';

import ActionSheet from 'react-native-actionsheet-api';
import ListViewBasics from '../../Test/ListViewBasics';
import styles from './styles';

//import {examples} from '../../Test/ActionSheetIOS';
var BUTTONS = ['苹果🍎', '梨🍐', '香蕉🍌', '橘子🍊', '都不喜欢'];

export default class Home extends Component {
    constructor(props){
        super(props);
       // this._handleNextPress =  this._handleNextPress.bind(this);
        this.showActionSheet = this.showActionSheet.bind(this);
        this.state = {
            text: "",
            clicked: "none"
        };
    }

   static navigationOptions = {
       headerTitle: 'HomePage',
       headerStyle: { backgroundColor:'#fff' }
   };

    render() {
       const { navigate } = this.props.navigation;

        return (
            //A View is useful as a container for other components, to help control style and layout.
            <ScrollView style={styles.container}>
                <Text style={styles.title}>TextInput Demo1</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
                <Text style={styles.title}>ListView Demo2</Text>
                <ListViewBasics/>
                <Text style={styles.title}>ActionSheetIOS Demo3</Text>
                <Text onPress={this.showActionSheet}>show actionSheet</Text>
                <Text>{this.state.clicked}</Text>
                <Button
                    onPress={() => navigate('Second', {param: 'paramValue'})}
                    title="Jump Next Screen"
                    style={{backgroundColor:'#ff8300'}}
                />
            </ScrollView>
        );
    }

    showActionSheet(){
        ActionSheet.showActionSheetWithOptions({
                title: '请选择您最喜欢的水果',
                options: BUTTONS,
                cancelButtonIndex: 4,
                tintColor: 'green',
            },
            (buttonIndex) => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
            }
        );
    }
}
