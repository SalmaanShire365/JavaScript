// JavaScript source code

let ammo = 0;
const maxAmmo = 100;

if (ammo === 0) {
    console.log("Out of Ammo. Need To Reload...");
    ammo += maxAmmo * .5;
    console.log(`Laser refilled! Current ammo: ${ammo} / ${maxAmmo}`);
}


else {

    console.log(`Ammo remaining: ${ammo} / ${maxAmmo}`);
}