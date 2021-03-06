import React from 'react'
import styled from 'styled-components'
function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6385/656385-h" />
            </Background>
            <Controls>
                <PlayButton>
                    <img src="./images/play-icon-black.png"></img>
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                <img src="./images/play-icon-white.png"></img>
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>

                </AddButton>
                <GroupWatchButton>

                </GroupWatchButton>
            </Controls>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const Controls = styled.div`
    display:flex;
    
`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background-color: rgb(249, 249,249);
    border: none;
    padding: 0px 24px;
    letter-spacing: 1.8px;
    cursor: pointer;
    &:hover{
        background: rgb(198,198,198);
    }
    
`
const TrailerButton = styled(PlayButton)`
    background: rgba(0,0,0,0.3);
    border: 1px solid rgb(249,249,249);
    color: rgb(249,249,249);
    
`
const AddButton = styled.button`

`
const GroupWatchButton = styled.button`

`