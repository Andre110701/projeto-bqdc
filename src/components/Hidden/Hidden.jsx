import * as S from "./Hidden.style";

export const Hidden = ({children,mobile,tablet,descktop }) => {
  return (
    <S.Hidden mobile={mobile} tablet={tablet} descktop={descktop}>
      {children} 
    </S.Hidden> 
  );
};