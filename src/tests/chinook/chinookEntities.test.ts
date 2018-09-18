import { Repository } from "typeorm";
import {Album} from "../../chinookEntities/Album";
import { Artist } from "../../chinookEntities/Artist";
import { Customer } from "../../chinookEntities/Customer";
import { Employee } from "../../chinookEntities/Employee";
import { Genre } from "../../chinookEntities/Genre";
import { Invoice } from "../../chinookEntities/Invoice";
import { InvoiceItem } from "../../chinookEntities/InvoiceItem";
import { MediaType } from "../../chinookEntities/MediaType";
import { Playlist } from "../../chinookEntities/Playlist";
import { SaleRecord } from "../../chinookEntities/SaleRecord";
import { Track } from "../../chinookEntities/Track";
import { expectList } from "../testHelper";
import { getChinookConnection } from "../../utils/createTypeormConn";

describe("database connection", () => {
    
    it("can get album list", async () => {
        const conn = await getChinookConnection();
        const repo: Repository<Album> = conn.getRepository(Album);
        const list: Album[] = await repo.find({});
        expectList(list)
    })

    it("can get artist list", async () => {
        const conn = await getChinookConnection();
        const repo: Repository<Artist> = conn.getRepository(Artist);
        const list: Artist[] = await repo.find({})
        expectList(list)
    })

    it("can get customer list", async () => {
        const conn = await getChinookConnection();
        const repo: Repository<Customer> = conn.getRepository(Customer);
        const list: Customer[] = await repo.find({})
        expectList(list)
    })

    it("can get employee list", async () => {
        const conn = await getChinookConnection();
        const repo: Repository<Employee> = conn.getRepository(Employee);
        const list: Employee[] = await repo.find({})
        expectList(list)
    })

    it("can get genre list", async () => {
        const conn = await getChinookConnection();
        const repo: Repository<Genre> = conn.getRepository(Genre);
        const list: Genre[] = await repo.find({})
        expectList(list)
    })

    it("can get invoice list", async () => {
        const conn = await getChinookConnection();
        const repo: Repository<Invoice> = conn.getRepository(Invoice);
        const list: Invoice[] = await repo.find({})
        expectList(list)
    })

    it("can get invoice item list", async () => {
        const conn = await getChinookConnection();
        const repo: Repository<InvoiceItem> = conn.getRepository(InvoiceItem);
        const list: InvoiceItem[] = await repo.find({})
        expectList(list)
    })

    it("can get media type list", async () => {
        const conn = await getChinookConnection();
        const repo: Repository<MediaType> = conn.getRepository(MediaType);
        const list: MediaType[] = await repo.find({})
        expectList(list)
    })

    it("can get Playlist", async () => {
        const conn = await getChinookConnection();
        const repo: Repository<Playlist> = conn.getRepository(Playlist);
        const list: Playlist[] = await repo.find({})
        expectList(list)
    })

    it("can get sale record list", async () => {
        const conn = await getChinookConnection();
        const repo: Repository<SaleRecord> = conn.getRepository(SaleRecord);
        const list: SaleRecord[] = await repo.find({})
        expectList(list)
    })

    it("can get track list", async () => {
        const conn = await getChinookConnection();
        const repo: Repository<Track> = conn.getRepository(Track);
        const list: Track[] = await repo.find({})
        expectList(list)
    })
})