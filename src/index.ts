export interface IElementPath {
    tagName: string;
    index: number;
    child: IElementPath | null;
}

export function createElementPath(element: HTMLElement, childPath: IElementPath | null = null) : IElementPath {
    if (element === document.body) {
        return {
            tagName: element.tagName,
            index: 0,
            child: childPath
        };
    }

    let ix = 0;
    const siblings = (element.parentNode as Node).childNodes;
    for (var i = 0; i < siblings.length; i++) {
        const sibling = siblings[i] as HTMLElement;
        if (sibling === element) {
            return createElementPath(element.parentNode as HTMLElement,
                {
                    tagName: element.tagName,
                    index: ix,
                    child: childPath
                });
        }
        if (sibling.nodeType === 1 && sibling.tagName === element.tagName) {
            ix++;
        }
    }

    return {
        tagName: element.tagName,
        index: 0,
        child: childPath
    };
}

export function navigateToElementByPath(currentElement:HTMLElement, xPath:IElementPath) : HTMLElement | null {
    const children = Array.from(currentElement.childNodes).filter(node => (node as HTMLElement).tagName === xPath.tagName) as HTMLElement[];
    const child = children[xPath.index]
    if (xPath.child === null) {
        return child;
    }
    return navigateToElementByPath(child, xPath.child);
}