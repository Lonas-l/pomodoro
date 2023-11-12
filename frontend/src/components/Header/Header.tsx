import React, {useEffect, useState} from "react";
import "./Header.scss";
import LogoSVG from "../SVGIcons/LogoSVG";
import Button from "../Button/Button";
import {getUser} from "../../service/authService";

interface HeaderProps {
    token: string
}

function Header({token}: HeaderProps) {

    const [isUserMenuDropdown, setIsUserMenuDropdown] = useState<boolean>(false);

    const [userName, setUserName] = useState<string>('')

    useEffect(() => {
        getUser(token).then(r => setUserName(r.username));
    }, []);

    const logOut = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("isAuthorize");
        window.location.reload();
    };

    return (
        <header className={"header"}>
            <LogoSVG/>
            <div className={"userBlock"}>
                <p className={"userName"} onClick={() => setIsUserMenuDropdown(!isUserMenuDropdown)}>{userName}</p>
                {isUserMenuDropdown &&
                    <div className={"userMenuDropdown"}>
                        <Button className={"menuButton"} variant={"secondary"} mode={"pomodoro"} onClick={logOut}>
                            Log Out
                        </Button>
                    </div>
                }

            </div>

        </header>
    );
}

export default Header;