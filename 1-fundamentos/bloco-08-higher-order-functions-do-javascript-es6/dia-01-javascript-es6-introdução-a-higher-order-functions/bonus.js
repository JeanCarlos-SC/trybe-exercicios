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

const damageMage = () => {
    const minDamage = mage.intelligence;
    const maxDamege = minDamage * 2;
    const damage =  Math.floor(Math.random() * ( maxDamege - minDamage + 1)) + minDamage;
    const manaMage = mage.mana - 15;
    if (manaMage < 15 ) {
        damage =  "Não possui mana suficiente";
        manaMage = mage.mana;
    }
    const mageTurn = {
        dan: damage,
        man: manaMage
    };

    return mageTurn;
}

console.log(damageMage())

const battleMembers = { mage, warrior, dragon };