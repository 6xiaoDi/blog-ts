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
//   HTTP_CODE.OK = 1;

enum URLS  {
    USER_REGISETER = '/user/register',
    USER_LOGIN = '/user/login',
    // 如果前一个枚举值类型为字符串，则后续枚举项必须手动赋值
    INDEX = 1
}
URLS.USER_LOGIN;