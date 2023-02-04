import React from 'react'
import { SafeAreaView } from 'react-native'
import { AlignSelf } from './src/screens/AlignSelf'
import { FlexScreen } from './src/screens/FlexScreen'
import { RelativePosition } from './src/screens/RelativePosition'

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      {/* <FlexScreen/> */}
      {/* <RelativePosition/> */}
      <AlignSelf/>
    </SafeAreaView>
  )
}

export default App