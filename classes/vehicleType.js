class VehicleType{

    static Car = new VehicleType("Car")
    static Bike = new VehicleType("Bike")
    static Van = new VehicleType("Van")

    constructor(name){
        this.name = name;
    }

}