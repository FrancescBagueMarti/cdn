/* es un proyecto solo para jugar con jquery, los atributos html y con css es totalmente obsoleto y solo lo utilizare para pruevas 
   esta version no requiere de el uso de jquery para poder funcionar
   attributes in working:
    · background attributes don't work propperly
    · some flex related styles
    · some grid related styles
    · others
*/

document.querySelectorAll("[display]").forEach(element => {element.style.display = element.getAttribute("display")})

// $("[border]").each(function() {$(this).css("border", $(this).attr("border"))})
document.querySelectorAll("[border]").forEach(function(e){let t=e.getAttribute("border").split(",");1===t.length?e.style.border=t[0]:2===t.length?(e.style.borderTop=t[0],e.style.borderBottom=t[0],e.style.borderLeft=t[1],e.style.borderRight=t[1]):3===t.length?(e.style.borderTop=t[0],e.style.borderLeft=t[1],e.style.borderRight=t[1],e.style.borderBottom=t[2]):4===t.length?(e.style.borderTop=t[0],e.style.borderRight=t[1],e.style.borderBottom=t[2],e.style.borderLeft=t[3]):(e.style.borderTop=t[0],e.style.borderRight=t[1],e.style.borderBottom=t[2],e.style.borderLeft=t[3],console.warn("attribute [border] only accepts a maximum of 4 values, if there are more than 4, they will be ignored","\n",e))})
document.querySelectorAll('[border-top]').forEach(element => {element.style.borderTop = element.getAttribute('border-top')})
document.querySelectorAll('[border-right]').forEach(element => {element.style.borderRight = element.getAttribute('border-right')})
document.querySelectorAll('[border-bottom]').forEach(element => {element.style.borderBottom = element.getAttribute('border-bottom')})
document.querySelectorAll('[border-left]').forEach(element => {element.style.borderLeft = element.getAttribute('border-left')})
document.querySelectorAll('[border-color]').forEach(element => {element.style.borderColor = element.getAttribute('border-color')})
document.querySelectorAll('[border-width]').forEach(element => {element.style.borderWidth = element.getAttribute('border-width')})
document.querySelectorAll('[border-style]').forEach(element => {element.style.borderStyle = element.getAttribute('border-style')})

document.querySelectorAll('[outline]').forEach(element => element.style.outline = element.getAttribute('outline'));
document.querySelectorAll('[outline-top]').forEach(element => element.style.outlineTop = element.getAttribute('outline-top'));
document.querySelectorAll('[outline-right]').forEach(element => element.style.outlineRight = element.getAttribute('outline-right'));
document.querySelectorAll('[outline-bottom]').forEach(element => element.style.outlineBottom = element.getAttribute('outline-bottom'));
document.querySelectorAll('[outline-left]').forEach(element => element.style.outlineLeft = element.getAttribute('outline-left'));

document.querySelectorAll('[margin]').forEach(element => element.style.margin = element.getAttribute('margin'));
document.querySelectorAll('[margin-top]').forEach(element => element.style.marginTop = element.getAttribute('margin-top'));
document.querySelectorAll('[margin-right]').forEach(element => element.style.marginRight = element.getAttribute('margin-right'));
document.querySelectorAll('[margin-bottom]').forEach(element => element.style.marginBottom = element.getAttribute('margin-bottom'));
document.querySelectorAll('[margin-left]').forEach(element => element.style.marginLeft = element.getAttribute('margin-left'));
document.querySelectorAll('[margin-vertical]').forEach(element => { element.style.marginTop = element.getAttribute('margin-vertical'); element.style.marginBottom = element.getAttribute('margin-vertical'); });
document.querySelectorAll('[margin-horizontal]').forEach(element => { element.style.marginLeft = element.getAttribute('margin-horizontal'); element.style.marginRight = element.getAttribute('margin-horizontal'); });

