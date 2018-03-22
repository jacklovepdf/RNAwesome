
# RNAwesome

some tips and experience in my work for react native.


## Table of Contents

- [1.rn中常见组件使用](#rn-start)
- [2.常见开源组件库](#bug－with－component)
- [3.逃不掉的版本控制](#version－control)
- [4.优雅的项目架构](#project－structure)
- [5.如何让rn表现更好](#more－better)
- [6.rn中状态管理](#status-manage)

## 1.关于rn中常见组件

（1）scrollview and listview

scrollview里面嵌套listview是一种很不好的做法，最好还是使用一个listview，将其他需要滑动的部分添加为头部和脚部。长列表视图组件；
    ListView并不立即渲染所有元素，而是优先渲染屏幕上可见的元素。 这就是listview比scrollview更适合渲染长列表的地方，scrollview会一次渲染所有的列表项；

关于 listview组件的渲染和性能优化
包含两个方面；首屏渲染选择合适的行数initialListSize；列表滚动流畅度，避免不必要的渲染以及减少每一帧的行数（UI线程和js线程是互斥的，避免ui线程任务过重导致丢帧）；
    rowHasChanged和 sectionHeaderHasChanged告诉listview是否要重绘数据项；限制频率的行渲染 - 默认情况下，每次消息循环只有一行会被渲染（可以用pageSize属性配置）。这把较大的工作分散成小的碎片，以降低因为渲染而导致丢帧的可能性。

1.列表的表头
ds.cloneWithRows(['row 1'])//数据源可以为数组
ds.cloneWithRowsAndSections(['row 1']), 
let ds = new ListView.DataSource(
    { 
        rowHasChanged: (r1, r2) => r1 !== r2, 
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2 
     }
); 
this.state = { dataSource: ds.cloneWithRowsAndSections(this.getRows()), };


2.renderRow(rowData,sectionID,rowID,highlightRow) //渲染列表中的每一项；



3.initialListSize
首屏渲染的列表项数，当数据量很大时候，设置合适的数据能够提高首屏渲染速度


(1)react-native run-ios(run-android)
(2)双击ios/projectName.xcodeproj文件然后在Xcode中点击Run按钮(ios)。

<sup>[(back to table of contents)](#table-of-contents)</sup>

## 1.常见开源组件库

(1) 路由
    https://github.com/wix/react-native-navigation;
    
    
(2)双击ios/projectName.xcodeproj文件然后在Xcode中点击Run按钮(ios)。

<sup>[(back to table of contents)](#table-of-contents)</sup>
