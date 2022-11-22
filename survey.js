const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.question('What do you think of Node.js? ', (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer}`);

//   });
  
// });

rl.question('What\'s your name? Nicknames are also acceptable :) ' , (answer) => {
  const name = answer;

  rl.question('What\'s an activity you like doing? ' , (answer) => {
    const activity = answer;

    rl.question('What do you listen to while doing that? ' , (answer) => {
      const music = answer;

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ' , (answer) => {
        const meal = answer;

        rl.question('What\'s your favourite thing to eat for that meal? ' , (answer) => {
          const favoriteMeal = answer;

          rl.question('Which sport is your absolute favourite? ' , (answer) => {
            const sport = answer;

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ' , (answer) => {
              const superpower = answer;
              console.log(`My name is ${name}.`);
              console.log(`The activity I am fond of is ${activity}.`);
              console.log(`I listen to ${music} while doing ${activity}`);
              console.log(`Favorite meal is ${meal}.`);
              console.log(`What I like to eat on that meal is ${favoriteMeal}.`);
              console.log(`I love the sport ${sport}.`);
              console.log(`My superpower is ${superpower}.`);
              
              rl.close();
            });
          });
        });
      });
    });
  });
});


