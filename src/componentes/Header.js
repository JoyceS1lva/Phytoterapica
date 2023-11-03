import {Link} from 'react-router-dom'
import Style from '../css/Header.module.css'
import Caminhao from '../img/icon-caminhao.png'
import Logo from '../img/logo1.png'
import Perfil from '../img/icon-perfil-removebg.png'
import Carrinho from '../img/carrinho-removebg.png'



function Header(){
    return(
        <header>
            <div className={Style.Linhapromo}>
            <img src={Caminhao} alt="" />
            <p> Com mais R$ 200,00 o frete é por nossa conta!</p>
            </div>

            <div className={Style.headersearch}>
               <img src={Logo} alt="" />
            
            
               <input type="text" name="seacrch" />
               <button className={Style.buttonheader}> -5% na primeira compra </button>
               <img className={Style.icons} src={Perfil} alt="" />
               <img className={Style.icons} src={Carrinho} alt="" />
           
            </div>

            <div className={Style.menusup}>
            <ul>
             <li><Link to='/' > ÓLEOS ESSENCIAIS  </Link></li>
             <li><Link to='/Vegetais' > ÓLEOS VEGETAIS  </Link></li>
             <li><Link to='/Sinergias' > SINERGIAS </Link></li>
             <li><Link to='/Naturais' > COSMETICOS NATURAIS </Link></li>
             <li><Link to='/Pessoal' > HIGIENE PESSOAL </Link></li>
             <li><Link to='/Aromas' > AROMATIZADORES </Link></li>
             <li><Link to='/Acessorios' > ACESSORIOS  </Link></li>
            </ul>
            </div>
           

        </header>


    )
}

export default Header