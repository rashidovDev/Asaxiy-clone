import { IProduct } from "../../data"

export const getSortData = (srt : string, product : IProduct["product"]) => {
    if ( srt === "min") {
    return product.sort((a , b) => a.price - b.price)
    }
    else if(srt === "max"){
    return product.sort((a , b) => b.price - a.price)  
    }
    else if(srt === "rateMin"){
    return product.sort((a , b) => a.rate - b.rate)
    }
    else if(srt === "rateMax"){
    return product.sort((a , b) => b.rate - a.rate)
    }
    else {
        return product
    }
  }

export const getData = (product : IProduct["product"],fresh : boolean | undefined,kind : string | undefined) => {
    if(fresh){
      return product.filter(item => item.new === fresh)
    }
    else{
       return product.filter(item => item.type === kind)
    }
}