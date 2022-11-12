const axios = require("axios");
const { response } = require("express");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('instancecontent_table').del()
  
  const arrayOfInstanceContentObjects = await axios.get (`https://xivapi.com/InstanceContent?private_key=${process.env.private_key}`, { mode: 'cors' })
    .then(response => response.data)
    .then(data => data["Results"]);
    
  for (let i = 0; i < arrayOfInstanceContentObjects.length; i++) {
    await knex('instancecontent_table').insert({
      id: arrayOfInstanceContentObjects[i]["ID"],
      name: arrayOfInstanceContentObjects[i]["Name"],
      url: arrayOfInstanceContentObjects[i]["Url"],
    });
  };
};
