import fs from 'fs';

export const strToSlug = (str: string): string => {
    return str?.toLowerCase()
        .replace(/[_\W]+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
};

export const createFolder = (path: string): void => {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true, });
    }
};

export const uploadFile = (path: string, fileName: string, file: any): void => {
    fs.writeFileSync(`${path}/${fileName}`, file);
}

export const deleteFile = (path: string, fileName: string): void => {
    fs.unlinkSync(`${path}/${fileName}`);
}

export const updateFile = (path: string, newFileName: string, oldFileName: string, newFile: any): void => {
    deleteFile(path, oldFileName);
    uploadFile(path, newFileName, newFile);
}
