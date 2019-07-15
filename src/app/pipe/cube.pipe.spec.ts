import { CubePipe } from "./cube.pipe";

// Test Suite
describe('Testing of Cube pipe', () => {

    
    it('the cube of 3 should 27', () => {
        let exp = 27;
        //let cube = new CubePipe();
        let actul = cube.transform(3, undefined);
        expect(exp).toEqual(actul); // validation

    })

    it('the cube of 4 and after addition of 3 should 67', () => {
        let exp = 67;
        //let cube = new CubePipe();
        let actul = cube.transform(4, 3);
        expect(exp).toEqual(actul);

    })

    let cube;
    beforeAll(()=>{

         cube = new CubePipe();
         console.log("Before all")
    }) //-> 1 all test case
    beforeEach(()=>{
        console.log("Before Each")
    }); // it will exec for every test

    afterAll(()=>{
        console.log("After all")

    }) // after exc all the test  cases
    afterEach(()=>{
        console.log("After Each")

    }) // it will exec for every test after completion


});