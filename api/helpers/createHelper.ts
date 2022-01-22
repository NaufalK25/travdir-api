export const strToSlug = (str: string): string => {
    return str
        .toLowerCase()
        .replace(/[_\W]+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
};
