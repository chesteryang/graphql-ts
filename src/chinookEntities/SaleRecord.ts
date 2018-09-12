import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("sale_records")
export class SaleRecord {

    @PrimaryGeneratedColumn({
        name: "SaleRecordId"
    })
    SaleRecordId: number;

    @Column("integer", {
        nullable: false,
        name: 'EmployeeId'
    })
    EmployeeId: number;

    @Column("integer", {
        nullable: false,
        name: 'InvoiceId'
    })
    InvoiceId: number;
}
