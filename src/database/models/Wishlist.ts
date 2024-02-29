import { Model } from "sequelize";
import db from '.';
import sequelize from "sequelize";
import Book from "./Book";
import Category from "./Category";
import User from "./User";

class Wishlist extends Model {
    declare userId: number
    declare bookId: number
}


Wishlist.init({
    bookId: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'book',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    userId: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
}, {
    sequelize: db,
    tableName: 'wishlist',
    timestamps: false,
    underscored: true
});


Book.belongsToMany(User, {
    foreignKey: 'bookId',
    otherKey: 'userId',
    as: 'users',
    through: Wishlist
})

User.belongsToMany(Book, {
    foreignKey: 'userId',
    otherKey: 'bookId',
    as: 'books',
    through: Wishlist
})

export default Wishlist;