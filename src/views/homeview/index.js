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
    Button
} from 'react-native';

import {TabNavigator} from 'react-navigation'
import DashLine from 'rn-dashline';
import ListViewBasics from '../../Test/ListViewBasics';
import {DraggableView,
    FadeInView,
    TransformBounceView,
    CompositeAnimation
} from '../../Test/Animated';
//import AnimatedScrollView from '../../Test/Animated/nativeDriver';

import {examples} from '../../Test/ActionSheetIOS';

class HomeScreen extends Component {
    constructor(props){
        super(props);
//        this._handleNextPress =  this._handleNextPress.bind(this);
        this.state = {
            text: ""
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
        const { navigate } = this.props.navigation;
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
                <DashLine lineWidth={1} />
                <Text style={styles.title}>ActionSheetIOS Demo3</Text>
                {examples[0].render()}
                <DashLine lineWidth={1}/>
                <Text style={styles.title}>Animated Demo4</Text>
                <FadeInView>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                </FadeInView>
                <TransformBounceView/>
                <CompositeAnimation/>
                <Button
                    onPress={() => navigate('Second',{param: 'paramValue'})}
                    title="Jump Next Screen"
                    style={{backgroundColor:'#ff8300'}}
                />
            </View>
        );
    }

    _handleNextPress(nextRoute){
        this.props.navigator.push(nextRoute);
    }
}

class AllContactsScreen extends Component{
    render() {
        return <Text>List of all contacts</Text>
    }
}

export default Home = TabNavigator({
    Recent: { screen: HomeScreen },
    All: { screen: AllContactsScreen },
});

// add style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingHorizontal: 10
    },
    title: {
        textAlign: 'center',
        fontSize: 16,
        color: '#616161',
        lineHeight: 24
    }
});
