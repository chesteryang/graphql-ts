import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("tracks")
export class Track {
    @PrimaryGeneratedColumn({
        name: "TrackId"
    })
    TrackId: number;

    @Column("nvarchar", {
        nullable: false,
        length: 200,
        name: "Name"
    })
    Name: string;

    @Column("integer", { name: 'AlbumId' })
    AlbumId: number | null;

    @Column("integer", { name: 'MediaTypeId' })
    MediaTypeId: number | null;

    @Column("integer", { name: 'GenreId' })
    GenreId: number | null;

    @Column("nvarchar", {
        nullable: true,
        length: 220,
        name: "Composer"
    })
    Composer: string | null;

    @Column("integer", {
        nullable: false,
        name: "Milliseconds"
    })
    Milliseconds: number;

    @Column("integer", {
        nullable: true,
        name: "Bytes"
    })
    Bytes: number | null;

    @Column("numeric", {
        nullable: false,
        precision: 10,
        scale: 2,
        name: "UnitPrice"
    })
    UnitPrice: number;
}
