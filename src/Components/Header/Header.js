import './header1.css';
function Header(){
    return(
        <div className='background-image text-center'>
            <h3>Hello, Good Morning</h3>
            <input className=' Header text-body mt-5 px-3 border border-dark' type='text' placeholder='Search'></input>
        </div>

    );
}
export default Header;