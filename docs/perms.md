# 权限控制篇
若依Web框架中，权限控制是通过自定义指令实现的，然而小程序端并不支持自定义指令，因此，我们需要另辟蹊径。

## 使用方式
我们实现了使用起来和自定义指令差不多的权限控制功能的Vite插件，使用方式如下：

```javascript
<view z-perms="['aa:bb:cc']">Hello World</view>
<view z-roles="['aa:bb:cc']">Hello World</view>
<view z-roles="['aa:bb:cc']" z-perms="['aa:bb:cc']" v-if="abc()">Hello World</view>
```
其中，`z-perms` 和 `z-roles` 分别表示需要的权限和角色，通过vitePluginUniappPerms插件的转换，上述代码会被转换为：
```javascript
<view v-if="$zx.isHasPermission(['aa:bb:cc'])">Hello World</view>
<view v-if="$zx.isHasRoles(['aa:bb:cc'])">Hello World</view>
<view v-if="($zx.isHasPermission(['aa:bb:cc'])) && ($zx.isHasRoles(['aa:bb:cc'])) && (abc())">Hello World</view>
```
`$zx.isHasPermission()` 和 `$zx.isHasRoles()` 是项目中自定义的全局函数，用来判断当前用户是否拥有指定权限或角色。

## 页面权限控制
此功能待实现。

## 为什么不直接使用`v-if`？
权限控制与v-if混肴在一起，会导致代码可读性差，不易维护，因此，我们选择使用指令的方式来实现权限控制（你就说这么写City不City吧）。

## 对此插件感兴趣？
您在项目中的以下目录可以找到源码：
- `/vite/plugins/vite-plugin-uniapp-perms`
