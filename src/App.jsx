import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Form from './pages/Form'
import History from './pages/History'
import ResumeGenerator from './pages/ResumeGenerator'
import Pnf from './pages/Pnf'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ViewResume from './pages/ViewResume'

function App() {

  return (
    <> 
    <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/form' element={<Form/>}></Route>
        <Route path='/history' element={<History/>}></Route>
        <Route path='/resume' element={<ResumeGenerator/>}></Route>
        <Route path='/resume/:id/view' element={<ViewResume/>}></Route>
        <Route path='/*' element={<Pnf/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
