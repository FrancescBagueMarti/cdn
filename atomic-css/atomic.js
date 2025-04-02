/* es un proyecto solo para jugar con jquery, los atributos html y con css es totalmente obsoleto y solo lo utilizare para pruevas 
attributes in working:
    · images for [background] and [background-image]
    · all flex related attributes
    · all grid related attributes
    · others
*/
import "https://code.jquery.com/jquery-3.7.1.slim.min.js"

$("[border]").each(function() {$(this).css("border", $(this).attr("border"))})
$("[border-top]").each(function() {$(this).css("border-top", $(this).attr("border-top"))})
$("[border-right]").each(function() {$(this).css("border-right", $(this).attr("border-right"))})
$("[border-bottom]").each(function() {$(this).css("border-bottom", $(this).attr("border-bottom"))})
$("[border-left]").each(function() {$(this).css("border-left", $(this).attr("border-left"))})

$("[outline]").each(function() {$(this).css("outline", $(this).attr("outline"))})
$("[outline-top]").each(function() {$(this).css("outline-top", $(this).attr("outline-top"))})
$("[outline-right]").each(function() {$(this).css("outline-right", $(this).attr("outline-right"))})
$("[outline-bottom]").each(function() {$(this).css("outline-bottom", $(this).attr("outline-bottom"))})
$("[outline-left]").each(function() {$(this).css("outline-left", $(this).attr("outline-left"))})

$("[margin]").each(function() {$(this).css("margin", $(this).attr("margin"))})
$("[margin-top]").each(function() {$(this).css("margin-top", $(this).attr("margin-top"))})
$("[margin-right]").each(function() {$(this).css("margin-right", $(this).attr("margin-right"))})
$("[margin-bottom]").each(function() {$(this).css("margin-bottom", $(this).attr("margin-bottom"))})
$("[margin-left]").each(function() {$(this).css("margin-left", $(this).attr("margin-left"))})
$("[margin-vertical]").each(function(){$(this).css("margin-top",$(this).attr("margin-vertical"));$(this).css("margin-bottom",$(this).attr("margin-vertical"))})
$("[margin-horizontal]").each(function(){$(this).css("margin-left",$(this).attr("margin-horizontal"));$(this).css("margin-right",$(this).attr("margin-horizontal"))})

$("[padding]").each(function() {$(this).css("padding", $(this).attr("padding"))})
$("[padding-top]").each(function() {$(this).css("padding-top", $(this).attr("padding-top"))})
$("[padding-right]").each(function() {$(this).css("padding-right", $(this).attr("padding-right"))})
$("[padding-bottom]").each(function() {$(this).css("padding-bottom", $(this).attr("padding-bottom"))})
$("[padding-left]").each(function() {$(this).css("padding-left", $(this).attr("padding-left"))})
$("[padding-vertical]").each(function(){$(this).css("padding-top",$(this).attr("padding-vertical"));$(this).css("padding-bottom",$(this).attr("padding-vertical"))})
$("[padding-horizontal]").each(function(){$(this).css("padding-left",$(this).attr("padding-horizontal"));$(this).css("padding-right",$(this).attr("padding-horizontal"))})

$("[background]").each(function(){$(this).css("background",$(this).attr("background")),/\.(jpeg|jpg|png|gif|webp)$/i.test($(this).attr("background"))&&console.warn("attribute [background] does't accept images yet","\n",$(this).get(0))});
$("[background-color]").each(function() {$(this).css("background-color", $(this).attr("background-color"))})
$("[background-image]").each(function() {$(this).css("background-image", $(this).attr("background-image")); console.warn("attribute [background-image] does't accept images yet","\n", $(this).get(0))})
$("[background-position]").each(function() {$(this).css("background-position", $(this).attr("background-position"))})
$("[background-repeat]").each(function() {$(this).css("background-repeat", $(this).attr("background-repeat"))})

