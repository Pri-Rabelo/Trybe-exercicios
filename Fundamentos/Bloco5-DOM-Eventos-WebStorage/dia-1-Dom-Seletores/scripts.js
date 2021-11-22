 //console.log('oi! tudobem? ')

 // OBJETO WINDOW

 // DOCUMENTO DO OBJETO
//console.log(document)
// CORPO OBJETO
//console.log(document.body);

 // BUSCAR ELEMENTOS
    // retornar 1 elemento específico
       //console.log (document.getElementById ('cont1'))
      // console.log (cont1);
    // retornar vários elementos com algo em comum
          // let minhaTag = document.getElementsByClassName ('estilo1')
          // let minhaTag = document.querySelector ('.estilo1');
          // let minhaTag = document.querySelectorAll ('# cont1 .estilo1');
          //console.log (minhaTag);

    // buscar elementos anteriores
          // deixe minhaTag = cont2.parentNode
          //console.log (minhaTag);
    // buscar elementos filho
          // deixe minhaTag = cont2.children
          //console.log (minhaTag [0]);
    // buscar a partir de qualquer elemento
         // cont1.getElementsByClassName ('estilo1');

 // ATUALIZAR PROPRIEDADES DOS ELEMENTOS
         // DOC https://www.w3schools.com/jsref/default.asp
//         //document.querySelector('ul').style.backgroundColor = '#cccccc';
         //document.querySelectorAll('ul')[0].style.backgroundColor = '#cccccc';
        

         //RETIRAR
        // documento . querySelectorAll ( 'ul' ) [ 1 ] . removeAttribute ( "estilo" )
 // ADICIONAR / REMOVER CLASSE, ID, ESTILO     
          //documento . getElementsByTagName ( 'li' ) [ 2 ] . classList . remover ( "estilo1" )
         //documento . getElementsByTagName ( 'li' ) [ 2 ] . classList . adicionar ( "estilo2" )
         
         //documento . querySelectorAll ( '.estilo1' ) [ 0 ] . setAttribute ( 'id' , 'itemFavorito' )
        // documento . querySelectorAll ( '.estilo1' ) [ 0 ] . removeAttribute ( "id" ) ;

// EXEMPLOS COM FUNÇÕES


// function  clearTextByTagName ( tagName ) {
//      let  tags  =  documento . getElementsByTagName ( tagName )

//      para ( deixe  i  =  0 ;  i  <  tags . comprimento ;  i ++ ) {
//           if ( tags [ i ] . classList  ==  'estilo1' ) {
//                continue ;
//           }
//           tags [ i ] . innerText  =  '' ;
         
//      }
//      //console.log(tags)     
// }


// console . log ( 'oi' )