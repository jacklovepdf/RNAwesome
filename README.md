# RNAwesome

some tips and experience in my work for react native.


## Table of Contents

- [样式布局中的困惑](#style－problem)
- [原生组件也有坑](#bug－with－component)
- [细节提升性能](#performance)
- [逃不掉的版本控制](#version－control)
- [优雅的项目架构](#project－structure)
- [如何让rn表现更好](#more－better)

## 样式布局中的困惑

1. 页面布局

1.1 总是在执行严格模式检查的环境中测试严格代码，尽量使用严格模式编写代码，并显示地将代码内容包裹在本地启用了严格模式的函数中；

(1) 启用程序的严格模式
```javascript
    "use strict"
    //...
    function C(){
        //...
    }
```
(2) 启用函数的严格模式
```javascript
    //...
    function C(){
        "use strict"
        //...
    }
```
(3) 最佳实践（现在模块系统在脚本链接的时候实现方式就是这样的）
```javascript
    // best practice
    (function(){
        "use strict"
        function f(){
            //......
        }
        //....
    })();
```
> **Note**: 由于"use strict"指令只有在脚本或者函数的顶部才能生效，导致实际项目开发过程中，由于链接多个模式不一致的文件可能导致一些没有启用严格模式的
文件（模块）启用了严格模式，从而引发潜在的兼容性问题。或者即使你自己保证在自己的编写所有代码都启用严格模式或者都没有启用严格模式，但是在多人协作的大型项目中或者引用外部库文件的场景中，
更本无法保证最终链接文件的运行模式。

2. 样式实现

1.1 总是在执行严格模式检查的环境中测试严格代码，尽量使用严格模式编写代码，并显示地将代码内容包裹在本地启用了严格模式的函数中；

(1) 启用程序的严格模式
```javascript
    "use strict"
    //...
    function C(){
        //...
    }
```
(2) 启用函数的严格模式
```javascript
    //...
    function C(){
        "use strict"
        //...
    }
```
(3) 最佳实践（现在模块系统在脚本链接的时候实现方式就是这样的）
```javascript
    // best practice
    (function(){
        "use strict"
        function f(){
            //......
        }
        //....
    })();
```
> **Note**: 由于"use strict"指令只有在脚本或者函数的顶部才能生效，导致实际项目开发过程中，由于链接多个模式不一致的文件可能导致一些没有启用严格模式的
文件（模块）启用了严格模式，从而引发潜在的兼容性问题。或者即使你自己保证在自己的编写所有代码都启用严格模式或者都没有启用严格模式，但是在多人协作的大型项目中或者引用外部库文件的场景中，
更本无法保证最终链接文件的运行模式。

<sup>[(back to table of contents)](#table-of-contents)</sup>

## 原生组件也有坑


2017年中总结


<sup>[(back to table of contents)](#table-of-contents)</sup>

## 细节提升性能

2017年中总结


<sup>[(back to table of contents)](#table-of-contents)</sup>

## 逃不掉的版本控制

2017年中总结


<sup>[(back to table of contents)](#table-of-contents)</sup>

## 优雅的项目架构

2017年中总结


<sup>[(back to table of contents)](#table-of-contents)</sup>

## 如何让rn表现更好

2017年中总结

<sup>[(back to table of contents)](#table-of-contents)</sup>
