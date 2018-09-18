import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("invoice_items")

export class InvoiceItem {

    @PrimaryGeneratedColumn({

        name: "InvoiceLineId"
    })
    invoiceLineId: number;

    @Column("integer", { name: 'InvoiceId' })
    invoiceId: number | null;

    @Column("integer", { name: 'TrackId' })
    trackId: number | null;

    @Column("numeric", {
        nullable: false,
        precision: 10,
        scale: 2,
        name: "UnitPrice"
    })
    unitPrice: number;

    @Column("integer", {
        nullable: false,
        name: "Quantity"
    })
    quantity: number;
}
