 import  Layout  from "./Components/Layout/Layout.jsx"
import Table from "./Pages/Dashboard/Table.jsx"
import Login from "./Pages/Login.jsx"
import Input from "./Pages/Input.jsx"
function App() {
  return (
    <>
    <Layout>
    <Login/>
     <Table/>
    </Layout>
    <Input/>
      
    </>
  )
}

export default App