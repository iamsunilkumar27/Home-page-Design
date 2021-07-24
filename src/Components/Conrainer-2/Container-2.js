import delivery from './delivery boy.png';
import temperature from './temperature.png';
import bharathihomes from './bharathi homes.png';
import limited from './limited people.png';
import handwash from './handwash.png';
import man from './man.png';
import cleaning from './cleaning.png';
import'./Container-2.css'
function Category() {

    const images = [delivery, temperature, bharathihomes, limited , handwash, man, cleaning];
    const description = [' Zero-contact home delivery available', 'Non-contact thermal scanning of staff', 'Social distancing norms followed', 'Limited number of people allowed inside the store' , 'Staff trained on precautionary measures & hygiene', 'Mandatory face masks and hand sanitisation for staffs and customers  ', 'Store completely sanitized twice every day '];


    return (
        <div className='container-fluid container-class'>
            <h4 className='fw-bold text-center pt-md-5'>We are #SafeToShop</h4>
            <div className="d-flex flex-wrap justify-content-center px-lg-5">

                {
                    images.map((x, index) => {
                        const text = description[index];
                        return (
                            <div className="text-center my-md-5">
                                <div>
                                    <img className="rounded-circle bg-white p-3" src={x}></img>
                                </div>
                                <p className="w-75 m-auto">
                                   {text}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
export default Category;