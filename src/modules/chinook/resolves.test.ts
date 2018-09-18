import request from "graphql-request";

const query = (id: number) => `
query{
    getEmployee(id: ${id}){
        id
        firstName
        lastName
        title
    }
}
`
const host = process.env.TEST_HOST as string

test("it can get an employee", async () => {
    const response = await request(host, query(1));
    expect(response).not.toBeNull()
})