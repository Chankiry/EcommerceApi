// ================================================================>> Third Party Library
import * as bcrypt from 'bcryptjs';

// ================================================================>> Costom Library
import { UsersActiveEnum }  from "../../app/enums/user/active.enum";
import { UsersRoleEnum }    from "../../app/enums/user/type.enum";
import UsersRole            from "../../models/user/role.model";
import User                 from "../../models/user/user.model";
import ShippingAddress from '../../models/user/shipping-address.model';
import PaymentMethod from '../../models/user/payment_method.model';


export class UserSeeder {

    seed = async () => {

        try {
            await UsersRole.bulkCreate(userSeeder.types);
            console.log('\x1b[32m\nSeed users_type inserted successfully.');
        } catch (error) {
            console.error('Error seeding orders:', error);
        }
        // Hash passwords before creating users
        for (const userData of userSeeder.users) {
            userData.password = await bcrypt.hash(userData.password, 10);
        }
        try {
            await User.bulkCreate(userSeeder.users);
            console.log('\x1b[32mSeed user inserted successfully.');
        } catch (error) {
            console.error('Error seeding orders:', error);
        }
        try {
            await ShippingAddress.bulkCreate(userSeeder.shippings);
            console.log('\x1b[32mSeed shipping inserted successfully.');
        } catch (error) {
            console.error('Error seeding orders:', error);
        }
        try {
            await PaymentMethod.bulkCreate(userSeeder.payments);
            console.log('\x1b[32mSeed payments inserted successfully.');
        } catch (error) {
            console.error('Error seeding orders:', error);
        }
    }
}

// Mock-data
const userSeeder = {
    types: [
        { name: 'Admin' },
        { name: 'User' }
    ],
    users: [
        {
            role_id     : UsersRoleEnum.Admin,
            name        : 'Kiry',
            avatar      : 'static/ecommerce/user/avatar.png',
            email       : 'yimklok.kh@gmail.com',
            phone       : '0977779688',
            password    : '123456',
            is_active   : UsersActiveEnum.Active
        },
        {
            role_id     : UsersRoleEnum.User,
            name        : 'Heng MeyMey',
            avatar      : 'static/ecommerce/user/avatar.png',
            email       : 'hengmeymey@gmail.com',
            phone       : '0979688777',
            password    : '123456',
            is_active   : UsersActiveEnum.Active
        }
    ],
    shippings: [
        {
            full_name: 'kiry',
            user_id  : 1,
            address  : 'jjjjjjj',
            city     : 'Phnom Penh',
            postal_code: '111111',
            phone    : '01234567'
        },
        {
            full_name: 'kiry',
            user_id  : 1,
            address  : 'jjjjjjj',
            city     : 'Phnom Penh',
            postal_code: '111111',
            phone    : '01234567'
        },
        {
            full_name: 'kiry',
            user_id  : 2,
            address  : 'jjjjjjj',
            city     : 'Phnom Penh',
            postal_code: '111111',
            phone    : '01234567'
        },
        {
            full_name: 'kiry',
            user_id  : 2,
            address  : 'jjjjjjj',
            city     : 'Phnom Penh',
            postal_code: '111111',
            phone    : '01234567'
        },
        {
            full_name: 'kiry',
            user_id  : 2,
            address  : 'jjjjjjj',
            city     : 'Phnom Penh',
            postal_code: '111111',
            phone    : '01234567'
        },
    ],
    payments: [
        {
            name_card: "Visa",
            card_number: "4111111111111111",
            expired_date: "12/25",
            cvv: "123",
            user_id: 1,
          },
          {
            name_card: "MasterCard",
            card_number: "5555555555554444",
            expired_date: "06/26",
            cvv: "456",
            user_id: 2,
          },
          {
            name_card: "American Express",
            card_number: "378282246310005",
            expired_date: "09/24",
            cvv: "789",
            user_id: 1,
          },
          {
            name_card: "Discover",
            card_number: "6011111111111117",
            expired_date: "03/27",
            cvv: "321",
            user_id: 2,
          },
          {
            name_card: "Visa",
            card_number: "4222222222222222",
            expired_date: "11/25",
            cvv: "654",
            user_id: 1,
          },
          {
            name_card: "MasterCard",
            card_number: "5105105105105100",
            expired_date: "08/26",
            cvv: "987",
            user_id: 2,
          },
          {
            name_card: "American Express",
            card_number: "371449635398431",
            expired_date: "05/24",
            cvv: "234",
            user_id: 1,
          },
          {
            name_card: "Discover",
            card_number: "6011000990139424",
            expired_date: "02/27",
            cvv: "567",
            user_id: 2,
          },
          {
            name_card: "Visa",
            card_number: "4012888888881881",
            expired_date: "10/25",
            cvv: "890",
            user_id: 1,
          },
          {
            name_card: "MasterCard",
            card_number: "5200828282828210",
            expired_date: "07/26",
            cvv: "432",
            user_id: 2,
          },
    ]
}