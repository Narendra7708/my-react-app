
import 'bootstrap/dist/css/bootstrap.min.css';
// import Usecallback from './components/functional-components/Hooks/useCallback/Usecallback';
import Navigationstack from './Rounting/Navigation';
import { createContext, useState } from 'react';
// import UseMemo from './components/functional-components/Hooks/useMemo/useMemoParent';




export  const AppData = createContext()
export const LoginInfo=createContext()
export default function App() {
  //const [name, setName] = useState("Narendra")
  const[login,setLogin]=useState(false)
  const loginUser=()=>{
    setLogin(true)
  }
  return (
    
      <LoginInfo.Provider value={{login:login,loginUser:loginUser}}>
    <AppData.Provider >
      <Navigationstack />
    </AppData.Provider>
    </LoginInfo.Provider> 
    //  <UseMemo/> 
  // <Usecallback/>

  )
}
