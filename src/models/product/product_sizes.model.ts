// ================================================================>> Third Party Library
import { Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';

// ================================================================>> Costom Library
import ProductType from './products_type.model';

@Table({ tableName: 'product_sizes', createdAt: 'created_at', updatedAt: 'updated_at' })
class ProductSize extends Model<ProductSize> {

    @ForeignKey(() => ProductType)
    @Column({ onDelete: 'CASCAT' })
    type_id: number;
    
    @Column({ allowNull: false, type: DataType.STRING(100) })
    name: string;

}

export default ProductSize;