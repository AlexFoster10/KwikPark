class Vehicle{
        
        #type = VehicleType;
        #regNo = "";
        #isEV = false;
        #customName = "";


        constructor(customName,regNO,type){
            type = type.toLowerCase();
            this.#customName = customName;
            this.#regNo = regNO;
            switch(type){
                case "bike":
                    this.#type = VehicleType.Bike;
                    break;
                case "van":
                    this.#type = VehicleType.Van;
                    break;
                default:
                    this.#type = VehicleType.Car;
            }
        }

        toggleEV(){
            if(this.#isEV){
                this.#isEV = false;
            }
            else{
                this.#isEV = true;
            }
        }


}