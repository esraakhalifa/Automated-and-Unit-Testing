/**
 * 3andy url ==> fi akhro hala2y en-uk
 * 
 */

export default function addLanguageCodetoUrl(language) {
    if (typeof language !== 'string') {
        throw new Error('Invalid input: language must be a string');
    }

    language = language.trim();
    const urlPrefix = "/home-";
    const setLanguages = ['fr-FR', 'en-UK', 'ar-EG']; 

    if (setLanguages.includes(language)) {
        return urlPrefix + language;
    }

    return urlPrefix + setLanguages[1];
}


// console.log(addLanguageCodetoUrl('fr-FR')); // "fr-FR"
// console.log(addLanguageCodetoUrl('en-lolo')); 
