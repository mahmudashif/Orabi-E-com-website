import Image from "./components/Image"
import logo from "../src/assets/Logo.png"

function App() {

  return (
    <div className="flex bg-red-200 max-w-container mx-auto">
      <div className="w-3/12"><Image src={logo}/></div>
      <div className="w-9/12">
        <ul className="flex ">
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div>
    </div>

  )
}

export default App
