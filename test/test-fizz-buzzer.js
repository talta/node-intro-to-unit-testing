const should = require('chai').should();
const expect = require('chai').expect;
const assert = require('chai').assert;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){
	it('should print fizz', function(){
		const fizzCases = [
			[1, 2, 3],
			[1, 2, 3, 4, 5],
			[1, 2, 3, 4]
		];
		fizzCases.forEach(function(input){
			expect(return).to.contain('fizz');
		});
	});
	it('should print buzz', function(){
		const buzzCases = [
			[1, 2, 3, 4, 5],
			[1, 2, 3, 4, 5, 6],
			[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
		];
		buzzCases.forEach(function(input){
			expect(return).to.contain('buzz');
		});
	});
	it('should print fizzBuzz', function(){
		const fizzBuzzCases = [
			[1, 2, 3, 4, 5, 6, 7 , 8, 9, 10, 11, 12, 13, 14, 15],
			[30, 31, 32, 33, 34, 35],
			[150, 151, 153]
		];
		fizzBuzzCases.forEach(function(input){
			expect(return).to.contain('fizz-buzz');
		});
	});
	it('should have not strings', function(){
		const numberCases = [
			[1, 2, 4],
			[11, 14, 17, 29]
		];
		numberCases.forEach(function(input){
			assert.isNumber(return, 'are all numbers');
		});
	});
});