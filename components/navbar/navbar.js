import Link from "next/link";
import { useRouter } from "next/router";
import { StatefulPopover } from "baseui/popover";
import { useState, useEffect, useCallback } from "react";
import CopilotLogos from "../../public/images/blacklogo.svg";
// import DropDownIcon from "../../public/images/Path.svg";
import {
  BlackButton,
  Container,
  PrimaryButton,
} from "../../styles/commonStyles";
import useMobileDevice from "../../hooks/useMobileDevice";
import { getCookie } from "../../services/analyticsService";
import {
  NavbarWrapper,
  NavbarInner,
  SalescampLogo,
  CopilotLogo,
  NavMenu,
  NavigationBlock,
  SpanLink,
  HeaderBtnGroup,
  SignInSignUpBtn,
  SignIn,
  DropDownToggle,
  DropdownSpan,
  DropdownMenu,
  DropDownLink,
  MobileMenu,
  FirstLine,
  SecondLine,
  ThirdLine,
  OverLayBlock,
  TrySalescampBlock,
} from "./styles";

export default function Navbar({ BlogDetails }) {
  const mobile = useMobileDevice();
  const router = useRouter();
  const [isUserLogin, setIsUserLogin] = useState(false);

  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const handleMobileMenu = useCallback(() => {
    setIsOpenMobileMenu(!isOpenMobileMenu);
  }, [isOpenMobileMenu]);
  let isScrollPage;
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  // set is user login or not
  const checkIsUserLogin = useCallback(() => {
    if (typeof window === "object") {
      const name = getCookie("cross-domain-name");
      const email = getCookie("cross-domain-email");
      if (name && email) {
        setIsUserLogin(true);
      }
    }
  }, [setIsUserLogin]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    checkIsUserLogin();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [checkIsUserLogin]);

  if (clientWindowHeight > 10) {
    isScrollPage = true;
  } else {
    isScrollPage = false;
  }

  const Navigation = () => {
    return (
      <>
        <NavMenu
          BlogDetails={BlogDetails}
          isOpenMobileMenu={isOpenMobileMenu}
          mobile={mobile}
        >
          <NavigationBlock>
            <SpanLink
              className={router.pathname === "/features" ? "active" : ""}
            >
              <Link href="/features">
                <a>Pricing</a>
              </Link>
            </SpanLink>
            <SpanLink
              className={router.pathname === "/features" ? "active" : ""}
            >
              <Link href="/features">
                <a>Features</a>
              </Link>
            </SpanLink>
            <SpanLink
              className={router.pathname === "/features" ? "active" : ""}
            >
              <Link href="/features">
                <a>Extensions</a>
              </Link>
            </SpanLink>
            <SpanLink
              className={router.pathname === "/features" ? "active" : ""}
            >
              <Link href="/features">
                <a>Company </a>
              </Link>
            </SpanLink>
            <SpanLink
              className={router.pathname === "/features" ? "active" : ""}
            >
              <Link href="/features">
                <a>Resources </a>
              </Link>
            </SpanLink>
            {!mobile && (
              <StatefulPopover
                content={DropDownList}
                overrides={{
                  Body: {
                    style: ({ $theme }) => ({
                      backgroundColor: "transparent",
                      borderRadius: "8px",
                      zIndex: "999",
                      marginTop: isScrollPage ? "24px" : "10px",
                    }),
                  },
                  Inner: {
                    style: ({ $theme }) => ({
                      backgroundColor: "transparent",
                      borderRadius: "8px",
                    }),
                  },
                }}
              >
                {/* <DropDownToggle>
                  <DropdownSpan>Resources</DropdownSpan>
                  <DropDownArrow>
                    <img src="/images/Path.svg"></img>
                  </DropDownArrow>
                </DropDownToggle> */}
              </StatefulPopover>
            )}
            {mobile && <DropDownList />}
            {/* <HorizontalLine></HorizontalLine> */}
          </NavigationBlock>
          <HeaderBtnGroup>
            <SignInSignUpBtn>
              <>
                <SignIn>
                  <Link href="/">
                    <a>Login</a>
                  </Link>
                </SignIn>
                <SignIn>
                  <Link href="/">
                    <a>Book demo</a>
                  </Link>
                </SignIn>
                <BlackButton>
                  <Link href="/">
                    <a>Start trial</a>
                  </Link>
                </BlackButton>
              </>
            </SignInSignUpBtn>
          </HeaderBtnGroup>
        </NavMenu>
        <TrySalescampBlock BlogDetails={BlogDetails} mobile={mobile}>
          <PrimaryButton>
            <Link href="/">
              <a>Try copilot</a>
            </Link>
          </PrimaryButton>
        </TrySalescampBlock>
      </>
    );
  };

  const DropDownList = () => {
    return (
      <>
        {mobile && (
          <DropDownToggle>
            <DropdownSpan>Resources</DropdownSpan>
          </DropDownToggle>
        )}
        <DropdownMenu>
          <DropDownLink
            className={router.pathname === "/blogs" ? "active" : ""}
          >
            <Link href="/blogs">
              <a>Blogs</a>
            </Link>
          </DropDownLink>
          <DropDownLink
            className={router.pathname === "/updates" ? "active" : ""}
          >
            <Link href="/updates">
              <a>Updates</a>
            </Link>
          </DropDownLink>
          <DropDownLink className={router.pathname === "/help" ? "active" : ""}>
            <Link href="/help">
              <a>Help Center</a>
            </Link>
          </DropDownLink>
          <DropDownLink>
            <Link href="/">
              <a data-nolt="button">Roadmap</a>
            </Link>
          </DropDownLink>
          <DropDownLink
            className={router.pathname === "/free-sales-tools" ? "active" : ""}
          >
            <Link href="/free-sales-tools">
              <a>Sales Tools</a>
            </Link>
          </DropDownLink>
        </DropdownMenu>
      </>
    );
  };

  return (
    <>
      <NavbarWrapper isScrollPage={isScrollPage}>
        <Container>
          <NavbarInner>
            <Link href="/">
              {isScrollPage && BlogDetails ? (
                <CopilotLogo
                  loading="lazy"
                  width="143"
                  height="31"
                  src={CopilotLogos.src}
                ></CopilotLogo>
              ) : BlogDetails ? (
                <SalescampLogo
                  loading="lazy"
                  width="143"
                  height="31"
                  src={CopilotLogos.src}
                ></SalescampLogo>
              ) : (
                <SalescampLogo
                  loading="lazy"
                  width="143"
                  height="31"
                  src={CopilotLogos.src}
                ></SalescampLogo>
              )}
            </Link>
            {mobile ? (
              <OverLayBlock
                onClick={() => {
                  setIsOpenMobileMenu(false);
                }}
                isScrollPage={isScrollPage}
                isOpenMobileMenu={isOpenMobileMenu}
              >
                <Navigation />
              </OverLayBlock>
            ) : (
              <Navigation />
            )}

            <MobileMenu onClick={handleMobileMenu}>
              <FirstLine
                isOpenMobileMenu={isOpenMobileMenu}
                BlogDetails={BlogDetails}
                isScrollPage={isScrollPage}
              ></FirstLine>
              <SecondLine
                isOpenMobileMenu={isOpenMobileMenu}
                BlogDetails={BlogDetails}
                isScrollPage={isScrollPage}
              ></SecondLine>
              <ThirdLine
                isOpenMobileMenu={isOpenMobileMenu}
                BlogDetails={BlogDetails}
                isScrollPage={isScrollPage}
              ></ThirdLine>
            </MobileMenu>
          </NavbarInner>
        </Container>
      </NavbarWrapper>
    </>
  );
}
