## Verifiable Driver's License Vocabulary

This specification describes a Linked Data vocabulary for expressing ISO/IEC
18013-5 mobile driver's license data as W3C verifiable credentials. The
California DMV uses it in production for the digital driver's license in the
CA DMV App.

The purpose of this work item is to demonstrate a path to interoperability between the ISO-18013-5 Mobile Driver's License data model and the W3C Verifiable Credentials ecosystem. The technologies explored in this work item are meant to be complementary to ISO-18013-5 (mDL) and not a replacement of the standard. The output of the work item would be a Verifiable Driver's License Vocabulary and an interoperability report between issuers and verifiers for Verifiable Driver's License Credentials using the Verifiable Driver's License Vocabulary. This report is generated on a weekly basis.

http://w3id.org/vdl/interop-reports 
https://github.com/digitalbazaar/vdl-vocab

## Building the Specification

The vocabulary terms live in `vocabulary.yml` and `aamva/vocabulary.yml`. The
[yml2vocab](https://github.com/w3c/yml2vocab) tool combines each file with its
`template.html` to generate the HTML, Turtle, and JSON-LD versions. The class
diagram lives in `vocabulary.mmd`. The JSON-LD contexts in `context/` are the
source of truth for term names, IRIs, and types.

```
npm install
npm run build
```

A GitHub Action lints the vocabularies on pull requests. Another GitHub Action
builds and publishes them to GitHub Pages on every push to `main`.

## List Owners

@msporny @tplooker @clehner

## Work Item Questions

> 1. Explain what you are trying to do using no jargon or acronyms.

We are trying to demonstrate that it is possible to express driving credentials in a way that is compatible with the ISO-18013-5 Mobile Driver's License standard in a forum that is open to everyone, patent, and royalty-free. We are trying to address concerns that there is not going to be fair competition in this particular marketplace.

> 2. How is it done today, and what are the limits of the current practice?

At present, the mDL standard is pay walled and the discussions and decisions made on the standard are not subject to public scrutiny. This technology will affect hundreds of millions of people when deployed around the world and it is currently not being developed in an open standards setting organization. There are a number of proprietary implementation and privacy concerns related to the current mDL standard and this work attempts to provide vetted privacy-preserving alternatives to the current "phone home" nature of the mDL standard.

> 3. What is new in your approach and why do you think it will be successful?

Our approach is to utilize the W3C Verifiable Credentials standard, privacy-preserving approaches to credential presentation and revocation, and an open and patent and royalty-free process that is accessible to the general public to get industry buy-in on a privacy-respectful path forward. This approach, which involves the general public, was used successfully to build the Web.

> 4. How are you involving participants from multiple skill sets and global locations in this work item? (Skill sets: technical, design, product, marketing, anthropological, and UX. Global locations: the Americas, APAC, Europe, Middle East.)

We are reaching out to individuals that were involved in the mDL work (local and national governments), individuals involved in privacy analysis that has been critical of the mDL techology (ACLU, EPIC), individuals that were involved in the creation of W3C Verifiable Credentials (VCWG, DIDWG, CCG), and will be making a broad call for participation in each of those groups.

> 5. What actions are you taking to make this work item accessible to a non-technical audience?

We plan to provide a set of presentations throughout the next year or two that attempt to distill the technology down into easily graspable compare/contrasts between the path mDL is currently on and the alternative that vDL could provide.
