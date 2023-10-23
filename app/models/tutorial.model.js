const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    title: {
      type: Sequelize.STRING
    },
    technologies: {
      type: Sequelize.ARRAY(DataTypes.STRING)
    },
    description: {
      type: Sequelize.STRING
    },
    uml: {
      type: Sequelize.ARRAY(DataTypes.STRING)
    },
    video_url: {
      type: Sequelize.STRING
    }
  });

  return Tutorial;
};
