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
  
const damage = () => {
    const dragonStrength = dragon.strength;
    return  Math.floor(Math.random() * ( dragonStrength - 15 + 1)) + 15;
}

console.log(damage())

const battleMembers = { mage, warrior, dragon };