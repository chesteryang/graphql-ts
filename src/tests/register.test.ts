import { AddressInfo } from "net";
import { request } from "graphql-request";
import { User } from "../entity/User";
import { startServer } from "../startServer";
import {
  duplicateEmail,
  emailNotLongEnough,
  invalidEmail,
  passwordNotLongEnough
} from "../utils/errorMessages";
import { Server } from "http";

let getHost = () => "";
let app: Server;
beforeAll(async () => {
  app = await startServer() as Server;
  const { port } = app.address() as AddressInfo;
  getHost = () => `http://127.0.0.1:${port}`;
});

afterAll(async () => {
  await app.close();
})

const email = "test@gmail.com";
const password = "jalksdf";

const mutation = (e: string, p: string) => `
mutation {
  register(email: "${e}", password: "${p}") {
    path
    message
  }
}
`;

describe("Register user", async () => {
  it("check for duplicate emails", async () => {
    // make sure we can register a user
    const response = await request(getHost(), mutation(email, password));
    expect(response).toEqual({ register: null });
    const users = await User.find({ where: { email } });
    expect(users).toHaveLength(1);
    const user = users[0];
    expect(user.email).toEqual(email);
    expect(user.password).not.toEqual(password);

    const response2: any = await request(getHost(), mutation(email, password));
    expect(response2.register).toHaveLength(1);
    expect(response2.register[0]).toEqual({
      path: "email",
      message: duplicateEmail
    });
  });

  it("check bad email", async () => {
    const response: any = await request(getHost(), mutation("b", password));
    expect(response).toEqual({
      register: [
        {
          path: "email",
          message: emailNotLongEnough
        },
        {
          path: "email",
          message: invalidEmail
        }
      ]
    });
  });

  it("check bad password", async () => {
    // catch bad password
    const response: any = await request(getHost(), mutation(email, "ad"));
    expect(response).toEqual({
      register: [
        {
          path: "password",
          message: passwordNotLongEnough
        }
      ]
    });
  });

  it("check bad password and bad email", async () => {
    const response: any = await request(getHost(), mutation("df", "ad"));
    expect(response).toEqual({
      register: [
        {
          path: "email",
          message: emailNotLongEnough
        },
        {
          path: "email",
          message: invalidEmail
        },
        {
          path: "password",
          message: passwordNotLongEnough
        }
      ]
    });
  });
});
