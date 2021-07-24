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
    const description = ['Social distancing norms followed', 'Social distancing norms followed', 'Social distancing norms followed', 'Social distancing norms followed' , 'Social distancing norms followed', 'Social distancing norms followed', 'Social distancing norms followed'];


    return (
        <div className='container-fluid container-class'>
            <h4 className='fw-bold text-center mt-md-4'>We are #SafeToShop</h4>
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