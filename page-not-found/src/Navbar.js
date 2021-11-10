import {Link} from 'react-router-dom';
function Nav(){
    return(
        <>
        <Link to="/"> Home</Link><br></br>
        <Link to='/about'>About</Link><br></br>
        <Link to="/login">login</Link>
        </>
    )
}
export default Nav;