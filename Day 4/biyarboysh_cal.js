function biyar_boysh_cal(name = "Zahirul", gender = "Male", birth_of_year = 2005) {
    let age = 2023 - birth_of_year;
    let biyar_boysh;
    let dak;
    switch (gender) {
        case "Male":
            biyar_boysh = 21;
            dak = "vaiya";
            break;
        case "Female":
            biyar_boysh = 18;
            dak = "apu";
            break;
        default:
            console.log(`${name} tomi tomar birthday year deo nai, abar try koro`);
            break;
    }

    if (age >= biyar_boysh) {
        return `Hi, ${name} ${dak}, tomar boysh ${age} and tomar biyar boysh hoiche ✅`;
    } else {
        return `Hi, ${name} ${dak}, tomar boysh ${age} and tomar biyar boysh hoy nai ❌`;
    }
}
console.log(biyar_boysh_cal("Al Imarn", "Male", 2001));
