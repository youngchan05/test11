<template>
  <div id="app">
    <router-view/>
  </div>
</template>
 <style lang="scss" scoped>
    #app {
      height:100%;
    }
 </style>
<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,500,700|Roboto:300,400,500,700&display=swap&subset=korean');
html,
body {
    height: 100%;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video,
button {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: top;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
}
input::placeholder {
    font-family: 'Noto Sans KR', sans-serif;
}
.en {
    font-family: 'Roboto', sans-serif;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}

button {
    border: none;
    cursor: pointer;
    outline: none;
}

body {
    line-height: 1;
}

ol,
ul {
    list-style: none;
}

a {
    text-decoration: none;
}

blockquote,
q {
    quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none;
}

table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}
</style>
