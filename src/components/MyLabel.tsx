 import './mylabel.css';
 
export interface MyLabelProps{
     /**
      * Text contents
     */
    label:string;
     /**
      * How size should text 
     */
    size:'normal'| 'h1' | 'h2' | 'h3' ;
     /**
      * Si quiere todo capitalizado
     */

    allCaps?:boolean;
     /**
      * Colores basico
     */

    color?:'primary'| 'secondary'| 'tertiary';
       /**
      * Color personalizado de la fuente
     */

       fontcolor?:string;

       backgroundColor?:string;
    
}


 export const MyLabel=({
    label='No Label',
    size='normal',
    allCaps=false,
    color='primary',
    fontcolor,
    backgroundColor='transparent'
 }:MyLabelProps)=>{
    return(
        <span className={`label ${size} text-${color}`}
        style={{color:fontcolor,backgroundColor:backgroundColor}}
        >
          {allCaps ? label.toUpperCase():label}
        </span>
    )
 }