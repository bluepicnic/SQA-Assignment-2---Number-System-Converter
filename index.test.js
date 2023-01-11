const { hello } = require('./script.js')

//test3
describe("Smoke test", () => {
    it('Should be truthy', () => {
        expect(1).toBeTruthy();
    })
});

// describe('Test test', () => {
//     describe('Testing a test test', () => {
//         it('should convert 1 to I', () => {
//             expect("Hello").toEqual("Hello");
//         });
//     });