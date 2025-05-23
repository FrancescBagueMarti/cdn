/* es un proyecto solo para jugar con jquery, los atributos html y con css es totalmente obsoleto y solo lo utilizare para pruevas 
   esta version requiere el uso de jquery para poder funcionar
   attributes in working:
    · background attributes don't work propperly
    · some flex related styles
    · some grid related styles
    · others
*/
import "https://code.jquery.com/jquery-3.7.1.slim.min.js"

$("[display]").each(function() {$(this).css("display",$(this).attr("display"))})

// $("[border]").each(function() {$(this).css("border", $(this).attr("border"))})
$("[border]").each(function(){let t=$(this).attr("border").trimStart().split(",");1===t.length?$(this).css("border",t[0]):2===t.length?($(this).css("border-top",t[0]),$(this).css("border-bottom",t[0]),$(this).css("border-left",t[1]),$(this).css("border-right",t[1])):3===t.length?($(this).css("border-top",t[0]),$(this).css("border-left",t[1]),$(this).css("border-right",t[1]),$(this).css("border-bottom",t[2])):4===t.length?($(this).css("border-top",t[0]),$(this).css("border-right",t[1]),$(this).css("border-bottom",t[2]),$(this).css("border-left",t[3])):($(this).css("border-top",t[0]),$(this).css("border-right",t[1]),$(this).css("border-bottom",t[2]),$(this).css("border-left",t[3]),console.warn("attribute [border] only accepts to a maximum of 4 values, if there are more than 4, they will be ignored","\n",$(this).get(0)))});
$("[border-top]").each(function() {$(this).css("border-top", $(this).attr("border-top"))})
$("[border-right]").each(function() {$(this).css("border-right", $(this).attr("border-right"))})
$("[border-bottom]").each(function() {$(this).css("border-bottom", $(this).attr("border-bottom"))})
$("[border-left]").each(function() {$(this).css("border-left", $(this).attr("border-left"))})
$("[border-color]").each(function() {$(this).css("border-color",$(this).attr("border-color"))})
$("[border-width]").each(function() {$(this).css("border-width",$(this).attr("border-width"))})
$("[border-style]").each(function() {$(this).css("border-style",$(this).attr("border-style"))})

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

// $("[background]").each(function(){$(this).css("background",$(this).attr("background")),/\.(jpeg|jpg|png|gif|webp)$/i.test($(this).attr("background"))&&console.warn("attribute [background] does't accept images yet","\n",$(this).get(0))});
$("[background-color]").each(function() {$(this).css("background-color", $(this).attr("background-color"))})
// $("[background-image]").each(function() {$(this).css("background-image", $(this).attr("background-image")); console.warn("attribute [background-image] does't accept images yet","\n", $(this).get(0))})
// $("[background-position]").each(function() {$(this).css("background-position", $(this).attr("background-position"))})
// $("[background-repeat]").each(function() {$(this).css("background-repeat", $(this).attr("background-repeat"))})

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
  
$("[vw]").each(function() {const vw=$(this).attr("vw");if (!isNaN(vw)){$(this).css("width",`${vw}vw`)}else{console.error("attribute [vw] is not a number","\n",$(this).get(0))}});
$("[vh]").each(function() {const vh = $(this).attr("vh");if (!isNaN(vh)) {$(this).css("height", `${vh}vh`)} else{console.error("attribute [vh] is not a number","\n", $(this).get(0))}});

$("[position]").each(function() {$(this).css("position",$(this).attr("position"))})
$("[top]").each(function() {$(this).css("top", $(this).attr("top"))})
$("[bottom]").each(function() {$(this).css("bottom", $(this).attr("bottom"))})
$("[left]").each(function() {$(this).css("left", $(this).attr("left"))})
$("[right]").each(function() {$(this).css("right", $(this).attr("right"))})
$("[center]").each(function(){let t=$(this).attr("center");"vertical"===t?$(this).css("top","50%"):"horizontal"===t?$(this).css("left","50%"):"both"===t?$(this).css("left","50%").css("top","50%"):"true"===t?$(this).css("left","50%").css("top","50%").css("transform","translateX(-50%) translateY(-50%)"):console.error(t+" is not a valid value for attribute [center]","\n",$(this).get(0))});

