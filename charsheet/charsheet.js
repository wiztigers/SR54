
var PC = {
	karma: {
		good: 0,
		total: 0,
	},
	metatype: 'norm',
	profile: {
		delta: {
			'height': 0,
			'weight': 0,
		},
	},
	'attribute': {
		'agility':      1,
		'reaction':     1,
		'intelligence': 1,
		'charisma':     1,
		'essence':   6,
		'edge':      1,
	},
	'skill': { },
	'quality': [ ],
};



var METATYPE = {
	'norm': {
		label: "Humain",
		average: {
			'height': 175,
			'weight':  78,
		},
		cost: 0,
	},
	'dwarf': {
		label: "Nain",
		average: {
			'height': 120,
			'weight':  54,
		},
		cost: 0,
	},
	'elf': {
		label: "Elfe",
		average: {
			'height': 190,
			'weight':  80,
		},
		cost: 0,
	},
	'ork': {
		label: "Ork",
		average: {
			'height': 190,
			'weight': 128,
		},
		cost: 0,
	},
	'troll': {
		label: "Troll",
		average: {
			'height': 250,
			'weight': 300,
		},
		cost: 0,
	},
}

var KARMA_COST = {
	'attribute': { multiplier: 5, cost_starts_at: 2 },
	'skill': { multiplier: 2 },
	'spell': { cost: 5 },
};

