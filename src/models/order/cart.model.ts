// ================================================================>> Third Party Library
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';

// ================================================================>> Costom Library
import User from '../user/user.model';
import Product from '../product/product.model';
import ProductColor from '../product/product_colors.model';
import ProductSize from '../product/product_sizes.model';
import Checkout from './checkout.model';

@Table({ tableName: 'cart', createdAt: 'created_at', updatedAt: 'updated_at' })
class Cart extends Model<Cart> {

    @ForeignKey(() => User)
    @Column({ onDelete: 'CASCADE' })
    user_id: number;
    
    @ForeignKey(() => Product)
    @Column({ onDelete: 'SET NULL' })
    product_id: number;

    @ForeignKey(() => ProductColor)
    @Column({ allowNull: true, onDelete: 'CASCADE' })
    color_id: number;

    @ForeignKey(() => ProductSize)
    @Column({ allowNull: true, onDelete: 'CASCADE' })
    size_id: number;

    @Column({ allowNull: false, type: DataType.INTEGER, defaultValue: 1 })
    qty: number;

    @BelongsTo(() => User)
    user: User;

    @BelongsTo(() => Product)
    product: Product;

    @BelongsTo(() => ProductColor)
    color: ProductColor;

    @BelongsTo(() => ProductSize)
    size: ProductSize;

}

export default Cart;