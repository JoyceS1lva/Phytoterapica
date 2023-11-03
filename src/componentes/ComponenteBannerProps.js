import Style from '../css/ComponenteBanner.module.css'
import Bannerimg from '../img/fundobanner.png'


function ComponenteBannerProps({titulo, texto, produto1, nomeproduto1, valor1,parcela1, parcela2, produto2, nomeproduto2, valor2, produto3, nomeproduto3, valor3, produto4, nomeproduto4, valor4, produto5, nomeproduto5, valor5, produto6, nomeproduto6, valor6, produto7, nomeproduto7, valor7, produto8, nomeproduto8, valor8, produto9, nomeproduto9, valor9, produto10, nomeproduto10, valor10, produto11, nomeproduto11, valor11, produto12, nomeproduto12, valor12, produto13, nomeproduto13, valor13, produto14, nomeproduto14, valor14, produto15, nomeproduto15, valor15, produto16, nomeproduto16, valor16,}){
    return(

    <article>
    <section className={Style.Banner}>

    <div className={Style.Caixatexto}>
        <h2> {titulo} </h2>
        <p> {texto} </p>
    </div>

    </section>

    <section className={Style.Caixaprodutos}>

        <div className={Style.Produto1} className={Style.Areaproduto}> 
        <img src={produto1} alt="" />
        <h5> {nomeproduto1}</h5>
        <p> {valor1} </p>
        <h6> (Ou em até {parcela1} de {parcela2} sem juros) </h6>
        </div>

        <div className={Style.Produto2} className={Style.Areaproduto}> 
        <img src={produto2} alt="" />
        <h5> {nomeproduto2}</h5>
        <p> {valor2} </p>
        <h6> (Ou em até {parcela1} de {parcela2} sem juros) </h6>
        </div>

        <div className={Style.Produto3} className={Style.Areaproduto}> 
        <img src={produto3} alt="" />
        <h5> {nomeproduto3}</h5>
        <p> {valor3} </p>
        <h6> (Ou em até {parcela1} de {parcela2} sem juros) </h6>
        </div>

        <div className={Style.Produto4} className={Style.Areaproduto}> 
        <img src={produto4} alt="" />
        <h5>{nomeproduto4}</h5>
        <p> {valor4} </p>
        <h6> (Ou em até {parcela1} de {parcela2} sem juros) </h6>
        </div>

        <div className={Style.Produto5} className={Style.Areaproduto}> 
        <img src={produto5} alt="" />
        <h5>{nomeproduto5}</h5>
        <p> {valor5} </p>
        <h6> (Ou em até {parcela1} de {parcela2} sem juros) </h6>
        </div>

        <div className={Style.Produto6} className={Style.Areaproduto}> 
        <img src={produto6} alt="" />
        <h5>{nomeproduto6}</h5>
        <p> {valor6} </p>
        <h6> (Ou em até {parcela1} de {parcela2} sem juros) </h6>
        </div>

        <div className={Style.Produto7} className={Style.Areaproduto}> 
        <img src={produto7} alt="" />
        <h5>{nomeproduto7}</h5>
        <p> {valor7} </p>
        <h6> (Ou em até {parcela1} de {parcela2} sem juros) </h6>
        </div>

        <div className={Style.Produto8} className={Style.Areaproduto}> 
        <img src={produto8} alt="" />
        <h5>{nomeproduto8}</h5>
        <p> {valor8} </p>
        <h6> (Ou em até {parcela1} de {parcela2} sem juros) </h6>
        </div>

        <div className={Style.Produto9} className={Style.Areaproduto}> 
        <img src={produto9} alt="" />
        <h5>{nomeproduto9}</h5>
        <p> {valor9} </p>
        <h6> (Ou em até {parcela1} de {parcela2} sem juros) </h6>
        </div>

        <div className={Style.Produto10} className={Style.Areaproduto}> 
        <img src={produto10} alt="" />
        <h5>{nomeproduto10}</h5>
        <p> {valor10} </p>
        <h6> (Ou em até {parcela1} de {parcela2} sem juros) </h6>
        </div>

        <div className={Style.Produto11} className={Style.Areaproduto}> 
        <img src={produto11} alt="" />
        <h5>{nomeproduto11}</h5>
        <p> {valor11} </p>
        <h6> (Ou em até {parcela1} de {parcela2} sem juros) </h6>
        </div>

        <div className={Style.Produto12} className={Style.Areaproduto}> 
        <img src={produto12} alt="" />
        <h5>{nomeproduto12}</h5>
        <p> {valor12} </p>
        <h6> (Ou em até {parcela1} de {parcela2} sem juros) </h6>
        </div>

        <div className={Style.Produto12} className={Style.Areaproduto}> 
        <img src={produto13} alt="" />
        <h5>{nomeproduto13}</h5>
        <p> {valor13} </p>
        <h6> (Ou em até {parcela1} de {parcela2} sem juros) </h6>
        </div>

        <div className={Style.Produto12} className={Style.Areaproduto}> 
        <img src={produto14} alt="" />
        <h5>{nomeproduto14}</h5>
        <p> {valor14} </p>
        <h6> (Ou em até {parcela1} de {parcela2} sem juros) </h6>
        </div>

        <div className={Style.Produto12} className={Style.Areaproduto}> 
        <img src={produto15} alt="" />
        <h5>{nomeproduto15}</h5>
        <p> {valor15} </p>
        <h6> (Ou em até {parcela1} de {parcela2} sem juros) </h6>
        </div>

        <div className={Style.Produto12} className={Style.Areaproduto}> 
        <img src={produto16} alt="" />
        <h5>{nomeproduto16}</h5>
        <p> {valor16} </p>
        <h6> (Ou em até {parcela1} de {parcela2} sem juros) </h6>
        </div>

        </section>
    </article>
   
    )
}

export default ComponenteBannerProps