var SKILLS = [

	{
		id: 'impersonation',
		label: "Imposture",
		innate: true,
		group: 'influence',
	},
	{
		id: 'intimidation',
		label: "Intimidation",
		innate: true,
		group: 'influence',
	},
	{
		id: 'con',
		label: "Manipulation",
		innate: true,
		group: 'influence',
	},

	{
		id: 'pistols',
		label: "Armes de poing",
		innate: true,
		group: 'firearms',
	},
	{
		id: 'rifles',
		label: "Armes d'épaule",
		innate: true,
		group: 'firearms',
	},
	{
		id: 'heavy_weapons',
		label: "Armes lourdes",
		innate: true,
		group: 'firearms',
	},

	{
		id: 'melee_weapons',
		label: "Armes de mêlée",
		innate: true,
		group: 'close_combat',
	},
	{
		id: 'unarmed',
		label: "Combat à mains nues",
		innate: true,
		group: 'close_combat',
	},
	{
		id: 'dodge',
		label: "Esquive",
		innate: true,
		group: 'close_combat',
	},

	{
		id: 'sneaking',
		label: "Discrétion",
		innate: true,
		group: 'stealth',
	},
	{
		id: 'perception',
		label: "Perception",
		innate: true,
		group: 'stealth',
	},
	{
		id: 'lockpicking',
		label: "Éffraction",
		innate: false,
		group: 'stealth',
	},

	{
		id: 'gymnastics',
		label: "Athlétisme",
		innate: true,
		group: 'outdoors',
	},
	{
		id: 'throwing_weapons',
		label: "Armes de jet",
		innate: true,
		group: 'outdoors',
	},
	{
		id: 'survival',
		label: "Survie",
		innate: true,
		group: 'outdoors',
	},

	{
		id: 'pilot_aircraft',
		label: "Pilotage aérien",
		innate: false,
		group: 'pilot',
	},
	{
		id: 'pilot_ground_craft',
		label: "Pilotage terrestre",
		innate: false,
		group: 'pilot',
	},
	{
		id: 'pilot_watercraft',
		label: "Pilotage nautique",
		innate: false,
		group: 'pilot',
	},

	{
		id: 'armorer',
		label: "Armurerie",
		innate: false,
		group: 'engineering',
	},
	{
		id: 'artisan',
		label: "Artisanat",
		innate: true,
		group: 'engineering',
	},
	{
		id: 'mechanic',
		label: "Mécanique",
		innate: false,
		group: 'engineering',
	},

	{
		id: 'biotech',
		label: "Biotech",
		innate: false,
		group: 'medecine',
	},
	{
		id: 'cybertech',
		label: "Cybertech",
		innate: false,
		group: 'medecine',
	},
	{
		id: 'first_aid',
		label: "Premiers soins",
		innate: true,
		group: 'medecine',
	},

	{
		id: 'computer',
		label: "Analyse",
		innate: false,
		group: 'cracking',
	},
	{
		id: 'cybercombat',
		label: "Cybercombat",
		innate: false,
		group: 'cracking',
	},
	{
		id: 'electronic_warfare',
		label: "Guerre électronique",
		innate: false,
		group: 'cracking',
	},
	{
		id: 'software',
		label: "Programmation",
		innate: false,
		group: 'cracking',
	},

	{
		id: 'compiling',
		label: "Compilation",
		innate: false,
		group: 'tasking',
		unlocked: function() { return icanhaz('attribute', 'resonance'); },
	},
	{
		id: 'decompiling',
		label: "Décompilation",
		innate: false,
		group: 'tasking',
		unlocked: function() { return icanhaz('attribute', 'resonance'); },
	},
	{
		id: 'registering',
		label: "Enregistrement",
		innate: false,
		group: 'tasking',
		unlocked: function() { return icanhaz('attribute', 'resonance'); },
	},

	{
		id: 'arcana',
		label: "Arcanes",
		innate: false,
		group: 'astral_craft',
		unlocked: function() { return true; },
	},
	{
		id: 'assensing',
		label: "Lecture d'aura",
		innate: false,
		group: 'astral_craft',
		unlocked: function() { return icanhaz('quality', 'vision_astral'); },
	},
	{
		id: 'astral_combat',
		label: "Combat astral",
		innate: false,
		group: 'astral_craft',
		unlocked: function() { return icanhaz('quality', 'vision_astral'); },
	},

	{
		id: 'counterspelling',
		label: "Contresort",
		innate: false,
		group: 'sorcery',
		unlocked: function() { return icanhaz('quality', 'sorcerer'); },
	},
	{
		id: 'spellcasting',
		label: "Incantation",
		innate: false,
		group: 'sorcery',
		unlocked: function() { return icanhaz('quality', 'sorcerer'); },
	},
	{
		id: 'rituals',
		label: "Sorcellerie rituelle",
		innate: false,
		group: 'sorcery',
		unlocked: function() { return icanhaz('quality', 'sorcerer'); },
	},

	{
		id: 'banishing',
		label: "Banissement",
		innate: false,
		group: 'conjuring',
		unlocked: function() { return icanhaz('quality', 'conjurer'); },
	},
	{
		id: 'summoning',
		label: "Invocation",
		innate: false,
		group: 'conjuring',
		unlocked: function() { return icanhaz('quality', 'conjurer'); },
	},
	{
		id: 'binding',
		label: "Lien",
		innate: false,
		group: 'conjuring',
		unlocked: function() { return icanhaz('quality', 'conjurer'); },
	},

	{
		id: 'alchemy',
		label: "Alchimie",
		innate: false,
		group: 'enchanting',
		unlocked: function() { return icanhaz('quality', 'enchanter'); },
	},
	{
		id: 'artificing',
		label: "Artefacts",
		innate: false,
		group: 'enchanting',
		unlocked: function() { return icanhaz('quality', 'enchanter'); },
	},
	{
		id: 'disenchanting',
		label: "Disjonction",
		innate: false,
		group: 'enchanting',
		unlocked: function() { return icanhaz('quality', 'enchanter'); },
	},

];

