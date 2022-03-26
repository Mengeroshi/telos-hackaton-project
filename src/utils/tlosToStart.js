export const tlosToStart = (list) =>{
    const  listado = (lista) =>{

      let obo;
      let newList = [];
  
     lista.forEach((token)=>{
        if(token.token === "TLOS"){
          if(!obo){
            obo = token;
          }
        }else{
          newList.push(token);
        }
      })

      newList.unshift(obo);
  
      // if(obo){
      //    newList = listWithout.unshift(obo);
      // }
  
      return newList;
    }
    
    const oboA = list.map(item =>  item.token);
    

    if(!oboA.includes("TLOS")){
      return list;
    }else{
      return listado(list);
    }
  }
