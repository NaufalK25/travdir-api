import fs from 'fs';

export const strToSlug = (str: string) => {
    return str?.toLowerCase()
        .replace(/[_\W]+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
};

export const randomString = (length: number) => {
    return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
};

export const createFolder = (path: fs.PathLike) => {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true, });
    }
};

export const deleteFile = (path: string, fileName: string) => {
    fs.unlinkSync(`${path}/${fileName}`);
};