document.querySelectorAll('[padding]').forEach(element => element.style.padding = element.getAttribute('padding'));
document.querySelectorAll('[padding-top]').forEach(element => element.style.paddingTop = element.getAttribute('padding-top'));
document.querySelectorAll('[padding-right]').forEach(element => element.style.paddingRight = element.getAttribute('padding-right'));
document.querySelectorAll('[padding-bottom]').forEach(element => element.style.paddingBottom = element.getAttribute('padding-bottom'));
document.querySelectorAll('[padding-left]').forEach(element => element.style.paddingLeft = element.getAttribute('padding-left'));
document.querySelectorAll('[padding-vertical]').forEach(element => { element.style.paddingTop = element.getAttribute('padding-vertical'); element.style.paddingBottom = element.getAttribute('padding-vertical'); });
document.querySelectorAll('[padding-horizontal]').forEach(element => { element.style.paddingLeft = element.getAttribute('padding-horizontal'); element.style.paddingRight = element.getAttribute('padding-horizontal'); });

// document.querySelectorAll('[background]').forEach(element => { element.style.background = element.getAttribute('background'); /\.(jpeg|jpg|png|gif|webp)$/i.test(element.getAttribute('background')) && console.warn("attribute [background] does't accept images yet", "\n", element); });
document.querySelectorAll('[background-color]').forEach(element => element.style.backgroundColor = element.getAttribute('background-color'));
// document.querySelectorAll('[background-image]').forEach(element => { element.style.backgroundImage = element.getAttribute('background-image'); console.warn("attribute [background-image] does't accept images yet", "\n", element); });
// document.querySelectorAll('[background-position]').forEach(element => element.style.backgroundPosition = element.getAttribute('background-position'));
// document.querySelectorAll('[background-repeat]').forEach(element => element.style.backgroundRepeat = element.getAttribute('background-repeat'));

document.querySelectorAll('[border-radius]').forEach(element => element.style.borderRadius = element.getAttribute('border-radius'));
document.querySelectorAll('[border-top-left-radius]').forEach(element => element.style.borderTopLeftRadius = element.getAttribute('border-top-left-radius'));
document.querySelectorAll('[border-top-right-radius]').forEach(element => element.style.borderTopRightRadius = element.getAttribute('border-top-right-radius'));
document.querySelectorAll('[border-bottom-left-radius]').forEach(element => element.style.borderBottomLeftRadius = element.getAttribute('border-bottom-left-radius'));
document.querySelectorAll('[border-bottom-right-radius]').forEach(element => element.style.borderBottomRightRadius = element.getAttribute('border-bottom-right-radius'));
document.querySelectorAll('[border-top-radius]').forEach(element => { element.style.borderTopLeftRadius = element.getAttribute('border-top-radius'); element.style.borderTopRightRadius = element.getAttribute('border-top-radius'); });
document.querySelectorAll('[border-bottom-radius]').forEach(element => { element.style.borderBottomLeftRadius = element.getAttribute('border-bottom-radius'); element.style.borderBottomRightRadius = element.getAttribute('border-bottom-radius'); });
document.querySelectorAll('[border-left-radius]').forEach(element => { element.style.borderTopLeftRadius = element.getAttribute('border-left-radius'); element.style.borderBottomLeftRadius = element.getAttribute('border-left-radius'); });
document.querySelectorAll('[border-right-radius]').forEach(element => { element.style.borderTopRightRadius = element.getAttribute('border-right-radius'); element.style.borderBottomRightRadius = element.getAttribute('border-right-radius'); });

document.querySelectorAll('[font]').forEach(element => element.style.font = element.getAttribute('font'));
document.querySelectorAll('[font-family]').forEach(element => element.style.fontFamily = element.getAttribute('font-family'));
document.querySelectorAll('[font-size]').forEach(element => element.style.fontSize = element.getAttribute('font-size'));
document.querySelectorAll('[font-weight]').forEach(element => element.style.fontWeight = element.getAttribute('font-weight'));
document.querySelectorAll('[font-style]').forEach(element => element.style.fontStyle = element.getAttribute('font-style'));

document.querySelectorAll('[line-height]').forEach(element => element.style.lineHeight = element.getAttribute('line-height'));
document.querySelectorAll('[letter-spacing]').forEach(element => element.style.letterSpacing = element.getAttribute('letter-spacing'));
document.querySelectorAll('[word-spacing]').forEach(element => element.style.wordSpacing = element.getAttribute('word-spacing'));

