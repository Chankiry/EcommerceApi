// ================================================================>> Third Party Library
import { Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';

// ================================================================>> Costom Library
import ProductType from './products_type.model';

@Table({ tableName: 'product_colors', createdAt: 'created_at', updatedAt: 'updated_at' })
class ProductColor extends Model<ProductColor> {

    @ForeignKey(() => ProductType)
    @Column({ onDelete: 'CASCAT' })
    type_id: number;
    
    @Column({ allowNull: false, type: DataType.STRING(100) })
    name: string;

    @Column({ allowNull: false, type: DataType.STRING(100) })
    color: string;

}

export default ProductColor;