<svg>
<style>
    .example {
        border: 1px solid black;
        background-color: white;
        color: black;
        padding: 10px;
        margin: 15px 0;
    }
    span[tag] {
        color: red;
    }
    span[attr] {
        color: green
    }
</style>

# Atomic.js

Atomic js es un pequeño proyecto que permite definir estilos css al escribir-los directamente en el html como atributos.

## Lista de Atributos:

- [Display](#display)
- [Border](#border)
- [Outline](#outline)
- [Margin](#margin)
- [Padding](#padding)
- [Border Radius](#borderRadius)
- [Font](#font)
- [Sizes](#sizes)
- [Position](#position)
- [Relative](#relative)
- [Absolute](#absolute)
- [Flex](#flex)
- [Grid](#grid)
- [Varios](#varios)

<hr>

### Display
Define el valor de <b>display</b> del elemento
<div class="example">
    &lt;<span tag>div</span> <span attr>display</span>="block"&gt;&lt\<span tag>div</span>&gt;
</div>

### Border
Define el valor de <b>border</b> del elemento
<br>
Este contiene variaciones para:
<br>
&emsp;border-top/right/bottom/left 
<br>
&emsp;border-width/style/color
<br>
<div class="example">
    &lt;<span tag>div</span> <span attr>border</span>="1px solid black" <span attr>border-style</span>="solid doule dotted dashed" <span attr>border-color</span>="blue green red yellow"  &gt;&lt\<span tag>div</span>&gt;
</div>
El atributo <b>border</b> permite tambien definir los balores de cada lado en una misma declaración.<br>
&emsp;Si se colocan dos valores, el primero sera el <b>border-top</b> y <b>border-bottom</b>, y el segundo sera <b>border-left</b> y <b>border-right</b><br>
<div class="example">
    &lt;<span tag>div</span> <span attr>border</span>="1px solid black, 2px solid blue," &gt;&lt\<span tag>div</span>&gt;
</div>
&emsp;Si se colocan tres valores, el primero sera el <b>border-top</b>, el segundo sera <b>border-left</b> y <b>border-right</b> y el tercero sera <b>border-bottom</b><br>
<div class="example">
    &lt;<span tag>div</span> <span attr>border</span>="1px solid black, 2px solid blue, 3px solid red" &gt;&lt\<span tag>div</span>&gt;
</div>
&emsp;Si se colocan quatro valores, el primero sera el <b>border-top</b>, el segundo sera <b>border-right</b>,el tercero sera <b>border-bottom</b> y el cuarto sera <b>border-left</b> <br>
<div class="example">
    &lt;<span tag>div</span> <span attr>border</span>="1px solid black, 2px solid blue, 3px solid red, 4px solid green" &gt;&lt\<span tag>div</span>&gt;
</div>

### Outline
El atributo <b>outline</b> funciona de la misma manera que el de [border](#border) pero con la diferencia de que no acepta los valores de <span attr>outline-width</span>, <span attr>outline-style</span> y <span attr>outline-color</span>
<div class="example">
    &lt;<span tag>div</span> <span attr>outline</span>="1px solid black"  &gt;&lt\<span tag>div</span>&gt;
</div>

### Margin
El atributo <b>margin</b> define los margenes de un elemento
<br>Este contiene variaciones para:
<br>&emsp;Margin top
<br>&emsp;Margin right
<br>&emsp;Margin bottom
<br>&emsp;Margin left
<br>&emsp;Margin horizontal
<br>&emsp;Margin vertical
<div class="example">
    &lt;<span tag>div</span> 
        <span attr>margin</span>="10px" 
        <span attr>margin</span>="10px 20px" 
        <span attr>margin</span>="10px 20px 30px" 
        <span attr>margin</span>="10px 20px 30px 40px" 
        <span attr>margin-top</span>="10px"
        <span attr>margin-right</span>="10px"
        <span attr>margin-bottom</span>="10px"
        <span attr>margin-left</span>="10px"
        <span attr>margin-horizontal</span>="10px"
        <span attr>margin-vertical</span>="10px"
    &gt;
    <br>
    &lt\<span tag>div</span>&gt;
</div>

### Padding
El atributo <b>padding</b> tiene el mismo funcionamiento que [margin](#margin) pero afectando al padding del elemento
<div class="example">
    &lt;<span tag>div</span> <span attr>padding</span>="10px 20px"  &gt;&lt\<span tag>div</span>&gt;
</div>

### Border Radius<span id="borderRadius"/>
El atributo <b>border-radius</b> define la curvatura de las diferentes esquinas de un elemento
<div class="example">
    &lt;<span tag>div</span> <span attr>border-radius</span>="10px"  &gt;&lt\<span tag>div</span>&gt;
</div>
Este contiene variaciones para:
<br>&emsp;border-top-left-radius
<br>&emsp;border-top-right-radius
<br>&emsp;border-bottom-left-radius
<br>&emsp;border-bottom-right-radius
<br>&emsp;border-top-radius
<br>&emsp;border-bottom-radius
<br>&emsp;border-right-radius
<br>&emsp;border-left-radius

### Font
El atributo <b>font</b> y sus variaciones definen los estilos font del elemento
<div class="example">
    &lt;<span tag>div</span> <span attr>font</span>="10px sans-serif bolder underline"  &gt;&lt\<span tag>div</span>&gt;
</div>
Este contiene variaciones para:
<br>&emsp;font-family
<br>&emsp;font-size
<br>&emsp;font-weight
<br>&emsp;font-wtyle

### Sizes <span id="sizes"></span>
En este apartado se muestran varios atributos que definen el tamaño de un elemento
#### &emsp;width
<div class="example" style="margin-left: 10px;">
    &lt;<span tag>div</span> <span attr>width</span>="10px"  &gt;&lt\<span tag>div</span>&gt;
</div>

#### &emsp;height
<div class="example" style="margin-left: 10px;">
    &lt;<span tag>div</span> <span attr>height</span>="10px"  &gt;&lt\<span tag>div</span>&gt;
</div>

#### &emsp;vw
&emsp;define el valor de width aplicando un valor de vw como tamaño
<div class="example" style="margin-left: 10px;">
    &lt;<span tag>div</span> <span attr>vw</span>="10"  &gt;&lt\<span tag>div</span>&gt;
</div>

#### &emsp;vh
&emsp;define el valor de height aplicando un valor de vh como tamaño
<div class="example" style="margin-left: 10px;">
    &lt;<span tag>div</span> <span attr>vh</span>="10"  &gt;&lt\<span tag>div</span>&gt;
</div>


### Position
Define el valor de <b>position</b>
<div class="example">
    &lt;<span tag>div</span> <span attr>position</span>="relative"  &gt;&lt\<span tag>div</span>&gt;
</div>
Tambien se puede usar junto a los siguientes atributos
<br>&emsp;top
<br>&emsp;right
<br>&emsp;bottom
<br>&emsp;left
<br>&emsp;center&emsp;&emsp;<span style="color:gray">Este SOLO tiene como valores: vertical, horizontal y true</span>

### Relative
El atributo <b>relative</b> define la posicion relativa de el elemento respecto al padre, y acepta como maximo dos valores
<br>
Se puede utilizar como valores; top/bototm/rigth/left/center o tambien se puede definir con pixeles (pero estos guardaran los pixeles como posiciones para <u>top</u> y <u>left</u>)
<div class="example">
    &lt;<span tag>div</span> <span attr>relative</span>="top center"  &gt;&lt\<span tag>div</span>&gt;
</div>
<div class="example">
    &lt;<span tag>div</span> <span attr>relative</span>="10px 20px"  &gt;&lt\<span tag>div</span>&gt;
</div>

### Absolute
El atributo <b>absolute</b> funciona exactamente de la misma forma que el atributo [relative](#relative) pero definiendo la posicion absoluta del elemento en respecto del elemento relativo padre
<br>
Se puede utilizar como valores; top/bototm/rigth/left/center o tambien se puede definir con pixeles (pero estos guardaran los pixeles como posiciones para <u>top</u> y <u>left</u>)
<div class="example">
    &lt;<span tag>div</span> <span attr>relative</span>="top center"  &gt;&lt\<span tag>div</span>&gt;
</div>
<div class="example">
    &lt;<span tag>div</span> <span attr>relative</span>="10px 20px"  &gt;&lt\<span tag>div</span>&gt;
</div>

### Flex
El atributo <b>flex</b> define los valores de flex de un elemento. (Este incluye el valor de display:flex por defecto)
<div class="example">
    &lt;<span tag>div</span> <span attr>flex</span>="row wrap center space-between"  &gt;&lt\<span tag>div</span>&gt;
</div>
Si se añade el valor inline en el atributo, definira al contenedor como inline-flex
<div class="example">
    &lt;<span tag>div</span> <span attr>flex</span>=" inline column no-wrap flex-end space-arround"  &gt;&lt\<span tag>div</span>&gt;
</div>

### Grid
Los atributos <b>grid-</b> definen los valores de grid de un contenedor
<br><span style="color: gray">Aun no se ha creado el atributo <u>grid</u> general para definir todo a la vez</span>
<br>
Las variaciones de grid son:
<br>&emsp;grid-columns
<br>&emsp;grid-rows
<br>&emsp;grid-gap
<br>&emsp;grid-area

<div class="example">
    &lt;<span tag>div</span> <span attr>style</span>="display: grid;" <span attr>grid-columns</span>="repeat(2, 1fr)" <span attr>grid-rows</span>="repeat(2, 200px)" <span attr>grid-gap</span>="20px"    &gt;
    <br>
    &emsp;&lt;<span tag>article</span> <span attr>style</span>="border: 1px solid black" <span attr>grid-area</span>="1/1/2/3" &gt;&lt\<span tag>article</span>&gt;
    <br>
    &emsp;&lt;<span tag>article</span> <span attr>style</span>="border: 1px solid black" <span attr>grid-area</span>="" &gt;&lt\<span tag>article</span>&gt;
    <br>
    &emsp;&lt;<span tag>article</span> <span attr>style</span>="border: 1px solid black" <span attr>grid-area</span>="" &gt;&lt\<span tag>article</span>&gt;
    <br>
    &lt\<span tag>div</span>&gt;
</div>

<hr>

## Varios
Estos son atributos de estilos varios que no forman parte de ninguna categoria en concreto
### &emsp;transform
<div class="example" style="margin-left: 10px;">
    &lt;<span tag>div</span> <span attr>transform</span>="scaleX(-1)"  &gt;&lt\<span tag>div</span>&gt;
</div>

### &emsp;vertical-align
<div class="example" style="margin-left: 10px;">
    &lt;<span tag>div</span> <span attr>vertical-align</span>="top"  &gt;&lt\<span tag>div</span>&gt;
</div>

### &emsp;line-height
<div class="example" style="margin-left: 10px;">
    &lt;<span tag>div</span> <span attr>line-height</span>="10px"  &gt;&lt\<span tag>div</span>&gt;
</div>

### &emsp;letter-spacing
<div class="example" style="margin-left: 10px;">
    &lt;<span tag>div</span> <span attr>letter-spacing</span>="10px"  &gt;&lt\<span tag>div</span>&gt;
</div>

### &emsp;word-spacing
<div class="example" style="margin-left: 10px;">
    &lt;<span tag>div</span> <span attr>word-spacing</span>="10px"  &gt;&lt\<span tag>div</span>&gt;
</div>

### &emsp;img[fit]
<div class="example" style="margin-left: 10px;">
    &lt;<span tag>img</span> <span attr>src</span>="" <span attr>alt</span>="" <span attr>fit</span>="cover"  &gt;
</div>

### &emsp;box-shadow
<div class="example" style="margin-left: 10px;">
    &lt;<span tag>div</span> <span attr>box-shadow</span>="3px 3px 8px black"  &gt;&lt\<span tag>div</span>&gt;
</div>

### &emsp;text-border
&emsp;&emsp;Define un border alrededor de las letras del texto mediante el uso de text-shadow<br>
&emsp;&emsp;<span style="color: gray;">Si se utliza a la vez que [text-shadow] solo se aplicara el valor del ultimo añadido en la etiqueta html</span>
<div class="example" style="margin-left: 10px;">
    &lt;<span tag>p</span> <span attr>text-border</span>="red"  &gt;Hola Mundo&lt\<span tag>p</span>&gt;
</div>

### &emsp;text-border
&emsp;&emsp;<span style="color: gray;">Si se utliza a la vez que [text-border] solo se aplicara el valor del ultimo añadido en la etiqueta html</span>
<div class="example" style="margin-left: 10px;">
    &lt;<span tag>p</span> <span attr>text-shadow</span>="red"  &gt;Hola Mundo&lt\<span tag>p</span>&gt;
</div>
<!-- <span attr></span>  -->
</svg>
