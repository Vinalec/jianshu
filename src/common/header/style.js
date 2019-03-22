import styled from 'styled-components';
import logopic from '../../statics/logo.png';
export const HeaderWrapper = styled.div`
    height:58px;
    border-bottom: 1px solid #f0f0f0;
    position:relative;
    z-index: 1;

`;
export const Logo = styled.a`
    position:absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:58px;
    background:url(${logopic});
    background-size:contain;

`;
export const Nav = styled.div`
    width:960px;
    margin:0 auto;
    height:100%;
   
`;
export const SearchWrapper = styled.div`
   float:left;
   position:relative;
   .zoom{
    position:absolute;
    top:19px;
    right:10px;
    border-radius:15px;
    font-size:22px;
    text-align:center;
    color:#969696;
    &.focused{
        background:#a0a0a0;
        color:#fff;

    }
   }
`;
export const NavItem = styled.div`
    line-height:58px;
    padding:0 15px;
    color:#333;
    margin-right:13px;
    font-size:17px;
    &.active{// 为组件加上类选择器等于  className='left active'
        color:#ea6f5a;
    }
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color: #969696;

    }
`;
export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    border-radius:19px;
    outline:none;//input聚焦后边框无颜色
    border:none;
    background:#eee;
    margin-top:9px;
    padding:0 40px 0 20px;
    box-sizing: border-box;
    margin-left:22px;
    &::placeholder {//为此组件的placeholder属性加上样式
        color: #999;
    }
    &.focused{
        width:220px;

    }
    &.slide-enter{
      transition:all .5s ease-out;
   }
   &.slide-enter-active{
      width:220px;
   }
   &.slide-exit{
      transition:all .5s ease-out;

   }
   &.slide-exit-active{
       width:160px;
   }
`;
export const SearchInfo=styled.div`
    position:absolute;
    top:58px;
    transform:translateX(15%);   
    width:220px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background:#fff;
   

`;
export const SearchInfoTitle =styled.div`
    margin-top: 20px;
    margin-left: 15px;
    // line-height: 20px;
    font-size: 14px;
    color: #969696;

`;
export const SearchInfoSwitch = styled.span`
    float:right;
    font-size:13px;
    margin-right:15px;
    .spin{
        font-size:11px;
        margin-right:2px;
    }

`;
export const SearchInfoList = styled.div`
    margin-left:15px;
    margin-top:15px;

`;
export const SearchInfoItem = styled.a`
    font-size:12px;
    border: 1px solid #ddd;
    color: #a59b9b;
    margin-right:10px;
    border-radius: 3px;
    margin-bottom:10px;
    padding:6px;
    display:block;
    float:left;

`;
export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:58px;

`;
export const Button = styled.button`
    border-radius:20px;
    float:left;
    margin-top:9px;
    border: 1px solid #ea6f5a;
    height:38px;
    padding:6px 21px;
    margin-right:15px;
    font-size:15px;
    &.reg{
        color:#ea6f5a;
        background:#fff;
    }
    &.writing{
        background: #ea6f5a;
        color:#fff;
    }
    

`