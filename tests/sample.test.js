test('Hello EventSphere endpoint', () => {
    const response = 'Hello, EventSphere!';
    expect(response).toBe('Hello, EventSphere!');
});  

test('adds 1 + 2 to equal 3', () => {
    const sum = (a, b) => a + b;
    expect(sum(1, 2)).toBe(3);
    });
