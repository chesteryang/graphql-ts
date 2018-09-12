import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("invoices")
export class Invoice {

    @PrimaryGeneratedColumn({
        name: "InvoiceId"
    })
    InvoiceId: number;

    @Column("integer", { name: 'CustomerId' })
    CustomerId: number | null;

    @Column("datetime", {
        nullable: false,
        name: "InvoiceDate"
    })
    InvoiceDate: Date;

    @Column("nvarchar", {
        nullable: true,
        length: 70,
        name: "BillingAddress"
    })
    BillingAddress: string | null;

    @Column("nvarchar", {
        nullable: true,
        length: 40,
        name: "BillingCity"
    })
    BillingCity: string | null;

    @Column("nvarchar", {
        nullable: true,
        length: 40,
        name: "BillingState"
    })
    BillingState: string | null;

    @Column("nvarchar", {
        nullable: true,
        length: 40,
        name: "BillingCountry"
    })
    BillingCountry: string | null;

    @Column("nvarchar", {
        nullable: true,
        length: 10,
        name: "BillingPostalCode"
    })
    BillingPostalCode: string | null;

    @Column("numeric", {
        nullable: false,
        precision: 10,
        scale: 2,
        name: "Total"
    })
    Total: number;
}
