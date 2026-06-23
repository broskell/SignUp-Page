import SignUpReactHookForm from "./SignUpReactHookForm"
import SignUpZod from "./SignUpZod"

function App() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "20px", gap: "100px" }}>
        <SignUpReactHookForm />
        <SignUpZod />
      </div>
    </>
  )
}

export default App