const formatUsername = (str) => {
    if (!str) throw new Error("Username is a required value.");

    let strFormatted = str.split('').map((letter, i) => {
        if (i == 0) return letter.toUpperCase()
        else return letter.toLowerCase()
    }).join('');

    return strFormatted;
}