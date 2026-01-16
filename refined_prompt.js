/**
 * Converts a string to camelCase format.
 * 
 * @description
 * Transforms a string by splitting it on whitespace, underscores, or hyphens,
 * then reconstructs it in camelCase. The first word is lowercase, and subsequent
 * words have their first letter capitalized while preserving the rest of the
 * original casing (useful for maintaining acronyms).
 * 
 * @param {string} str - The string to convert to camelCase
 * @returns {string} The camelCase version of the input string, or an error message
 *                   if the input is not a string
 * 
 * @example
 * toCamelCase('hello-world');        // 'helloWorld'
 * toCamelCase('hello_world_test');   // 'helloWorldTest'
 * toCamelCase('hello world foo');    // 'helloWorldFoo'
 * toCamelCase(123);                  // 'Error: Expected a string, but received number.'
 */

/**
 * Converts a string to dot.case format.
 * 
 * @description
 * Transforms a string by splitting it on whitespace, underscores, or hyphens,
 * converting each word to lowercase, and joining them with dots. This format is
 * commonly used in configuration keys and namespace paths.
 * 
 * @param {string} str - The string to convert to dot.case
 * @returns {string} The dot.case version of the input string, or an error message
 *                   if the input is not a string
 * 
 * @example
 * toDotCase('hello-world');        // 'hello.world'
 * toDotCase('hello_world_test');   // 'hello.world.test'
 * toDotCase('hello world foo');    // 'hello.world.foo'
 * toDotCase(null);                 // 'Error: Expected a string, but received object.'
 */
function toCamelCase(str) {
    if (typeof str !== 'string') {
        return `Error: Expected a string, but received ${typeof str}.`;
    }

    return str
        .split(/[\s_-]+/) // Split on spaces, underscores, or hyphens
        .map((word, index) => {
            if (!word) return ''; // Handle empty strings from consecutive delimiters
            
            // First word is lowercase, subsequent words are capitalized
            if (index === 0) {
                return word.toLowerCase();
            }
            
            // Capitalize first letter, keep rest as-is to preserve acronyms
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

function toDotCase(str) {
    if (typeof str !== 'string') {
        return `Error: Expected a string, but received ${typeof str}.`;
    }

    return str
        .split(/[\s_-]+/) // Split on spaces, underscores, or hyphens
        .map(word => word.toLowerCase())
        .join('.');
}

