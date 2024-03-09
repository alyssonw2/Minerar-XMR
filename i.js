const Miner = require('eazyminer');
///estou usando esta pull
//https://supportxmr.com/#/help/getting_started
//https://xmr.nanopool.org/search?address=4AuGEenF88G3GPUED5HCpcZC713PzoAto8mJjw3c92YwYhvpUavEW6xCeyJMi5LDU75MWb8jD1jZeZnHb6ykFoXx9KwmkbF

const miner = new Miner({
    pools: [{
        coin: 'XMR',
        user: '4AuGEenF88G3GPUED5HCpcZC713PzoAto8mJjw3c92YwYhvpUavEW6xCeyJMi5LDU75MWb8jD1jZeZnHb6ykFoXx9KwmkbF',
        url: 'xmr-asia1.nanopool.org:10343', // optional pool URL,

    }],
    autoStart: true // optional delay
});

miner.start(); // optional manually start the miner

// miner.stop() // manually stop the miner