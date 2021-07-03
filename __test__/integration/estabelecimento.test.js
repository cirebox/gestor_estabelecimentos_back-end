const app = require('../../app')
const request = require('supertest')
const truncate = require("../utils/truncate");
const factory = require('../factories/estabelecimento');

describe('Create / Estabelecimento', function () {
  beforeEach(async () => {
    await truncate();
  });

  const estabelecimento = factory();

  it('Returns 201, Pessoa created', async () => {
    const response = await request(app)
      .post('/v1/estabelecimento')
      .send(estabelecimento)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)

    expect(response.status).toBe(201)
  })

  it("Returns error 404", async () => {
    await request(app)
      .post('/teste')
      .send(estabelecimento)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
  })

  it("Returns error 422", async () => {
    const response = await request(app)
      .post('/v1/estabelecimento')
      .send(estabelecimento)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)

    expect(response.status).toBe(422)
  })

  // afterAll((done) => {
  //     await truncate();
  // });
})
