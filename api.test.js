const { app } = require('./server');
const supertest = require('supertest');
const request = supertest(app);

describe('API Tests', () => {
  it('should retrieve all countries information', async () => {
    const response = await request.get('/allcountriesinfo');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
    expect(Array.isArray(response.body)).toBeTruthy();
  });

  it('should retrieve specific country information', async () => {
    const response = await request.get('/specificcountryinfo/usa');
    expect(response.statusCode).toBe(200);
    expect(response.body.country).toBe('USA');
  });

  it('should retrieve total cases', async () => {
    const response = await request.get('/cases');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('cases');
  });

  it("should retrieve today's cases", async () => {
    const response = await request.get('/todaycases');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('todayCases');
  });

  it('should retrieve total deaths', async () => {
    const response = await request.get('/deaths');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('deaths');
  });

  it("should retrieve today's deaths", async () => {
    const response = await request.get('/todaydeaths');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('todayDeaths');
  });

  it('should perform a health check', async () => {
    const response = await request.get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message', 'OK');
  });
});
