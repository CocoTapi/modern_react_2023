import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
    const dispatch = useDispatch();

    const cars = useSelector((state) => {
        return state.cars.carsData;
    })

    console.log(cars);

    const handleCarDelete = (car) => {
        //we need id 
        dispatch(removeCar(car.id));
    }

    const renderedCars = cars.map((car) => {
        //need to check why {car.const}, not {car.cost}
        return (
            <div key={car.id} className="panel">
                <p>
                   {car.name} - ${car.const} 
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