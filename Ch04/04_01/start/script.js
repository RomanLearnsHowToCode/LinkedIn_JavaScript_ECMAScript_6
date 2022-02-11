// object literal 

function skier (name, sound){
    return{
    
        name: name,
        sound: sound,
        powerYell: function() {
            let yell = this.sound.toUpperCase();
            console.log(`${yell}! ${yell}!`);
        }
    }

}

console.log(skier("Dylan", "woo").name);
console.log(skier("Dylan", "woo").powerYell());

// Object Lietral Enhancement - less repetition and cleaner code

function skier2 (name, sound){
    return{
    
        name,
        sound,
        powerYell: function() {
            let yell = this.sound.toUpperCase();
            console.log(`${yell}! ${yell}!`);
        }
    }

}

console.log(skier2("Bobby", "yeah").name);
console.log(skier2("Bobby", "yeah").powerYell());