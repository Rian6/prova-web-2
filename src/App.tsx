import './App.css'
import { Board } from './components/board'
import { BoardsItens } from './components/boards-itens'
import { Footer } from './components/footer'
import { Header } from './components/header'

function App() {

  return (
    <>
      <Header></Header>
      <BoardsItens></BoardsItens>
      <Board></Board>
      <Footer></Footer>
    </>
  )
}

export default App
