import { useEffect, useState } from "react";
import Bottle from "../bottle/bottle";
import ProtoTypes from 'prop-types'

function Bottles({handleBottleAddForBuy}) {
const [bottles,setBottles]=useState([]);

useEffect(()=>{
fetch('bottles.json').then(res=>res.json()).then(data=>setBottles(data))


},[])

    return (
        <div className="grid  md:grid-cols-2 grid-cols-1 gap-4">
        {bottles.map((bottle)=><Bottle handleBottleAddForBuy={handleBottleAddForBuy} key={bottle.id} bottle={bottle}></Bottle>)}
        </div>
    );
}
Bottles.propTypes={
    handleBottleAddForBuy:ProtoTypes.func.isRequired,
}
export default Bottles;