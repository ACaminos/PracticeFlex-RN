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
import { ExFive } from './src/Exercise/ExFive'
import { ExSix } from './src/Exercise/ExSix'
import { ExSeven } from './src/Exercise/ExSeven'
import { ExEight } from './src/Exercise/ExEight'
import { ExNine } from './src/Exercise/ExNine'
import { ExTen } from './src/Exercise/ExTen'

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
      {/* <ExFour/> */}
      {/* <ExFive/> */}
      {/* <ExSix/> */}
      {/* <ExSeven/> */}
      {/* <ExEight/> */}
      {/* <ExNine/> */}
      <ExTen/>
    </SafeAreaView>
  )
}

export default App