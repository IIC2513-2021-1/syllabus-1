const axios = require('axios');
const { getTodos } = require('./todos');

jest.mock('axios');

describe('getTodos', () => {
  test('returns a todo list as an array', async () => {
    const todos = [
      {
        userId:	4,
        id:	69,
        title:	"doloribus sint dolorum ab adipisci itaque dignissimos aliquam suscipit",
        completed:	false,
      },
      {
        userId:	7,
        id:	137,
        title:	"qui sit non",
        completed:	true,
      },
    ];
    const response = { data: todos };
    axios.get.mockResolvedValue(response);
  
    expect(await getTodos()).toEqual(todos);
  });
});