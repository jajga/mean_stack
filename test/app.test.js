'use strict';

const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));

const app = require('../app.js');

describe('App Unit testing', () => {
	

	before(() => {
		console.log('Before running test exec succesfully ');
	})

	after(()=> {
		console.log('After running test exec succesfully');
	})

	it('Testing user API', () => {
		return chai.request(app)
				.get('/article/1')
				.then((res) => {
					expect(res).to.have.status(200);
					expect(res).to.be.json;
			        expect(res.body).to.be.an('object');
			        //expect(res.body.results).to.be.an('array');
				})
	}).timeout(5000);
})