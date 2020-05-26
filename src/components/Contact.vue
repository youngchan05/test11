<template>
    <div class="board-wrap">
        <div class="board-header">
            <p>IR Contact<span>LG디스플레이 IR 페이지에 방문해 주셔서 감사합니다.<br>
                LG디스플레이는 주주의 권리 보호를 위해 노력하며, 함께 성장하는 기업입니다.</span></p>
            <!-- /.sns -->
            <ul class="contact-info">
                <li>
                    <span>주소</span>
                    서울특별시 영등포구 여의대로 128, LG트윈타워
                </li>
                <li>
                    <span>전화</span>
                    02-3773-1114
                </li>
                <li>
                    <span>이메일</span>
                    ir@lgdisplay.co.kr
                </li>
            </ul>
            <div class="sns">
                <a href="#" class="home"></a>
                <a href="#" class="blog"></a>
                <a href="#" class="facebook"></a>
                <a href="#" class="twitter"></a>
                <a href="#" class="youtube"></a>
                <a href="#" class="instagram"></a>
            </div>
            <div class="direct-link is_pc">
                <a href="">
                    IR앱 다운로드
                    <span>편하게 앱으로 LG디스플레이의 소식을 접하세요.  ></span>
                </a>
                <a href="">
                    IR 미팅 예약하기
                    <span>기관투자자님들의 방문을 기다리고 있습니다.  ></span>
                </a>
            </div>
            <!-- /.direct-link -->
        </div>
    </div>
</template>
<script>
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.contact-info {
margin-top: 23px;
li {
    position: relative;
    padding-left: 110px;
    font-size: 16px;
    line-height: 23px;
    color: #313439;
    span {
        position: absolute;
        left: 0;
        top: 0;
    }
    +li {
        margin-top: 16px;
    }
}
}

.direct-link {
display: flex;
margin-top: 55px;
a {
    display: block;
    width: calc(50% - 13px);
    padding: 18px 0;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: #313439;
    background: #F2F2F2;
    border-radius: 4px;
    text-align: center;
    span {
        display: inline-block;
        margin-left: 30px;
        font-size: 12px;
        line-height: 26px;
        color: #313439;

    }

    +a {
        margin-left: 13px;
    }
}
}
@media screen and (max-width: 768px) {
.contact-info {
    margin-top: 0;
    padding-top: 13px;
    border-top: 1px solid #EFEFF4;

    li {
        padding-left: 0;
        font-size: 14px;
        line-height: 20px;

        span {
            display: block;
            position: static;
            margin-bottom: 10px;
            font-size: 14px;
            line-height: 20px;
            color: #8E8E93;
        }
    }
}
}
</style>
