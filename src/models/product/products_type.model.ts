// ================================================================>> Third Party Library
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';

// ================================================================>> Costom Library
import Product from './product.model';

@Table({ tableName: 'products_type', createdAt: 'created_at', updatedAt: 'updated_at' })
class ProductType extends Model<ProductType> {
    
    @Column({ allowNull: false, type: DataType.STRING(100) })
    name: string;
    
    @HasMany(() => Product)
    products: Product [];
}

export default ProductType;