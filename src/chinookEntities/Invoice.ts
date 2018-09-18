import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("invoices")
export class Invoice {

    @PrimaryGeneratedColumn({
        name: "InvoiceId"
    })
    invoiceId: number;

    @Column("integer", { name: 'CustomerId' })
    customerId: number | null;

    @Column("datetime", {
        nullable: false,
        name: "InvoiceDate"
    })
    invoiceDate: Date;

    @Column("nvarchar", {
        nullable: true,
        length: 70,
        name: "BillingAddress"
    })
    billingAddress: string | null;

    @Column("nvarchar", {
        nullable: true,
        length: 40,
        name: "BillingCity"
    })
    billingCity: string | null;

    @Column("nvarchar", {
        nullable: true,
        length: 40,
        name: "BillingState"
    })
    billingState: string | null;

    @Column("nvarchar", {
        nullable: true,
        length: 40,
        name: "BillingCountry"
    })
    billingCountry: string | null;

    @Column("nvarchar", {
        nullable: true,
        length: 10,
        name: "BillingPostalCode"
    })
    billingPostalCode: string | null;

    @Column("numeric", {
        nullable: false,
        precision: 10,
        scale: 2,
        name: "Total"
    })
    total: number;
}
