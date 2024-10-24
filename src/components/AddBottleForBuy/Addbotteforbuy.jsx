import PropTypes from 'prop-types'
import BottleNameShow from './BottleNameShow';

const Addbotteforbuy = ({bottleaddforBuy,cost,removeBottlesName}) => {
  
  
    return (
        <div>
            <div className='text-3xl font-bold text-center border p-10 bg-gray-100 rounded-2xl'>
                total cost : ${cost}
            </div>
            <div>
              {
                bottleaddforBuy.map((b,index)=><BottleNameShow removeBottlesName={removeBottlesName} key={index} bottle={b}></BottleNameShow>)
              }
                 
            </div>
        </div>
    );
};
Addbotteforbuy.propTypes={
bottleaddforBuy:PropTypes.array.isRequired,
cost:PropTypes.number.isRequired,
removeBottlesName:PropTypes.func.isRequired,
}
export default Addbotteforbuy;