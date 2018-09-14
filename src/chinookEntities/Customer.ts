import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("customers")

export class Customer {

    @PrimaryGeneratedColumn({
        name: "CustomerId"
    })
    CustomerId: number;

    @Column("nvarchar", {
        nullable: false,
        length: 40,
        name: "FirstName"
    })
    FirstName: string;

    @Column("nvarchar", {
        nullable: false,
        length: 20,
        name: "LastName"
    })
    LastName: string;

    @Column("nvarchar", {
        nullable: true,
        length: 80,
        name: "Company"
    })
    Company: string | null;

    @Column("nvarchar", {
        nullable: true,
        length: 70,
        name: "Address"
    })
    Address: string | null;

    @Column("nvarchar", {
        nullable: true,
        length: 40,
        name: "City"
    })
    City: string | null;

    @Column("nvarchar", {
        nullable: true,
        length: 40,
        name: "State"
    })
    State: string | null;

    @Column("nvarchar", {
        nullable: true,
        length: 40,
        name: "Country"
    })
    Country: string | null;

    @Column("nvarchar", {
        nullable: true,
        length: 10,
        name: "PostalCode"
    })
    PostalCode: string | null;

    @Column("nvarchar", {
        nullable: true,
        length: 24,
        name: "Phone"
    })
    Phone: string | null;

    @Column("nvarchar", {
        nullable: true,
        length: 24,
        name: "Fax"
    })
    Fax: string | null;

    @Column("nvarchar", {
        nullable: false,
        length: 60,
        name: "Email"
    })
    Email: string;

    @Column("integer", {
        nullable: false,
        name: "SupportRepId"
    })
    SupportRepId: number;
}