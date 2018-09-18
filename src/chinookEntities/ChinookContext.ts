import { ObjectType } from "typeorm";
import { Album } from "./Album";
import { Artist } from "./Artist";
import { Customer } from "./Customer";
import { Employee } from "./Employee";
import { Genre } from "./Genre";
import { Invoice } from "./Invoice";
import { InvoiceItem } from "./InvoiceItem";
import { MediaType } from "./MediaType";
import { Playlist } from "./Playlist";
import { SaleRecord } from "./SaleRecord";
import { Track } from "./Track";
import { getChinookConnection } from "../utils/createTypeormConn";

export class ChinookContext {
    static Instance: ChinookContext = new ChinookContext();

    async Repository<T>(t: ObjectType<T>) {
        const conn = await getChinookConnection();
        return conn.getRepository<T>(t)
    }

    Albums = () => this.Repository(Album);
    Artists = () => this.Repository(Artist);
    Customers = () => this.Repository(Customer);
    Employees = () => this.Repository(Employee);
    Genres = () => this.Repository(Genre);
    Invoices = () => this.Repository(Invoice);
    InvoiceItems = () => this.Repository(InvoiceItem);
    MediaTypes = () => this.Repository(MediaType);
    Playlists = () => this.Repository(Playlist);
    SaleRecords = () => this.Repository(SaleRecord);
    Tracks = () => this.Repository(Track);
}