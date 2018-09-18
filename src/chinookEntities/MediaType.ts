import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("media_types")
export class MediaType {
    @PrimaryGeneratedColumn({
        name: "MediaTypeId"
    })
    mediaTypeId: number;

    @Column("nvarchar", {
        nullable: true,
        length: 120,
        name: "Name"
    })
    name: string | null;
}
