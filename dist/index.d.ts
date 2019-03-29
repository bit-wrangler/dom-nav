export interface IElementPath {
    tagName: string;
    index: number;
    child: IElementPath | null;
}
export declare function createElementPath(element: HTMLElement, childPath?: IElementPath | null): IElementPath;
export declare function navigateToElementByPath(currentElement: HTMLElement, xPath: IElementPath): HTMLElement | null;
