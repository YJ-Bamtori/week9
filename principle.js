const card = document.querySelector(".card");
const input = document.querySelector("input[type ='range']");
const inputtext = document.querySelector("input[type ='text']");
const nameTag = document.querySelector(".name p");
const button = document.querySelector(".button img");
const title = document.querySelector("p.title");
const boxbutton = document.querySelector(".boxbutton");
const box = document.querySelectorAll(".box");
const switchcard = document.querySelector(".switch");
const line = document.querySelector(".line");
const sline = document.querySelector(".sline");
const textTag = document.querySelector(".text");
const content = document.querySelector(".content");
const bar = document.querySelector(".bar");

const front = document.querySelector(".front");
const back = document.querySelector(".back");

const principles = ["카드색상을 선택해주세요.", "영문 성함을 적어주세요.", "해외 서비스를 선택해주세요."]
    


    // 카드 색상 선택

    input.addEventListener("input", function() {
        // parseInt는 받은 데이터를 10진수인 정수로 변환해주는 함수
        switch (this.value) {
          case '1':
            card.style.backgroundImage = "linear-gradient(123.83deg, #DF3A33 14.68%, #B82F2A 85.32%)";
            nameTag.style.color = "#861F1B"
            line.style.backgroundImage = "linear-gradient(123.83deg, #A22824 14.68%, #9D1C18 85.32%)";
            sline.style.backgroundImage = "linear-gradient(90deg, #A12420 0%, #96221E 100%)";
            textTag.style.color = "#861F1B";

            break;
          case '2':
            card.style.backgroundImage = "linear-gradient(233.28deg, #F1FB55 15.2%, #DDE73B 86.49%)";
            nameTag.style.color = "#989F19"
            line.style.backgroundImage = "linear-gradient(178.21deg, #BFC82C 23.93%, #C3CD26 76.07%)";
            sline.style.backgroundImage = "linear-gradient(90deg, #C1CB2A 0%, #B9C225 100%)";
            textTag.style.color = "#989F19";

            break;
          case '3':
            card.style.backgroundImage = "linear-gradient(123.83deg, #9B3DE5 14.68%, #7D3AB1 85.32%)";
            nameTag.style.color = "#4D0089"
            line.style.backgroundImage = "linear-gradient(178.21deg, #7C4AA4 23.93%, #6E369A 76.07%)";
            sline.style.backgroundImage = "linear-gradient(90deg, #7D44A9 0%, #6E369A 100%)";
            textTag.style.color = "#492963";

            break;
          case '4':
            card.style.backgroundImage = "linear-gradient(152.12deg, #2D2F33 7.94%, #262930 92.06%)";
            nameTag.style.color = "#676767"
            line.style.backgroundImage = "linear-gradient(178.21deg, #5C5E64 23.93%, #393C41 76.07%)";
            sline.style.backgroundImage = "linear-gradient(270deg, #50545C 0%, #5C5F64 100%)";
            textTag.style.color = "#7B7F86";
            break;  
        }
      });

    


      // 해외전용신용카드 버튼
      box.forEach((button, index) => {
        button.addEventListener("click", function() {
            // 모든 박스의 selected 클래스 제거
            box.forEach(box => {
                if (box !== button && box.classList.contains("selected")) {
                    box.classList.remove("selected");
                }
            });
    
            button.classList.toggle("selected");
            console.log("clicked");
    
            if (button.classList.contains("selected")) {
                switch (index) {
                    case 0:
                        document.querySelector(".brand").style.opacity = "100";
                        document.querySelector(".brand").style.display = "block";
                        document.querySelector(".brand").src = "https://i.postimg.cc/YqJsYM2f/card2.png";
                        break;
                    case 1:
                        document.querySelector(".brand").style.opacity = "100";
                        document.querySelector(".brand").style.display = "block";
                        document.querySelector(".brand").src = "https://i.postimg.cc/Y2DV2QJP/card3.png";
                        break;
                    case 2:
                        document.querySelector(".brand").style.opacity = "0";
                        break;
                        
                }
            }
        });
    });



    // 다음 버튼 누를 때 

    let number = 0;

    button.addEventListener("click", function() {
        number++;
    
        if (number > 3) {
            number = 3;
        }
        console.log(number);
    
        title.innerHTML = principles[number];
        // input 요소의 type 변경
        if (number === 0) {
            input.style.display = "block";
            inputtext.style.display = "none";
            boxbutton.style.display = "none";
            bar.style.width = "25vw";

        } else if (number === 1) {
          input.style.display = "none";
          inputtext.style.display = "block";
          bar.style.width = "50vw";
          //3~16자 사이로 안적으면 다음 버튼이 없게 하고싶은데 어떻게하는 건지 모르겠습니다......ㅠㅠ.ㅠ.ㅠ..ㅠ.ㅠ

        }else if (number === 2) {
          switchcard.classList.add("rotate");
          inputtext.style.display = "none";
          boxbutton.style.display = "flex";
          bar.style.width = "75vw";

          setTimeout(function() {
            document.querySelector(".front").style.display = "none";
            document.querySelector(".back").style.display = "block";
        }, 400);
      
        }else if (number === 3){
            switchcard.classList.remove("rotate");
            switchcard.style.transform = 'translateX(-90%)';
            content.style.opacity = "0";
            bar.style.width = "100vw";
            document.querySelector(".container").style.backgroundColor = '#26272C';


            setTimeout(function() {
              document.querySelector(".front").style.display = "block";
              document.querySelector(".back").style.display = "none";
          }, 400);
        }

        // 0.3초 뒤에 front display none, back display block switchcard가 .add rotate2로 180도 회전시키기
      }
    );
    

    inputtext.addEventListener("input", function() {
      nameTag.innerHTML = inputtext.value;
  });


