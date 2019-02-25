const picError = "https://images.unsplash.com/photo-1515524738708-327f6b0037a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";

const checkPic = (src) => {
  if(src === "N/A") {
    return picError;
  } else {
    return src;
  }
}

export default checkPic; 