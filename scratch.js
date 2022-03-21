/* eslint-disable no-console, no-unused-vars */
import nlp from './src/three.js'
// import plg from './plugins/speech/src/plugin.js'
// nlp.plugin(plg)

// nlp.verbose('tagger')
// nlp.verbose('chunker')

let txt = 'F.B.I.'
let doc = nlp(txt)
doc.acronyms().strip().debug()
doc.debug()

// weird remove issue
// let m = nlp('one two three. foo.')
// m = m.splitOn('two')
// m.match('three').remove()
// m.debug()

// var doc = nlp("Björk, the singer-songwriter,  plays at seven...")
// doc.normalize()
// console.log(doc.text())