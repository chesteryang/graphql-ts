import { ChinookContext } from "../../chinookEntities/ChinookContext";
import { Album } from "../../chinookEntities/Album";
import { Artist } from "../../chinookEntities/Artist";
import { Customer } from "../../chinookEntities/Customer";
// entity test file cannot be in entity folder due to ormconfig.json
const context = ChinookContext.Instance;

describe("ChinookContext", () => {

    it("can get album list", async () => {
        const repo = await context.Albums();
        const list: Album[] = await repo.find({});
        expect(list).not.toBeNull();
        expect(list.length).toBeGreaterThan(0);
    })

    it("can get artist list", async () => {
        const repo = await context.Artists();
        const list: Artist[] = await repo.find({});
        expect(list).not.toBeNull();
        expect(list.length).toBeGreaterThan(0);
    })

    it("can get customer list", async () => {
        const repo = await context.Customers();
        const list: Customer[] = await repo.find({});
        expect(list).not.toBeNull();
        expect(list.length).toBeGreaterThan(0);
    })
})
