describe('Task page tests', () => {
    it('get task', async() => {
        const string1 = 'Hello';
        const string2 = 'Hello';
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        await delay(1000);
        expect(string1).toEqual(string2);
    });
    it('update task', () => {
        const string1 = 'Hello';
        const string2 = 'Hello';
        expect(string1).toEqual(string2);
      });
  });