/*  
      setup object represent monster, it should have the following properties:
        - name - string 
        - danger level - string/number
        -something to brag about (i ate 3 entire pizzas by myself) - string
        -intimidate person - function, takes in a person's name as an argument 
  */


const monster = {
    name: `Demogorgon`,
    dangerLevel: 999,
    braggingPoint: ['I eat kids for breakfast and love the Upside Down', 'I can run 5x as faster', 'I could eat your head in one bite'],
    intimidatePerson: function (personName) {
        console.log(`Ha, ${personName}, you think you can take me? You haven't heard of the monster know as ${this.name} Well let me tell you something kid. I have a danger level of ${this.dangerLevel}, and just in the past week ${this.braggingPoint[0]}, ${this.braggingPoint[1]}, and ${this.braggingPoint[2]}. TL;DR: you've got no shot.`);
    },

};

// console.log(monster);
monster.intimidatePerson('Salmaan');
