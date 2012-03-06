$(function() { 

  $("#form-submit").click(function() { 
      // 验证是否为空代码 

      username = $("#username").val(); 
      if (username == "") { 
      alert('用户名不能为空');
      return false; 
      } 

      password = $("#password").val(); 
      if (password == "") { 
      alert('密码不能为空');
      return false; 
      }

      var request = $.ajax({ 
        type: "POST", 
        url: "http://youyanchu.com/api/fans/token", 
        data: {
          username: username,
          password: password 
        }, 
        success: function(data) { 
            localStorage.setItem('fansToken',data);
            window.location='show.html';
        }
      }); 
      request.fail(function(jqXHR, textStatus) {
        alert("用户名或密码错误，请重新输入");
      });
      //localStorage


      return false; 
  }); 
}); 

//歌迷用户注册部分代码
function signup(){
      name = $("#username").val(); 
      if (name == "") { 
      alert('用户名不能为空');
      return false; 
      } 

      password = $("#password").val(); 
      if (password == "") { 
      alert('密码不能为空');
      return false; 
      }


      mail = $("#email").val(); 
      if (mail == "") { 
      alert('邮箱不能为空');
      return false; 
      }
      
      pwc = $("#password_confirmation").val(); 
      if (pwc == "") { 
      alert('确认密码不能为空');
      return false; 
      }

      var request = $.ajax({ 
        type: "POST", 
        url: "http://youyanchu.com/api/fans/signup", 
        data: {
          user : {
                name: name,
                email: mail,
                password: pw, 
                password_confirmation: pwc 
             }
        }, 
        success: function(data) { 
            localStorage.setItem('fansToken',data);
            alert('Get Token');
        }
      }); 
      request.fail(function(jqXHR, textStatus) {
        alert("注册失败，请重新输入");
      });
      //localStorage
      return false; 
}
