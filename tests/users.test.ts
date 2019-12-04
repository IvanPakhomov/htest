import Api from '../src';

test('Get list of users with page number', async() => {
  const response = await Api.users.list(2);
  expect(response.status).toBe(200);
});

test('Get user by id', async() => {
  const response = await Api.users.get(2);
  expect(response.status).toBe(200);
});

test('Get user by wrong id', async() => {
  const response = await Api.users.get(23);
  expect(response.status).toBe(404);
});

test('Create user', async() => {
  const response = await Api.users.create({ name: 'morpheus', job: 'leader' });
  expect(response.status).toBe(201);
});

test('Update user', async() => {
  const response = await Api.users.update(2, { name: 'morpheus', job: 'zion resident' });
  expect(response.status).toBe(200);
});

test('Delete user', async() => {
  const response = await Api.users.delete(2);
  expect(response.status).toBe(204);
});
