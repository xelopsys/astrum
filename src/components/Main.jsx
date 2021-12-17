import styled from 'styled-components'
import {mobile} from '../responsive'
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
  height: 100vh;
  //margin: auto;
  padding: 80px 80px;
  background-color: #f0f5fd;
`;

const Word = styled.div`
  width: fit-content;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: left;
`

export default function Main(){
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

                </Word>
            </Div>
        </div>
    )
}