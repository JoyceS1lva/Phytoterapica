import Style from '../css/OleosEssenciais.module.css'
import ComponenteBannerProps from './ComponenteBannerProps'
import OleoLavanda from '../img/essenciais/oleo-essencial-lavanda.jpg'
import OleoAlecrim from '../img/essenciais/oleo-essencial-alecrim.jpg'
import OleoGeranio from '../img/essenciais/oleo-essencial-geranio.jpg'
import OleoHortela from '../img/essenciais/oleo-essencial-hortela-pimenta.jpg'
import OleoMalaleuca from '../img/essenciais/oleo-essencial-melaleuca-tea-tree.jpg'
import OleoSandalo from '../img/essenciais/oleo-essencial-sandalo.jpg'
import OleoLavandaB from '../img/essenciais/oleo-essencial-lavanda-bulgaria.jpg'
import OleoEucalipto from '../img/essenciais/oleo-essencial-eucalipto-globulus.jpg'
import OleoCopaiba from '../img/essenciais/_leo_essencial_de_copa_ba.jpg'
import OleoBergamota from '../img/essenciais/oleo-essencial-bergamota.jpg'
import OleoPatchouli from '../img/essenciais/oleo-essencial-patchouli.jpg'
import OleoLimao from '../img/essenciais/oleo-essencial-limao-siciliano.jpg'



function OleosEssenciais(){
    return(
        <ComponenteBannerProps 
        
        titulo='ÓLEOS ESSENCIAIS'
        texto='Óleos essenciais são compostos naturais extraídos da parte aromática das plantas, como folhas, flores, galhos, troncos, raízes e casca de frutos.
        '

         produto1={OleoLavanda}
         nomeproduto1='Óleo Essencial de de Lavanda (gt. França) - 10ml'
         valor1='R$ 51,00'
         parcela1='3x'
         parcela2='12,99'
        
         produto2={OleoPatchouli}
         nomeproduto2='Óleo Essencial de Alecrim (qt. Cineol) - 10ml'
         valor2='R$ 41,00'
         parcela1='4x'
         parcela2='12,99'

        produto3={OleoGeranio}
        nomeproduto3='Óleos Essenciais de Gerânio - 5ml'
        valor3='R$ 48,00'
        parcela1='3x'
        parcela2='12,99'

        produto4={OleoHortela}
        nomeproduto4='Óleo Essencial de Hortelã-Pimenta (Menta) - 10ml'
        valor4='R$ 52,00'
        parcela1='3x'
         parcela2='12,99'

        produto5={OleoMalaleuca}
        nomeproduto5='Óleo Essencial de Malaleuca (Tea Tree) - 10ml'
        valor5='R$ 50,00'
        parcela1='3x'
         parcela2='12,99'

        produto6={OleoSandalo}
        nomeproduto6='Óleo Essencial de Sândalo Amyris - 5ml'
        valor6='R$ 63,00'
        parcela1='3x'
        parcela2='12,99'

        produto7={OleoLavandaB}
        nomeproduto7='Óleo Essencial de Lavanda (gt. Bulgária) - 10ml'
        valor7=' R$ 51,00'
        parcela1='3x'
        parcela2='12,99'

        produto8={OleoEucalipto}
        nomeproduto8='Óleo Essencial de Eucalipto Globulus - 10ml'
        valor8='R$ 35,20'
        parcela1='3x'
        parcela2='12,99'

        produto9={OleoCopaiba}
        nomeproduto9='Óleo Essencial de Copaíba - 10ml'
        valor9='R$ 52,00'
        parcela1='3x'
        parcela2='12,99'

        produto10={OleoBergamota}
        nomeproduto10='Óleo Essencial de Bergamota - 10ml'
        valor10='R$ 50,00'
        parcela1='3x'
        parcela2='12,99'

        produto11={OleoLimao}
        nomeproduto11='Óleo Essencial de Patchouli - 5ml'
        valor11='R$ 41,00'
        parcela1='3x'
        parcela2='12,99'

        produto12={OleoLavanda}
        nomeproduto12='Óleo Essencial de Laranja - 10ml'
        valor12='R$ 27,30'
        parcela1='3x'
        parcela2='12,99'

        produto13={OleoAlecrim}
        nomeproduto13='Óleo Essencial de de Lavanda (gt. França) - 10ml'
        valor13='R$ 51,00'
        parcela1='3x'
        parcela2='12,99'

        produto14={OleoGeranio}
        nomeproduto14='Óleo Essencial de Alecrim (qt. Cineol) - 10ml'
        valor14='R$ 41,00'
        parcela1='3x'
        parcela2='12,99'

        produto15={OleoHortela}
        nomeproduto15='Óleos Essenciais de Gerânio - 5ml'
        valor15='R$ 48,00'
        parcela1='3x'
        parcela2='12,99'

        produto16={OleoMalaleuca}
        nomeproduto16='Óleo Essencial de Hortelã-Pimenta (Menta) - 10ml'
        valor16='R$ 52,00'
        parcela1='3x'
        parcela2='12,99'

        />
     
    )
}

export default OleosEssenciais