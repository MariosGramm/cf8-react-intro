// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx"
// import ClassComponent from "./components/ClassComponent.tsx"
// import FunctionalComponent from "./components/FunctionalComponent"
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent"
import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";

function App() {
  return (
      <>
          {/*{<ViteIntro/>}*/}
          {/*<ClassComponent />*/}
          {/*<FunctionalComponent/>*/}
          {/*<ArrowFunctionalComponent/>*/}
          <ArrowFunctionalComponentWithProps title="Is a Arrow Functional Component With Props" />
          <ArrowFunctionalComponentWithProps title= "2nd Title"/>
    </>
  )
}

export default App
