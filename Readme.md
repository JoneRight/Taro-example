# 编译并预览

## 微信小程序编译预览模式

```bash
# npm script
$ npm run dev:weapp
# 仅限全局安装
$ taro build --type weapp --watch
# npx用户也可以使用
$ npx taro build --type weapp --watch
```

## 支付宝小程序编译预览模式

```bash
# npm script
$ npm run dev:alipay
# 仅限全局安装
$ taro build --type alipay --watch
# npx 用户也可以使用
$ npx taro build --type alipay --watch
```

## 百度小程序编译预览模式

```bash
# npm script
$ npm run dev:swan
# 仅限全局安装
$ taro build --type swan --watch
# npx 用户也可以使用
$ npx taro build --type swan --watch
```

## H5 编译预览模式

```bash
# npm script
$ npm run dev:h5
# 仅限全局安装
$ taro build --type h5 --watch
# npx 用户也可以使用
$ npx taro build --type h5 --watch
```

## 安装容易遇到的问题及解决方案

```bash
# Module not found: Can’t resolve ‘@tarojs/taro-h5’ in ‘xxx/.temp’
# 这是因为里面某个包找不到了，这个时候重新安装就好了
npm install @tarojs/taro-h5

# Module not found: Can’t resolve ‘@tarojs/taro’ in ‘xxx/.temp’
npm install @tarojs/taro

# Module not found: Can’t resolve ‘nervjs’ in ‘xxx/.temp’
npm install nervjs

# Error: listen EADDRINUSE 127.0.0.1:10086
# 这个是因为 Taro 运行要用 10086 端口，但是这个端口被占用了，所以就报错了，这个时候把占用这个端口号的程序 kill 掉就好了
sudo lsof -i tcp: 10086
sudo kill -9 52594
```
