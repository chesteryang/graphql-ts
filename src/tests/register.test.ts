import { AddressInfo } from "net";
import { request } from "graphql-request";
import { User } from "../entity/User";
import { startServer } from "../startServer";

let getHost = () => "";

beforeAll(async () => {
  const app = await startServer();
  const { port } = app.address() as AddressInfo;
  getHost = () => `http://127.0.0.1:${port}`;
});

const email = "test@gmail.com";
const password = "ajfdladfj";

const mutation = `
mutation {
  register(email: "${email}", password: "${password}")
}
`;

describe("Register user", () => {
  test("Should be able to register user", async () => {
    const response = await request(getHost(), mutation);
    expect(response).toEqual({ register: true });
    const users = await User.find({ where: { email } });
    expect(users).toHaveLength(1);
    const user = users[0];
    expect(user.email).toEqual(email);
    expect(user.password).not.toEqual(password);
  });
})