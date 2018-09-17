export const expectList = (list: any[]) => {
    expect(list).not.toBeNull();
    expect(list.length).toBeGreaterThan(0);
}