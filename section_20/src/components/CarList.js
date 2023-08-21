import { useSelector, useDispatch } from "react-redux";
import { removeCar, formReducer } from "../store";

function CarList() {
    const dispatch = useDispatch();

    const { cars, name } = useSelector(({form, cars: { carsData, searchTerm } }) => {
        const filteredCars = carsData.filter((car) => 
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return {
           cars: filteredCars,
           name: formReducer.name 
        }
    });

    console.log(cars);

    const handleCarDelete = (car) => {
        //we need id 
        dispatch(removeCar(car.id));
    }

    const renderedCars = cars.map((car) => {
        //DECIDE IF THID CAR SHOULD BE BOLD
        //state.form.name
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase())

        return (
            <div key={car.id} className={`panel ${bold && 'bold'}`}>
                <p>
                   {car.name} - ${car.cost} 
                </p>
                <button
                    className="button is-danger"
                    onClick={() => handleCarDelete(car)}
                >
                    Delete
                </button>
            </div>
        )
    })

    return (
        <div className="car-list">
            {renderedCars}
            <hr />
        </div>
    )
}

export default CarList;