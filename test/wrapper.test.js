const sqlite3 = require('../index').verbose();

describe('Wraps simple operations', () => {
  test('Wraps allAsync and runAsync', async () => {
    const db = new sqlite3.Database(':memory:', sqlite3.OPEN_CREATE | sqlite3.OPEN_READWRITE);
    let query = 'CREATE TABLE rows (str TEXT, num INT)'
    await db.runAsync(query);

    query = 'INSERT INTO rows (str, num) VALUES (\'foo\', 11), (\'bar\', 19)'
    await db.runAsync(query);

    query = 'SELECT rowid, * FROM rows';
    let result = await db.allAsync(query);
    expect(result.length).toBe(2);

    query = 'SELECT str FROM rows WHERE num=19';
    result = await db.allAsync(query);
    expect(result).toEqual([{str: 'bar'}]);

    return db.close();
  });
});
