'use strict';
//pull the JSON file
//get data,
//put data in array,
//.then

//constructor function for horned critters
let Critter = function(horned_creature){
  this.image_url = horned_creature.image_url;
  this.title = horned_creature.title;
  this.description = horned_creature.description;
  this.keyword = horned_creature.keyword;
  this.horns = horned_creature.horns;
}

Critter.all_critters = [];

Critter.load_data = () => {
  $.get('./data/page-1.json', 'json')
    .then(data => {
      data.forEach(element => {
        Critter.all_critters.push(new Critter(element));
      });
    })
}





