import styled from "styled-components/native";

export const  Container = styled.TextInput`
width: 95%;
height: 54px;
margin: 10px 0;

background-color: ${({theme}:any) => theme.COLORS.NEUTRO};
color: ${({theme}:any) => theme.COLORS.PRIMARY_800};
`
;