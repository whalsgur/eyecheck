var test = [
    {
        image:'1.PNG',
        answer:15,
        q:[15, 45, 16, 46],//x
    },
    {
        image:'2.PNG',
        answer:5,
        q:[5, 3, 6, '없음']
    },
    {
        image:'3.PNG',
        answer:75,
        q:[75, 16, 76, '없음']
    },
    {
        image:'4.PNG',
        answer:8,
        q:[8, 5, 6, '없음']
    },
    {
        image:'5.PNG',
        answer:48,
        q:[48, 13, 43, '없음']
    },
    {
        image:'6.PNG',
        answer:7,
        q:[7, 1, 2, '없음']
    },
    {
        image:'7.PNG',
        answer:'없음',
        q:[5, 3, 6, '없음']
    },
    {
        image:'8.PNG',
        answer:66,
        q:[66, 88, 86, '없음']
    },
    {
        image:'r.PNG',
        answer:16,
        q:[16, '없음', 18, 26]
    },
    {
        image:'ㄴ.PNG',
        answer:5,
        q:[5, '없음', 6, 3]
    },
    {
        image:'ㄷ.PNG',
        answer:15,
        q:[15, 17, '없음', 16]
    },
    {
        image:'ㄹ.PNG',
        answer:6,
        q:[6, 5, '없음', 8]
    },
    {
        image:'ㅁ.PNG',
        answer:97,
        q:[97, '없음', 87, 91]
    },
    {
        image:'ㅂ.PNG',
        answer:8,
        q:[8, 3, '없음', 6]
    },
    {
        image:'ㅅ.PNG',
        answer:26,
        q:[26, 6, 2, '없음']
    },
    {
        image:'ㅇ.PNG',
        answer:74,
        q:[74, 21, '없음', 24]
    },
    {
        image:'9.PNG',
        answer:6,
        q:[6, '없음', 8, 9]
    },
    {
        image:'10.PNG',
        answer:73,
        q:[73, '없음', 72, 13]
    },
    {
        image:'12.PNG',
        answer:29,
        q:[29, '없음', 39, 28]
    },
    {
        image:'13.PNG',
        answer:15,
        q:[15, '없음', 16, 25]
    },
    
    {
        image:'ㅈ.bmp',
        answer:9,
        q:[9, 6, 8, 0]
    },
    
    {
        image:'ㅊ.bmp',
        answer:73,
        q:[73, 78, 62, 29]
    },
    
    {
        image:'ㅋ.bmp',
        answer:52,
        q:[52, 5, 2, 62]
    },
    
    {
        image:'ㅌ.bmp',
        answer:'없음',
        q:['없음', 5, 3, 2]
    }
    
    // {
    //     image:'.bmp',
    //     answer:,
    //     q:[, , , ]
    // }
];

// for(var i=0; i<test.length; i++) {
//     box().append().size(100).image(test[i].image);
// }
// alert(test.length);
test.shuffle();

var check = [];//정답 오답 여부 배열
var nnn = 0;//문제 번호
var eye = 0;

var bgBox = box().append().size(400, 510).border(0).disableSelection();//전체 상자
var startBox = box().appendTo(bgBox).size('100%').border(0);//시작 화면 담는 박스
var testBox = box().appendTo(bgBox).size('100%').border(0).hide();//테스트 화면 담는 박스
var endBox = box().appendTo(bgBox).size('100%').border(0).hide();

box().appendTo(startBox).size('100%', 'auto').text('색맹 검사', 50).marginTop(30).border(0);//시작화면에 이름
var eyeBox = box().appendTo(startBox).size('40%').image('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJJFS_ALkXzi_Fw_Kl5LmQMnW5NQdFmr5RSvVICJretobsvnYQ')
.marginTop(45).border(0).click(clickEye);//눈 사진
box().appendTo(startBox).size('90%', 'auto').text('시작', 60).marginTop(30).border(0).click(startClick);//시작 버튼


box().appendTo(testBox).size('auto').text('보이는 숫자를 선택해 주세요', 20).border(0).marginTop(15);
var imgBox = box().appendTo(testBox).size(300).border(2).marginTop(15);//검사 사진 박스
var nowBox = box().appendTo(testBox).size('auto').textSize(20).border(0).block().margin('auto');//현재 진행 번호 담는 박스
var qBox1 = box().appendTo(testBox).size('100%', 'auto').border(0).marginTop(5);//보기들 담는 박스
var qBox2 = box().appendTo(testBox).size('100%', 'auto').border(0).marginTop(3);//보기들 담는 박스

