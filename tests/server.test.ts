import app from '../src/server';
import supertest from 'supertest';

describe("test add function", () => {

    it("should respond with 404 for non existing endpoint",async () => {
        const response = await supertest(app)
            .get('/not-available')
            .expect(404);
    });

    it("should respond with messages", async () => {
        const response = await supertest(app)
            .get('/messages')
            .expect(200);
        expect(response.body).toBeDefined();
        expect(response.body.messages.length).toBe(0);
    });

    it("should accept messages", async () => {
        const response = await supertest(app)
            .post('/messages')
            .send({ message: 'Hello, World!' })
            .set('Accept', 'application/json')
            .expect(201);
    });

    it("should have one message", async () => {
        const response = await supertest(app)
            .get('/messages')
            .expect(200);
        expect(response.body).toBeDefined();
        expect(response.body.messages.length).toBe(1);
    });

    it("should throw error when message not provided", async () => {
        const response = await supertest(app)
            .post('/messages')
            .send({ msg: 'Hello, World!' })
            .set('Accept', 'application/json')
            .expect(400);
    });
});