import './App.css'
import Link from './components/Link/Link'
import Perfil from './components/Perfil/Perfil'
import Rodape from './components/Rodape/Rodape'
import SocialLink from './components/SocialLink/SocialLink'

function App() {
  return (

    <div id="App">

      <Perfil fotoPerfil={"https://placehold.co/100"}> Ana Clara</Perfil>

      <div className="switch"> botão switch</div>

      <ul>
      <Link url={""}>Inscreva-se</Link>
      <Link url={""}>Minha playlist</Link>
      <Link url={""}>Me pegue um café!</Link>
      <Link url={""}>Conheça o curso DEV</Link>
      </ul>

      <div className="socialLinks">
        <SocialLink url={"https://github.com"} icon={"logo-github"} />
        <SocialLink url={"https://instagram.com"} icon={"logo-instagram"} />
        <SocialLink url={"https://youtube.com"} icon={"logo-youtube"} />
        <SocialLink url={"https://br.linkedin.com/"} icon={"logo-linkedin"} />
      </div>
      <Rodape>Ana Clara</Rodape>
    </div>
  )
}

export default App
