const toHTML = input => new DOMParser().parseFromString(input,'text/html')
exports.toHTML = toHTML