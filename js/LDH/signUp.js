$(document).ready(function(){
    $('#btn_join').click(function(){
        // 아이디와 비밀번호는 영숫자 4~10자
        const pattern = /^[A-Za-z0-9]{4,10}$/;
      
      const $username = $('#username').val();
      const $password = $('#password').val();
      
      if($username==''||$password==''){
         alert('아이디와 비밀번호는 필수입력입니다.');
         return false;
      }
      if(pattern.test($username)==false||
         pattern.test($password)==false) {
         alert('아이디와 비밀번호는 영숫자 4~10자리 입니다');
         return false;
      }
      if(localStorage.includes($username))
      localStorage.setItem('username',$username);
      localStorage.setItem('password',$password);
      location.href = '../../public/login.html';

      localStorage.getItem('username',$username)
      
    });

 })