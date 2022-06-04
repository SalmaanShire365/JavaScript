/*
 
 in a game, a user has a weapon with a specific ammo count, we need to write code that will represent how the player can interact with the weapon.
 here is everything the player needs to be able to do 
 



    weapon 
  -maximum ammo
  -current ammo 
  -name the weapon 
  -figure out damage per each ammo
  -shoot a specific number of bullets out of the weapon
  -reload the weapon to full capacity 
  -prints out how much damage the remaining ammo in the weapon could do 
    - for 3/5 ammo remaining and 10 damager per ammo, this would print out
        "30 damage available"
  -visualizes the current ammo capacity of the weapon
    -Deagle [///  ] 3/5
 */

function calculateDamageAvailable () {
    return (
        `Damage remaining in ${this.name}: ${this.currAmmo * this.damagePerAmmo}`
    );
}

function reload () {
    this.currAmmo = this.maxAmmo;
    console.log(`${this.name} reloaded`);
}

function shoot (numberOfShots) {
    // if we have enough ammo, shoot as many as the user requested 
    if (this.currAmmo >= numberOfShots) {
        console.log(`shooting ${numberOfShots} shots`);
        this.currAmmo -= numberOfShots;
    }
    else if (this.currAmmo > 0) {
        // otherwise if some ammo left, empty that clip
        console.log(`shooting ${this.currAmmo} shots`);
        this.currAmmo = 0;
    }
    // user has no ammo 
    else {
        console.log('out of ammo. Refilling..');
    }
}

const weapon = {
    currAmmo: 1,
    damagePerAmmo: 20,
    maxAmmo: 10,
    name: 'Hawkmoon',
    shoot,
    reload,
    calculateDamageAvailable,

        
}

// print weapon
console.log(weapon);
console.log();

//shoot 
weapon.shoot(2);
console.log(weapon);
console.log();


// reload
weapon.reload();
console.log(weapon);
console.log();

//shoot 
weapon.shoot(2);
console.log(weapon);
console.log();


// calculate damage 
console.log(weapon.calculateDamageAvailable());
console.log();