const strToSlug = (str) => {
    return str
        .toLowerCase()
        .replace(/[_\W]+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
};

module.exports = {
    strToSlug,
};
