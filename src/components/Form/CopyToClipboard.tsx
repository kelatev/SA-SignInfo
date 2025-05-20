import React from 'react';

interface ChildProps {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

interface CopyToClipboardProps {
    text: string
    children: React.ReactElement<ChildProps>,
    onCopy: (text: string, result: boolean) => void,
    options?: {
        debug?: boolean,
        message?: string,
        format?: string
    }
}

export function CopyToClipboard(props: CopyToClipboardProps) {
    const {
        text,
        onCopy,
        options,
        children,
        ...chord
    } = props;

    const elem = React.Children.only(children);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        const result = copy(text, options);

        if (onCopy) {
            onCopy(text, result);
        }

        // Bypass onClick if it was present
        if (elem && elem.props && typeof elem.props.onClick === 'function') {
            elem.props.onClick(event);
        }
    };

    return React.cloneElement(elem, { ...chord, onClick: handleClick });
}

var deselectCurrent = require("toggle-selection");

function copy(text: string, options?: {
    debug?: boolean,
    format?: string,
    onCopy?: (data: DataTransfer | null) => void
}) {
    var debug: boolean,
        reselectPrevious,
        range,
        selection,
        mark,
        success = false;
    if (!options) {
        options = {};
    }
    debug = options.debug || false;
    try {
        reselectPrevious = deselectCurrent();

        range = document.createRange();
        selection = document.getSelection();

        mark = document.createElement("span");
        mark.textContent = text;
        // avoid screen readers from reading out loud the text
        mark.ariaHidden = "true"
        // reset user styles for span element
        mark.style.all = "unset";
        // prevents scrolling to the end of the page
        mark.style.position = "fixed";
        mark.style.top = '0';
        mark.style.clip = "rect(0, 0, 0, 0)";
        // used to preserve spaces and line breaks
        mark.style.whiteSpace = "pre";
        // do not inherit user-select (it may be `none`)
        mark.style.userSelect = "text";
        mark.addEventListener("copy", (e) => {
            e.stopPropagation();
            if (options.format) {
                e.preventDefault();
                e.clipboardData?.clearData();
                e.clipboardData?.setData(options.format, text);
            }
            if (options.onCopy) {
                e.preventDefault();
                options.onCopy(e.clipboardData);
            }
        });

        document.body.appendChild(mark);

        range.selectNodeContents(mark);
        selection?.addRange(range);

        var successful = document.execCommand("copy");
        if (!successful) {
            throw new Error("copy command was unsuccessful");
        }
        success = true;
    } catch (err) {
        debug && console.error("unable to copy using execCommand: ", err);
    } finally {
        if (selection) {
            if (typeof selection.removeRange == "function") {
                range && selection.removeRange(range);
            } else {
                selection.removeAllRanges();
            }
        }

        if (mark) {
            document.body.removeChild(mark);
        }
        reselectPrevious();
    }

    return success;
}