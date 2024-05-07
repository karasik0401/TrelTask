describe('Sign up tests', () => {
    it('sign up', async() => {
      const string1 = 'Hello';
      const string2 = 'Hello';
      const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        await delay(4000);
      expect(string1).toEqual(string2);
    });
  });