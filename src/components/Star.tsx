interface IStar {
    rate : number | string
}

const Star : React.FC <IStar> = ({rate}) => {
  return (
     <div className="flex justify-start">
     <img className="md:ml-2 w-[14px]" src={require(`../assets/products/${rate >= 1 ? `bluestar.png` : `whitestar.png`}`)} alt="start" />
     <img className="ml-2 w-[14px]" src={require(`../assets/products/${rate >= 2 ? `bluestar.png` : `whitestar.png`}`)} alt="start" />
    <img className="ml-2 w-[14px]" src={require(`../assets/products/${rate >= 3 ? `bluestar.png` : `whitestar.png`}`)} alt="start" />
    <img className="ml-2 w-[14px]" src={require(`../assets/products/${rate >= 4 ? `bluestar.png` : `whitestar.png`}`)} alt="start" />
    <img className="ml-2 w-[14px]" src={require(`../assets/products/${rate === 5 ? `bluestar.png` : `whitestar.png`}`)} alt="start" />
  </div>
   )
 }

export default Star