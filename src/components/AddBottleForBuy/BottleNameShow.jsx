
import PropTypes from 'prop-types'
const BottleNameShow = ({bottle,removeBottlesName}) => {
    const {name}=bottle
    console.log(name)
    return (
        <div onClick={()=>removeBottlesName(bottle)} className='p-4 rounded-xl text-center my-3 bg-gray-200'> 
            <h2 className='text-3xl font-bold w-ful'>{name}</h2>
        </div>
    );
};
BottleNameShow.propTypes={
bottle:PropTypes.object.isRequired,
removeBottlesName:PropTypes.func.isRequired,
}
export default BottleNameShow;