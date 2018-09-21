import request from "graphql-request";

const query1 = (id: number) => `
query{
    employee(id: ${id}){
        id
        firstName
        lastName
        title
    }
}
`

const query2 = (id: number) => `
query{
    customer(id: ${id}){
        id
        firstName
        lastName
        email
    }
}
`

const query3 = (id: number) => `
query{
    album(id: ${id}){
        title
        artist{
            name
        }
        tracks{
            name
            unitPrice
        }
    }
}
`

const query4 = (id: number) => `
{
    artist(id: ${id}){
        name
        albums{
            title
            tracks{
                name
                unitPrice
            }
        }
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

test("it can get an album", async () => {
    const response = await request(host, query3(1));
    expect(response).not.toBeNull()
})

test("it can get an artist", async () => {
    const response = await request(host, query4(1));
    expect(response).not.toBeNull()
})