function ColorLuminance(hex, lum) {

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}
ColorLuminance("6699CC", 0.2);	// "#7ab8f5" - 20% lighter
ColorLuminance("69C", -0.5);	// "#334d66" - 50% darker

$( document ).ready(function() {
    var container = $(".color-variations");
    var baseColor = container.attr('id');
    var lightColor = ColorLuminance(baseColor, 0.2);
    var darkColor = ColorLuminance(baseColor, -0.2);
    console.log(lightColor);
    $(".color-variations .swatch-light").css( "background-color", lightColor );
    $(".color-variations .swatch-dark").css( "background-color", darkColor );
});
