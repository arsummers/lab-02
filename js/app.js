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

//takes Critter data from JSON file
Critter.load_data = () => {
  $.get('./data/page-1.json', 'json')
    .then(data => {
      data.forEach(element => {
        Critter.all_critters.push(new Critter(element));
      });
    })
    .then(Critter.display_all)
}

//render function
Critter.display_all = () =>{
  Critter.all_critters.forEach(critter => critter.render());
}

//logs all critters from JSON file
Critter.prototype.render = function(){
  //console.log(this);
  let $template = $('#photo-template').clone();
  $template.id = '';
  let $h2 = $template.find('h2');
  let $img = $template.find('img');
  let $p = $template.find('p');
  //console.log($template);
  $('main').append($template);
}























//loads data when page is ready
$(()=>Critter.load_data());


