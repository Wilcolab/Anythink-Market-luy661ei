function toKebabCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }
    
    return input
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
}

module.exports = toKebabCase;