import React from 'react'
import { SafeAreaView } from 'react-native'
import { AlignSelf } from './src/screens/AlignSelf'
import { FlexScreen } from './src/screens/FlexScreen'
import { FlexWrap } from './src/screens/FlexWrap'
import { RelativePosition } from './src/screens/RelativePosition'

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      {/* <FlexScreen/> */}
      {/* <RelativePosition/> */}
      {/* <AlignSelf/> */}
      <FlexWrap/>
    </SafeAreaView>
  )
}

export default App