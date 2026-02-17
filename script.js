//For Side Navbar

$(".button-collapse").sideNav();

// ---------------------------------
// ---------------------------------

// Execute Raw price frome here: ---

// ---------------------------------
// ---------------------------------

function raw() {

    var dhalai_weight = Number(document.calculator.raw_pittal.value);
    var pittal_rate = Number(document.calculator.pittal_rate.value);
    var teyari_wazzan = Number(document.calculator.prepare_weight.value);

    // New Extension in calculation on 15 FEB 2026 Manual Dhalai + work Mazdori entry

    var dhalai_mazdori = Number(document.calculator.dhalai_mazdori.value);
    var kaam_mazdori = Number(document.calculator.kaam_mazdori.value);

    var choon = dhalai_weight - teyari_wazzan;
    var choon_exact = Math.round(choon);
    document.calculator.choon.value = choon_exact;

    var caat = (choon / 1000) * 100;
    var caat_exact = Math.round(caat);
    document.calculator.caat.value = caat_exact;

    var baqaya_pittal = choon - caat;
    var baqaya_pittal_exact = Math.round(baqaya_pittal);
    document.calculator.baqaya_pittal.value = baqaya_pittal_exact;

    var pittal_price = (baqaya_pittal / 1000) * pittal_rate;
    var pittal_price_exact = Math.round(pittal_price);
    document.calculator.pittal_price.value = pittal_price_exact;

    var mazduri = (dhalai_weight / 1000) * dhalai_mazdori;

    var dhalai_price = ((dhalai_weight / 1000) * pittal_rate) + mazduri;
    var dhalai_price_exact = Math.round(dhalai_price);
    document.calculator.dhalai_price.value = dhalai_price_exact;

    var our_price_without_mazduri = dhalai_price - pittal_price;
    var our_price_without_mazduri_exact = Math.round(our_price_without_mazduri);
    document.calculator.our_price_without_mazduri.value = our_price_without_mazduri_exact;

    var our_price_with_mazduri = (dhalai_price - pittal_price) + kaam_mazdori;
    var our_price_without_mazduri_exact = Math.round(our_price_with_mazduri);
    document.calculator.our_price_with_mazduri.value = our_price_without_mazduri_exact;
}

// ---------------------------------
// ---------------------------------

// Execute Extra percentage frome here: ---

// ---------------------------------
// ---------------------------------

function percent() {

    var original_price = Number(document.percentageCalc.original.value);
    var extra_percent = Number(document.percentageCalc.additional.value);

    var answer = (extra_percent / 100) * original_price,
        answer_exact = Math.round(answer);

    var result = answer + original_price,
        result_exact = Math.round(result);

    document.percentageCalc.additional_percent.value = answer_exact;
    document.percentageCalc.final_answer.value = result_exact;
}

// ---------------------------------
// ---------------------------------

// REDUCE percentage frome here: ---

// ---------------------------------
// ---------------------------------

function deduct() {

    var original_price = Number(document.percentageCalc.original.value);
    var extra_percent = Number(document.percentageCalc.additional.value);

    var answer = (extra_percent / 100) * original_price,
        answer_exact = Math.round(answer);

    var result = original_price - answer,
        result_exact = Math.round(result);

    document.percentageCalc.additional_percent.value = answer_exact;
    document.percentageCalc.final_answer.value = result_exact;
}

// ---------------------------------
// ---------------------------------

// SHOP PRICE HERE: ---

// ---------------------------------
// ---------------------------------

