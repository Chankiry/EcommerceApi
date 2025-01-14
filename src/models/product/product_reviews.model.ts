// ================================================================>> Third Party Library
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';

// ================================================================>> Costom Library
import Product from './product.model';
import User from '../user/user.model';

@Table({ tableName: 'product_reviews', createdAt: 'created_at', updatedAt: 'updated_at' })
class ProductReview extends Model<ProductReview> {
    
    @Column({ allowNull: false, type: DataType.STRING(100) })
    commet: string;

    @Column({
        allowNull: false,
        type: DataType.INTEGER(),
        validate: {
            min: 1,
            max: 5,
        },
    })
    rating: number;
    
    @ForeignKey(() => Product)
    @Column({ onDelete: 'RESTRICT' })
    product_id: number;

    @ForeignKey(() => User)
    @Column({ onDelete: 'RESTRICT' })
    user_id: number;

    @BelongsTo(() => Product)
    product: Product;

    @BelongsTo(() => User)
    user: User;
}

export default ProductReview;