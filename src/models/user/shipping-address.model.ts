// ================================================================>> Third Party Library
import { Model, Column, Table, HasMany, DataType, ForeignKey } from 'sequelize-typescript';

// ================================================================>> Costom Library
import User     from './user.model';

@Table({ tableName: 'shipping_address', createdAt: 'created_at', updatedAt: 'updated_at' })
class ShippingAddress extends Model<ShippingAddress> {

    @Column({ allowNull: false, type: DataType.STRING(100) })
    full_name: string;

    @ForeignKey(() => User)
    @Column({ onDelete: 'CASCADE' })
    user_id: number;

    @Column({ allowNull: false, type: DataType.STRING(100) })
    address: string;

    @Column({ allowNull: false, type: DataType.STRING(100) })
    city: string;

    @Column({ allowNull: false, type: DataType.STRING(100) })
    postal_code: string;

    @Column({ allowNull: false, type: DataType.STRING(100) })
    phone: string;
    
}

export default ShippingAddress;