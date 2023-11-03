import ComponenteBannerProps from './ComponenteBannerProps';
import Caixa1 from '../img/acessorios/madeira_clara.jpg'
import Caixa2 from  '../img/acessorios/caixadivis.jpg'
import Caixa3 from '../img/acessorios/caixa_de_madeira_escura.jpg'
import Caixa4 from '../img/acessorios/caixadivisclara.jpg'
import Ness from '../img/acessorios/necessarielona.jpg'
import Sacola from '../img/acessorios/sacolaroxa.png'
import Adao from '../img/acessorios/costelaadao.jpg'
import Pump from '../img/acessorios/pump.jpg'
import Spresente from '../img/acessorios/sacolapresente.jpg'
import PortaOleo from '../img/acessorios/Portaoleo.jpg'
import Personali from '../img/acessorios/sacoladesenhada.jpg'



function Acessorios(){
    return(
        <ComponenteBannerProps 
        titulo='ACESSORIOS'
        texto='Material de apoio desenvolvido pra você que ama a Aromaterapia.'

         produto1= {Ness}
         nomeproduto1='Nessecerie cor crua - Material Lona'
         valor1='R$ 80,24'
         parcela1='3x'
         parcela2='13,66'

         produto2= {Sacola}
         nomeproduto2='Sacola roxa phytoterapica '
         valor2='R$ 2,70'
         parcela1='3x'
         parcela2='13,66'

         produto3= {Adao}
         nomeproduto3='Necesserie costela de adão'
         valor3='R$ 57.72'
         parcela1='3x'
         parcela2='13,66'

         produto4= {Pump}
         nomeproduto4='Valvula para frasco'
         valor4='R$ 6,00'
         parcela1='3x'
         parcela2='13,66'

         produto5= {Personali}
         nomeproduto5='Sacola amarela'
         valor5='R$ 6,50'
         parcela1='3x'
         parcela2='13,66'

         produto6= {Caixa4}
         nomeproduto6='Caixa de madeira'
         valor6='R$ 165,75 '
         parcela1='3x'
         parcela2='13,75'

         produto7= {Caixa3}
         nomeproduto7='Caixa de madeira'
         valor7='R$ 165,7'
         parcela1='3x'
         parcela2='13,75'

         produto8= {PortaOleo}
         nomeproduto8='Caixa presenteavel'
         valor8='R$ 15,46'
         parcela1='3x'
         parcela2='165,75'

         produto9= {Caixa1}
         nomeproduto9='Caixa de madeiral'
         valor9='R$ 165,7 '
         parcela1='3x'
         parcela2='165,75'

         produto10= {Caixa2}
         nomeproduto10='Caixa de madeira'
         valor10='R$ 100,00'
         parcela1='3x'
         parcela2='13,66'

         produto11= {Spresente}
         nomeproduto11='Sacola de presente'
         valor11='R$ 41,00'
         parcela1='3x'
         parcela2='13,66'

         produto12= {Ness}
         nomeproduto12='Nessecerie cor crua'
         valor12='R$ 36,00'
         parcela1='3x'
         parcela2='13,66'

         produto13= {Sacola}
         nomeproduto13='Sacola roxa phyto'
         valor13='R$ 39,00'
         parcela1='3x'
         parcela2='13,66'

         produto14= {Adao}
         nomeproduto14='Necesserie costela de adao'
         valor14='R$ 61,37'
         parcela1='3x'
         parcela2='13,66'

         produto15= {Pump}
         nomeproduto15='Valvula para frasco'
         valor15='R$ 31,00'
         parcela1='3x'
         parcela2='13,66'

         produto16= {Personali}
         nomeproduto16='Sacola amarela'
         valor16='R$ 49,00'
         parcela1='3x'
         parcela2='13,66'
        
        
        />
    );
}

export default Acessorios