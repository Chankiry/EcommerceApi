// ================================================================>> Third Party Library
import { AfterCreate, BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';

// ================================================================>> Custom Library
import User from '../user/user.model';
import ProductOrder from './order_detail.model';

@Table({ tableName: 'checkout', createdAt: 'created_at', updatedAt: 'updated_at' })
class Checkout extends Model<Checkout> {

    @Column({
        allowNull: true,
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

    // Hook to set receipt_number after creation
    @AfterCreate
    static setReceiptNumber(instance: Checkout) {
        const formattedId = instance.id.toString().padStart(6, '0');
        instance.update({ receipt_number: formattedId });
    }
}

export default Checkout;
