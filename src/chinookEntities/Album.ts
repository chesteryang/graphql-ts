import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("albums")
export class Album {

    @PrimaryGeneratedColumn({ 
        name: "AlbumId" 
    })
    AlbumId: number;

    @Column("nvarchar", {
        nullable: false,
        length: 160,
        name: "Title"
    })
    Title: string;

    @Column("integer", {
        nullable: false,
        name: "ArtistId"
    })
    ArtistId: number;
}
