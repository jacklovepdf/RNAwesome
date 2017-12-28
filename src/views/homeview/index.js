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
//import {TabNavigator} from 'react-navigation'
import ListViewBasics from '../../Test/ListViewBasics';
//import {DraggableView,
//    FadeInView,
//    TransformBounceView,
//    CompositeAnimation
//} from '../../Test/Animated';
//import AnimatedScrollView from '../../Test/Animated/nativeDriver';

//import {examples} from '../../Test/ActionSheetIOS';
var BUTTONS = ['苹果🍎', '梨🍐', '香蕉🍌', '橘子🍊', '都不喜欢'];

export default class Home extends Component {
    constructor(props){
        super(props);
//        this._handleNextPress =  this._handleNextPress.bind(this);
        this.showActionSheet = this.showActionSheet.bind(this);
        this.state = {
            text: "",
            clicked: "none"
        };
    }

//    static navigationOptions = {
//        title: 'HomeView',
//    };

    render() {
/*        const nextRoute = {
            component: Home,
            title: 'Home Page',
            passProps: { myProp: 'Home' }
        };*/
//        const { navigate } = this.props.navigation;
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
                {/*{examples[0].render()}*/}
                {/*<ActionSheet />*/}
                {/*<Text style={styles.title}>Animated Demo4</Text>
                <FadeInView>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                </FadeInView>
                <TransformBounceView/>
                <CompositeAnimation/>
                <Button
                    onPress={() => navigate('Second',{param: 'paramValue'})}
                    title="Jump Next Screen"
                    style={{backgroundColor:'#ff8300'}}
                />*/}
            </ScrollView>
        );
    }

/*    _handleNextPress(nextRoute){
        this.props.navigator.push(nextRoute);
    }*/

    showActionSheet(){
        ActionSheet.showActionSheetWithOptions({
                title: '请选择您最喜欢的水果',
                options: BUTTONS,
                cancelButtonIndex: 4,
                //destructiveButtonIndex: 0,
                tintColor: 'green',
            },
            (buttonIndex) => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
            }
        );
    }
}

class AllContactsScreen extends Component{
    render() {
        return <Text>List of all contacts</Text>
    }
}

//export default Home = TabNavigator({
//    Recent: { screen: HomeScreen },
//    All: { screen: AllContactsScreen },
//});

// add style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingHorizontal: 10,
        fontSize: 16
    },
    title: {
        textAlign: 'center',
        fontSize: 16,
        color: '#616161',
        lineHeight: 24
    }
});
