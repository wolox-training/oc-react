import getData from '.';

describe('02 - async', () => {
  it('getData resolves the data if true is sent as argument (use async/await)', async () => {
    const data = await getData(true);
    expect(data).toBe(data);
  });
  it('getData resolves the data if true is sent as argument (avoid async/await)', () => getData(true).then(data => {
    expect(data).toBeDefined();
  }));
  it('getData throws error if false is sent as argument (use async/await)', async () => {
    await expect(getData(false)).rejects.toThrow('error');
  });
  it('getData throws error if false is sent as argument (avoid async/await)', async () => {
    expect(getData(false)).rejects.toThrow('error');
  });
});
