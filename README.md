# packaged gb-menu

This repo is for distribution on `npm` and `bower`.

## Install

You can install this package either with `npm` or with `bower`.

### npm

```shell
npm install gb-menu
```

Add a `<script>` to your `index.html`:

```html
<script src="/node_modules/gb-menu/gb-menu.js"></script>
```

### bower

```shell
bower install gb-menu
```

Either way, use the menu like this

```html
<html>
    <head>
        <link rel="stylesheet" href="style.css">
    </head>
<body>
    <div id="menu"></div>
    <script src="gb-menu.js"></script>
    <script>
        window.addEventListener("load", function () {
            new Gb.Menu({
                buttons: [
		            { title: "Item 1", href: "#/page1" },
		            { title: "Item 2", href: "#/page2" },
		            { title: "Item 3", href: "#/page3" }
                ],
                activeHref: '#/page2',
                css: {
                    container: 'gbNavContainer',
                    caption: "gbNavButtonInnerDiv",
                    button: {
                        button: 'gbNavButton',
                        buttonOn: "gbNavButtonOn",
                        buttonOff: "gbNavButtonOff",
                        buttonFirst: "gbNavButtonFirst",
                        buttonLast: "gbNavButtonLast"
                    }
                }
            }).applyTo(document.getElementById('menu'));
        });
    </script>
</body>
</html>
```

This will apply the menu as defined to the menu element like this:

```html
<div id="menu">
    <div class="gbNavContainer">
        <div class="gbNavButton gbNavButtonOff gbNavButtonFirst">
            <a href="#/page1">
                <div class="gbNavButtonInnerDiv">Item 1</div>
            </a>
        </div>
        <div class="gbNavButton gbNavButtonOn">
            <div class="gbNavButtonInnerDiv">Item 2</div>
        </div>
        <div class="gbNavButton gbNavButtonOff gbNavButtonLast">
            <a href="#/page3">
                <div class="gbNavButtonInnerDiv">Item 3</div>
            </a>
        </div>
    </div>
</div>
```

## License

The MIT License

Copyright (c) 2015 Gary Bortosky

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
