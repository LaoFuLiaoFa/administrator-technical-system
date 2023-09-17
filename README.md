# 文件注释规范：
<!--
 * @FileDescription: 该文件的描述信息
 * @Author: 作者信息
 * @Date: 文件创建时间
 * @LastEditors: 最后更新作者
 * @LastEditTime: 最后更新时间
-->

# 方法注释规范：
 /**
  * @description: 方法描述
  * @param {参数类型} 参数名称
  * @param {参数类型} 参数名称
  * @return 没有返回信息写 void / 有返回信息 {返回类型} 描述信息
*/

# 项目目录结构解释
## assets目录
- 该目录用于存储整个应用程序中使用的静态资源
### images目录
- 处于assets目录下的存放图片的文件夹
### js目录
- 处于assets目录下的存放js代码/ts代码的文件夹
### css目录
- 处于assets目录下的存放css代码的文件夹
## components目录
- 整个应用程序中可使用的共享组件
## views目录
- 应用程序的页面
### pages目录
- 放置除登录、注册、忘记密码以外的其他页面
## router目录
- 存放路由、网络配置
