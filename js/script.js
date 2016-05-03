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

  $(".color-variations").each(function() {
      var baseColor = $(this).attr('id');
      var lightColor = ColorLuminance(baseColor, 0.2);
      var darkColor = ColorLuminance(baseColor, -0.2);

      $(".swatch-light", this).css( "background-color", lightColor );
      $(".swatch-dark", this).css( "background-color", darkColor );
  });
	$(".swatch-small").each(function() {
		var firstColor = $(this).attr('data-firstColor');
		var secondColor = $(this).attr('data-secondColor');

		var mixed = $.xcolor.opacity(firstColor, secondColor, 0.6);
		$(this).css( "background-color", mixed );
	});
});
