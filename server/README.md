# CMS Web Server

- 회원 가입 이메일 인증 - 링크 클릭 방식 사용
- 비밀번호 단방향 암호화 - 해시 기법 사용
- 회원 및 관리자 인증 - 토큰 인증 방식 사용
- 게시물 페이지네이션
- 게시물 검색 및 조건

## API

- [POST] /login
- [POST] /signup
- [GET] /logout

- [GET] /mypage/dashboard
- [GET/PUT/POST] /mypage/posts
- [GET/PUT/POST] /mypage/comments
- [GET/PUT] /mypage/profile
- [GET/PUT] /mypage/account

- [GET] /admin/dashboard
- [GET/PUT/POST/DELETE] /admin/posts
- [GET/PUT/POST/DELETE] /admin/users
- [GET/PUT] /admin/settings/general
