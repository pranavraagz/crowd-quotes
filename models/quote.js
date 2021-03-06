const { DataTypes } = require("sequelize");
const db = require("../database/connection");

const schema = {
  quoteId: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: "Users",
      key: "userId",
    },
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  approved: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  approveCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  reviewedBy: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
  },
  category: {
    type: DataTypes.TEXT,
    defaultValue: 'none'
  }
};

const options = {
  timestamps: true,
};

const Quote = db.define("Quote", schema, options);

module.exports = Quote;