/*!
 * Rewrites the sentence that yml2vocab generates for terms that have a
 * `known_as` entry so that it names the equivalent ISO/IEC 18013-5 or AAMVA
 * data element and the JSON-LD context term.
 *
 * Usage: node scripts/rewrite-known-as.js <generated-html-file> <core|aamva>
 */
import {readFileSync, writeFileSync} from 'node:fs';

const GENERATED = /<p>In the generated JSON-LD context file this term appears as "<code>([^<]+)<\/code>"\.<\/p>/g;

// terms defined only by this vocabulary, not by ISO or AAMVA
const LOCAL_TERMS = new Set(['driversLicense']);

// AAMVA data element identifiers that start with an uppercase acronym
const AAMVA_ACRONYMS = ['cdl_', 'dhs_', 'edl_'];

/**
 * Returns the AAMVA data element identifier for an AAMVA context term.
 *
 * @param {string} term - The context term, such as `aamva_aka_suffix`.
 *
 * @returns {string} The AAMVA identifier, such as `aka_suffix`.
 */
function aamvaElement(term) {
  let element = term.replace(/^aamva_/, '').replace(/_v2$/, '.v2');
  const acronym = AAMVA_ACRONYMS.find(prefix => element.startsWith(prefix));
  if(acronym) {
    element = acronym.toUpperCase() + element.slice(acronym.length);
  }
  return element;
}

/**
 * Returns the replacement sentence for a context term.
 *
 * @param {string} term - The context term.
 * @param {string} vocab - Either `core` or `aamva`.
 *
 * @returns {string} The HTML paragraph.
 */
function sentence(term, vocab) {
  const contextTerm = `the "<code>${term}</code>" term in the JSON-LD ` +
    'context file';
  if(LOCAL_TERMS.has(term)) {
    return `<p>This property appears as ${contextTerm}.</p>`;
  }
  if(vocab === 'aamva') {
    return '<p>This property is equivalent to the ' +
      `"<code>${aamvaElement(term)}</code>" property specified by the AAMVA ` +
      `mDL Implementation Guidelines as well as ${contextTerm}.</p>`;
  }
  return `<p>This property is equivalent to the "<code>${term}</code>" ` +
    'property specified by the ISO and AAMVA specifications as well as ' +
    `${contextTerm}.</p>`;
}

const [file, vocab] = process.argv.slice(2);
if(!file || !['core', 'aamva'].includes(vocab)) {
  console.error(
    'Usage: node scripts/rewrite-known-as.js <html-file> <core|aamva>');
  process.exit(1);
}
const html = readFileSync(file, 'utf8');
writeFileSync(file, html.replace(GENERATED, (_, term) => sentence(term, vocab)));
