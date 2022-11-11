import supertest from 'supertest';
import app from '..';

const request = supertest(app);
describe('testing the image processor', () => {
  it('inserting query', async () => {
    const response = await request.get(
      '/api/image?filename=salah&&width=420&&height=100'
    );
    expect(response.status).toBe(200);
  });
});
