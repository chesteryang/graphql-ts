import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("genres")
export class Genre {

    @PrimaryGeneratedColumn({

        name: "GenreId"
    })
    genreId: number;

    @Column("nvarchar", {
        nullable: true,
        length: 120,
        name: "Name"
    })
    name: string | null;
}
