// ================================================================>> Third Party Library
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';

// ================================================================>> Costom Library
import ProductType from './products_type.model';
import ProductReview from './product_reviews.model';
import ProductColor from './product_colors.model';
import ProductSize from './product_sizes.model';

@Table({ tableName: 'product', createdAt: 'created_at', updatedAt: 'updated_at' })
class Product extends Model<Product> {

    @ForeignKey(() => ProductType)
    @Column({ onDelete: 'RESTRICT' })
    type_id: number;

    @Column({ allowNull: false, type: DataType.STRING(100) })
    name: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    image: string;

    @Column({ allowNull: true, type: DataType.STRING(100) })
    image2: string;

    @Column({ allowNull: true, type: DataType.STRING(100) })
    image3: string;

    @Column({ allowNull: true, type: DataType.STRING(100) })
    image4: string;

    @Column({ allowNull: false, type: DataType.DOUBLE })
    price: number;

    @Column({ allowNull: false, type: DataType.DECIMAL(10, 2), defaultValue: 0 })
    discount: number;

    @Column({ allowNull: true, type: DataType.STRING(500) })
    description: string;

    @BelongsTo(() => ProductType)
    type: ProductType;

    @HasMany(() => ProductReview)
    product_reviews: ProductReview [];
}

export default Product;