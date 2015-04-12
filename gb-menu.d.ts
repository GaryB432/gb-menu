declare module Gb {
    interface IOptions {
        buttons: IButton[];
        activeHref?: string;
        css?: IClasses;
    }
    interface IClasses {
        container: string;
        caption: string;
        button: IButtonClasses;
    }
    interface IButtonClasses {
        button: string;
        buttonOn: string;
        buttonOff: string;
        buttonFirst: string;
        buttonLast: string;
    }
    interface IButton {
        href: string;
        title: string;
    }
    class Menu {
        private options;
        constructor(options: IOptions);
        applyTo(container: HTMLElement): void;
    }
}
