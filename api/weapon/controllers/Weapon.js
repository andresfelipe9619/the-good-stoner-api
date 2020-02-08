"use strict";

/**
 * Read the documentation () to implement custom controller functions
 */

module.exports = {
  insertTask: ctx => {
    return strapi.services.weapon.insertTask(ctx);
  }
};
