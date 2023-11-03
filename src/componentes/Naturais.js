import Style from '../css/Naturais.module.css'
import ComponenteBannerProps from './ComponenteBannerProps';
import Dragão from '../img/naturais/dragão.jpg'
import Branca from '../img/naturais/Abranca.jpg'
import Verde from '../img/naturais/Averde.jpg'
import Malaleuca from '../img/naturais/melaleuca.jpg'
import Cremebase from '../img/naturais/Cremebase.jpg'
import Vermelha from '../img/naturais/Avermelha.jpg'
import Amarela from '../img/naturais/Aamarela.jpg'
import Aloe from '../img/naturais/aloevera.jpg'
import Lemon from '../img/naturais/lemongrass.jpg'
import Preta from '../img/naturais/Apreta.jpg'
import Hill from '../img/naturais/Desodohill.jpg'
import True from '../img/naturais/Desodotrue.jpg'


function Naturais(){
    return(
    <ComponenteBannerProps
        titulo='COSMETICOS NATURAIS'
        texto='Produzidos com ingredientes como óleos essenciais, óleos e manteigas vegetais típicas do Brasil, os cosméticos naturais da Phytoterápica são livres de petroquímicos, parabenos, sulfatos e essências sintéticas. Benéficos para a saúde e para o meio ambiente, possuem excelente compatibilidade com o corpo humano, penetrando de maneira completa na pele e nos cabelos.
        '


         produto1={Dragão}
         nomeproduto1='Seiva Sangue de Dragão - 10ml'
         valor1='R$ 54,60'
         parcela1='3x'
         parcela2='13,66'

         produto2={Branca}
         nomeproduto2='Argila Branca - 200g'
         valor2='R$ 33,00'
         parcela1='3x'
         parcela2='13,66'

         produto3= {Verde}
         nomeproduto3='Argila Verde - 200g'
         valor3='R$ 33,00'
         parcela1='3x'
         parcela2='13,66'

         produto4= {Malaleuca}
         nomeproduto4='Hidrolato Água Floral de Melaleuca (Orgânico) - 200g'
         valor4='R$ 54,00'
         parcela1='3x'
         parcela2='13,66'

         produto5= {Cremebase}
         nomeproduto5='Creme Base Neutra - 240g'
         valor5='R$ 111,10'
         parcela1='3x'
         parcela2='13,66'

         produto6= {Vermelha}
         nomeproduto6='Argila Vermelha - 200g'
         valor6='R$ 33,00 '
         parcela1='3x'
         parcela2='13,66'

         produto7= {Amarela}
         nomeproduto7='Argila Amarela - 200g'
         valor7='R$ 33,00'
         parcela1='3x'
         parcela2='13,66'

         produto8= {Aloe}
         nomeproduto8='Extrato de Aloe Vera 99,3% - 210ml'
         valor8='R$ 76,80'
         parcela1='3x'
         parcela2='13,66'

         produto9= {Lemon}
         nomeproduto9='Hidrolato Água Floral de Lemongrass (Orgânico) - 200ml'
         valor9='R$ 54,00 '
         parcela1='3x'
         parcela2='13,66'

         produto10= {Preta}
         nomeproduto10='Argila Preta - 200g'
         valor10='R$ 33,00'
         parcela1='3x'
         parcela2='13,66'

         produto11= {Hill}
         nomeproduto11='Desodorante Vegano Spray Hill - 60ml'
         valor11='R$ 49,00'
         parcela1='3x'
         parcela2='13,66'

         produto12= {True}
         nomeproduto12='Desodorante Vegano Spray True - 60ml'
         valor12='R$ 49,00'
         parcela1='3x'
         parcela2='13,66'

         produto13= {Branca}
         nomeproduto13='Argila Branca - 200g'
         valor13='R$ 33,00'
         parcela1='3x'
         parcela2='13,66'

         produto14= {Verde}
         nomeproduto14='Argila Verde - 200g'
         valor14='R$ 33,00'
         parcela1='3x'
         parcela2='13,66'

         produto15= {Malaleuca}
         nomeproduto15='Hidrolato Água Floral de Melaleuca (Orgânico) - 200g'
         valor15='R$ 54,00'
         parcela1='3x'
         parcela2='13,66'

         produto16= {Cremebase}
         nomeproduto16='Creme Base Neutra - 240g'
         valor16='R$ 111,10'
         parcela1='3x'
         parcela2='13,66'
        
    />

    );
}

export default Naturais