/**
 * @file 文本展示组件，支持超过设定行数折叠功能
 * @author chengyong.lin
 * @providesModule Pucker
 */

'use strict';
import {Component, PropTypes} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'Icon';

export default class Pucker extends Component {
    constructor(props, state){
        super(props, state);
        this.state = {
            isPucker: false,
            isUpper: false,
            realHeight: 0
        }
    }

    render(){
        let {content, lineHeight, lineNum, style, children, fontSize, color} = this.props;
        let {isPucker, isUpper, realHeight} = this.state;
        let computeHeight = lineHeight * lineNum;
        let contentStyles = {lineHeight: lineHeight};
        let numberOfLines = 0;

        if(isPucker){
            // 如果有箭头
            // contentStyles.height = isUpper ? realHeight : computeHeight;
            numberOfLines = isUpper ? Math.ceil(realHeight / lineHeight) : lineNum;
        }
        if(fontSize){
            contentStyles.fontSize = fontSize;
        }
        if(color){
            contentStyles.color = color;
        }
        let paramObj = {contentStyles, content, children, computeHeight, numberOfLines};
        return (
            <View style={[styles.main, style]} >
                {/*展示内容*/}
                {this.renderContent(paramObj)}
                {/*折叠icon*/}
                {this.renderPuckerIcon()}
            </View>
        )
    }

    renderContent(param){
        let {contentStyles, content, children, computeHeight, numberOfLines} = param;
        if(content){
            if(typeof content === 'string'){
                content = content.trim();
            }
            let props = !this.state.isUpper ? {
                numberOfLines: numberOfLines,
                ellipsizeMode: "tail"
            } : {};
            return (
                <Text
                    style={[styles.content, contentStyles]}
                    {...props}
                    onLayout={(eve)=>{
                        this.changeHeight(eve, computeHeight)
                    }}
                >
                    {content}
                </Text>
            )
        }else if(children){
            return children;
        }else {
            return null;
        }
    }

    renderPuckerIcon(){
        let {isPucker, isUpper} = this.state;
        if(isPucker){
            let iconName = isUpper ? "uparrow": "downarrow";
            return (
                <Text style={styles.footer} onPress={(e)=>{this.changePucker(e)}}>
                    <Icon name={iconName} size={30} color="#616161"/>
                </Text>
            )
        }else {
            return null;
        }
    }

    changeHeight(eve, computeHeight){
        let {height} = eve.nativeEvent.layout;

        if(computeHeight + 3 < height && !this.state.realHeight) {
            this.setState({isPucker: true, realHeight: height});
        }
    }

    changePucker(){
        this.setState({isUpper: !this.state.isUpper});
    }

}

Pucker.defaultProps = {
    lineHeight: 12,
    content: "",
    lineNum: 20
};

Pucker.propTypes = {
    lineHeight: PropTypes.number,
    content: PropTypes.string,
    lineNum: PropTypes.number
};

const styles = StyleSheet.create({
    main: {
        // fontSize: 18,
        // backgroundColor: 'red'
    },
    content: {
        overflow: 'hidden',
        fontSize: 13,
        color: '#616161',
        padding: 0,
        margin: 0
    },
    footer: {
        textAlign: 'center',
        height: 30,
        overflow: 'hidden',
        marginBottom: -5
    }
});