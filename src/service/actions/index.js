const langTroggle = (lang) => {
    return {
        type: "LANG_TROGGLE",
        payload: lang
    }
}

export {
    langTroggle,
}