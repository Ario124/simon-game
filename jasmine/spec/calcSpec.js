describe("Get Random Numbers 1-4", function () {
        it("Should Be Greater Than 0", function (){
            expect(Math.floor(Math.random() * 4) +1).toBeGreaterThan(0);
        });
});

describe("Get Random Numbers 1-4", function () {
        it("Should Be Lower Than 5", function (){
            expect(Math.floor(Math.random() * 4) +1).toBeLessThan(5);
        });
});