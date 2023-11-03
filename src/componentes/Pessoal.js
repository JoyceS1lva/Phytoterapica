import Style from '../css/Pessoal.module.css'
import ComponenteBannerProps from './ComponenteBannerProps';
import Lavanda from '../img/pessoal/Sablavanda.jpg'
import Ylang from '../img/pessoal/Caixayangle.jpg'
import Melaleuca from '../img/pessoal/Sabmelaleuca.jpg'
import GelDragao from '../img/pessoal/GelDragao.jpg'
import Limao from '../img/pessoal/Sabaolimao.jpg'
import Sabmini from '../img/pessoal/Sabonetinho.jpg'
import Lemon from '../img/pessoal/Sablemon.jpg'
import Menta from '../img/pessoal/Sabmenta.jpg'
import Infantil from '../img/pessoal/Geldente.jpg'
import Enxaguante from '../img/pessoal/Enxaguante.jpg'
import Adulto from '../img/pessoal/HerbalA.jpg'


function Pessoal(){
    return(
        <ComponenteBannerProps
        titulo='HIGIENE PESSOAL'
        texto='Linha de produtos com óleos essenciais: Sabonetes com óleos vegetais, creme dental adulto, gel dental infantil e enxaguante bucal com extratos naturais.'
       
         produto1={Lavanda}
         nomeproduto1='Óleo Essencial de de Lavanda (gt. França) - 10ml'
         valor1='R$ 51,00'
         parcela1='3x'
         parcela2='12,99'
        
         produto2={Ylang}
         nomeproduto2='Óleo Essencial de Alecrim (qt. Cineol) - 10ml'
         valor2='R$ 41,00'
         parcela1='4x'
         parcela2='12,99'

        produto3={Melaleuca}
        nomeproduto3='Óleos Essenciais de Gerânio - 5ml'
        valor3='R$ 48,00'
        parcela1='3x'
        parcela2='12,99'

        produto4={GelDragao}
        nomeproduto4='Óleo Essencial de Hortelã-Pimenta (Menta) - 10ml'
        valor4='R$ 52,00'
        parcela1='3x'
         parcela2='12,99'

        produto5={Limao}
        nomeproduto5='Óleo Essencial de Malaleuca (Tea Tree) - 10ml'
        valor5='R$ 50,00'
        parcela1='3x'
         parcela2='12,99'

        produto6={Sabmini}
        nomeproduto6='Óleo Essencial de Sândalo Amyris - 5ml'
        valor6='R$ 63,00'
        parcela1='3x'
        parcela2='12,99'

        produto7={Lemon}
        nomeproduto7='Óleo Essencial de Lavanda (gt. Bulgária) - 10ml'
        valor7=' R$ 51,00'
        parcela1='3x'
        parcela2='12,99'

        produto8={Menta}
        nomeproduto8='Óleo Essencial de Eucalipto Globulus - 10ml'
        valor8='R$ 35,20'
        parcela1='3x'
        parcela2='12,99'

        produto9={Infantil}
        nomeproduto9='Óleo Essencial de Copaíba - 10ml'
        valor9='R$ 52,00'
        parcela1='3x'
        parcela2='12,99'

        produto10={Enxaguante}
        nomeproduto10='Óleo Essencial de Bergamota - 10ml'
        valor10='R$ 50,00'
        parcela1='3x'
        parcela2='12,99'

        produto11={Adulto}
        nomeproduto11='Óleo Essencial de Patchouli - 5ml'
        valor11='R$ 41,00'
        parcela1='3x'
        parcela2='12,99'

        produto12={Lavanda}
        nomeproduto12='Óleo Essencial de Laranja - 10ml'
        valor12='R$ 27,30'
        parcela1='3x'
        parcela2='12,99'

        produto13={Ylang}
        nomeproduto13='Óleo Essencial de de Lavanda (gt. França) - 10ml'
        valor13='R$ 51,00'
        parcela1='3x'
        parcela2='12,99'

        produto14={Melaleuca}
        nomeproduto14='Óleo Essencial de Alecrim (qt. Cineol) - 10ml'
        valor14='R$ 41,00'
        parcela1='3x'
        parcela2='12,99'

        produto15={GelDragao}
        nomeproduto15='Óleos Essenciais de Gerânio - 5ml'
        valor15='R$ 48,00'
        parcela1='3x'
        parcela2='12,99'

        produto16={Limao}
        nomeproduto16='Óleo Essencial de Hortelã-Pimenta (Menta) - 10ml'
        valor16='R$ 52,00'
        parcela1='3x'
        parcela2='12,99'


        />

    );
}

export default Pessoal 