import Style from '../css/Vegetais.module.css'
import ComponenteBannerProps from './ComponenteBannerProps';
import Vmosqueta from '../img/vegetais/_leo_vegetal_de_rosa_mosqueta.jpg'
import Vuva from '../img/vegetais/oleo-vegetal-semente-de-uva.jpg'
import Vjojoba from '../img/vegetais/_leo_vegetal_de_jojoba.jpg'
import Vcamomila from '../img/vegetais/extrato_oleoso_de_camomila_alem.jpg'
import Vabacate from '../img/vegetais/Mockup_Cartucho_OV_Abacate_cinz.jpg'
import Vgirassol from '../img/vegetais/Mockup-OV-girassol-com-caixa.jpg'
import RollonMosqueta from '../img/vegetais/_leo_vegetal_de_rosa_mosqueta_roll_on.jpg'
import Vmaracuja from '../img/vegetais/oleo-vegetal-maracuja.jpg'
import VSementeU from '../img/vegetais/semente-uva-2.jpg'
import Vcopaiba from  '../img/vegetais/Mockup_Caixa_OV_Copaiba.jpg'
import Vamendoa from '../img/vegetais/oleo-vegetal-amendoa-doce.jpg'


function Vegetais(){
    return(

        <ComponenteBannerProps 
        
        titulo='ÓLEOS VEGETAIS'
        texto='Óleos vegetais são gorduras extraídas de grãos, sementes e polpas de frutos. São formados por ácidos graxos a maior parte insaturados, que são os ômega 3, 6 e 9 e vitaminas A, D e E, dentre outras substâncias.'


         produto1= {Vmosqueta}
         nomeproduto1='Óleo vegetal de Rosa Mosqueta  - 10ml'
         valor1='R$ 48,00 '
         parcela1='3x'
         parcela2='13,66'

         produto2= {Vuva}
         nomeproduto2='Óleo Vegetal de Semente de Uva - 50ml'
         valor2='R$ 39,00'
         parcela1='3x'
         parcela2='13,66'

         produto3= {Vjojoba}
         nomeproduto3='Óleo Vegetal de Jojoba - 30ml'
         valor3='R$ 61.37'
         parcela1='3x'
         parcela2='13,66'

         produto4= {Vcamomila}
         nomeproduto4=' Extrato Oleoso de Camomila Alemã - 30ml'
         valor4='R$ 17,10'
         parcela1='3x'
         parcela2='13,66'

         produto5= {Vabacate}
         nomeproduto5='Óleo Vegetal de Abacate - 50ml'
         valor5='R$ 49,00'
         parcela1='3x'
         parcela2='13,66'

         produto6= {Vgirassol}
         nomeproduto6='Óleo Vegetal de Girassol - 50ml'
         valor6='R$ 31,00 '
         parcela1='3x'
         parcela2='13,66'

         produto7= {RollonMosqueta}
         nomeproduto7='Óleo Vegetal de Rosa Mosqueta Roll-On - 10ml'
         valor7='R$ 58,00'
         parcela1='3x'
         parcela2='13,66'

         produto8= {Vmaracuja}
         nomeproduto8='Óleo Vegetal de Maracujá - 50ml'
         valor8='R$ 44,00'
         parcela1='3x'
         parcela2='13,66'

         produto9= {VSementeU}
         nomeproduto9='Óleo Vegetal de Semente de Uva - 500ml'
         valor9='R$ 97,00 '
         parcela1='3x'
         parcela2='13,66'

         produto10= {Vcopaiba}
         nomeproduto10='Óleo Vegetal (Bálsamo) de Copaíba - 20ml'
         valor10='R$ 100,00'
         parcela1='3x'
         parcela2='13,66'

         produto11= {Vamendoa}
         nomeproduto11='Óleo Vegetal de Amêndoa Doce - 50ml'
         valor11='R$ 41,00'
         parcela1='3x'
         parcela2='13,66'

         produto12= {Vmosqueta}
         nomeproduto12='Óleo de Rosa Mosqueta - 10ml'
         valor12='R$ 36,00'
         parcela1='3x'
         parcela2='13,66'

         produto13= {Vuva}
         nomeproduto13='Óleo Vegetal de Semente de Uva - 50ml'
         valor13='R$ 39,00'
         parcela1='3x'
         parcela2='13,66'

         produto14= {Vjojoba}
         nomeproduto14='Óleo Vegetal de Jojoba - 30ml'
         valor14='R$ 61,37'
         parcela1='3x'
         parcela2='13,66'

         produto15= {Vcamomila}
         nomeproduto15='Extrato Oleoso de Camomila Alemã  - 30ml'
         valor15='R$ 31,00'
         parcela1='3x'
         parcela2='13,66'

         produto16= {Vabacate}
         nomeproduto16='Óleo Vegetal de Abacate  - 50ml'
         valor16='R$ 49,00'
         parcela1='3x'
         parcela2='13,66'
        
         

        />



    );
}

export default Vegetais