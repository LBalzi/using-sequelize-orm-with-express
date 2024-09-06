'use strict';
const Sequelize = require('sequelize');
const moment = require('moment');

module.exports = (sequelize) => {
  class Article extends Sequelize.Model {
    publishedAt() {
      const date = moment(this.createdAt).format('MMMM D, YYYY, h:mma');
      return date;
    }
  }
  
  Article.init({
    title: {
      type: Sequelize.STRING,
      allowNull: false, // Ensures that the title is required
    },
    author: {
      type: Sequelize.STRING,
      allowNull: false, // Ensures that the author is required
    },
    body: {
      type: Sequelize.TEXT, // TEXT type for larger content
      allowNull: false, // Ensures that the text is required
    }
  }, { 
    sequelize,
    modelName: 'Article',
    timestamps: true // Automatically adds `createdAt` and `updatedAt`
  });

  return Article;
};
