
 import PropTypes from 'prop-types';



function Header({blance}) {
    return (
       <header className="flex justify-between mt-0 items-center">
        <div className="flex items-center">
            <img className="w-10 rounded-full object-contain" src="https://img.icons8.com/?size=100&id=RPk5r04P3ALG&format=png&color=000000" alt="" />
            <h3 className="text-4xl ml-4">Bottles</h3>

        </div>
        <div>
            <ul className=" hidden  md:flex gap-5 justify-center font-semibold">
                <li>Home</li>
                <li>Blogs</li>
                <li>About</li>
            </ul>
        </div>
        <div className="flex gap-4">
            <p className="text-2xl">Blance : <span className="font-bold">$ {blance}</span></p>
            <img className="w-10 rounded-full p-1 border" src="https://img.icons8.com/?size=100&id=2952&format=png&color=000000" alt="" />
        </div>
       </header>
    );
}
Header.propTypes = {
    blance:PropTypes.number.isRequired
};
export default Header;