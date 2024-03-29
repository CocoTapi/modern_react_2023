import { useSelector } from "react-redux";


function CarValue() {
    const totalCost = useSelector(({ cars: { carsData, searchTerm } }) => 
        carsData
            .filter((car) => 
                car.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .reduce((acc, car) => acc + car.cost, 0)
        );
        
        
        // const filteredCars = carsData.filter((car) => {
        //     return car.name.toLowerCase().includes(searchTerm.toLowerCase());
        // });

        // return filteredCars.reduce((acc, car) => acc + car.cost, 0)

        // let cost = 0;
        // for ( let car of filteredCars) {
        //     cost += car.cost;
        // }
        // return cost;
    

    return (
        <div className="car-value">
            Total Cost: ${totalCost}
        </div>
    )
}

export default CarValue;