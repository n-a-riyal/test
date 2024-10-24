import PropTypes from 'prop-types'

export default function Bottle({bottle,handleBottleAddForBuy}) {
   const {name,price,description}=bottle
  return (
    <div className="card card-compact bg-base-100  p-10 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className='flex justify-between my-4 items-center'>
    <div className='font-bold text-3xl '>{name}</div>
    <div className='font-bold'>Price: ${price}</div>
  </div>
  <hr />
  <div className='font-semibold text-start my-3'>{description}</div>
   <hr />
  <div className='flex justify-around mt-3'>
    <button className='btn'>Dtailes</button><button className='btn' onClick={()=>handleBottleAddForBuy(bottle)}>Buy bottle</button>
  </div>
</div>
  )
}
Bottle.propTypes={
    bottle:PropTypes.object.isRequired,
    handleBottleAddForBuy :PropTypes.func.isRequired,
}