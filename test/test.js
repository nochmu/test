describe('Test', function() {
    describe('first', function() {
        it('should run without error', function() {
           console.log("Hallo");
        });
    });
    describe('second()', function() {
        it('should run with error', function() {
            console.log("Hallo");
            //
            throw new Error("Buh!");
        });
    });
});

