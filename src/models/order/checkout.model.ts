// ================================================================>> Third Party Library
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';

// ================================================================>> Custom Library
import User from '../user/user.model';
import ProductOrder from './order_detail.model';

@Table({ tableName: 'checkout', createdAt: 'created_at', updatedAt: 'updated_at' })
class Checkout extends Model<Checkout> {

    @Column({
        allowNull: false,
        unique: true,
        type: DataType.INTEGER
    })
    receipt_number: string;

    @ForeignKey(() => User)
    @Column({ onDelete: 'CASCADE' })
    user_id: number;

    @Column({ allowNull: true, type: DataType.DOUBLE })
    total_price?: number;

    @Column({ allowNull: true, type: DataType.DATE, defaultValue: new Date() })
    ordered_at?: Date;

    @Column({ allowNull: false, type: DataType.STRING(100) })
    shipping_full_name: string;

    @Column({ allowNull: false, type: DataType.STRING(100) })
    shipping_address: string;

    @Column({ allowNull: false, type: DataType.STRING(100) })
    shipping_city: string;

    @Column({ allowNull: false, type: DataType.STRING(100) })
    shipping_postal_code: string;

    @Column({ allowNull: false, type: DataType.STRING(100) })
    shipping_phone: string;

    @BelongsTo(() => User)
    user: User;
    
    @HasMany(() => ProductOrder)
    products: ProductOrder[];

    // Getter to format receipt_number as six digits
    get formatted_receipt_number(): string {
        this.receipt_number = this.id.toString();
        return this.receipt_number.toString().padStart(6, '0');
    }
}

export default Checkout;
