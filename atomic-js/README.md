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
```html
<div display="block"><div>
```

### Border
Define el valor de <b>border</b> del elemento
<br>
Este contiene variaciones para:
<br>
&emsp;border-top/right/bottom/left 
<br>
&emsp;border-width/style/color
<br>
```html
<div border="1px solid black" border-style="solid double dotted dashed" border-color="blue green red yellow"><div>
```
El atributo <b>border</b> permite tambien definir los balores de cada lado en una misma declaración.<br>
&emsp;Si se colocan dos valores, el primero sera el <b>border-top</b> y <b>border-bottom</b>, y el segundo sera <b>border-left</b> y <b>border-right</b><br>

```html
<div border="1px solid black, 2px solid blue,"><div>
```
&emsp;Si se colocan tres valores, el primero sera el <b>border-top</b>, el segundo sera <b>border-left</b> y <b>border-right</b> y el tercero sera <b>border-bottom</b><br>
```html
<div border="1px solid black, 2px solid blue, 3px solid red"><div>
```
&emsp;Si se colocan quatro valores, el primero sera el <b>border-top</b>, el segundo sera <b>border-right</b>,el tercero sera <b>border-bottom</b> y el cuarto sera <b>border-left</b> <br>
```html
<div class="example">
    <div border="1px solid black, 2px solid blue, 3px solid red, 4px solid green"><div>
</div>
```

### Outline
El atributo <b>outline</b> funciona de la misma manera que el de [border](#border) pero con la diferencia de que no acepta los valores de <span attr>outline-width</span>, <span attr>outline-style</span> y <span attr>outline-color</span>
```html
<div outline="1px solid black"><div>
```

### Margin
El atributo <b>margin</b> define los margenes de un elemento
<br>Este contiene variaciones para:
<br>&emsp;Margin top
<br>&emsp;Margin right
<br>&emsp;Margin bottom
<br>&emsp;Margin left
<br>&emsp;Margin horizontal
<br>&emsp;Margin vertical
```html
<div
    margin="10px" margin="10px 20px" margin="10px 20px 30px" margin="10px 20px 30px 40px"
    margin-top="10px" margin-right="10px" margin-bottom="10px" margin-left="10px"
    margin-horizontal="10px" margin-vertical="10px">
<div>
```


### Padding
El atributo <b>padding</b> tiene el mismo funcionamiento que [margin](#margin) pero afectando al padding del elemento
```html
<div padding="10px 20px"><div>
```

### Border Radius<span id="borderRadius"/>
El atributo <b>border-radius</b> define la curvatura de las diferentes esquinas de un elemento
```html
<div border-radius="10px"><div>
```
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
```html
<div font="10px sans-serif bolder underline"><div>
```
Este contiene variaciones para:
<br>&emsp;font-family
<br>&emsp;font-size
<br>&emsp;font-weight
<br>&emsp;font-wtyle

### Sizes <span id="sizes"></span>
En este apartado se muestran varios atributos que definen el tamaño de un elemento
#### &emsp;width
```html
<div width="10px"><div>
```

#### &emsp;height
```html
<div height="10px"><div>
```

#### &emsp;vw
&emsp;define el valor de width aplicando un valor de vw como tamaño
```html
<div vw="10"><div>
```

#### &emsp;vh
&emsp;define el valor de height aplicando un valor de vh como tamaño
```html
<div vh="10"><div>
```


### Position
Define el valor de <b>position</b>
```html
<div position="relative"><div>
```
Tambien se puede usar junto a los siguientes atributos
<br>&emsp;top
<br>&emsp;right
<br>&emsp;bottom
<br>&emsp;left
<br>&emsp;center&emsp;&emsp;<i>Este SOLO tiene como valores: vertical, horizontal y true</i>

### Relative
El atributo <b>relative</b> define la posicion relativa de el elemento respecto al padre, y acepta como maximo dos valores
<br>
Se puede utilizar como valores; top/bototm/rigth/left/center o tambien se puede definir con pixeles (pero estos guardaran los pixeles como posiciones para <u>top</u> y <u>left</u>)
```html
<div relative="top center"><div>
```
```html
<div relative="10px 20px"><div>
```

### Absolute
El atributo <b>absolute</b> funciona exactamente de la misma forma que el atributo [relative](#relative) pero definiendo la posicion absoluta del elemento en respecto del elemento relativo padre
<br>
Se puede utilizar como valores; top/bototm/rigth/left/center o tambien se puede definir con pixeles (pero estos guardaran los pixeles como posiciones para <u>top</u> y <u>left</u>)
```html
<div relative="top center"><div>
```
```html
<div relative="10px 20px"><div>
```

### Flex
El atributo <b>flex</b> define los valores de flex de un elemento. (Este incluye el valor de display:flex por defecto)
```html
<div flex="row wrap center space-between"><div>
```
Si se añade el valor inline en el atributo, definira al contenedor como inline-flex
```html
<div flex="inline column no-wrap flex-end space-around"><div>
```

### Grid
Los atributos <b>grid-</b> definen los valores de grid de un contenedor
<br><span style="color: gray">Aun no se ha creado el atributo <u>grid</u> general para definir todo a la vez</span>
<br>
Las variaciones de grid son:
<br>&emsp;grid-columns
<br>&emsp;grid-rows
<br>&emsp;grid-gap
<br>&emsp;grid-area

```html
<div style="display: grid;" grid-columns="repeat(2, 1fr)" grid-rows="repeat(2, 200px)" grid-gap="20px">
    <article style="border: 1px solid black" grid-area="1/1/2/3"><article>
    <article style="border: 1px solid black" grid-area=""><article>
    <article style="border: 1px solid black" grid-area=""><article>
</div>

```

<hr>

## Varios
Estos son atributos de estilos varios que no forman parte de ninguna categoria en concreto
### &emsp;transform
```html
<div transform="scaleX(-1)"><div>
```

### &emsp;vertical-align
```html
<div vertical-align="top"><div>
```

### &emsp;line-height
```html
<div line-height="10px"><div>
```

### &emsp;letter-spacing
```html
<div letter-spacing="10px"><div>
```

### &emsp;word-spacing
```html
<div word-spacing="10px"><div>
```

### &emsp;img[fit]
```html
<img src="" alt="" fit="cover">
```

### &emsp;box-shadow
```html
<div box-shadow="3px 3px 8px black"><div>
```

### &emsp;text-border
&emsp;&emsp;Define un border alrededor de las letras del texto mediante el uso de text-shadow<br>
&emsp;&emsp;<i>Si se utliza a la vez que [text-shadow] solo se aplicara el valor del ultimo añadido en la etiqueta html</i>
```html
<p text-border="red">Hola Mundo</p>
```

### &emsp;text-border
&emsp;&emsp;<span style="color: gray;">Si se utliza a la vez que [text-border] solo se aplicara el valor del ultimo añadido en la etiqueta html</span>
```html
<p text-shadow="red">Hola Mundo</p>
```
<!-- <span attr></span>  -->
