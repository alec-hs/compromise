export default {
  Verb: {
    not: ['Noun', 'Adjective', 'Adverb', 'Value', 'Expression'],
  },
  // 'he [walks]'
  PresentTense: {
    is: 'Verb',
    not: ['PastTense'],
  },
  // 'will [walk]'
  Infinitive: {
    is: 'PresentTense',
    not: ['Gerund'],
  },
  // '[walk] now!'
  Imperative: {
    is: 'Infinitive',
    not: ['PastTense', 'Gerund', 'Copula'],
  },
  // walking
  Gerund: {
    is: 'PresentTense',
    not: ['Copula'],
  },
  // walked
  PastTense: {
    is: 'Verb',
    not: ['PresentTense', 'Gerund'],
  },
  // is/was
  Copula: {
    is: 'Verb',
  },
  // '[could] walk'
  Modal: {
    is: 'Verb',
    not: ['Infinitive'],
  },
  // 'awaken'
  Participle: {
    is: 'PastTense',
  },
  // '[will have had] walked'
  Auxiliary: {
    is: 'Verb',
    not: ['PastTense', 'PresentTense', 'Gerund', 'Conjunction'],
  },
  // 'walk out'
  PhrasalVerb: {
    is: 'Verb',
  },
  // 'walk [out]'
  Particle: {
    is: 'PhrasalVerb',
    not: ['PastTense', 'PresentTense', 'Copula', 'Gerund'],
  },
  // 'walked by'
  Passive: {
    is: 'Verb',
  },
}
