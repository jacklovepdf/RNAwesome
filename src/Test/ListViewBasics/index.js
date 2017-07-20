/**
 * Created by chengyong.lin on 17/5/31.
 */

'use strict';

import React, { Component } from 'react';
import {
    ListView,
    Text,
    View 
} from 'react-native';
//[ [ <rowData1>, <rowData2>, ... ], ... ]
//var source1 = [{'name':'John'}, {'name':'Joel'}, {'name':'James'},
//    {'name':'John1'}, {'name':'Joel1'}, {'name':'James1'}];
// { rowID: [ <rowData1>, <rowData2>, ... ], ... }
var source2 = {'class1': ['stu1', 'stu2', 'stu3'],'class2': ['stu4', 'stu5']};
//{ rowID: [ <rowData1>, <rowData2>, ... ], ... }
var source3 = {'person1':{'height': 172,'weight': 60}, 'person2':{'height': 182,'weight': 70}};
export default class ListViewBasics extends Component {
    // Initialize the hardcoded data
    constructor(props) {
        super(props);
        this.state = {
            source: {},
            ds: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

        };
    }

    componentDidMount() {
        let src = [];
        for(let i=0; i<5000; i++){
            src.push({name: "jacklovepdf"+i})
        }
        this.setState({
            source: src
        })
    }

    render() {
//        let {style} = this.props;
        let {source} = this.state;
        let dataSource = this.state.ds.cloneWithRows(source);
        return (
//            {/*<View style={[style]}>*/}
                <ListView
                    dataSource={dataSource}
                    initialListSize={10}
                    pageSize={15}
                    renderRow={(rowData, sectionID, rowID, highlightRow) => <Text>{rowData.name}</Text>}
                />
//            </View>
        );
    }
}