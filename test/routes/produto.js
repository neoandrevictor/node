const express=require('../../custom-express');
const assert = require('assert');
const request = require('supertest')(express);

describe('#Rotas e Controllers de Produtos', function (){


    it('## Get json de produtos', (done) => {
        request.get('/produtos')
        .set('Accept','application./json')
        .expect('Content-Type','application/json');
       
       
        done();
    })
})