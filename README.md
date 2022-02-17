# vue+node多人博客

这个项目是我在疫情期间写的，我也不知道为什么突然想起来写个博客，可能就是闲的吧 `~ (～﹃～)~zZ`！好了言归正传，项目总体结构就是一个响应式的架构，前台`vue`，`ui`库使用`iview`，后台`nodejs`、数据库`mysql`，可适配多端：`PC`，`移动端`。

[项目浏览地址](codelei.cn)
#### 项目上手注意事项
- 网络请求封装在`network`文件夹，如果你需要使用的话请把`xxxxxx`修改为你的后台开启地址，不然你的项目是访问不了的，我在对应的文件中都有标注，封装在一个文件中这样管理起来也比较方便，后续更换框架也能给予更方面的更换，我的后台是`nodejs`写的，需要的朋友可以来找我要。`24h`在线。
- 各个位置的上传`url`我都换成了`xxxxxxx`，你们需要将各个`vue`文件中的`xxxxxx`全都更换为你们的后台，`admin`文件夹下面的文件差不多都要换一下，文件大概有6个，不会耗费太多时间。还有个人信息页，也就是`profile`的`vue`文件,换完这些你就可以开启后台愉快的玩耍了。
- 当然这些都是写给小白看的，老手的话应该一下就能定位问题所在，下面看一下博客的效果图。

#### 一、首页功能

> 首页使用简约式架构，看上去非常的简约，出场动画是一个移动效果，使用媒体查询对网站大小的不同给出不同的背景，个人觉得还是挺养眼的，不会那么花里胡哨，里面结合了我觉得比较好看的一些`demo`和`c3`动画元素，我把首页图放在下面了：

`lg`尺寸显示的背景：（PC端）
（具体ui布局已经更新了最新的，具体请拉取代码后查看或者浏览我的个人博客地址foreile.com
![博客首页]( http://121.196.102.29:3000/images/c09ccd4b073b0a358a60f5c1dd980c5a.png )）

`md`尺寸显示的背景：（手机端）

![博客首页](http://121.196.102.29:3000/images/adfb066baee2afe5244ed8ece4f5eda4.png)

#### 二、 文章列表结构

> 使用响应式布局，lg尺寸的话左边显示文章，右边有最近文章。音乐播放器，文章页做的不是很漂亮，看看效果图吧：

![文章列表]( http://codeleilei.gitee.io/blog/article.png)

#### 三、 文章详情页

> 详情页的文章支持`markdown`语法解析，使用了`highlight`进行解析，个人觉得这个插件在使用过程还是有些问题，最大的痛点就是不支持代码块的行号显示， 文章支持分享，与用户评论回复，毕竟是多人博客嘛，这都是必须的。后续会继续完善，有更好建议的朋友欢迎来讨论，虚心接受。下面上图：

![详情页](http://codeleilei.gitee.io/blog/detail.png)

#### 四、 博客留言板

> 留言板的话我封装成了一个组件，因为在文章的评论中也使用到了一样的模板，封装的文件为`replyOrpublish`下的同名文件，详细的话可以看`props`参数,主要就是传入不同的后台地址。下面上效果图：

![博客留言板](http://codeleilei.gitee.io/blog/new_leavemessage.png)

- 挑选了一些比较常用的模块来展示，还有那么多内容就不多介绍了，感兴趣的朋友可以下载自己详细的去琢磨，觉得好用的话请给一个`star`，谢谢啦笔芯~♥
- 欢迎你们来博客玩耍~

#### 1. 依赖安装

```
npm install
```

#### 2. 项目启动

```
npm run serve
```

#### 3. 项目打包

```
npm run build
```