var SKILL_GROUPS = [

	{
		id: 'influence',
		label: "Influence",
		skills: [ 'impersonation', 'intimidation', 'con', ],
	},

	{
		id: 'firearms',
		label: "Armes à feu",
		skills: [ 'pistols', 'rifles', 'heavy_weapons', ],
	},

	{
		id: 'close_combat',
		label: "Corps à corps",
		skills: [ 'melee_weapons', 'unarmed', 'dodge', ],
	},

	{
		id: 'stealth',
		label: "Furtivité",
		skills: [ 'sneaking', 'perception', 'lockpicking', ],
	},

	{
		id: 'outdoors',
		label: "Plein air",
		skills: [ 'gymnastics', 'throwing_weapons', 'survival', ],
	},

	{
		id: 'pilot',
		label: "Pilotage",
		skills: [ 'pilot_aircraft', 'pilot_ground_craft', 'pilot_watercraft', ],
	},

	{
		id: 'engineering',
		label: "Ingénierie",
		skills: [ 'armorer', 'artisan', 'mechanic', ],
	},

	{
		id: 'medecine',
		label: "Médecine",
		skills: [ 'biotech', 'cybertech', 'first_aid', ],
	},

	{
		id: 'cracking',
		label: "Informatique",
		skills: [ 'computer', 'cybercombat', 'electronic_warfare', 'software', ],
	},

	{
		id: 'tasking',
		label: "Technomancie",
		skills: [ 'compiling', 'decompiling', 'registering', ],
	},

	{
		id: 'astral_craft',
		label: "Astral",
		skills: [ 'arcana', 'assensing', 'astral_combat', ],
	},

	{
		id: 'sorcery',
		label: "Sorcellerie",
		skills: [ 'counterspelling', 'spellcasting', 'rituals', ],
	},

	{
		id: 'conjuring',
		label: "Conjuration",
		skills: [ 'banishing', 'summoning', 'binding', ],
	},

	{
		id: 'enchanting',
		label: "Enchantement",
		skills: [ 'alchemy', 'artificing', 'disenchanting', ],
	},

];

var QUALITIES = [
	{
		id: 'exceptional_attribute',
		label: "Attribut exceptionnel",
		karma:-20,
	},
	{
		id: 'impaired_attribute',
		label: "Attribut affaibli",
		karma: 20,
	},
	{
		id: 'special_attribute',
		label: "Attribut spécial",
		karma:-5,
	},
	{
		id: 'toughness',
		label: "Dur-à-cuire",
		karma:-20,
	},
	{
		id: 'pathogens_toxins_resistance',
		label: "Immunorésistant",
		karma:-10,
	},
	{
		id: 'pathogens_toxins_weakness',
		label: "Immunodéficient",
		karma: 10,
	},
	{
		id: 'slow',
		label: "Lent",
		karma: 5,
	},
	{
		id: 'big_spender',
		label: "Dépensier",
		karma: 10,
	},
	{
		id: 'ambidextry',
		label: "Ambidextre",
		karma:-5,
	},
	{
		id: 'point_blank',
		label: "Bout portant",
		karma:-5,
	},
	{
		id: 'cyberware_inconspicuous_1',
		label: "'Ware discret Ⅰ",
		karma:-10,
	},
	{
		id: 'cyberware_inconspicuous_2',
		label: "'Ware discret Ⅱ",
		karma:-15,
	},
	{
		id: 'cyberware_inconspicuous_3',
		label: "'Ware discret Ⅲ",
		karma:-20,
	},
	{
		id: 'cyberware_illegal_1',
		label: "'Ware illégal Ⅰ",
		karma: 10,
	},
	{
		id: 'cyberware_illegal_2',
		label: "'Ware illégal Ⅱ",
		karma: 15,
	},
	{
		id: 'cyberware_illegal_3',
		label: "'Ware illégal Ⅲ",
		karma: 20,
	},
	{
		id: 'vision_low-light',
		label: "Vision nocturne",
		karma: -5,
	},
	{
		id: 'vision_thermographic',
		label: "Vision thermographique",
		karma: -5,
	},
	{
		id: 'vision_astral',
		label: "Vision astrale",
		karma:-5,
	},
	{
		id: 'astral_projection',
		label: "Projection astrale",
		karma:-10,
	},
	{
		id: 'adept',
		label: "Adepte",
		karma:-10,
	},
	{
		id: 'enchanter',
		label: "Enchanteur",
		karma:-10,
	},
	{
		id: 'conjurer',
		label: "Invocateur",
		karma:-10,
	},
	{
		id: 'sorcerer',
		label: "Sorcier",
		karma:-10,
		learn: function() {
				var e = document.getElementById('skills');
				initializeSkill(e, find(SKILLS, 'counterspelling'));
				initializeSkill(e, find(SKILLS, 'spellcasting'));
				initializeSkill(e, find(SKILLS, 'rituals'));
			},
		forget: function() {
				var e = document.getElementById('skills');
				initializeSkill(e, find(SKILLS, 'counterspelling'));
				initializeSkill(e, find(SKILLS, 'spellcasting'));
				initializeSkill(e, find(SKILLS, 'rituals'));
			},
	},
];

 // EVENT MANAGERS
