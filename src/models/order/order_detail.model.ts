// ================================================================>> Third Party Library
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';

// ================================================================>> Costom Library
import User from '../user/user.model';
import Checkout from './checkout.model';

@Table({ tableName: 'order_detail', createdAt: 'created_at', updatedAt: 'updated_at' })
class OrderDetail extends Model<OrderDetail> {

    @ForeignKey(() => Checkout)
    @Column({ allowNull: true, onDelete: 'CASCADE' })
    checkout_id: number;

    @ForeignKey(() => User)
    @Column({ onDelete: 'CASCADE' })
    user_id: number;

    @Column({ allowNull: false, type: DataType.STRING(100) })
    product_name: string;

    @Column({ allowNull: false, type: DataType.STRING(100) })
    product_image: string;

    @Column({ allowNull: false, type: DataType.STRING(100) })
    color_name: string;

    @Column({ allowNull: false, type: DataType.STRING(100) })
    color: string;

    @Column({ allowNull: false, type: DataType.STRING(100) })
    size: string;

    @Column({ allowNull: false, type: DataType.INTEGER, defaultValue: 1 })
    qty: number;

    @Column({ allowNull: false, type: DataType.DECIMAL(10, 2), defaultValue: 0 })
    discount: number;

    @Column({ allowNull: true, type: DataType.DOUBLE })
    price?: number;

    @BelongsTo(() => User)
    user: User;

    @BelongsTo(() => Checkout)
    checkout: Checkout;
}

export default OrderDetail;