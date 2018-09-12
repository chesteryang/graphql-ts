import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("playlists")
export class Playlist {
    @PrimaryGeneratedColumn({  
        name:"PlaylistId"
        })
    PlaylistId:number;

    @Column("nvarchar",{ 
        nullable:true,
        length:120,
        name:"Name"
        })
    Name:string | null;
}
