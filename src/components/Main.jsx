import styled from 'styled-components'
import {macbook, ipad, mobile, miniMobile} from '../responsive'
import {useState, useEffect} from "react";
import '../App.css'
import {
    Instagram,
    Telegram,
    Facebook
} from '@mui/icons-material';


const Subscribe = styled.div`
  ${mobile({display: "none"})}
`;


const Div = styled.div`
  width: 90vw;
  height: 90vh;
  //margin: auto;
  padding: 80px 80px;
  background-color: #f0f5fd;
  box-sizing: border-box;
  ${mobile({
    padding: 0, 
    borderRadius: "10px",
  })}
  ${ipad({margin: "auto"})}
  //box-sizing: content-box;
`;

const Word = styled.div`
  word-break: keep-all;
  word-wrap: break-word;
  position: relative;
  z-index: 1;
  width: 100%;
  height: min-content;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  //justify-content: flex-end;
  //align-content: center;
  //align-items: center;
  text-align: left;
  box-sizing: border-box;
  //box-sizing: content-box;
  ${mobile({
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "10px",
    // height: "min-height"
  })}
  
`


const Image = styled.div`
  position: absolute;
  z-index: 0;
  top: 37%;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  justify-content: flex-end;
  right: 10px;
  width: 50%;
  ${ipad({
    width: "60%",
    top: "50%"
  })}
  ${mobile({display: "none"})}
  &::after{
    content: "";
    position: absolute;
    width: 232.39px;
    height: 172.75px;
    background-image: url("https://techmission.pro/wp-content/themes/techmission/img/home/banner-dots.png");
    right: 20%;
    bottom: -5%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
`;
const Button = styled.div`
  margin-top: 2%;
  width: fit-content;
  height: auto;
`;

const Toggler = styled.div`
  width: fit-content;
  height: max-content;
  color: black;
`;




export default function Main(){
    const [addClass, setAddClass] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setAddClass(!addClass);
        }, 2000);
        return () => clearInterval(interval);
    });



    return(
        <div className="main">
            <Subscribe>
                <div className="subscribe-div">
                    <span className="subscribe">Follow</span>
                    <span><Instagram/></span>
                    <span className="line"> </span>
                    <span><Telegram/></span>
                    <span className="line"> </span>
                    <span><Facebook/></span>
                </div>
            </Subscribe>
            <Div>
                <Word>
                    <h1 className="word">
                        Astrum
                    </h1>
                    <h3 className="sub-word">
                        инновационное IT образование в <br/>
                        Украине по стандартам Silicon Valley с <br/> гарантированным трудоустройством
                    </h3>
                    <p className="sub-text">тебя ждет программирование, тестирование, прокачка
                        soft-скиллов, <br/> крутое резюме и внушительное портфолио проектов</p>
                    <Button>
                        <a href="/" className="button_consultation">
                            Бесплатная консультация
                            <svg width="30" height="15" viewBox="0 0 30 15" fill="#303030" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21.7721 0.0666504L20.4359 1.27938L26.3823 6.67581H0V8.39088H26.3823L20.4359 13.7873L21.7721 15L30 7.53329L21.7721 0.0666504Z"/>
                            </svg>
                        </a>
                    </Button>

                    <Toggler>
                        {addClass ? (<p className="">
                            НЕ ОСТАВАЙСЯ НА МЕСТЕ - ДВИГАЙСЯ ✊
                        </p>) : (<p className="">
                            НАША TECH МИССИЯ -
                            <br/>
                            РАЗВИТЬ НАВЫКИ 21-ГО DIGITAL ВЕКА
                        </p>)}


                    </Toggler>
                </Word>



                <Image>
                    <img src="https://techmission.pro/wp-content/uploads/2020/12/monitor.png" alt=""/>
                </Image>
            </Div>
        </div>
    )
}