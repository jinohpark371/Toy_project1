import styled from "styled-components";
import Card from "./components/Card/Card";
import Sidebar from "./components/SideBar";
import { TRIPS } from "./api/trips.ts";

const Page = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 16px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 16px;
  h1 {
    margin: 0;
  }
  span {
    color: var(--muted);
    font-size: 14px;
  }
`;

// 사이드바 + 그리드 묶는 컨테이너
const Content = styled.section`
  display: flex;
  gap: 24px;
  height: 1200px;
`;

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4열 고정 */
  grid-template-rows: repeat(4, 1fr);    /* 3행 고정 */
  gap: 16px;
  height: fit-content; 
`;

export default function App() {
  return (
    <Page>
      <Header>
        <h1>Triplan</h1>
        <span>{TRIPS.length} trips</span>
      </Header>
      <Content>
        <Sidebar onFilterChange={() => {}} 
          onSortChange={() =>{}}
        ></Sidebar>
      <Grid>
        {TRIPS.map((it) => (
          <Card key={it.id} item={it} />
        ))}
      </Grid>
      </Content>
    </Page>
  );
}
