import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("sale_records")
export class SaleRecord {

    @PrimaryGeneratedColumn({
        name: "SaleRecordId"
    })
    saleRecordId: number;

    @Column("integer", {
        nullable: false,
        name: 'EmployeeId'
    })
    employeeId: number;

    @Column("integer", {
        nullable: false,
        name: 'InvoiceId'
    })
    invoiceId: number;
}
