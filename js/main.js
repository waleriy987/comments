
function elCreate(){

	var nun = document.getElementById('numd').value;

	var list = document.getElementById('list');

	var newpar = document.createElement('li');

	var gretta = document.getElementById('gretta').value;

	newpar.classList.add('item_container');

	list.appendChild(newpar);

	var strong = document.createElement('strong');

	newpar.appendChild(strong).innerHTML = gretta;

	var block = document.createElement('section');

	newpar.appendChild(block);

	block.classList.add('item_block');

	var content_box = document.createElement('div');

	block.appendChild(content_box);

	content_box.classList.add('treang');

	var text = document.createElement('p');

	block.appendChild(text).innerHTML = nun;

	var $form = document.getElementById('add-message');

	$form.reset();

	var MONTHS = [
	  'января',
	  'февраля',
	  'марта',
	  'апреля',
	  'мая',
	  'июня',
	  'июля',
	  'августа',
	  'сентября',
	  'октября',
	  'ноября',
	  'декабря'
	];

	var getDate = function() {
	  var date = new Date();
	  return date.getDate() + ' ' + MONTHS[date.getMonth()] + ' ' + date.getFullYear();
	};

	var $data = document.createElement('span');
	    $data.innerHTML = getDate();
	    strong.appendChild($data);

}