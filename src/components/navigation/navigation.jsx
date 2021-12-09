import React, { useState, useEffect } from "react";
import "./navigation.css";

function Navigation() {
    const [scrolling, setScrolling] = useState(false);

    // useRef를 한번 사용해 보세요. DOM컨트롤 할때 사용

    const handleScroll = () => {
        if (window.scrollY === 0) {
            setScrolling(false);
        } else {
            setScrolling(true);
        }
    }
    window.addEventListener('scroll',handleScroll);

    useEffect(() => {
        // 윈도우 스크롤 이벤트 추가
        // effect
        return () => {
            // 윈도우 스크롤 이벤트 제거
        }
    }, [])
    return (
        <div className="container">
            <div className="leftMenu">
                <div className="logo">
                    <a href="/">&nsbp;</a>
                </div>
                <ul className="mainMenu">
                    <li className="menu-tab">
                        <a href="/">홈</a>
                    </li>
                    <li className="menu-tab">
                        <a href="/">TV 프로그램</a>
                    </li>
                    <li className="menu-tab">
                        <a href="/">영화</a>
                    </li>
                    <li className="menu-tab">
                        <a href="/">NEW! 요즘 대세 콘텐츠</a>
                    </li>
                    <li className="menu-tab">
                        <a href="/">내가 찜한 콘텐츠</a>
                    </li>
                </ul>
            </div>
            <div className="rightMenu">
                <div className="sideMenu">
                    <div className="searchBox" />
                </div>
                <div className="sideMenu">
                    <div className="kids">키즈</div>
                </div>
                <div className="sideMenu">
                    <div className="alarm" />
                </div>
                <div className="sideMenu ">
                  <div className="setting" />
                  <div className="caret" />
                </div>
            </div>
        </div>
    )
}
export default Navigation;