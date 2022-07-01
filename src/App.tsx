import { Header } from "./Header"
import { Status } from "./Status"




function App() {


  return (
  <div>
    <Header/>
    <div className="flex items-center justify-center">
    <div className="bg-gray-700 h-60 w-1/4 flex justify-center flex-col items-center list-none rounded-md">
            <header className="text-white mt-4 mb-3">Status de Serviço</header>
            <li>
            <Status status service="Ramal"/>
            <Status status service="Go Global"/>
            <Status status service="webmail"/>
            </li>
        </div>
    </div>

  </div>
  )
}

export default App
