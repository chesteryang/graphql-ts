import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("employees")
export class Employee {

    @PrimaryGeneratedColumn({
        name: "EmployeeId"
    })
    EmployeeId: number;

    @Column("nvarchar", {
        nullable: false,
        length: 20,
        name: "LastName"
    })
    LastName: string;

    @Column("nvarchar", {
        nullable: false,
        length: 20,
        name: "FirstName"
    })
    FirstName: string;

    @Column("nvarchar", {
        nullable: true,
        length: 30,
        name: "Title"
    })
    Title: string | null;

    @Column("integer", {
        nullable: true,
        name: "ReportsTo"
    })
    ReportsTo: number | null;

    @Column("datetime", {
        nullable: true,
        name: "BirthDate"
    })
    BirthDate: Date | null;

    @Column("datetime", {
        nullable: true,
        name: "HireDate"
    })
    HireDate: Date | null;

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
        nullable: true,
        length: 60,
        name: "Email"
    })
    Email: string | null;
}
