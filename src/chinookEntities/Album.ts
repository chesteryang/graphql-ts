import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Track } from "./Track";
import { Artist } from "./Artist";
@Entity("albums")
export class Album {

    @PrimaryGeneratedColumn({ 
        name: "AlbumId" 
    })
    albumId: number;

    @Column("nvarchar", {
        nullable: false,
        length: 160,
        name: "Title"
    })
    title: string;

    @Column("integer", {
        nullable: false,
        name: "ArtistId"
    })
    artistId: number;

    artist: Artist | undefined;
    tracks: Track[];
}
