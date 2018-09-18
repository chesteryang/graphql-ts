import request from "graphql-request";

const query1 = (id: number) => `
query{
    getEmployee(id: ${id}){
        id
        firstName
        lastName
        title
    }
}
`

const query2 = (id: number) => `
query{
    getCustomer(id: ${id}){
        id
        firstName
        lastName
        email
    }
}
`
const host = process.env.TEST_HOST as string

test("it can get an employee", async () => {
    const response = await request(host, query1(1));
    expect(response).not.toBeNull()
})

test("it can get a customer", async () => {
    const response = await request(host, query2(1));
    expect(response).not.toBeNull()
})