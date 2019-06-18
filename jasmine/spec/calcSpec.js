describe('Testing playGame Function', function(){
    
    beforeEach(function(){
        playGame();
    });
    
    describe("Testing victory", function(){
       
        it("Should return false", function(){
            expect(victory).toBe(false);
        });
        
    });
    
    describe("Testing assortment", function (){
        it("Should return 0", function (){
            expect(assortment.length).toBe(0);
        });
    });
    
    describe("Testing playerAssortment", function (){
        it("Should return identified", function (){
            expect(playerAssortment).toBeDefined();
        });
    });
    describe("Testing blink", function (){
        it("Should return 0", function (){
            expect(blink).toBe(0);
        });
    });
    
});
