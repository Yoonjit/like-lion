import {
  EachPostLi,
  Footer,
  FooterBig,
  FooterSmall,
  Header,
  LoadingDiv,
  LoadingImg,
  Main,
  MediaDiv,
  PagenumberDiv,
  PagingSection,
  PostLink,
  PostListDiv,
  PostRepl,
  PostSection,
  PostTitle,
  PostTitleDiv,
  SlogunBig,
  SlogunSection,
  SlogunSmall,
  SubHeaderDiv,
  TitleBig,
  TitleLogoDiv,
  TitleSmall,
} from "./styledComponent";

// yarn add @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons
import {
  faSun,
  faMoon,
  faArrowsRotate,
  faPenToSquare,
  faLocationPin,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { GlobalStyles, darkTheme } from "./styles";
import { ThemeProvider } from "styled-components";
import LoadingIcon from "./loading.svg";

function App() {
  const darkMode = true;
  const loading = false;
  const isPost = false;
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <MediaDiv>
          <Header>
            <TitleLogoDiv>
              <TitleBig>멋사</TitleBig>
              <TitleSmall>익명게시판</TitleSmall>
            </TitleLogoDiv>
            <SubHeaderDiv>
              {darkMode ? (
                <div>
                  <FontAwesomeIcon icon={faSun} />
                </div>
              ) : (
                <div>
                  <FontAwesomeIcon icon={faMoon} />
                </div>
              )}
            </SubHeaderDiv>
          </Header>
          <Main>
            <SlogunSection>
              <SlogunBig>HACK YOUR LIFE</SlogunBig>
              <SlogunSmall>내 아이디어를 내 손으로 실현하다.</SlogunSmall>
            </SlogunSection>
            <PostSection>
              <PostTitleDiv>
                <FontAwesomeIcon icon={faArrowsRotate} />
                <PostTitle>익명게시판</PostTitle>
                <FontAwesomeIcon icon={faPenToSquare} />
              </PostTitleDiv>
              {loading ? (
                <LoadingDiv>
                  <LoadingImg src={LoadingIcon} />
                </LoadingDiv>
              ) : isPost ? (
                <LoadingDiv>누가 아무나 글 좀 써주세요</LoadingDiv>
              ) : (
                <ul>
                  <EachPostLi>
                    <div>
                      <FontAwesomeIcon icon={faLocationPin} />
                      <PostLink>학보, 시사N 대학기자상 취재</PostLink>
                    </div>
                    <PostRepl>[35]</PostRepl>
                  </EachPostLi>
                  <EachPostLi>
                    <div>
                      <FontAwesomeIcon icon={faLocationPin} />
                      <PostLink>학보, 시사N 대학기자상 취재</PostLink>
                    </div>
                    <PostRepl>[12]</PostRepl>
                  </EachPostLi>
                  <EachPostLi>
                    <div>
                      <FontAwesomeIcon icon={faLocationPin} />
                      <PostLink>학보, 시사N 대학기자상 취재</PostLink>
                    </div>
                    <PostRepl>[35]</PostRepl>
                  </EachPostLi>
                  <EachPostLi>
                    <div>
                      <FontAwesomeIcon icon={faLocationPin} />
                      <PostLink>아무것도 안 하고 누워있고 싶다</PostLink>
                    </div>
                    <PostRepl>[99]</PostRepl>
                  </EachPostLi>
                </ul>
              )}
              <PostListDiv></PostListDiv>
            </PostSection>
            <PagingSection>
              <PagenumberDiv>
                <FontAwesomeIcon icon={faArrowLeft} />
              </PagenumberDiv>
              <PagenumberDiv>2</PagenumberDiv>
              <PagenumberDiv>
                <FontAwesomeIcon icon={faArrowRight} />
              </PagenumberDiv>
            </PagingSection>
          </Main>
          <Footer>
            <FontAwesomeIcon icon={faReact} />
            <FooterBig>for react study</FooterBig>
            <FooterSmall>2023. by yjs</FooterSmall>
          </Footer>
        </MediaDiv>
      </ThemeProvider>
    </>
  );
}

export default App;
