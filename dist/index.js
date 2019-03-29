"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createElementPath(element, childPath) {
    if (childPath === void 0) { childPath = null; }
    if (element === document.body) {
        return {
            tagName: element.tagName,
            index: 0,
            child: childPath
        };
    }
    var ix = 0;
    var siblings = element.parentNode.childNodes;
    for (var i = 0; i < siblings.length; i++) {
        var sibling = siblings[i];
        if (sibling === element) {
            return createElementPath(element.parentNode, {
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
exports.createElementPath = createElementPath;
function navigateToElementByPath(currentElement, xPath) {
    var children = Array.from(currentElement.childNodes).filter(function (node) { return node.tagName === xPath.tagName; });
    var child = children[xPath.index];
    if (xPath.child === null) {
        return child;
    }
    return navigateToElementByPath(child, xPath.child);
}
exports.navigateToElementByPath = navigateToElementByPath;
