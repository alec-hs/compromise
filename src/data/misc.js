'use strict';

const misc = {
  'there': 'NN',

  'better': 'JJR',
  'earlier': 'JJR',

  'has': 'VB',
  'sounds': 'VBZ',
  //special case for took/taken
  'taken': 'VBD',
  'msg': 'VB', //slang
  //date
  'noon': 'DA',
  'midnight': 'DA',
  //errr....
  'now': 'DA',
  'morning': 'DA',
  'evening': 'DA',
  'afternoon': 'DA',
  'ago': 'DA'
};

const compact = {
  //conjunctions
  'CC': [
    'yet',
    'therefore',
    'or',
    'while',
    'nor',
    'whether',
    'though',
    'because',
    'cuz',
    'but',
    'for',
    'and',
    'however',
    'before',
    'although',
    'how',
    'plus',
    'versus',
    'not'
  ],
  'CO': [
    'if',
    'unless',
    'otherwise',
    'notwithstanding'
  ],

  'VBD': [
    'said',
    'had',
    'been',
    'began',
    'came',
    'did',
    'meant',
    'went'
  ],

  'VBN': [
    'given',
    'known',
    'shown',
    'seen',
    'born',
  ],

  'VBG': [
    'going',
    'being',
    'according',
    'resulting',
    'developing',
    'staining'
  ],

  //copula
  'CP': [
    'is',
    'will be',
    'are',
    'was',
    'were',
    'am',
    'isn\'t',
    'ain\'t',
    'aren\'t'
  ],

  //determiners
  'DT': [
    'this',
    'any',
    'enough',
    'each',
    'whatever',
    'every',
    'which',
    'these',
    'another',
    'plenty',
    'whichever',
    'neither',
    'an',
    'a',
    'least',
    'own',
    'few',
    'both',
    'those',
    'the',
    'that',
    'various',
    'what',
    'either',
    'much',
    'some',
    'else',
    'no',
    //some other languages (what could go wrong?)
    'la',
    'le',
    'les',
    'des',
    'de',
    'du',
    'el'
  ],

  //prepositions
  'IN': [
    'until',
    'onto',
    'of',
    'into',
    'out',
    'except',
    'across',
    'by',
    'between',
    'at',
    'down',
    'as',
    'from',
    'around',
    'with',
    'among',
    'upon',
    'amid',
    'to',
    'along',
    'since',
    'about',
    'off',
    'on',
    'within',
    'in',
    'during',
    'per',
    'without',
    'throughout',
    'through',
    'than',
    'via',
    'up',
    'unlike',
    'despite',
    'below',
    'unless',
    'towards',
    'besides',
    'after',
    'whereas',
    '\'o',
    'amidst',
    'amongst',
    'apropos',
    'atop',
    'barring',
    'chez',
    'circa',
    'mid',
    'midst',
    'notwithstanding',
    'qua',
    'sans',
    'vis-a-vis',
    'thru',
    'till',
    'versus',
    'without',
    'w/o',
    'o\'',
    'a\'',
  ],

  //modal verbs
  'MD': [
    'can',
    'may',
    'could',
    'might',
    'will',
    'ought to',
    'would',
    'must',
    'shall',
    'should',
    'ought',
    'shant',
    'lets', //arguable
  ],

  //posessive pronouns
  'PP': [
    'mine',
    'something',
    'none',
    'anything',
    'anyone',
    'theirs',
    'himself',
    'ours',
    'his',
    'my',
    'their',
    'yours',
    'your',
    'our',
    'its',
    'herself',
    'hers',
    'themselves',
    'myself',
    'itself',
    'her', //this one is pretty ambiguous
    'who',
    'whom',
    'whose'
  ],

  //personal pronouns (nouns)
  'PRP': [
    'it',
    'they',
    'i',
    'them',
    'you',
    'she',
    'me',
    'he',
    'him',
    'ourselves',
    'us',
    'we',
    'thou',
    'il',
    'elle',
    'yourself',
    '\'em',
  ],

  //some manual adverbs (the rest are generated)
  'RB': [
    // 'now',
    'again',
    'already',
    'soon',
    'directly',
    'toward',
    'forever',
    'apart',
    'instead',
    'yes',
    'alone',
    'indeed',
    'ever',
    'quite',
    'perhaps',
    'where',
    'then',
    'here',
    'thus',
    'very',
    'often',
    'once',
    'never',
    'why',
    'when',
    'away',
    'always',
    'sometimes',
    'also',
    'maybe',
    'so',
    'just',
    'well',
    'several',
    'such',
    'randomly',
    'too',
    'rather',
    'abroad',
    'almost',
    'anyway',
    'twice',
    'aside',
    'moreover',
    'anymore',
    'newly',
    'damn',
    'somewhat',
    'somehow',
    'meanwhile',
    'hence',
    'further',
    'furthermore',
    'more',
    'way',
    'kinda',
    'totally',
  ],

  //interjections, expressions
  'EX': [
    'uh',
    'uhh',
    'uh huh',
    'uh-oh',
    'please',
    'ugh',
    'sheesh',
    'eww',
    'pff',
    'voila',
    'oy',
    'hi',
    'hello',
    'bye',
    'goodbye',
    'hey',
    'hai',
    'eep',
    'hurrah',
    'yuck',
    'ow',
    'duh',
    'oh',
    'hmm',
    'yeah',
    'whoa',
    'ooh',
    'whee',
    'ah',
    'bah',
    'gah',
    'yaa',
    'phew',
    'gee',
    'ahem',
    'eek',
    'meh',
    'yahoo',
    'oops',
    'd\'oh',
    'psst',
    'argh',
    'grr',
    'nah',
    'shhh',
    'whew',
    'mmm',
    'ooo',
    'yay',
    'uh-huh',
    'boo',
    'wow',
    'nope',
    'haha',
    'hahaha',
    'lol',
    'lols',
    'ya',
    'hee',
    'ohh',
    'eh',
    'yup'
  ],

  //special nouns that shouldnt be seen as a verb
  'NN': [
    'nothing',
    'everything',
    'god',
    'dollar',
    'student',
    'patent',
    'funding',
    'banking',
    'ceiling',
    'energy',
    'purpose',
    'friend',
    'event',
    'room',
    'door',
    'thing',
    'things',
    'stuff',
    'lunch',
    'breakfast',
    'dinner',
    'home',
    'problem',
    'body',
    'world',
    'city',
    'death',
    'others',
  ],
  //family-terms are people
  PN: [
    'father',
    'mother',
    'mom',
    'dad',
    'mommy',
    'daddy',
    'sister',
    'brother',
    'aunt',
    'uncle',
    'grandfather',
    'grandmother',
    'cousin',
    'stepfather',
    'stepmother',
    'boy',
    'girl',
    'man',
    'men',
    'woman',
    'women',
    'number',
    'system',
    'example',
    'part',
    'guy',
    'dude',
    'bro',
    'gentleman',
    'someone',
  ]
};
//unpack the compact terms into the misc lexicon..
const keys = Object.keys(compact);
for (let i = 0; i < keys.length; i++) {
  const arr = compact[keys[i]];
  for (let i2 = 0; i2 < arr.length; i2++) {
    misc[arr[i2]] = keys[i];
  }
}
// console.log(misc.a);
module.exports = misc;
