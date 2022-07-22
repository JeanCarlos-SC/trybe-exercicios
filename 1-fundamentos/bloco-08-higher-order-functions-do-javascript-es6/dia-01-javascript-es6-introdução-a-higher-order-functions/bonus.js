const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
const damageDragon = () => {
    const dragonStrength = dragon.strength;
    return  Math.floor(Math.random() * ( dragonStrength - 15 + 1)) + 15;
}

const damageWarrior = () => {
    const minDamage = warrior.strength;
    const maxDamege = warrior.weaponDmg * minDamage;
    return  Math.floor(Math.random() * ( maxDamege - minDamage + 1)) + minDamage;
}

console.log(damageWarrior())

const battleMembers = { mage, warrior, dragon };