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
var source1 = [{'name':'John'}, {'name':'Joel'}, {'name':'James'}];
// { rowID: [ <rowData1>, <rowData2>, ... ], ... }
var source2 = {'class1': ['stu1', 'stu2', 'stu3'],'class2': ['stu4', 'stu5']};
//{ rowID: [ <rowData1>, <rowData2>, ... ], ... }
var source3 = {'person1':{'height': 172,'weight': 60}, 'person2':{'height': 182,'weight': 70}};
export default class ListViewBasics extends Component {
    // Initialize the hardcoded data
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(source3)
        };
    }
    render() {
        return (
            <View style={{flex: 1, paddingTop: 22}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData, sectionID, rowID, highlightRow) => <Text>{rowID + ' ' + rowData.height + rowData.weight}</Text>}
                />
            </View>
        );
    }
}