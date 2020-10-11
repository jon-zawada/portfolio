/* eslint-disable no-unused-expressions */
const techUsed = (arr) => {
  let final = '';
  arr.forEach((tech, index) => {
    index < arr.length - 1 ? final += `${tech}, ` : final += tech;
  });
  return final;
};

module.exports = { techUsed };