function shop() {

    var GolBhara = [500, 700, 900, 1200, 1400, 2000],
        GolMedium = [450, 550, 650, 900, 1100, 1500],
        FaisalBhara = [600, 800, 1000, 1300, 1700, 2200],
        FaisalMedium = [400, 500, 600, 900, 1100, 1400];

    var shop_rate = Number(document.shopPrice.shop_rate.value),
        actual_rate = shop_rate / 1000;

    // ---------------------------------
    // ---------------------------------

    // GOL BHARA RATES: ---

    // ---------------------------------
    // ---------------------------------

    //ONE INCH GOL BHARA RATE

    var gbOne = actual_rate * GolBhara[0],
        gbOne_round = Math.round(gbOne);

    document.shopPrice.oneinchgb.value = gbOne_round;

    //ONE & HALF INCH GOL BHARA RATE

    var gbOneHalf = actual_rate * GolBhara[1],
        gbOneHalf_round = Math.round(gbOneHalf);

    document.shopPrice.onebytwoinchgb.value = gbOneHalf_round;

    //TWO INCH GOL BHARA RATE

    var gbTwo = actual_rate * GolBhara[2],
        gbTwo_round = Math.round(gbTwo);

    document.shopPrice.twoinchgb.value = gbTwo_round;

    //THREE INCH GOL BHARA RATE 

    var gbThree = actual_rate * GolBhara[3],
        gbThree_round = Math.round(gbThree);

    document.shopPrice.threeinchgb.value = gbThree_round;

    //FOUR INCH GOL BHARA RATE

    var gbFour = actual_rate * GolBhara[4],
        gbFour_round = Math.round(gbFour);

    document.shopPrice.fourinchgb.value = gbFour_round;

    //SIX INCH GOL BHARA RATE

    var gbSix = actual_rate * GolBhara[5],
        gbSix_round = Math.round(gbSix);

    document.shopPrice.sixinchgb.value = gbSix_round;

    // ---------------------------------
    // ---------------------------------

    // GOL MEDIUM RATES: ---

    // ---------------------------------
    // ---------------------------------

    //ONE INCH GOL MEDIUM RATE

    var gmOne = actual_rate * GolMedium[0],
        gmOne_round = Math.round(gmOne);

    document.shopPrice.oneinchgm.value = gmOne_round;

    //ONE & HALF INCH GOL MEDIUM RATE

    var gmOneHalf = actual_rate * GolMedium[1],
        gmOneHalf_round = Math.round(gmOneHalf);

    document.shopPrice.onebytwoinchgm.value = gmOneHalf_round;

    //TWO INCH GOL MEDIUM RATE

    var gmTwo = actual_rate * GolMedium[2],
        gmTwo_round = Math.round(gmTwo);

    document.shopPrice.twoinchgm.value = gmTwo_round;

    //THREE INCH GOL MEDIUM RATE 

    var gmThree = actual_rate * GolMedium[3],
        gmThree_round = Math.round(gmThree);

    document.shopPrice.threeinchgm.value = gmThree_round;

    //FOUR INCH GOL MEDIUM RATE

    var gmFour = actual_rate * GolMedium[4],
        gmFour_round = Math.round(gmFour);

    document.shopPrice.fourinchgm.value = gmFour_round;

    //SIX INCH GOL MEDIUM RATE

    var gmSix = actual_rate * GolMedium[5],
        gmSix_round = Math.round(gmSix);

    document.shopPrice.sixinchgm.value = gmSix_round;

    // ---------------------------------
    // ---------------------------------

    // FAISAL TAP BHARA RATES: ---

    // ---------------------------------
    // ---------------------------------

    //ONE INCH FAISAL TAP BHARA RATE

    var fbOne = actual_rate * FaisalBhara[0],
        fbOne_round = Math.round(fbOne);

    document.shopPrice.oneinchfb.value = fbOne_round;

    //ONE & HALF INCH FAISAL TAP BHARA RATE

    var fbOneHalf = actual_rate * FaisalBhara[1],
        fbOneHalf_round = Math.round(fbOneHalf);

    document.shopPrice.onebytwoinchfb.value = fbOneHalf_round;

    //TWO INCH FAISAL TAP BHARA RATE

    var fbTwo = actual_rate * FaisalBhara[2],
        fbTwo_round = Math.round(fbTwo);

    document.shopPrice.twoinchfb.value = fbTwo_round;

    //THREE INCH FAISAL TAP BHARA RATE 

    var fbThree = actual_rate * FaisalBhara[3],
        fbThree_round = Math.round(fbThree);

    document.shopPrice.threeinchfb.value = fbThree_round;

    //FOUR INCH FAISAL TAP BHARA RATE

    var fbFour = actual_rate * FaisalBhara[4],
        fbFour_round = Math.round(fbFour);

    document.shopPrice.fourinchfb.value = fbFour_round;

    //SIX INCH FAISAL TAP BHARA RATE

    var fbSix = actual_rate * FaisalBhara[5],
        fbSix_round = Math.round(fbSix);

    document.shopPrice.sixinchfb.value = fbSix_round;

    // ---------------------------------
    // ---------------------------------

    // FAISAL TAP MEDIUM RATES: ---

    // ---------------------------------
    // ---------------------------------

    //ONE INCH FAISAL TAP MEDIUM RATE

    var fmOne = actual_rate * FaisalMedium[0],
        fmOne_round = Math.round(fmOne);

    document.shopPrice.oneinchfm.value = fmOne_round;

    //ONE & HALF INCH FAISAL TAP MEDIUM RATE

    var fmOneHalf = actual_rate * FaisalMedium[1],
        fmOneHalf_round = Math.round(fmOneHalf);

    document.shopPrice.onebytwoinchfm.value = fmOneHalf_round;

    //TWO INCH FAISAL TAP MEDIUM RATE

    var fmTwo = actual_rate * FaisalMedium[2],
        fmTwo_round = Math.round(fmTwo);

    document.shopPrice.twoinchfm.value = fmTwo_round;

    //THREE INCH FAISAL TAP MEDIUM RATE 

    var fmThree = actual_rate * FaisalMedium[3],
        fmThree_round = Math.round(fmThree);

    document.shopPrice.threeinchfm.value = fmThree_round;

    //FOUR INCH FAISAL TAP MEDIUM RATE

    var fmFour = actual_rate * FaisalMedium[4],
        fmFour_round = Math.round(fmFour);

    document.shopPrice.fourinchfm.value = fmFour_round;

    //SIX INCH FAISAL TAP MEDIUM RATE

    var fmSix = actual_rate * FaisalMedium[5],
        fmSix_round = Math.round(fmSix);

    document.shopPrice.sixinchfm.value = fmSix_round;
}