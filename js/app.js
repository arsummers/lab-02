'use strict';

//constructor function for horned critters
let Critter = function(horned_creature){
  this.image_url = horned_creature.image_url;
  this.title = horned_creature.title;
  this.description = horned_creature.description;
  this.keyword = horned_creature.keyword;
  this.horns = horned_creature.horns;
}

Critter.all_critters = [];
Critter.option = [];

//takes Critter data from JSON file
Critter.load_data = () => {
  $.get('./data/page-1.json', 'json')
    .then(data => {
      data.forEach(element => {
        Critter.all_critters.push(new Critter(element));
        Critter.option.push(element.keyword);
      });
    })
    .then(Critter.display_all)
    // .then(Critter.create_options)
}

//render function
Critter.display_all = () =>{
  Critter.all_critters.forEach(critter => critter.render());
  Critter.create_options();
}

//logs all critters from JSON file
Critter.prototype.render = function(){
  let $template = $('#photo-template').clone();
  $('main').append($template);
  $template.removeAttr('id');
  let $h2 = $template.find('h2')[0];
  let $img = $template.find('img')[0];
  let $p = $template.find('p')[0];
  $h2.text = this.title;
  $img.src = this.image_url;
  $img.alt = this.keyword;
  $p.text = this.description;
}

$('select[keyword=""').on('change', function () {
  let $selection = $(this).val();
  $('img').hide();
  $(`img[title="${$selection}"]`).show();
  $
})

// Critter.option = () => {
//   Critter.all_critters.forEach(critter => critter.create_options());
// }

Critter.create_options = function() {
  $('select').add('option');
  // let $keyword = $(this).keyword;
  let $option = $template.find('option');
  console.log($option);
  $option.text = this.keyword;
  console.log($keyword);
  console.log($option.text);
  Critter.all_critters.forEach(critter => critter.option);
}

//loads data when page is ready
$(()=>Critter.load_data());


