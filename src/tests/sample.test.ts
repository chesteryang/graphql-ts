import { createConnection, ConnectionOptions } from "typeorm";
import { User } from "../entity/User";
import { Customer } from "../chinookEntities/Customer";
import { Employee } from "../chinookEntities/Employee";

const options: ConnectionOptions = {
    type: "sqlite", 
    database: ":memory:", 
    entities: [User, Customer, Employee], 
    logging: true, 
    synchronize: true
}
test('in memory database', async () => {
    const email = "test@gmail.com";
    await createConnection(options)
    const user = User.create({email, password: "asdfgh"});
    await user.save();
    const savedUser = await User.find({ where: { email } });
    expect(savedUser).toHaveLength(1);
    expect(savedUser[0].email).toEqual(email);
})

function sum(a:number, b:number) {
    return a + b;
}

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});