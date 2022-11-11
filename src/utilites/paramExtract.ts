// the interface that will hold the query paramters
interface paramters {
  filename: string;
  width: string;
  height: string;
}

const queryParams = (query: string): paramters | null => {
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
  } else {
    return null;
  }
};
export default queryParams;
