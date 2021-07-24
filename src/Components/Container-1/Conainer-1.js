import './Container.css';
import box from './box.png';
function Container() {
    const items =  Array(24).fill("");
    return (
        <div className='container pb-5'>
            <p>Shop By Category</p>
            <div className='row'>

            {
                  items.map((x) => {
                  return(
                    <div className='d-flex   col-12 col-sm-6 col-md-4 col-lg-3 mt-4 align-items-center'>
                    <img src={box}></img>
                    <p className='ps-3'>Category Name</p>
                </div>   
                  );
                  })
              }
            </div>


        </div>
    );

}
export default Container;