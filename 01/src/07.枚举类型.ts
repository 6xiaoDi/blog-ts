enum HTTP_CODE {
    OK = 200,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED        
  };
  // 200
  HTTP_CODE.OK;
  // 405
  HTTP_CODE.METHOD_NOT_ALLOWED;
  // error
  HTTP_CODE.OK = 1;