import {CircularProgress} from "@mui/material";
import styled from "styled-components";


export const LoadingStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Loading = () => {

  return (
    <LoadingStyle>
      <CircularProgress />
    </LoadingStyle>
  );
};

export default Loading;
