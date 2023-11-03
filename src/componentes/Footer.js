import Style from '../css/Footer.module.css'
import Logof from '../img/logo1.png'
import Vegano from  '../img/folhaf.png'
import Free from '../img/pataf.png'
import Puro from '../img/gotaf.png'
import Paga from  '../img/pagamentosf.png'
import Veri from '../img/verificadosfooter.png'


function Footer(){
    return(
        <footer>

            <div className={Style.Email}>
                <h2> INSCREVA-SE receba novidades e promoções </h2>
                <input className={Style.News} type="email" name="seacrch" />
                <button className={Style.News} > ASSINAR NEWSLETTER </button>
            </div>


            <section className={Style.Tributos}>

                <img src={Vegano} alt="" />
                <h3> VEGANO 
                    sem componentes de origem animal 
                </h3>

                <img src={Free} alt="" />
                <h3> Cruelty-free
                    não testado em animais  
                </h3>

                <img src={Puro} alt="" />
                <h3> 100% Puro
                    óleos puros e naturais
                </h3>
                
            </section>


            <section className={Style.Lista}>
            <ul>
                <h3> Sobre </h3>
                <p> Quem Somos (A Empresa)</p>
                <p> Nossos Contatos </p>
                <p> Trabalhe Conosco </p>
                <p> Fale Conosco (SAC) </p>
                <p> Consultoria </p>
                <p> Atacado </p>

            </ul>

            <ul>
                <h3> Suporte </h3>
                <p> Politica de Entrega </p>
                <p> Politica de Troca e Devolução </p>
                <p> Ingestão de Óleos Esseciais </p>
                <p> Cromatografia</p>
                <p> Encarregado de Dados - JKD ME</p>
                <p> privicidade@phytoterapica.com.br</p>

            </ul>

            <ul>
                <h3> Area do Cliente </h3>
                <p> Login </p>
                <p> Carrinho </p>
                <p> Minha Conta </p>
                <p> Meus Pedidos </p>
                <p> Preferencias de Cookies</p>
            
            </ul>
            

            <div className={Style.Pagamento}>
                <h4> Formas de Pagamento </h4>
                <img src={Paga} alt="" />


            </div>

            <div className={Style.Logoredes}>
               <img className={Style.logof} src={Logof} alt="" />
               <img className={Style.finalf} src={Veri} alt="" />
                
            </div>
            </section>
        </footer>

    );
}

export default Footer 