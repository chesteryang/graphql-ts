import { ChinookContext } from "../../chinookEntities/ChinookContext";
import { Album } from "../../chinookEntities/Album";
import { Artist } from "../../chinookEntities/Artist";
import { Customer } from "../../chinookEntities/Customer";
import { Employee } from "../../chinookEntities/Employee";
import { Genre } from "../../chinookEntities/Genre";
import { expectList } from "../testHelper";
import { Invoice } from "../../chinookEntities/Invoice";
import { InvoiceItem } from "../../chinookEntities/InvoiceItem";
import { MediaType } from "../../chinookEntities/MediaType";
import { Playlist } from "../../chinookEntities/Playlist";
import { SaleRecord } from "../../chinookEntities/SaleRecord";
import { Track } from "../../chinookEntities/Track";
// entity test file cannot be in entity folder due to ormconfig.json settings
const context = ChinookContext.Instance;

describe("ChinookContext", () => {

    it("can get album list", async () => {
        const repo = await context.Albums();
        const list: Album[] = await repo.find({});
        expectList(list);
    })

    it("can get artist list", async () => {
        const repo = await context.Artists();
        const list: Artist[] = await repo.find({});
        expectList(list);
    })

    it("can get customer list", async () => {
        const repo = await context.Customers();
        const list: Customer[] = await repo.find({});
        expectList(list);
    })

    it("can get employee list", async () =>{
        const repo = await context.Employees();
        const list: Employee[] = await repo.find({});
        expectList(list);
    })

    it("can get genre list", async () =>{
        const repo = await context.Genres();
        const list: Genre[] = await repo.find({});
        expectList(list);
    })

    it("can get invoice list", async () =>{
        const repo = await context.Invoices();
        const list: Invoice[] = await repo.find({});
        expectList(list);
    })

    it("can get invoice item list", async () =>{
        const repo = await context.InvoiceItems();
        const list: InvoiceItem[] = await repo.find({});
        expectList(list);
    })

    it("can get media type list", async () =>{
        const repo = await context.MediaTypes();
        const list: MediaType[] = await repo.find({});
        expectList(list);
    })

    it("can get Playlist", async () =>{
        const repo = await context.Playlists();
        const list: Playlist[] = await repo.find({});
        expectList(list);
    })

    it("can get track sale record list", async () =>{
        const repo = await context.SaleRecords();
        const list: SaleRecord[] = await repo.find({});
        expectList(list);
    })

    it("can get track list", async () =>{
        const repo = await context.Tracks();
        const list: Track[] = await repo.find({});
        expectList(list);
    })
})
