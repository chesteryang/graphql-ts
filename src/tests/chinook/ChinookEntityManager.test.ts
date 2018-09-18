import { Employee } from "../../chinookEntities/Employee";
import { expectList } from "../testHelper";
import { EntityManager } from "typeorm";
import { getChinookConnection } from "../../utils/createTypeormConn";

let manager: EntityManager;

beforeAll(async () => {
    const conn = await getChinookConnection();
    manager = conn.manager;
})

describe("using entity manager", () => {
    it("can query employee list", async () => {
        const list: Employee[] = await manager.find(Employee);
        expectList(list);
    })

    it("can query general manager", async () => {
        const list: Employee[] = await manager.find(Employee, {where: {ReportsTo: null}});
        expectList(list);
        expect(list[0].Title).toEqual("General Manager");
    })
})