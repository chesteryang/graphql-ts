import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("tracks")
export class Track {
    @PrimaryGeneratedColumn({
        name: "TrackId"
    })
    trackId: number;

    @Column("nvarchar", {
        nullable: false,
        length: 200,
        name: "Name"
    })
    name: string;

    @Column("integer", { name: 'AlbumId' })
    albumId: number | null;

    @Column("integer", { name: 'MediaTypeId' })
    mediaTypeId: number | null;

    @Column("integer", { name: 'GenreId' })
    genreId: number | null;

    @Column("nvarchar", {
        nullable: true,
        length: 220,
        name: "Composer"
    })
    composer: string | null;

    @Column("integer", {
        nullable: false,
        name: "Milliseconds"
    })
    milliseconds: number;

    @Column("integer", {
        nullable: true,
        name: "Bytes"
    })
    bytes: number | null;

    @Column("numeric", {
        nullable: false,
        precision: 10,
        scale: 2,
        name: "UnitPrice"
    })
    unitPrice: number;
}
