import fs from 'fs';

export const strToSlug = (str: string): string => {
    return str?.toLowerCase()
        .replace(/[_\W]+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
};

export const createFolder = (path: fs.PathLike): void => {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true, });
    }
};

export const uploadFile = (path: string, fileName: string, file: string | NodeJS.ArrayBufferView): void => {
    fs.writeFileSync(`${path}/${fileName}`, file);
}

export const deleteFile = (path: string, fileName: string): void => {
    fs.unlinkSync(`${path}/${fileName}`);
}

export const updateFile = (path: string, oldFileName: string, newFileName: string, newFile: NodeJS.ArrayBufferView): void => {
    deleteFile(path, oldFileName);
    uploadFile(path, newFileName, newFile);
}
