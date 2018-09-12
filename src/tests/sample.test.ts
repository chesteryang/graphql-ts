import { createConnection, ConnectionOptions, Connection } from "typeorm";
import { User } from "../entity/User";
import { Customer } from "../chinookEntities/Customer";
import { Employee } from "../chinookEntities/Employee";
import { Artist } from "../chinookEntities/Artist";

const options: ConnectionOptions = {
    type: "sqlite", 
    database: ":memory:", 
    entities: [User, Customer, Employee, Artist], 
    logging: false, 
    synchronize: true
}
let connection: Connection; 
const getConnection = async () => {
    if(!connection){
        connection = await createConnection(options) 
    }
    return connection;
}

afterAll(() => {
    if(connection){
        connection.close()
    }
})

test('in memory database', async () => {
    const email = "test@gmail.com";
    await getConnection();
    const user = User.create({email, password: "asdfgh"});
    await user.save();
    const savedUser = await User.find({ where: { email } });
    expect(savedUser).toHaveLength(1);
    expect(savedUser[0].email).toEqual(email);
})

test("add Artist works", async () => {
    const name = "Paul Mauriat";
    const ctn = await getConnection();
    const repo = ctn.getRepository(Artist);
    const artist = repo.create({Name: name})
    const artist1 = repo.create({Name: name})
    await repo.save(artist);
    await repo.save(artist1);
    const saved = await repo.find({where: {Name: name}});
    expect(saved).toHaveLength(2);
    expect(saved[0].Name).toEqual(name);
})

function sum(a:number, b:number) {
    return a + b;
}

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});