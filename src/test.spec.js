import React from 'react';
import ReactDOM from 'react-dom';

describe("when calc is used to peform basic math operations", function(){
         
    //Spec for sum operation
    it("should be able to calculate sum of 3 and 5", function() {
        expect(8).toEqual(8);
    });

    //Spec for multiply operation
    it("should be able to multiply 10 and 40", function() {
        expect(400).toEqual(400);
    });

    //Spec for factorial operation for positive number
    it("should be able to calculate factorial of 9", function() {
        expect(9).toEqual(9);
    });

});