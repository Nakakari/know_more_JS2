// Function in JS
// calculateArea : function name
// (...) : function arguments/parameters
// {
//      .... --> funcion body
//  }
function calculateArea(radius) {
    // function body
    const PI = 3.14
    const area = PI * radius ** 2
    return area
}

const area1 = calculateArea(27)
const area2 = calculateArea(20)
const area3 = calculateArea(14)

console.log(area1)
console.log(area2)
console.log(area3)

const substract = function (a, b) {
    return a - b
}

console.log('200 - 176 = ' + substract(200, 176))

// Object
// Konsep hero
const hero1Name = 'Hayabusa'
const hero1Skills = ['Skill 1', 'Skill 2', 'Skill 3']
const hero1Role = 'Assasin'
const hero1CurrentBlood = 100

const hero2Name = 'Miya'
const hero2Skills = ['Skill 1', 'Skill 2']
const hero2Role = 'Marksman'
const hero2CurrentBlood = 100

// Const bisa mengubah key and value, tapi tidak
// bisa mengubah deklarasi nama heroHayabusa
const heroHayabusa = {
    // key1 : value1
    // key2 : value2
    name: 'Hayabusa',
    skilss: ['Skill 1', 'Skill 2', 'Skill 3'],
    role: 'Assasin',
    currentBlood: 100,
    attack: function () {
        console.log('Attaacking another hero')
    }
}

const heroMiya = {
    name: 'Miya',
    skilss: ['Skill 1', 'Skill 2'],
    role: 'Marksman',
    currentBlood: 100,
}

// console.log(heroHayabusa)
// console.log(heroHayabusa.name)
// console.log(heroHayabusa['name']) //identical
// heroHayabusa.attack()
heroHayabusa.name = 'Hayabusa (edited)'
// console.log(heroHayabusa.name)

// nambah key
heroHayabusa['level'] = 2
// console.log(heroHayabusa)

// delete
delete heroHayabusa['level']
// console.log(heroHayabusa)

function Hero(name, skills, role) {
    // this => nunjuk 
    this.name = name // milik si this = milik parameters
    this.skills = skills
    this.role = role

    this.blood = 100
    this.mana = 1000
    this.level = 1
}

// Method, bikin function tapi milik masing-masing objek
Hero.prototype.attack = function (opponent, power) {
    this.mana = this.mana - power
    opponent.blood = opponent.blood - power
    console.log(this.name + ' is attacking ' + opponent.name + ' , mana = ' + this.mana)
    console.log(opponent.name + "\'s blood is " + opponent.blood)
}

Hero.prototype.printProfile = function () {
    console.log('Name' + this.name)
    console.log('Skills' + this.skills.join(', '))
    console.log('Role' + this.role)
}

// new mewakili return {} ==> new bisa perwujudan dari suau kelas
const hayabusa = new Hero('Hayabusa', ['Skill 1', 'Skill 2', 'Skill 3'], 'Assasin')
const miya = new Hero('Miya', ['Skill 1', 'Skill 2'], 'Marksman')
const gathotkaca = new Hero('Gathotkaca', ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4'], 'Tank')

// console.log(hayabusa, miya, gathotkaca)

// hayabusa.name = 'Hayabusa 2'
// console.log(hayabusa)
hayabusa.attack(miya, 20)
// miya.attack(200)
// hayabusa.printProfile()