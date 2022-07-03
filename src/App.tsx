import { Header } from "./Header"
import { Status } from "./Status"



function App() {


  return (
  <div>
    <Header/>
    <div className="flex items-center justify-center">
    <div className="bg-define-black w-64  flex justify-center flex-col items-center rounded-md pb-2">
            
            <header className="text-white mt-4 mb-5 border-b-2 border-zinc-500">Status de Serviço</header>
            
            <div className="">
            <Status status={1} service="Ramal" />
            <Status status={1} service="Go-Global"/>
            <Status status={2} service="Firewall"/>
            <Status status={4} service="Alterdata Cloud"/>
            <Status status={3} service="VPN"/>
            
            </div>
            
        </div>
    </div>
    <section className="flex flex-col justify-center items-center mt-32 text-gray-200">
    <h2>Está com problemas ?</h2>
    <p>Acesse o Karoo</p>
    <a href="https://www.karoo.com.br/chat/#/entrada?conta=136" className="mt-10 mb-2 border-2 border-emerald-900 bg-emerald-900 rounded-md h-12 w-32 flex justify-center items-center text-xl hover:bg-theGreen  transition duration-300" title="Acessar Karoo">Acessar</a>
    </section>
    </div>
  )
}

export default App