////////////////////

function onChangeText(selector) {
	var id = selector.id.replace(/^\./, '').split('.'); // strip leading dot, then split by dots
	var p = PC;
	for(var i=0; i<id.length-1;i++) p = p[id[i]];
	p[id[id.length-1]] = selector.value;
	console.log('text changed: PC.'+selector.id+'="'+selector.value+'"');
}

function onMetatype(selector) {
	var new_metatype = selector.value;
	if(!new_metatype) throw 'Unkown metatype "'+new_metatype+'"';
	if(new_metatype == PC.metatype) return; // DO nothing
	updateKarma(-METATYPE[PC.metatype].cost); // regain karma spent for old metatype
	PC.metatype = new_metatype;
	updateKarma( METATYPE[PC.metatype].cost); // spend karma for new metatype
	updateDelta('height');
	updateDelta('weight');
	console.log('New metatype: "'+PC.metatype+'"('+METATYPE[PC.metatype].cost+')');
}

function onGender(selector) {
	var new_gender = selector.value;
	if(!new_gender) throw 'Unkown gender "'+new_gender+'"';
	if(new_gender == PC.gender) return; // DO nothing
	PC.profile.gender = new_gender;
	console.log('New gender: "'+PC.profile.gender+'"');
}

function onDelta(selector) {
	var id = selector.id;
	var delta = selector.valueAsNumber - METATYPE[PC.metatype].average[id];
	PC.profile.delta[id] = delta;
	console.log('New '+id+' delta: "'+PC.profile.delta[id]+'"');
}

function onRating(selector, type) {
	const id = selector.id;
	if(!id) throw 'Unkown attribute "'+id+'"';
	const old_rating = PC[type][id] || 0;
	const new_rating = selector.value;
	if(new_rating == old_rating) return; // DO nothing
	let karma = 0;
	if (type == 'attribute') {
		karma = onAttributeRating(id, new_rating, old_rating);
	} else { // type == 'skill'
		karma = onSkillRating(id, new_rating, old_rating);
	}
	updateKarma(karma);
	console.log(type+' "'+id+'": '+old_rating+' > '+new_rating+' ('+karma+')');
}

function onAttributeRating(id, new_rating, old_rating) {
	const delta = new_rating - old_rating;
	const multiplier = Math.sign(delta) * getAttributeMultiplier();
	PC.attribute[id] = new_rating;
	let karma = 0;
	if (delta > 0) { // attribute is increased
		karma = getRatings(new_rating, parseInt(old_rating,10)+1) * multiplier;
	} else
	if (delta < 0) { // attribute is decreased
		karma = getRatings(old_rating, parseInt(new_rating,10)+1) * multiplier;
	}
	return karma;
}

function onSkillRating(id, new_rating, old_rating) {
	const delta = new_rating - old_rating;
	if (Math.abs(delta) > 1) {
		console.log('Skill "'+id+'" '+old_rating+' > '+new_rating+', karma will be off. Aborting.');
		return;
	}
	PC.skill[id] = new_rating;
	group = findSameGroupSkills(find(SKILLS,id).group, id, delta);
	group.sort(compareSameGroupSkills).reverse();
	const index = group.findIndex(skill => skill.id == id);
	const multiplier = getSkillMultiplier(index);
	let karma = 0;
	if (delta ==  1) { // skill is increased
		karma = new_rating * multiplier;
	} else
	if (delta == -1) { // skill is decreased
		karma = old_rating * multiplier * -1;
	}
	return karma;
}