$("[relative]").each(function(){$(this).css("position","relative");let t=$(this).attr("relative").trimStart().split(" ");1===t.length?"top"==t[0]?$(this).css("top","0%"):"bottom"==String(t[0]).toLowerCase()?$(this).css("bottom","0%"):"left"==String(t[0]).toLowerCase()?$(this).css("left","0%"):"right"==String(t[0]).toLowerCase()?$(this).css("right","0%"):"center"==String(t[0]).toLowerCase()&&$(this).css("top",`calc(50% - ${Number($(this).height())/2}px)`).css("left",`calc(50% - ${Number($(this).width())/2}px)`):2===t.length&&("top"==t[0]?$(this).css("top","0%"):"bottom"==String(t[0]).toLowerCase()?$(this).css("bottom","0%"):"left"==String(t[0]).toLowerCase()?$(this).css("left","0%"):"right"==String(t[0]).toLowerCase()?$(this).css("right","0%"):"center"==String(t[0]).toLowerCase()&&$(this).css("top",`calc(50% - ${Number($(this).height())/2}px)`),"top"==t[1]?$(this).css("top","0%"):"bottom"==String(t[1]).toLowerCase()?$(this).css("bottom","0%"):"left"==String(t[1]).toLowerCase()?$(this).css("left","0%"):"right"==String(t[1]).toLowerCase()?$(this).css("right","0%"):"center"==String(t[1]).toLowerCase()&&$(this).css("left",`calc(50% - ${Number($(this).width())/2}px)`))});
$("[absolute]").each(function(){$(this).css("position","absolute");let t=$(this).attr("absolute").trimStart().split(" ");1===t.length?"top"==t[0]?$(this).css("top","0%"):"bottom"==String(t[0]).toLowerCase()?$(this).css("bottom","0%"):"left"==String(t[0]).toLowerCase()?$(this).css("left","0%"):"right"==String(t[0]).toLowerCase()?$(this).css("right","0%"):"center"==String(t[0]).toLowerCase()&&$(this).css("top",`calc(50% - ${Number($(this).height())/2}px)`).css("left",`calc(50% - ${Number($(this).width())/2}px)`):2===t.length&&("top"==t[0]?$(this).css("top","0%"):"bottom"==String(t[0]).toLowerCase()?$(this).css("bottom","0%"):"left"==String(t[0]).toLowerCase()?$(this).css("left","0%"):"right"==String(t[0]).toLowerCase()?$(this).css("right","0%"):"center"==String(t[0]).toLowerCase()&&$(this).css("top",`calc(50% - ${Number($(this).height())/2}px)`),"top"==t[1]?$(this).css("top","0%"):"bottom"==String(t[1]).toLowerCase()?$(this).css("bottom","0%"):"left"==String(t[1]).toLowerCase()?$(this).css("left","0%"):"right"==String(t[1]).toLowerCase()?$(this).css("right","0%"):"center"==String(t[1]).toLowerCase()&&$(this).css("left",`calc(50% - ${Number($(this).width())/2}px)`))});

$("[transform]").each(function() {$(this).css("transform", $(this).attr("transform"))})

$("[flex]").each(function(){let s=String($(this).attr("flex")).trimStart().split(" ");s.includes("inline")?$(this).css("display","inline-flex"):$(this).css("display","flex"),s.forEach(s=>{["column","column-reverse","row","row-reverse"].includes(s)?$(this).css("flex-direction",s):["wrap","no-wrap"].includes(s)&&$(this).css("flex-wrap",s)});console.warn("attribute [flex] will only use the last values inserted in the attribute, for example if [flex] is flex=\"row column\", it will only use column","\n",$(this).get(0))});
$("[justify-content]").each(function(){$(this).css("justify-content",$(this).attr("justify-content"))})
$("[align-items]").each(function(){$(this).css("align-items",$(this).attr("align-items"))})

$("[vertical-align]").each(function() {$(this).css("vertical-align",$(this).attr("vertical-align"))})

$("img[fit]").each(function() {$(this).css("object-fit",$(this).attr("fit"))})

$("[grid-columns]").each(function() {$(this).css("grid-template-columns", $(this).attr("grid-columns"))})
$("[grid-rows]").each(function() {$(this).css("grid-template-rows",$(this).attr("grid-rows"))})
$("[grid-gap]").each(function() {$(this).css("grid-gap",$(this).attr("grid-gap"))})
$("[grid-area]").each(function() {$(this).css("grid-area",$(this).attr("grid-area"))})

$("[text-border]").each(function() {$(this).css("text-shadow", `0 1px ${$(this).attr("text-border")}, 1px 0px ${$(this).attr("text-border")}, 0px -1px ${$(this).attr("text-border")}, -1px 0px ${$(this).attr("text-border")}`)})
$("[text-shadow]").each(function() {$(this).css("text-shadow", $(this).attr("text-shadow"))})

$("[box-shadow]").each(function() {$(this).css("box-shadow",$(this).attr('box-shadow'))})

$("[gradient]").each(function(){let r=$(this).attr("gradient").trimStart().split("/"),t="";if("linear"===r[0])t="linear";else{if("circle"!==r[0]&&"circular"!==r[0]&&"radial"!==r[0])return console.error("[gradient] attribute's first value is not accepter",$(this).get(0)),-1;t="radial"}$(this).css("background-image",`${t}-gradient(${r[1]})`)});
$("[linear-gradient]").each(function(){$(this).css("background-image",`linear-gradient(${$(this).attr("linear-gradient")})`)})
$("[radial-gradient]").each(function(){$(this).css("background-image",`radial-gradient(${$(this).attr("radial-gradient")})`)})