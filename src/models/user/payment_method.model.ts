// ================================================================>> Third Party Library
import { Model, Column, Table, HasMany, DataType, ForeignKey } from 'sequelize-typescript';

// ================================================================>> Costom Library
import User     from './user.model';

@Table({ tableName: 'payment_method', createdAt: 'created_at', updatedAt: 'updated_at' })
class PaymentMethod extends Model<PaymentMethod> {

    @Column({ allowNull: false, type: DataType.STRING(100) })
    name_card: string;

    @Column({ allowNull: false, type: DataType.STRING(100) })
    card_number: string;
    
    @Column({ allowNull: false, type: DataType.STRING(10) })
    expired_date: string;

    @Column({ allowNull: false, type: DataType.STRING(3) })
    cvv: string;

    @ForeignKey(() => User)
    @Column({ onDelete: 'CASCADE' })
    user_id: number;

}

export default PaymentMethod;