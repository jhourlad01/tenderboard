var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Technician {
    // you can add your own attribute
    constructor(name, averageRepairTime) {
        this._name = name;
        this._averageRepairTime = averageRepairTime;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set averageRepairTime(averageRepairTime) {
        this._averageRepairTime = averageRepairTime;
    }
    get averageRepairTime() {
        return this._averageRepairTime;
    }
    repairing(customer) {
        return __awaiter(this, void 0, void 0, function* () {
            // add logic to simulate technician repairing process
            // you can use:
            // return new Promise<Customer>((resolve) => {
            //   setTimeout(() => {
            //     resolve(customer);
            //   }, this._averageRepairTime * 1000)
            // });
            // or your own logic
        });
    }
}
class Customer {
    // you can add your own attribute
    constructor(name, phoneSeries) {
        this._name = name;
        this._phoneSeries = phoneSeries;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set phoneSeries(phoneSeries) {
        this._phoneSeries = phoneSeries;
    }
    get phoneSeries() {
        return this._phoneSeries;
    }
}
class ServiceCenter {
    // you can add your own attribute
    constructor(name, address, technicians, customers) {
        this._name = name;
        this._address = address;
        this._technicians = technicians;
        this._customers = customers;
    }
    get name() {
        return this._name;
    }
    startOperating() {
        return __awaiter(this, void 0, void 0, function* () {
            // add your logic on here
            // eg: process and print transition
        });
    }
}
// ====================================================================================
// MAIN
// ====================================================================================
// Define Technician
const dalton = new Technician('Dalton', 10); // 10 seconds
const wapol = new Technician('Wapol', 20); // 20 seconds
const technicians = [dalton, wapol];
// Define Customer
// Generate 10 customers
const customers = new Array(10).fill(null).map((_, index) => {
    const customer = new Customer(`Customer ${index}`, '<<change with phone series here>>');
    return customer;
});
// Define Service Center
const serviceCenter = new ServiceCenter('First Service Center', 'Long Ring Long Land Street', technicians, customers);
console.log('Customer on queue: ');
console.table(customers);
console.log('\n');
// Begin Operating
console.log(`${serviceCenter.name} start operating today: `);
serviceCenter.startOperating().catch(err => console.log(err));
//# sourceMappingURL=main.js.map