"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const queryParams = (query) => {
    //extracting the query from the url
    const parameters = new URLSearchParams('?' + query);
    //extreacting  paramters like file name and the sizes
    const filename = parameters.get('filename');
    const width = parameters.get('width');
    const height = parameters.get('height');
    // if the extracted values are not null it will exported if not
    //a the cheker boolean will set to fasle
    //and a dummy object will be exported "it will not be used"
    if (width != null && height != null && filename != null) {
        return { filename, width, height };
    }
    else {
        return null;
    }
};
exports.default = queryParams;
