# summary of react native project

some tips and experience in my work for react native.


## Table of Contents

- [1.样式布局中的困惑](#style－problem)
- [2.原生组件也有坑](#bug－with－component)
- [3.细节提升性能](#performance)
- [4.逃不掉的版本控制](#version－control)
- [5.优雅的项目架构](#project－structure)
- [6.如何让rn表现更好](#more－better)
- [7.rn中状态管理](#status-manage)

## 1.样式布局中的困惑

1.1 页面布局
    (1)rn中的布局
    rn中页面布局一般使用view组件，类似web中的div元素，而布局的方式则主要采用使用flexbox；
与web应用中不同的是，在rn中使用flex你不需要担心兼容性的问题，也不需要加类似浏览器中的各种前缀；
同时，rn中的flex的默认行为以及属性取值范围与css中也存在不同，比如，flexDirection默认取值为'column'而不是'row',
flex的取值只能是数字，而css中flex是一个合成属性，可以取类似0 1 auto这样的值。

 (2) rn中的尺寸
 
 
 (3) 关于position
 

1.2 样式实现

（1）不要使用组件不支持的样式；
    

（2）你不知道的text组件样式
 

（3）不要设置样式宽高边框等属性值为小数(eg width:0.5)


（4）样式的继承

 与web应用不同，rn中组件的样式并不回继承父组件(或者容器组件)。当然也有例外，当text组件的容器组件是text组件的时候，子text组件会继承
父text组件的样式属性；

 (5) 慎用zIndex
 
 不当的使用zIndex导致组件渲染时候，出现空白的问题已经在项目中出现多次了。我们都知道zIndex的作用是控制组件可以展示在其它组件
的上面。但不幸的是，在android系统上，在动态渲染的组件上使用zIndex会导致组件无法正确的渲染。解决这一问题的办法是通过改变组件布局以及其顺序来
实现这一功能。

> **Note**: zIndex does not work with dynamic components on Android. issue: https://github.com/facebook/react-native/issues/8968

<sup>[(back to table of contents)](#table-of-contents)</sup>

## 2.原生组件也有坑

2.1 你不知道的text组件

 (1)关于lineHeight
 
 (2)text组件是块状组件还是行内组件
 
 (3)numberOfLines的使用

2.2 view组件也不是善茬


2.3 小心Modal组件


2.4 注意TouchableOpacity中的手势
    activeOpacity={1}

2.5 导航器与路由

> **Note**: 


<sup>[(back to table of contents)](#table-of-contents)</sup>

## 3.细节提升性能

3.1 不简单的事件绑定


3.2 关于动画


3.3 ListView的使用技巧

> **Note**: 

<sup>[(back to table of contents)](#table-of-contents)</sup>

## 4.逃不掉的版本控制

4.1 繁琐的版本控制，更有效的定义接口，减少版本控制；


4.2 强制更新是下策；


4.3 做好前后端逻辑的分离

> **Note**: 

<sup>[(back to table of contents)](#table-of-contents)</sup>

## 5.优雅的项目架构

5.1 探索更优雅的项目架构


5.2 为什么要选择rn


5.3 关于rn中的技术选型


> **Note**: 

<sup>[(back to table of contents)](#table-of-contents)</sup>

## 6.如何让rn表现更好

6.1 rn中存在的不足

6.2 native可以让rn表现更好

6.3 关于rn中的打包机制

> **Note**: 

<sup>[(back to table of contents)](#table-of-contents)</sup>

## 7.rn中的状态管理(关于redux)


> **Note**: 

<sup>[(back to table of contents)](#table-of-contents)</sup>