document.querySelectorAll('[text-align]').forEach(element => element.style.textAlign = element.getAttribute('text-align'));
document.querySelectorAll('[text-transform]').forEach(element => element.style.textTransform = element.getAttribute('text-transform'));
document.querySelectorAll('[text-decoration]').forEach(element => element.style.textDecoration = element.getAttribute('text-decoration'));

document.querySelectorAll('[width]:not(img)').forEach(element => element.style.width = element.getAttribute('width'));
document.querySelectorAll('[height]:not(img)').forEach(element => element.style.height = element.getAttribute('height'));

document.querySelectorAll('[vw]').forEach(element => { const vw = element.getAttribute('vw'); if (!isNaN(vw)) { element.style.width = `${vw}vw`; element.style.setProperty('width', `${vw}vw`, 'important'); } else { console.error("attribute [vw] is not a number", "\n", element); } });
document.querySelectorAll('[vh]').forEach(element => { const vh = element.getAttribute('vh'); if (!isNaN(vh)) { element.style.height = `${vh}vh`; element.style.setProperty('height', `${vh}vh`, 'important'); } else { console.error("attribute [vh] is not a number", "\n", element); } });

document.querySelectorAll('[position]').forEach(element => element.style.position = element.getAttribute('position'));
document.querySelectorAll('[top]').forEach(element => element.style.top = element.getAttribute('top'));
document.querySelectorAll('[bottom]').forEach(element => element.style.bottom = element.getAttribute('bottom'));
document.querySelectorAll('[left]').forEach(element => element.style.left = element.getAttribute('left'));
document.querySelectorAll('[right]').forEach(element => element.style.right = element.getAttribute('right'));
document.querySelectorAll('[center]').forEach(element => { const t = element.getAttribute('center'); if (t === 'vertical') { element.style.top = '50%'; } else if (t === 'horizontal') { element.style.left = '50%'; } else if (t === 'both' || t === 'true') { element.style.left = '50%'; element.style.top = '50%'; element.style.transform = 'translateX(-50%) translateY(-50%)'; } else { console.error(t + " is not a valid value for attribute [center]", "\n", element); } });

document.querySelectorAll('[relative]').forEach(element => { element.style.position = 'relative'; let t = element.getAttribute('relative').trimStart().split(" "); if (t.length === 1) { if (t[0].toLowerCase() === 'top') { element.style.top = '0%'; } else if (t[0].toLowerCase() === 'bottom') { element.style.bottom = '0%'; } else if (t[0].toLowerCase() === 'left') { element.style.left = '0%'; } else if (t[0].toLowerCase() === 'right') { element.style.right = '0%'; } else if (t[0].toLowerCase() === 'center') { element.style.top = `calc(50% - ${element.offsetHeight / 2}px)`; element.style.left = `calc(50% - ${element.offsetWidth / 2}px)`; } } else if (t.length === 2) { if (t[0].toLowerCase() === 'top') { element.style.top = '0%'; } else if (t[0].toLowerCase() === 'bottom') { element.style.bottom = '0%'; } else if (t[0].toLowerCase() === 'left') { element.style.left = '0%'; } else if (t[0].toLowerCase() === 'right') { element.style.right = '0%'; } else if (t[0].toLowerCase() === 'center') { element.style.top = `calc(50% - ${element.offsetHeight / 2}px)`; } if (t[1].toLowerCase() === 'top') { element.style.top = '0%'; } else if (t[1].toLowerCase() === 'bottom') { element.style.bottom = '0%'; } else if (t[1].toLowerCase() === 'left') { element.style.left = '0%'; } else if (t[1].toLowerCase() === 'right') { element.style.right = '0%'; } else if (t[1].toLowerCase() === 'center') { element.style.left = `calc(50% - ${element.offsetWidth / 2}px)`; } } });
document.querySelectorAll('[absolute]').forEach(element => { element.style.position = 'absolute'; let t = element.getAttribute('absolute').trimStart().split(" "); if (t.length === 1) { if (t[0].toLowerCase() === 'top') { element.style.top = '0%'; } else if (t[0].toLowerCase() === 'bottom') { element.style.bottom = '0%'; } else if (t[0].toLowerCase() === 'left') { element.style.left = '0%'; } else if (t[0].toLowerCase() === 'right') { element.style.right = '0%'; } else if (t[0].toLowerCase() === 'center') { element.style.top = `calc(50% - ${element.offsetHeight / 2}px)`; element.style.left = `calc(50% - ${element.offsetWidth / 2}px)`; } } else if (t.length === 2) { if (t[0].toLowerCase() === 'top') { element.style.top = '0%'; } else if (t[0].toLowerCase() === 'bottom') { element.style.bottom = '0%'; } else if (t[0].toLowerCase() === 'left') { element.style.left = '0%'; } else if (t[0].toLowerCase() === 'right') { element.style.right = '0%'; } else if (t[0].toLowerCase() === 'center') { element.style.top = `calc(50% - ${element.offsetHeight / 2}px)`; } if (t[1].toLowerCase() === 'top') { element.style.top = '0%'; } else if (t[1].toLowerCase() === 'bottom') { element.style.bottom = '0%'; } else if (t[1].toLowerCase() === 'left') { element.style.left = '0%'; } else if (t[1].toLowerCase() === 'right') { element.style.right = '0%'; } else if (t[1].toLowerCase() === 'center') { element.style.left = `calc(50% - ${element.offsetWidth / 2}px)`; } } });

