import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'

class About extends Component {
  config = {
    navigationBarTitleText: '关于我们'
  }
  render() {
    return (
      <View className='about'>
        <AtButton>按钮文案</AtButton>
        <AtButton type='primary'>按钮文案</AtButton>
        <AtButton type='secondary'>按钮文案</AtButton>
      </View>
    )
  }
}

export default About
