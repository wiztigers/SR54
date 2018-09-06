
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
	},
	{
		id: 'decompiling',
		label: "Décompilation",
		innate: false,
		group: 'tasking',
	},
	{
		id: 'registering',
		label: "Enregistrement",
		innate: false,
		group: 'tasking',
	},

	{
		id: 'arcana',
		label: "Arcanes",
		innate: false,
		group: 'astral_craft',
	},
	{
		id: 'assensing',
		label: "Lecture d'aura",
		innate: false,
		group: 'astral_craft',
	},
	{
		id: 'astral_combat',
		label: "Combat astral",
		innate: false,
		group: 'astral_craft',
	},

	{
		id: 'counterspelling',
		label: "Contresort",
		innate: false,
		group: 'sorcery',
	},
	{
		id: 'spellcasting',
		label: "Incantation",
		innate: false,
		group: 'sorcery',
	},
	{
		id: 'rituals',
		label: "Sorcellerie rituelle",
		innate: false,
		group: 'sorcery',
	},

	{
		id: 'banishing',
		label: "Banissement",
		innate: false,
		group: 'conjuring',
	},
	{
		id: 'summoning',
		label: "Invocation",
		innate: false,
		group: 'conjuring',
	},
	{
		id: 'binding',
		label: "Lien",
		innate: false,
		group: 'conjuring',
	},

	{
		id: 'alchemy',
		label: "Alchimie",
		innate: false,
		group: 'enchanting',
	},
	{
		id: 'artificing',
		label: "Artefacts",
		innate: false,
		group: 'enchanting',
	},
	{
		id: 'disenchanting',
		label: "Disjonction",
		innate: false,
		group: 'enchanting',
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
		'magic':     0,
		'resonance': 0,
	},
	'skill': {
	},
};

 // EVENT MANAGERS
////////////////////

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
	PC.gender = new_gender;
	console.log('New gender: "'+PC.gender+'"');
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
		karma = getRatings(new_rating, parseInt(old_rating)+1) * multiplier;
	} else
	if (delta < 0) { // attribute is decreased
		karma = getRatings(old_rating, parseInt(new_rating)+1) * multiplier;
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
console.log('getRatings('+rating+','+start+')='+sum);
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



 // UPDATE FUNCTIONS
//////////////////////

/** Spend or gain karma.
 * @param amount Positive amount means karma spent.
 *               Negative amount means karma gained.
 */
function updateKarma(amount) {
	console.log('BEFORE updateKarma('+amount+'): good='+PC.karma.good+', total='+PC.karma.total);
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
	console.log('AFTER  updateKarma('+amount+'): good='+PC.karma.good+', total='+PC.karma.total);
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

function initializeSkills() {
	var container = document.getElementById('skills');
	for (var i = 0; i < SKILLS.length; i++) {
		var skill = SKILLS[i];
		container.innerHTML += "\n		<div class='attribute'>\n			<label for='"+skill.id+"'>"+skill.label+"</label>\n			<input type='number' id='"+skill.id+"' class='changer' min=0 onchange=\"onRating(this,'skill')\">\n		</div>";
	}
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
}

initialize();
