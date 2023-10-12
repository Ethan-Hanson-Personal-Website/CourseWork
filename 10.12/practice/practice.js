

// // const fruit = {
// //     name: "banana",
// //     //sayHiArrow: () => console.log("Hi I am a " + this.name),
// //     sayHiFunction : function (){
// //         console.log("Hi I am a " + this.name);
// //     },
// // };

// // // console.log("Arrow");
// // // fruit.sayHiArrow();


// // const apple = {
// //     name: "macintosh",
// //     sayHiFunction : function (){
// //         console.log("Hi I am a " + this.name);
// //     },
// // };

// // console.log("Function");
// // apple.sayHiFunction();

// class Fruit{
//     constructor(name){
//         this.name = name;
//     }
//       sayHiFunction(){
//         console.log("Hi I am a " + this.name);
//     }
// }

//  const banana = new Fruit("banana");
//  const apple = new Fruit("macintosh");
//  const cherry = new Fruit("cherry");


//  banana.sayHiFunction();
//  apple.sayHiFunction();
//  cherry.sayHiFunction();

class Sentence {
    constructor(data) {
        this.data = data;
    }



    //get number of words
    //use split anf lengrth
    wordCount() {
        return this.data.split('').length;
    }

    hasLetter(letter) {
        return this.data.includes(letter);

    }

    letterCount(letter){
        let count = 0;
        for(let i = 0; i < this.data.length; i++){
          if(this.datat[i] === letter){
            count++;
          }
        }
        return count;
      }

    stats(){
        let stats = {};
        let wordArray = this.data.split(" ");
        wordArray.array.forEach(word => {
            if(stats[word] === undefined){
                stats[word]=0;
            }
            stats[word]++;
        });
    
        return stats;
    }
}



const data = window.prompt('enter a sentence', 'the quick brown fox jumped over the fence');
const s1 = new Sentence(data);
console.log(s1.wordCount());
console.log(s1.hasLetter('X'));
console.log(s1.hasLetter('q'));
console.log(s1.letterCount('e'));
console.log(s1.letterCount(' '));
console.log(s1.stats());
