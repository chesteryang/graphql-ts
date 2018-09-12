import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("artists")
export class Artist {

    @PrimaryGeneratedColumn({
        name: "ArtistId"
    })
    ArtistId: number;

    @Column("nvarchar", {
        nullable: true,
        length: 120,
        name: "Name"
    })
    Name: string | null;
}
