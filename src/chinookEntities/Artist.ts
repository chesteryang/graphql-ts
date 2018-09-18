import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("artists")
export class Artist {

    @PrimaryGeneratedColumn({
        name: "ArtistId"
    })
    artistId: number;

    @Column("nvarchar", {
        nullable: true,
        length: 120,
        name: "Name"
    })
    name: string | null;
}