function onQuality(selector, index) {
	const old_quality = find(QUALITIES, PC.quality[index]);
console.log('>> onQuality ['+index+']: '+PC.quality[index]);
	if (old_quality) {
		console.log('forget quality "'+old_quality.id+'" ('+old_quality.karma+')');
		PC.quality[index] = null;
		if (typeof old_quality.forget != 'undefined') old_quality.forget();
		updateKarma(old_quality.karma);
	}
	const new_quality = find(QUALITIES, selector.value);
	if (PC.quality.includes(new_quality.id)) {
		console.error('A character cannot have the same quality twice ("'+new_quality.label+'").');
		return;
	}
//	PC.quality.splice(selector.index, 0, new_quality.id);
	PC.quality[index] = new_quality.id;
	console.log('learn quality "'+new_quality.id+'" ('+new_quality.karma+')');
	if (typeof new_quality.learn != 'undefined') new_quality.learn();
	updateKarma(-new_quality.karma);
console.log('<< onQuality ['+index+']: '+PC.quality[index]);
}

function onKarma(selector) {
	var old_amount = PC.karma.good;
	PC.karma.good = selector.valueAsNumber;
	PC.karma.total += PC.karma.good - old_amount;
	document.getElementById('karma.total').value = PC.karma.total;
}



 // SEARCH
////////////

function find(array, id) {
	return array.find(function(e) {
		return e.id == id;
	});
}

/** Returns an array of skills belonging to the same group.
 * @param group_id Id of the group skill_id belongs to.
 * @param skill_id Id of the skill currently being modified.
 * @param delta Equals to -1 if skill_id is increased, to 1 if it is decreased.
 */
function findSameGroupSkills(group_id,skill_id,delta) {
	var skills = [];
	var group = find(SKILL_GROUPS, group_id);
	for (var i = 0; i < group.skills.length; i++) {
		skill = find(SKILLS, group.skills[i]);
		clone = {}
		clone.id = skill.id;
		clone.rating = PC.skill[skill.id] || 0;
		clone.current = skill.id == skill_id;
		clone.delta = delta;
		skills.push(clone);
	}
	return skills;
}

function compareSameGroupSkills(a,b) {
	if (a.rating < b.rating) return -1;
	if (a.rating > b.rating) return  1;
	//  a.rating == b.rating
	//   a.delta == b.delta
	if (a.current) return -1 * a.delta;
	if (b.current) return  1 * a.delta;
	return 0;
}



 // RULES
///////////

/** Returns ratings for later karma cost computation.
 * @param rating We'll return the sum of ratings from start to rating.
 * @param start First rating to cost karma (attribute rating 1 is free).
 */
function getRatings(rating, start=1) {
	var sum = 0;
	for (var i = start; i <= rating; i++) sum += i;
	return sum;
}

/** Returns attribute cost multiplier for karma computation.
 */
function getAttributeMultiplier() {
	return 5;
}

/** Returns skill cost multiplier for karma computation.
 * @param index Skill is the index-th greatest rating in its group.
 */
function getSkillMultiplier(index) {
	if (index > 2) return 0;
	if (index > 1) return 1;
	return 2;
}

function icanhaz(type, id) {
	if (type == 'quality') return PC.quality.includes(id);
	return (typeof PC[type] != 'undefined') && (typeof PC[type][id] != 'undefined');
}



 // UPDATE FUNCTIONS
//////////////////////

/** Spend or gain karma.
 * @param amount Positive amount means karma spent.
 *               Negative amount means karma gained.
 */
function updateKarma(amount) {
	if (PC.karma.good > 0 && amount > 0) {
		if (amount <= PC.karma.good) {
			PC.karma.good -= amount;
		} else { // amount > PC.karma.good
			PC.karma.total += (amount - PC.karma.good);
			PC.karma.good = 0;
		}
	} else {
		PC.karma.total += amount;
	}
	document.getElementById('karma.good').value  = PC.karma.good;
	document.getElementById('karma.total').value = PC.karma.total;
}

