/**
 * @desc 响应状态码
 */
module.exports.rescode = {
  // 成功
  ok: '100',
  // 数据库读写错误
  dberror: '001',
  // 非法用户名
  invalidAuthname: '002',
  // 非法email
  invalidEmail: '003',
  // 非法密码
  invalidPwd: '004',
  // 用户名已存在
  comflictAuthname: '005',
  // 昵称已存在
  comflictNickname: '006',
  // 未找到
  notfound: '007',
  // 通用错误码
  error: '008'
};
