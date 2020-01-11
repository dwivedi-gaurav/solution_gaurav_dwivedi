const expect = require('expect');
const utils = require('../utils/utils');
const countipTests =require('./countipTests').countipTests;
const generateOutputTests = require('./generateOutputTests').generateOutputTests;


it('should count the frequency of IPs',()=>{
    countipTests.forEach((test)=>{
        let res=utils.countIPs(test.input);
        expect(res).toEqual(test.output);
    })
});

it('should genarate the final output', ()=>{
    generateOutputTests.forEach((test)=>{
        let ipCount=utils.countIPs(test.input);
        let res=utils.generateOutput(test.input,ipCount);
        expect(res).toEqual(test.output);
    });
});