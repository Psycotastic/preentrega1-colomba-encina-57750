import Header from './layouts/header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './layouts/footer/Footer'
import './App.scss'

function App() {

  return (
    <>
    <Header />
    <main>
      <ItemListContainer greetings = "Welcome to our rock store!"/>
    </main>
    <Footer />
    </>
  )
}

export default App
