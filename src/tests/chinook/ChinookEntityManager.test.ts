import { ChinookContext } from "../../chinookEntities/ChinookContext";
import { Employee } from "../../chinookEntities/Employee";
import { expectList } from "../testHelper";

const context: ChinookContext = ChinookContext.Instance;

describe("using entity manager", () => {
    it("can query employee list", async () => {
        const conn = await context.getChinookConnection();
        const manager = conn.manager;
        const list: Employee[] = await manager.find(Employee);
        expectList(list);
    })
})