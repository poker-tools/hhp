const spok = require('spok')
const test = require('tape')
const { parseHand } = require('../../')

const fs = require('fs')
const path = require('path')
const fixtures = path.join(__dirname, '..', 'fixtures')

/* eslint-disable camelcase */
const holdem_ig = path.join(fixtures, 'holdem', 'ignition')

const txt = fs.readFileSync(path.join(holdem_ig, 'sng-winning-last.txt'), 'utf8')
const res = parseHand(txt)

test('\nIgnition: sng last hand headsup hero looses, also includes Ante and an Allin raise', function(t) {
  spok(t, res,
    { seats:
      [ { seatno: 2
        , player: 'Ignition-3'
        , chips: 11900
        , metadata: { lineno: 1, raw: 'Seat 3: Big Blind (11,900 in chips)' } }
      , { seatno: 1
        , player: 'IgnitionHero'
        , chips: 1600
        , metadata: { lineno: 2, raw: 'Seat 2: Dealer [ME] (1,600 in chips)' } } ]
    , posts:
      [ { player: 'Ignition-3'
        , type: 'ante'
        , amount: 50
        , metadata: { lineno: 4, raw: 'Big Blind : Ante chip 50' }
        , seatno: 2 }
      , { player: 'IgnitionHero'
        , type: 'ante'
        , amount: 50
        , metadata: { lineno: 5, raw: 'Dealer [ME] : Ante chip 50' }
        , seatno: 1 }
      , { player: 'IgnitionHero'
        , type: 'sb'
        , amount: 250
        , metadata: { lineno: 6, raw: 'Dealer [ME] : Small blind 250' }
        , seatno: 1 }
      , { player: 'Ignition-3'
        , type: 'bb'
        , amount: 500
        , metadata: { lineno: 7, raw: 'Big Blind : Big blind 500' }
        , seatno: 2 } ]
    , preflop:
      [ { player: 'IgnitionHero'
        , type: 'raise'
        , amount: 1300
        , raiseTo: 1550
        , allin: true
        , metadata: { lineno: 11, raw: 'Dealer [ME] : All-in(raise) 1300 to 1550' }
        , seatno: 1 }
      , { player: 'Ignition-3'
        , type: 'call'
        , amount: 1050
        , metadata: { lineno: 12, raw: 'Big Blind : Call 1050' }
        , seatno: 2 } ]
    , flop: []
    , turn: []
    , river: []
    , showdown:
      [ { player: 'Ignition-3'
        , type: 'reveal'
        , card1: 'Tc'
        , card2: 'As'
        , metadata: { lineno: 9, raw: 'Big Blind : Card dealt to a spot [Tc As]' }
        , seatno: 2 }
      , { player: 'Ignition-3'
        , type: 'show'
        , metadata:
           { lineno: 16
           , raw: 'Big Blind : Showdown [Td Tc 5s 5d As] (Two pair)' }
        , desc: 'two pair'
        , card1: 'Tc'
        , card2: 'As'
        , seatno: 2 }
      , { player: 'IgnitionHero'
        , type: 'show'
        , metadata:
           { lineno: 17
           , raw: 'Dealer [ME] : Showdown [5s 5d Qd Td 9s] (One pair)' }
        , desc: 'one pair'
        , card1: '9s'
        , card2: 'Qd'
        , seatno: 1 }
      , { player: 'Ignition-3'
        , type: 'collect'
        , amount: 3200
        , pot: null
        , metadata: { lineno: 18, raw: 'Big Blind : Hand Result 3200' }
        , seatno: 2 }
      , { player: 'IgnitionHero'
        , type: 'finish'
        , place: 2
        , metadata:
           { lineno: 19
           , raw: 'Dealer [ME] : Ranking 2\nDealer [ME] : Prize Cash [$13.50]' }
        , amount: 13.5
        , seatno: 1 }
      , { player: 'Ignition-3'
        , type: 'finish'
        , place: 1
        , metadata:
           { lineno: 21
           , raw: 'Big Blind : Ranking 1\nBig Blind : Prize Cash [$22.50]' }
        , amount: 22.5
        , seatno: 2 } ]
    , summary:
      [ { type: 'pot'
        , single: true
        , amount: 3200
        , metadata: { lineno: 26, raw: 'Total Pot(3200)' } }
      , { type: 'showed'
        , won: true
        , seatno: 2
        , player: 'Ignition-3'
        , position: 'bb'
        , card1: 'Tc'
        , card2: 'As'
        , amount: 3200
        , description: 'Two pair'
        , metadata:
           { lineno: 28
           , raw: 'Seat+3: Big Blind 3200  with Two pair [Tc As-Td Tc 5s 5d As]' } }
      , { type: 'showed'
        , won: false
        , seatno: 1
        , player: 'IgnitionHero'
        , position: 'bu'
        , card1: '9s'
        , card2: 'Qd'
        , description: 'One pair'
        , metadata:
           { lineno: 29
           , raw: 'Seat+2: Dealer lose with One pair [9s Qd-5s 5d Qd Td 9s]' } } ]
    , info:
      { room: 'ignition'
      , handid: '3549255643'
      , pokertype: 'holdem'
      , sb: 250
      , bb: 500
      , year: 2017
      , month: 7
      , day: 23
      , hour: 21
      , min: 54
      , sec: 3
      , gameno: '18534183'
      , level: '9'
      , gametype: 'tournament'
      , metadata:
         { lineno: 0
         , raw: 'Ignition Hand #3549255643: HOLDEM Tournament #18534183 TBL#1, Normal- Level 9 (250/500) - 2017-07-23 21:54:37' }
      , ante: 50
      , currency: '$' }
    , table: { tableno: 1, maxseats: 2, button: 1 }
    , hero: 'IgnitionHero'
    , holecards:
      { card1: '9s'
      , card2: 'Qd'
      , metadata:
         { lineno: 10
         , raw: 'Dealer [ME] : Card dealt to a spot [9s Qd]' } }
    , board:
      { card1: '2d'
      , card2: 'Td'
      , card3: '5s'
      , card4: '5d'
      , card5: '3c'
      , metadata: { lineno: 27, raw: 'Board [2d Td 5s 5d 3c]' } } })
  t.end()
})
