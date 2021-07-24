import round from './round.png'
import './Footer.css'
function Footer (){
    return (
        <div className='container-fluid footer-'>
            <div className='row ps-md-5'>
                <div className='col-12 col-md-4 '>
                    <p>My account</p>
                    <div>
                        <p>Wallet</p>
                        <p>My Orders</p>
                        <p>Manage Addresses</p>
                    </div>
                </div>
                <div className='col-12 col-md-4 '>
                    <p>Contact</p>
                    <div className='d-flex align-items-center'>
                        <img src={round}></img>
                        <p className='mt-3 ps-2'>000-00000</p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <img src={round}></img>
                        <p className='mt-3 ps-2'>Whatsapp Us</p>
                    </div>
                </div>
                <div className='col-12 col-md-4 '>
                    <p>Download Our App</p>
                    <div>
                        <button className='butt-'> App Label</button>
                    </div>
                </div>

            </div>

        </div>
    );
}
export default Footer;