function updateDelta(id) {
	var average = METATYPE[PC.metatype].average[id];
	var delta = PC.profile.delta[id];
	var container = document.getElementById(id);
	container.value = average + delta;
}



 // INITIALIZATION FUNCTIONS
//////////////////////////////

function initializeMetatypeOptions() {
	var container = document.getElementById('metatype');
	var metatypes = Object.keys(METATYPE);
	for (var i = 0; i < metatypes.length; i++) {
		var id = metatypes[i];
		var label = METATYPE[id]['label'];
		container.innerHTML += "\n				<option value='"+id+"'>"+label+"</option>";
	}
}

function initializeAttribute(id) {
	var container = document.getElementById(id);
	container.value = PC.attribute[id];
}

function initializeSkill(container, skill) {
	var div = document.getElementById(skill.id+'-entry');

console.log('initializeSkill('+skill.id+'): '+(typeof skill.unlocked != 'undefined')+((typeof skill.unlocked != 'undefined') ? (' && !'+skill.unlocked()) : "NA"));
	if ((typeof skill.unlocked != 'undefined') && !skill.unlocked()) {
		if (div != null) div.parentNode.removeChild(div);
		return;
	}
	if (!div) {
		div = document.createElement('div');
		div.setAttribute('id', skill.id+'-line');
		div.className = 'attribute';
	}
	while (div.firstChild) div.removeChild(div.firstChild); // remove all children

	var label = document.createElement('label');
	label.setAttribute('for', skill.id);
	label.innerHTML = skill.label;
	div.appendChild(label);

	var input = document.createElement('input');
	input.setAttribute('type', 'number');
	input.setAttribute('id', skill.id);
	input.setAttribute('min', 0);
	input.setAttribute('onchange', 'onRating(this,"skill")');
	input.setAttribute('value', PC.skill[skill.id] ||0);
	input.className = 'changer';
	div.appendChild(input);

	container.appendChild(div);
}

function initializeSkills() {
	var container = document.getElementById('skills');
	for (var i = 0; i < SKILLS.length; i++) {
		initializeSkill(container, SKILLS[i]);
	}
}

function initializeQualityOptions(container) {
	for (var i = 0; i < QUALITIES.length; i++) {
		var q = QUALITIES[i];
		if (icanhaz('quality', q.id)) continue;
		var label = q.label+" ("+(q.karma > 0 ? "-":"+")+")("+Math.abs(q.karma)+")";
		var option = document.createElement('option');
		option.value = q.id;
		option.innerHTML = label;
		container.appendChild(option);
	}
}

function initializeQuality(index) {
	var div = document.createElement('div');
	div.className = 'attribute';

	var select = document.createElement('select');
	select.className = 'combobox';
	select.setAttribute('onchange', 'onQuality(this,'+index+')');
	initializeQualityOptions(select);
	div.appendChild(select);

	var button = document.createElement('button');
	button.innerHTML = "+";
	button.addEventListener('click', function() { initializeQuality(index+1); }, false);
	div.appendChild(button);

	document.getElementById('qualities').appendChild(div);
}

function initialize() {
	initializeMetatypeOptions();
	updateDelta('height');
	updateDelta('weight');
	initializeAttribute('agility');
	initializeAttribute('reaction');
	initializeAttribute('intelligence');
	initializeAttribute('charisma');
	initializeAttribute('essence');
	document.getElementById('essence').min = 6;
	initializeAttribute('edge');
	initializeSkills();
	initializeQuality(0);
}

initialize();

/*
onQuality({value:'exceptional_attribute', index:'0'});
onQuality({value:'big_spender', index:'1'});
onQuality({value:'slow', index:'2'});
onQuality({value:'vision_astral', index:'1'});
onQuality({value:'exceptional_attribute', index:'2'});
*/
