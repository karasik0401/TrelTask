describe('Home page tests', () => {
    it('get my tasks', async() => {
      const string1 = 'Hello';
      const string2 = 'Hello';
      const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        await delay(1000);
      expect(string1).toEqual(string2);
    });
    it('get boards', () => {
        const string1 = 'Hello';
        const string2 = 'Hello';
        expect(string1).toEqual(string2);
      });
  });