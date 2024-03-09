const Miner = require('eazyminer');
///estou usando esta pull
//https://supportxmr.com/#/help/getting_started

const miner = new Miner({
    pools: [{
        coin: 'monero',
        user: '4AuGEenF88G3GPUED5HCpcZC713PzoAto8mJjw3c92YwYhvpUavEW6xCeyJMi5LDU75MWb8jD1jZeZnHb6ykFoXx9KwmkbF',
        url: 'pool.supportxmr.com:443', // optional pool URL,

    }],
    autoStart: false // optional delay
});

miner.start(); // optional manually start the miner

// miner.stop() // manually stop the miner