box().appendTo(endBox).size('auto').text('결과', 50).block().margin('auto').marginTop(30).border(0);//결과
var endBox2 = box().appendTo(endBox).size('100%', 'auto').border(0);//결과 담기는 박스 clear를 해야 돼서 만듬
box().appendTo(endBox).size('40%', 'auto').text('다시하기', 30).block().margin('auto').marginTop(30).border(3, 'black', 20)
.click(reStart);//다시 시작하기 박스




function clickHome () {
    windowOpen('http://www.realcoding.co/vvv/qRGCPpRlJYm8WNdIaylwpbWPcgYXrMUv2J55vVCg65Y');
}

function startClick () { //시작 버튼 클릭 시 
    startBox.hide();
    endBox.hide();
    makeTest();
    testBox.show();
}

function clickEye () {
    
    if (eye == 0) {
        eyeBox.image('https://media.istockphoto.com/vectors/false-simple-eyelash-vector-icon-black-eyelash-illustration-on-white-vector-id833711222');
        eye = 1;
        return;
    }
    
    else if (eye == 1) {
        eyeBox.image('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJJFS_ALkXzi_Fw_Kl5LmQMnW5NQdFmr5RSvVICJretobsvnYQ');
        eye = 0;
        return;
    }
}

function makeTest () {//문제 만들기 사진, 보기 나오게함

    if (nnn == 10) {//끝나면 종료함수 호출
        finish();
        return;
    } 
    
    var now = test[nnn];//현재 문제의 JSON 불러오기
    
    
    nowBox.text(nnn+1  + '/' + 10);//현재 문제의 수 표시
    imgBox.image(now.image);//사진
    now.q.shuffle();//보기 랜덤 섞기
    
    qBox1.clear();//보기 담는 박스 청소
    qBox2.clear();//보기 담는 박스 청소


    for (var i=0; i<2; i++) {
        box().appendTo(qBox1).size('40%', 'auto').text(now.q[i], 30).padding('0 10').margin('5 15').click(okClick);//보기 2개 만들기
    }
    
    for (var i=2; i<4; i++) {
        box().appendTo(qBox2).size('40%', 'auto').text(now.q[i], 30).padding('0 10').margin('5 15').click(okClick);//보기 2개 만들기
    }
      
}

function okClick (bx) {//ok 클릭시 다음
    
    if (test[nnn].answer == bx.text()) {
        check.push('O');//정답이면 O를 정답 배열에
    }
    
    else {
        check.push('X');//오답이면 정답배열에 X
    }
    
    nnn++;//다음거 
    makeTest();//다른 문제 만들기

}

function finish () {//끜났을 때
    testBox.hide();
    endBox.show();
    
    for(var i=0; i<5; i++) {//1~5
        box().appendTo(endBox2).size('17%', 'auto').text(i+1, 30).padding(3).border(2, 'black', 5).marginTop(30);
    }
    
    
    
    for(var i=0; i<5; i++) { //1~5 O,X
        
        if(check[i] == 'O') {//O
            box().appendTo(endBox2).size('17%', 'auto').text(check[i], 30, 'blue').padding(3).border(2, 'black', 5);
        }
        
        
        else {//X
            box().appendTo(endBox2).size('17%', 'auto').text(check[i], 30, 'red').padding(3).border(2, 'black', 5);
        }
    }
    
    
    
    for(var i=5; i<10; i++) {//6~10
        box().appendTo(endBox2).size('17%', 'auto').text(i+1, 30).padding(3).border(2, 'black', 5).marginTop(20);
    }
    
    
    
    for(var i=5; i<10; i++) {//6~10 O,X
        
        if(check[i] == 'O') {//o
            box().appendTo(endBox2).size('17%', 'auto').text(check[i], 30, 'blue').padding(3).border(2, 'black', 5);
        }
        
        
        else {//X
            box().appendTo(endBox2).size('17%', 'auto').text(check[i], 30, 'red').padding(3).border(2, 'black', 5);
        }     
    }
    
}


function reStart () {//다시 시작하기 눌렀을 떼
    
    nnn = 0;//문제번호를 처음으로
    test.shuffle();//테스트 섞기
    endBox2.clear();//결과 지우기
    check = [];//정답 여부 배열 지우기
    endBox.hide();//결과 박스 숨기기
    testBox.show();//테스트 박스 나타내기
    makeTest();//테스트 만들기
    
}










