import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("invoice_items")

export class InvoiceItem {

    @PrimaryGeneratedColumn({

        name: "InvoiceLineId"
    })
    InvoiceLineId: number;

    @Column("integer", { name: 'InvoiceId' })
    InvoiceId: number | null;

    @Column("integer", { name: 'TrackId' })
    TrackId: number | null;

    @Column("numeric", {
        nullable: false,
        precision: 10,
        scale: 2,
        name: "UnitPrice"
    })
    UnitPrice: number;

    @Column("integer", {
        nullable: false,
        name: "Quantity"
    })
    Quantity: number;
}
