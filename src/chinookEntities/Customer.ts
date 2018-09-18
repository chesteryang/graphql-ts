import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("customers")

export class Customer {

    @PrimaryGeneratedColumn({
        name: "CustomerId"
    })
    customerId: number;

    @Column("nvarchar", {
        nullable: false,
        length: 40,
        name: "FirstName"
    })
    firstName: string;

    @Column("nvarchar", {
        nullable: false,
        length: 20,
        name: "LastName"
    })
    lastName: string;

    @Column("nvarchar", {
        nullable: true,
        length: 80,
        name: "Company"
    })
    company: string | null;

    @Column("nvarchar", {
        nullable: true,
        length: 70,
        name: "Address"
    })
    address: string | null;

    @Column("nvarchar", {
        nullable: true,
        length: 40,
        name: "City"
    })
    city: string | null;

    @Column("nvarchar", {
        nullable: true,
        length: 40,
        name: "State"
    })
    state: string | null;

    @Column("nvarchar", {
        nullable: true,
        length: 40,
        name: "Country"
    })
    country: string | null;

    @Column("nvarchar", {
        nullable: true,
        length: 10,
        name: "PostalCode"
    })
    postalCode: string | null;

    @Column("nvarchar", {
        nullable: true,
        length: 24,
        name: "Phone"
    })
    phone: string | null;

    @Column("nvarchar", {
        nullable: true,
        length: 24,
        name: "Fax"
    })
    fax: string | null;

    @Column("nvarchar", {
        nullable: false,
        length: 60,
        name: "Email"
    })
    email: string;

    @Column("integer", {
        nullable: false,
        name: "SupportRepId"
    })
    supportRepId: number;
}
