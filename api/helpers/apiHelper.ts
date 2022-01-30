import fs from 'fs';

/** Return the slugified version of the given string.
 * @param {string} str - The string to slugify.
 * @returns {string} The slugified string.
 * @example
 * strToSlug('Hello, World!');
 * // returns 'hello-world'
 */
export const strToSlug = (str: string): string => {
    return str?.toLowerCase()
        .replace(/[_\W]+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
};

/** Return random string with the given length as the parameter.
 * @param {number} length The length of the random string.
 * @returns {string} The random string.
 * @example
 * randomString(16);
 * // returns ehgqb4y4gw000000
 */
export const randomString = (length: number): string => {
    return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
};

/** Create specific folder recursively from the given path.
 * @param {fs.PathLike} path The path to create folder.
 */
export const createFolder = (path: fs.PathLike): void => {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true, });
    }
};

/** Delete specific file using the given path and file name.
 * @param {string} path The path to the file.
 * @param {string} fileName The file name.
 */
export const deleteFile = (path: string, fileName: string): void => {
    fs.unlinkSync(`${path}/${fileName}`);
};
