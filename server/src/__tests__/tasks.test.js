require('dotenv').config();
const request = require('supertest');
const app = require('../app');
const {mongoConnect,mongoDisconnect} = require('../utils/mongo');

describe('tests for task API endpoint', ()=>{

beforeAll(async()=>{
await mongoConnect();
},200000);

afterAll(async()=>{
    await mongoDisconnect();
});
  
describe('Test Get /tasks',()=>{
    test('the request should respond with 200',async ()=>{
       const response= await request(app).get('/v1/tasks')
       .expect('Content-Type',/json/)
       .expect(200);
   },200000)
});

describe('Test Post /task',()=>{
    const mockData = {
        title:'test task',
        description:'a simple task for test purpose',
      
    }

    test('it should respond with status code 201 created',async()=>{
        const response= await request(app).post('/v1/tasks/new')
        .send(mockData)
       .expect('Content-Type',/json/)
       .expect(201);
    })
    },200000)

})