$("[border-radius]").each(function() {$(this).css("border-radius", $(this).attr("border-radius"))})
$("[border-top-left-radius]").each(function() {$(this).css("border-top-left-radius", $(this).attr("border-top-left-radius"))})
$("[border-top-right-radius]").each(function() {$(this).css("border-top-right-radius", $(this).attr("border-top-right-radius"))})
$("[border-bottom-left-radius]").each(function() {$(this).css("border-bottom-left-radius", $(this).attr("border-bottom-left-radius"))})
$("[border-bottom-right-radius]").each(function() {$(this).css("border-bottom-right-radius", $(this).attr("border-bottom-right-radius"))})
$("[border-top-radius]").each(function() {$(this).css("border-top-left-radius", $(this).attr("border-top-radius"));$(this).css("border-top-right-radius", $(this).attr("border-top-radius"))})
$("[border-bottom-radius]").each(function() {$(this).css("border-bottom-left-radius", $(this).attr("border-bottom-radius"));$(this).css("border-bottom-right-radius", $(this).attr("border-bottom-radius"))})
$("[border-left-radius]").each(function() {$(this).css("border-top-left-radius", $(this).attr("border-left-radius"));$(this).css("border-bottom-left-radius", $(this).attr("border-left-radius"))})
$("[border-right-radius]").each(function() {$(this).css("border-top-right-radius", $(this).attr("border-right-radius"));$(this).css("border-bottom-right-radius", $(this).attr("border-right-radius"))})  

$("[font]").each(function() {$(this).css("font", $(this).attr("font"))})
$("[font-family]").each(function() {$(this).css("font-family", $(this).attr("font-family"))})
$("[font-size]").each(function() {$(this).css("font-size", $(this).attr("font-size"))})
$("[font-weight]").each(function() {$(this).css("font-weight", $(this).attr("font-weight"))})
$("[font-style]").each(function() {$(this).css("font-style", $(this).attr("font-style"))})

$("[line-height]").each(function() {$(this).css("line-height", $(this).attr("line-height"))})
$("[letter-spacing]").each(function() {$(this).css("letter-spacing", $(this).attr("letter-spacing"))})
$("[word-spacing]").each(function() {$(this).css("word-spacing", $(this).attr("word-spacing"))})

$("[text-align]").each(function() {$(this).css("text-align", $(this).attr("text-align"))})
$("[text-transform]").each(function() {$(this).css("text-transform", $(this).attr("text-transform"))})
$("[text-decoration]").each(function() {$(this).css("text-decoration", $(this).attr("text-decoration"))})

$("[width]:not(img)").each(function() {$(this).css("width", $(this).attr("width"))})
$("[height]:not(img)").each(function() {$(this).css("height", $(this).attr("height"))})
  
$("[vw]").each(function() {const vw=$(this).attr("vw");if (!isNaN(vw)){$(this).css("width",`${vw}vw`).css("important", "true")}else{console.error("attribute [vw] is not a number","\n",$(this).get(0))}});
$("[vh]").each(function() {const vh = $(this).attr("vh");if (!isNaN(vh)) {$(this).css("height", `${vh}vh`).css("important", "true")} else{console.error("attribute [vh] is not a number","\n", $(this).get(0))}});

$("[position]").each(function() {$(this).css("position",$(this).attr("position"))})
$("[top]").each(function() {$(this).css("top", $(this).attr("top"))})
$("[bottom]").each(function() {$(this).css("bottom", $(this).attr("bottom"))})
$("[left]").each(function() {$(this).css("left", $(this).attr("left"))})
$("[right]").each(function() {$(this).css("right", $(this).attr("right"))})
$("[center]").each(function(){let t=$(this).attr("center");"vertical"===t?$(this).css("top","50%"):"horizontal"===t?$(this).css("left","50%"):"both"===t?$(this).css("left","50%").css("top","50%"):"true"===t?$(this).css("left","50%").css("top","50%").css("transform","translateX(-50%) translateY(-50%)"):console.error(t+" is not a valid value for attribute [center]","\n",$(this).get(0))});

$("[transform]").each(function() {$(this).css("transform", $(this).attr("transform"))})
