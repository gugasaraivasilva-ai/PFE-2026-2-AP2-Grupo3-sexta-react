import {BrowserRouter,Navigate,Route,Routes,useLocation} from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import Hub from './pages/Hub';
import Pkz from './pages/Pkz';
import OneToOne from './pages/OneToOne';
import Fisioterapia from './pages/Fisioterapia';
import Agenda from './pages/Agenda';
import Login from './pages/Login';
import Painel from './pages/Painel';

function Antigo({destino}){const l=useLocation();return <Navigate replace to={destino+l.search+l.hash}/>;}
export default function App(){return <BrowserRouter><SiteLayout><Routes>
  <Route path="/" element={<Hub/>}/>
  <Route path="/pkz" element={<Pkz/>}/>
  <Route path="/one-to-one" element={<OneToOne/>}/>
  <Route path="/fisioterapia" element={<Fisioterapia/>}/>
  <Route path="/agendamento" element={<Agenda/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/area-do-atleta" element={<Painel/>}/>
  <Route path="/index.html" element={<Antigo destino="/"/>}/>
  <Route path="/pkz.html" element={<Antigo destino="/pkz"/>}/>
  <Route path="/one-to-one.html" element={<Antigo destino="/one-to-one"/>}/>
  <Route path="/fisioterapia.html" element={<Antigo destino="/fisioterapia"/>}/>
  <Route path="/agendamento.html" element={<Antigo destino="/agendamento"/>}/>
  <Route path="/login.html" element={<Antigo destino="/login"/>}/>
  <Route path="/area-aluno.html" element={<Antigo destino="/area-do-atleta"/>}/>
  <Route path="*" element={<main id="conteudo" className="container secao"><h1>Página não encontrada</h1><p><a href="/">Voltar ao início</a></p></main>}/>
</Routes></SiteLayout></BrowserRouter>}
