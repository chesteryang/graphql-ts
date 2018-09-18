import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("employees")
export class Employee {

    @PrimaryGeneratedColumn({
        name: "EmployeeId"
    })
    employeeId: number;

    @Column("nvarchar", {
        nullable: false,
        length: 20,
        name: "LastName"
    })
    lastName: string;

    @Column("nvarchar", {
        nullable: false,
        length: 20,
        name: "FirstName"
    })
    firstName: string;

    @Column("nvarchar", {
        nullable: true,
        length: 30,
        name: "Title"
    })
    title: string | null;

    @Column("integer", {
        nullable: true,
        name: "ReportsTo"
    })
    reportsTo: number | null;

    @Column("datetime", {
        nullable: true,
        name: "BirthDate"
    })
    birthDate: Date | null;

    @Column("datetime", {
        nullable: true,
        name: "HireDate"
    })
    hireDate: Date | null;

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
    hhone: string | null;

    @Column("nvarchar", {
        nullable: true,
        length: 24,
        name: "Fax"
    })
    fax: string | null;

    @Column("nvarchar", {
        nullable: true,
        length: 60,
        name: "Email"
    })
    email: string | null;
}