document.querySelectorAll('[transform]').forEach(element => element.style.transform = element.getAttribute('transform'));

document.querySelectorAll('[flex]').forEach(element => { let s = element.getAttribute('flex').split(" "); if (s.includes("inline")) { element.style.display = "inline-flex"; } else { element.style.display = "flex"; } s.forEach(val => { if (["column", "column-reverse", "row", "row-reverse"].includes(val)) { element.style.flexDirection = val; } else if (["wrap", "no-wrap"].includes(val)) { element.style.flexWrap = val; } }); console.warn("attribute [flex] will only use the last values inserted in the attribute, for example if [flex] is flex=\"row column\", it will only use column", "\n", element); });
document.querySelectorAll('[justify-content]').forEach(element => element.style.justifyContent = element.getAttribute('justify-content'));
document.querySelectorAll('[align-items]').forEach(element => element.style.alignItems = element.getAttribute('align-items'));

document.querySelectorAll('[vertical-align]').forEach(element => element.style.verticalAlign = element.getAttribute('vertical-align'));

document.querySelectorAll('img[fit]').forEach(element => element.style.objectFit = element.getAttribute('fit'));

document.querySelectorAll('[grid-columns]').forEach(element => element.style.gridTemplateColumns = element.getAttribute('grid-columns'));
document.querySelectorAll('[grid-rows]').forEach(element => element.style.gridTemplateRows = element.getAttribute('grid-rows'));
document.querySelectorAll('[grid-gap]').forEach(element => element.style.gridGap = element.getAttribute('grid-gap'));
document.querySelectorAll('[grid-area]').forEach(element => element.style.gridArea = element.getAttribute('grid-area'));

document.querySelectorAll("[text-border]").forEach(element => {element.style.textShadow = `0 1px ${element.getAttribute("text-border")}, 1px 0px ${element.getAttribute("text-border")}, 0px -1px ${element.getAttribute("text-border")}, -1px 0px ${element.getAttribute("text-border")}`});
document.querySelectorAll("[text-shadow]").forEach(element => {element.style.textShadow = element.getAttribute("text-shadow")});
  
document.querySelectorAll("[box-shadow]").forEach((element) => {element.style.boxShadow = element.getAttribute("box-shadow")});
document.querySelectorAll("[gradient]").forEach(e => {const v = e.getAttribute("gradient").trimStart().split("/");let t="";v[0] === "linear" ? t = "linear" : (v[0] === "circle" || v[0] === "circular" || v[0] === "radial" ? t = "radial" : (console.error("[gradient] attribute's first value is not accepted", $(this).get(0)), -1));e.style.backgroundImage=`${t}-gradient(${v[1]})`})
