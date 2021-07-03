const app = require('../../app')
const request = require('supertest')
const truncate = require("../utils/truncate");
const faker = require('faker/locale/pt_BR');
const models = require('../../src/models/index');

const estabelecimento = models.estabelecimento;

describe('Test estabelecimento', function () {
  beforeEach(async () => {
    await truncate();
  });  

  it('Returns 201, create estabelecimento', async () => {    
    const data = {
        "id": 10,
        "nome": faker.company.companyName().substring(0,70),
        "cnpj": faker.datatype.number(14),
        "telefone": faker.phone.phoneNumber().substring(0,16),
        "email": faker.internet.email().substring(0,150),
        "cep": faker.address.zipCode().substring(0,10),
        "uf": 'RJ',
        "cidade": faker.address.city().substring(0,30),
        "bairro": faker.address.county().substring(0,30),
        "logradouro": faker.address.streetName().substring(0,70),
        "numero": faker.address.streetAddress().substring(0,20)
    }
 
    const response = await request(app)
      .post('/v1/estabelecimento')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
     
    expect(response.status).toBe(201);    
  });

  it('Returns 201, create estabelecimento', async () => {
    // const data = await factory.create('Estabelecimento',{});
    const data = {
        "id": 15,
        "nome": faker.company.companyName().substring(0,70),
        "cnpj": faker.datatype.number(14),
        "telefone": faker.phone.phoneNumber().substring(0,16),
        "email": faker.internet.email().substring(0,150),
        "cep": faker.address.zipCode().substring(0,10),
        "uf": 'RJ',
        "cidade": faker.address.city().substring(0,30),
        "bairro": faker.address.county().substring(0,30),
        "logradouro": faker.address.streetName().substring(0,70),
        "numero": faker.address.streetAddress().substring(0,20)
    }
 
    const response = await request(app)
      .post('/v1/estabelecimento')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
     
    expect(response.status).toBe(201);    
  });

  it('Returns 200, delete estabelecimento', async () => { 
    const data = {
      "id": 15,
      "nome": faker.company.companyName().substring(0,70),
      "cnpj": faker.datatype.number(14),
      "telefone": faker.phone.phoneNumber().substring(0,16),
      "email": faker.internet.email().substring(0,150),
      "cep": faker.address.zipCode().substring(0,10),
      "uf": 'RJ',
      "cidade": faker.address.city().substring(0,30),
      "bairro": faker.address.county().substring(0,30),
      "logradouro": faker.address.streetName().substring(0,70),
      "numero": faker.address.streetAddress().substring(0,20)
    }

    const res = estabelecimento.create(data);
    
    const response = await request(app)
      .delete('/v1/estabelecimento/15')
      .set('Accept', 'application/json')    
     
    expect(response.status).toBe(200);    
  });

  it('Returns 200, update estabelecimento', async () => {
    const data = {
        "id": 15,
        "nome": faker.company.companyName().substring(0,70),
        "cnpj": faker.datatype.number(14),
        "telefone": faker.phone.phoneNumber().substring(0,16),
        "email": faker.internet.email().substring(0,150),
        "cep": faker.address.zipCode().substring(0,10),
        "uf": 'RJ',
        "cidade": faker.address.city().substring(0,30),
        "bairro": faker.address.county().substring(0,30),
        "logradouro": faker.address.streetName().substring(0,70),
        "numero": faker.address.streetAddress().substring(0,20)
    }
 
    const response = await request(app)
      .put('/v1/estabelecimento')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
     
    expect(response.status).toBe(200);    
  });

  it('Returns 204, delete estabelecimento', async () => {
    const response = await request(app)
      .delete('/v1/estabelecimento/15')
      .set('Accept', 'application/json')
     
    expect(response.status).toBe(204);    
  });

  it("Returns error 404", async () => {
    await request(app)
      .get('/teste')      
      .set('Accept', 'application/json')
      .expect(404)
  });

  it("Returns error 422 validação de campos", async () => {
    const data = {    
      "nome": faker.company.companyName().substring(0,70),  
      // "cnpj": faker.datatype.number(14),
      "telefone": faker.phone.phoneNumber().substring(0,16),
      "email": faker.internet.email().substring(0,150),
      "cep": faker.address.zipCode().substring(0,10),
      "uf": 'RJ',
      "cidade": faker.address.city().substring(0,30),
      "bairro": faker.address.county().substring(0,30),
      "logradouro": faker.address.streetName().substring(0,70),
      "numero": faker.address.streetAddress().substring(0,20)
    }
    const response = await request(app)
      .post('/v1/estabelecimento')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)

    expect(response.status).toBe(422)
  });

  it('Returns 200, list estabelecimentos', async () => {
    const response = await request(app)
      .get('/v1/estabelecimento/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
  });
})
