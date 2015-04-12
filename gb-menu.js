var Gb;
(function (Gb) {
    "use strict";
    var Menu = (function () {
        function Menu(options) {
            this.options = options;
            if (!this.options.css) {
                this.options.css = {
                    container: 'gbNavContainer',
                    caption: "gbNavButtonInnerDiv",
                    button: {
                        button: 'gbNavButton',
                        buttonOn: "gbNavButtonOn",
                        buttonOff: "gbNavButtonOff",
                        buttonFirst: "gbNavButtonFirst",
                        buttonLast: "gbNavButtonLast"
                    }
                };
            }
        }
        Menu.prototype.applyTo = function (container) {
            var _this = this;
            container.setAttribute("class", this.options.css.container);
            this.options.buttons.forEach(function (btn, n) {
                var buttonDiv = document.createElement("div"), innerDiv = document.createElement("div"), anchor = document.createElement("a"), active = btn.href === _this.options.activeHref, buttonClasses = [_this.options.css.button.button, active ? _this.options.css.button.buttonOn : _this.options.css.button.buttonOff];
                if (n === 0) {
                    buttonClasses.push(_this.options.css.button.buttonFirst);
                }
                if (n === _this.options.buttons.length - 1) {
                    buttonClasses.push(_this.options.css.button.buttonLast);
                }
                buttonDiv.setAttribute("class", buttonClasses.join(" "));
                innerDiv.innerText = btn.title;
                anchor.href = btn.href;
                innerDiv.setAttribute("class", _this.options.css.caption);
                if (active) {
                    buttonDiv.appendChild(innerDiv);
                }
                else {
                    anchor.appendChild(innerDiv);
                    buttonDiv.appendChild(anchor);
                }
                container.appendChild(buttonDiv);
            });
        };
        return Menu;
    })();
    Gb.Menu = Menu;
})(Gb || (Gb = {}));

//# sourceMappingURL=gb-menu.js.map