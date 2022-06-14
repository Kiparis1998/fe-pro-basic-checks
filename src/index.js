/**
 * Должна быть стрелочной функцией без фигурных скобок сразу возвращать значение
 * @param {string} string
 * @returns {string}
 */
export const capitalizeString = (string) => string.split(' ').map((item) => `${item[0].toUpperCase()}${item.slice(1)}`).join(' ');

/**
 * Должна быть function declaration
 * @param {string} string
 * @returns {string}
 */
export function fenceString(string) {

    let i;
    let newString = "";
        
    for (i = 0; i < string.length; i++) {
        if (string.indexOf(string[i], i) % 2 !== 0) {
            newString = `${newString}${string[i].toUpperCase()}`;
        } else {
            newString = `${newString}${string[i].toLowerCase()}`;
        }
    }

    return newString;
};

/**
 * Должна быть function expression
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerIf = function(action, string) {
    
    let newString = "";

    if (action === "uppercase") {
        newString = `${string.toUpperCase()}`;

    } else if (action === "lowercase") {
        newString = `${string.toLowerCase()}`;

    } else if (action === "fence") {
        newString = fenceString(string);

    } else if (action === "capitalize") {
        newString = capitalizeString(string);

    } else {
        newString = string;
    }

    return newString;
};

/**
 * Стрелочная
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerSwitch = (action, string) => {
    let newString = "";

    switch(action) {

        case 'uppercase': 
        newString = `${string.toUpperCase()}`;
        break;

        case 'lowercase':
        newString = `${string.toLowerCase()}`;
        break;

        case 'fence':
        newString = fenceString(string);
        break;

        case 'capitalize': 
        newString = capitalizeString(string);
        break;

        default:
        newString = string;
        break
    }    

    return newString;
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsForOf = (string) => {
    for (let letter of string) {
        console.log(letter);
    }
};
/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsFor = (string) => {
    for (let i = 0; i < string.length; i++) {
        console.log(string[i]);
    }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsWhile = (string) => {
    let i = 0;
    while (i < string.length) {
        console.log(string[i]);
        i++;
    }
};
/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsSplit = (string) => {
    (string.split("")).forEach((item => console.log(item)));
};
