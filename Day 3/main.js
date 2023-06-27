// Currency converter
function currency_converter(currency_name = "Dollar", amount = 1) {
    let rate;
    switch (currency_name) {
        case "Dollar":
            rate = 105;
            break;
        case "Pound":
            rate = 133;
            break;
        case "Euro":
            rate = 115;
            break;
        default:
            break;
    }

    console.log(`$${amount} ${currency_name} = ${amount * rate} BDT (1 ${currency_name} = ${rate})`);
}
currency_converter("Euro", 3);

