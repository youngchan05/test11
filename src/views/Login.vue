<template>
    <div class="login-section">
        <h1 class="logo">
          <img src="../assets/logo/logo_login.png" alt="" />
        </h1>
        <div class="login-set">
          <label for="email">이메일</label>
          <input
            type="text"
            id="email"
            class="input"
            placeholder="이메일 주소"
          />
        </div>
        <div class="login-set">
          <label for="password">비밀번호</label>
          <input
            type="password"
            id="password"
            class="input"
            placeholder="비밀번호"
          />
        </div>
        <!-- /.input-set -->
        <div class="login-util">
          <span class="checkbox">
            <input type="checkbox" />
            <span>로그인 상태 유지</span>
          </span>
          <span class="checkbox">
            <input type="checkbox" />
            <span>이메일 기억하기</span>
          </span>
        </div>
        <!-- /.login-util -->
        <button type="button" class="login-btn type-red">로그인</button>
        <p class="login-for">
          <a href="#">비밀번호가 생각나지 않으시나요?</a>
        </p>
        <div class="login-info">
          <p>
            Web에서는 기관투자자만 로그인 가능합니다.<br />
            개인투자자들은 LG디스플레이 앱을 이용해 주시기 바랍니다.
          </p>
        </div>
        <!-- /.login-info -->
      </div>
</template>
<style lang="scss">
@import "@/style/_mixin.scss";
.login {
display:flex;
justify-content: center;
align-items: center;
&-section {
    width:100%;
    max-width:490px ;
    .logo {
        text-align: center;
        margin-bottom:74px;
    }
}
&-set {
    label {
        display:inline-block;
        margin-bottom:10px;
        font-family: Roboto;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.2px;
        color: #545454;
    }
    input {
        height:56px;
        border-radius: 6px;
        &::placeholder {
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 22px;
            letter-spacing: -0.41px;
            color: #8E8E93;
        }
    }
    + .login-set {
        margin-top:30px;
    }
}
&-util {
    display:flex;
    margin-top:22px;
    .checkbox {
        +.checkbox {
            margin-left:56px;
        }
    }
}
&-btn {
        width:100%;
        height:64px;
        margin-top:58px;
        font-weight: 500;
        font-size: 21px;
        line-height: 62px;
        text-align: center;
        letter-spacing: -0.41px;
        background: #D80546;
        border-radius: 6px;
}
&-for {
    margin-top:30px;
    text-align: center;
    a {
        display:inline-block;
        padding-left:24px;
        font-size: 16px;
        line-height: 23px;
        letter-spacing: -1px;
        color: #545454;
        @include bg(bg/bg_password ,$pos:left center);
    }
}
&-info {
    padding-top:24px;
    margin-top:110px;
    border-top:1px solid #E5E5EA;
    p {
        font-size: 14px;
        line-height: 22px;
        text-align: center;
        letter-spacing: -0.5px;
        color: #8E8E93;
    }
}
}
@media screen and (max-width: 768px) {
    .login {
    position: relative;
    padding-top: 0;

    &-section {
        padding: 0 24px;

        .logo {
            margin-bottom: 43px;

            img {
                height: 28px;
            }
        }

        &-set {
            label {
                display: none;
            }

            +.login-set {
                margin-top: 13px;
            }
        }
    }

    &-util {
        .checkbox {
            &+.checkbox {
                margin-left: 22px;
            }
        }
    }

    &-btn {
        margin-top: 38px;
        height: 56px;
        line-height: 56px;
    }

    &-for {
        a {
            padding-left: 20px;
            font-size: 12px;
            line-height: 17px;
            background-size: 12px auto;
        }
    }

    &-info {
        margin-top: 30px;
        padding-top: 18px;

        p {
            font-size: 12px;
            line-height: 17px;
        }
    }
}
}
</style>
