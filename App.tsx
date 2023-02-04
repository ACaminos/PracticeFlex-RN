import React from 'react'
import { SafeAreaView } from 'react-native'
import { AlignSelf } from './src/screens/AlignSelf'
import { ExOne } from './src/Exercise/ExOne'
import { FlexScreen } from './src/screens/FlexScreen'
import { FlexWrap } from './src/screens/FlexWrap'
import { RelativePosition } from './src/screens/RelativePosition'
import { TareaScreen } from './src/screens/TareaScreen'
import { ExTwo } from './src/Exercise/ExTwo'
import { ExThree } from './src/Exercise/ExThree'
import { ExFour } from './src/Exercise/ExFour'

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      {/* <FlexScreen/> */}
      {/* <RelativePosition/> */}
      {/* <AlignSelf/> */}
      {/* <FlexWrap/> */}
      {/* <TareaScreen/> */}
      {/* <ExOne/> */}
      {/* <ExTwo/> */}
      {/* <ExThree/> */}
      <ExFour/>
    </SafeAreaView>
  )
}

export default App