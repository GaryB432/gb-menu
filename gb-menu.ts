﻿module Gb {
    "use strict";
    export interface IOptions {
        buttons: IButton[];
        activeHref?: string;
        css?: IClasses;
    }

    export interface IClasses {
        container: string;
        caption: string;
        button: IButtonClasses;
    }

    export interface IButtonClasses {
        button: string;
        buttonOn: string;
        buttonOff: string;
        buttonFirst: string;
        buttonLast: string;
    }

    export interface IButton {
        href: string;
        title: string;
    }

    export class Menu {
        constructor(private options: IOptions) {
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
                }
            }
        }

        applyTo(container: HTMLElement, doc: Document = document): void {
            container.setAttribute("class", this.options.css.container);

            this.options.buttons.forEach((btn: IButton, n: number) => {
                var buttonDiv = doc.createElement("div"),
                    innerDiv = doc.createElement("div"),
                    anchor = doc.createElement("a"),
                    active = btn.href === this.options.activeHref,
                    buttonClasses: string[] = [this.options.css.button.button, active ? this.options.css.button.buttonOn : this.options.css.button.buttonOff];

                if (n === 0) {
                    buttonClasses.push(this.options.css.button.buttonFirst);
                }
                if (n === this.options.buttons.length - 1) {
                    buttonClasses.push(this.options.css.button.buttonLast);
                }

                buttonDiv.setAttribute("class", buttonClasses.join(" "));

                innerDiv.innerText = btn.title;
                anchor.href = btn.href;

                innerDiv.setAttribute("class", this.options.css.caption);

                if (active) {
                    buttonDiv.appendChild(innerDiv);
                } else {
                    anchor.appendChild(innerDiv);
                    buttonDiv.appendChild(anchor);
                }
                container.appendChild(buttonDiv);
            });
        }

        static create(options: IOptions, container: HTMLElement, doc: Document = document): HTMLElement {
            new Menu(options).applyTo(container, doc);
            return container;
        }
    }
}

