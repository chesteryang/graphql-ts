import { createConnection, Connection, Repository } from "typeorm";
import {Album} from "../../chinookEntities/Album";

test("can get album list", async () => {
    const connection: Connection = await createConnection("chinook");
    const albumRepository: Repository<Album> = connection.getRepository(Album);
    const albums: Album[] = await albumRepository.find({});
    expect(albums).not.toBeNull();
    expect(albums.length).toBeGreaterThan(0);
})