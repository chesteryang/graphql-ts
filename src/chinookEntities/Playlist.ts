import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("playlists")
export class Playlist {
    @PrimaryGeneratedColumn({  
        name:"PlaylistId"
        })
    playlistId:number;

    @Column("nvarchar",{ 
        nullable:true,
        length:120,
        name:"Name"
        })
    name:string | null;
}
