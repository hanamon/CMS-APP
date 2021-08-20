const listField = [
  {
    list_id: 1,
    field_name: 'user_id',
    set_field_name: '등록 번호',
    visibility: false
  },
  {
    list_id: 1,
    field_name: 'user_login',
    set_field_name: '아이디',
    visibility: true,
    order_by: 'login'
  },
  {
    list_id: 1,
    field_name: 'user_name',
    set_field_name: '이름',
    visibility: true,
    order_by: 'name'
  },
  {
    list_id: 1,
    field_name: 'user_email',
    set_field_name: '닉네임',
    visibility: true
  },
  {
    list_id: 1,
    field_name: 'user_email',
    set_field_name: '이메일',
    visibility: true,
    order_by: 'email'
  },
  {
    list_id: 1,
    field_name: 'user_mobile',
    set_field_name: '휴대폰',
    visibility: true
  },
  {
    list_if: 1,
    field_name: 'user_role',
    set_field_name: '역할',
    visibility: true
  }
];

export default listField;
