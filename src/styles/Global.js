import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
 
    html, body {
        min-height: 100vh;
    }

    body {
        background: ${p => p.theme.colors.gray900};
    }

    #root {
        height: 100%;
    }
 
    .Calendar{
        .active {
            color: ${p => p.theme.colors.primary};
            background: none;
        }
        z-index:0;
        display: flex;
        flex-direction:column;
        
        width:100%;
        color:none;
        background: ${p => p.theme.colors.gray800} ;

        &__header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            color: ${p => p.theme.colors.gray100};
            &__header .Calendar__monthYearContainer .Calendar__monthYear.-shown{
                font-weight: 600;
                font-size: 20px;
            }
            
         
        
           
        }
        
        &__sectionWrapper .Calendar__section{
           
        }
        &__sectionWrapper .Calendar__section.-shown {
            padding:0;
            position:relative;

        }
        &__sectionWrapper .Calendar__section.-shown .Calendar__weekRow .Calendar__day.-ltr{
            font-size: 20px; 
            color: ${p => p.theme.colors.gray100};
            

        }
        &__sectionWrapper .Calendar__section.-shown .Calendar__weekRow .Calendar__day.-ltr.-selected {
            color: ${p => p.theme.colors.primary};
            font-size: 20px; 
            background:${p => p.theme.utils.toRgba("#34D399", 0.1)};
           
            border-radius: 8px;
        }
        &__sectionWrapper .Calendar__section.-shown .Calendar__weekRow .Calendar__day.-ltr.-selectedBetween.-selected{
            color:${p => p.theme.colors.primary};
            background:${p => p.theme.colors.gray800};
        }
        &__sectionWrapper .Calendar__section.-shown .Calendar__weekRow .Calendar__day.-ltr.-selectedStart{
            color:${p => p.theme.colors.gray900};
            border-radius: 8px;
        } 
        &__sectionWrapper .Calendar__section.-shown .Calendar__weekRow .Calendar__day.-ltr.-selectedEnd{
            color:${p => p.theme.colors.primary};
            background:${p => p.theme.colors.gray700};
            border-radius: 8px;
        } 
        &__sectionWrapper .Calendar__section.-shown .Calendar__weekRow .Calendar__day.-ltr.-today {
           
           
        } 
        &__weekDays{
            padding:0;
        }
        &__weekDays abbr {
            font-size: 14px;
            border: none !important;
            text-decoration: none !important;
            cursor: pointer !important;
            color: ${p => p.theme.colors.gray300};
        }
    }


    .profile-nav, .profile-info{
        margin-top:30px;   
    }
    
    .profile-nav .user-heading {
        background: rgb(34, 34, 37);
        color: #fff;
        border-radius: 4px 4px 0 0;
        -webkit-border-radius: 4px 4px 0 0;
        padding: 30px;
        text-align: center;
    }
    
    .profile-nav .user-heading.round a  {
        border-radius: 50%;
        -webkit-border-radius: 50%;
        border: 10px solid rgba(255,255,255,0.3);
        display: inline-block;
    }
    
    .profile-nav .user-heading a img {
        width: 112px;
        height: 112px;
        border-radius: 50%;
        -webkit-border-radius: 50%;
    }
    
    .profile-nav .user-heading h1 {
        padding-top:10px;
        color: #fff;
        font-size: 22px;
        font-weight: 300;
        margin-bottom: 5px;
    }
    
    .profile-nav .user-heading p {
        font-size: 12px;
    }
    
    .profile-nav ul {
        margin-top: 1px;
    }
    
    .profile-nav ul > li {
        border-bottom: 1px solid #ebeae6;
        margin-top: 0;
        line-height: 30px;
    }
    
    .profile-nav ul > li:last-child {
        border-bottom: none;
    }
    
    .profile-nav ul > li > a {
        border-radius: 0;
        -webkit-border-radius: 0;
        color: #89817f;
        border-left: 5px solid #fff;
    }
    
    .profile-nav ul > li > a:hover, .profile-nav ul > li > a:focus, .profile-nav ul li.active  a {
        background: #f8f7f5 !important;
        border-left: 5px solid #fbc02d;
        color: #89817f !important;
    }
    
    .profile-nav ul > li:last-child > a:last-child {
        border-radius: 0 0 4px 4px;
        -webkit-border-radius: 0 0 4px 4px;
    }
    
    .profile-nav ul > li > a > i{
        font-size: 16px;
        padding-right: 10px;
        color: #bcb3aa;
    }
    
    .r-activity {
        margin: 6px 0 0;
        font-size: 12px;
    }
    
    
    .p-text-area, .p-text-area:focus {
        border: none;
        font-weight: 300;
        box-shadow: none;
        color: #c3c3c3;
        font-size: 16px;
    }
    
    .profile-info .panel-footer {
        background-color:#f8f7f5 ;
        border-top: 1px solid #e7ebee;
    }
    
    .profile-info .panel-footer ul li a {
        color: #7a7a7a;
    }
    
    .bio-graph-heading {
        background: #fbc02d;
        color: #fff;
        text-align: center;
        font-style: italic;
        padding: 40px 110px;
        border-radius: 4px 4px 0 0;
        -webkit-border-radius: 4px 4px 0 0;
        font-size: 16px;
        font-weight: 300;
    }
    
    .bio-graph-info {
        color: #89817e;
    }
    
    .bio-graph-info h1 {
        font-size: 22px;
        font-weight: 300;
        margin: 0 0 20px;
    }
    
    .bio-row {
        width: 50%;
        float: left;
        margin-bottom: 10px;
        padding:0 15px;
    }
    
    .bio-row p span {
        width: 100px;
        display: inline-block;
    }
    
    .bio-chart, .bio-desk {
        float: left;
    }
    
    .bio-chart {
        width: 40%;
    }
    
    .bio-desk {
        width: 60%;
    }
    
    .bio-desk h4 {
        font-size: 15px;
        font-weight:400;
    }
    
    .bio-desk h4.terques {
        color: #4CC5CD;
    }
    
    .bio-desk h4.red {
        color: #e26b7f;
    }
    
    .bio-desk h4.green {
        color: #97be4b;
    }
    
    .bio-desk h4.purple {
        color: #caa3da;
    }
    
    .file-pos {
        margin: 6px 0 10px 0;
    }
    
    .profile-activity h5 {
        font-weight: 300;
        margin-top: 0;
        color: #c3c3c3;
    }
    
    .summary-head {
        background: #ee7272;
        color: #fff;
        text-align: center;
        border-bottom: 1px solid #ee7272;
    }
    
    .summary-head h4 {
        font-weight: 300;
        text-transform: uppercase;
        margin-bottom: 5px;
    }
    
    .summary-head p {
        color: rgba(255,255,255,0.6);
    }
    
    ul.summary-list {
        display: inline-block;
        padding-left:0 ;
        width: 100%;
        margin-bottom: 0;
    }
    
    ul.summary-list > li {
        display: inline-block;
        width: 19.5%;
        text-align: center;
    }
    
    ul.summary-list > li > a > i {
        display:block;
        font-size: 18px;
        padding-bottom: 5px;
    }
    
    ul.summary-list > li > a {
        padding: 10px 0;
        display: inline-block;
        color: #818181;
    }
    
    ul.summary-list > li  {
        border-right: 1px solid #eaeaea;
    }
    
    ul.summary-list > li:last-child  {
        border-right: none;
    }
    
    .activity {
        width: 100%;
        float: left;
        margin-bottom: 10px;
    }
    
    .activity.alt {
        width: 100%;
        float: right;
        margin-bottom: 10px;
    }
    
    .activity span {
        float: left;
    }
    
    .activity.alt span {
        float: right;
    }
    .activity span, .activity.alt span {
        width: 45px;
        height: 45px;
        line-height: 45px;
        border-radius: 50%;
        -webkit-border-radius: 50%;
        background: #eee;
        text-align: center;
        color: #fff;
        font-size: 16px;
    }
    
    .activity.terques span {
        background: #8dd7d6;
    }
    
    .activity.terques h4 {
        color: #8dd7d6;
    }
    .activity.purple span {
        background: #b984dc;
    }
    
    .activity.purple h4 {
        color: #b984dc;
    }
    .activity.blue span {
        background: #90b4e6;
    }
    
    .activity.blue h4 {
        color: #90b4e6;
    }
    .activity.green span {
        background: #aec785;
    }
    
    .activity.green h4 {
        color: #aec785;
    }
    
    .activity h4 {
        margin-top:0 ;
        font-size: 16px;
    }
    
    .activity p {
        margin-bottom: 0;
        font-size: 13px;
    }
    
    .activity .activity-desk i, .activity.alt .activity-desk i {
        float: left;
        font-size: 18px;
        margin-right: 10px;
        color: #bebebe;
    }
    
    .activity .activity-desk {
        margin-left: 70px;
        position: relative;
    }
    
    .activity.alt .activity-desk {
        margin-right: 70px;
        position: relative;
    }
    
    .activity.alt .activity-desk .panel {
        float: right;
        position: relative;
    }
    
    .activity-desk .panel {
        background: #F4F4F4 ;
        display: inline-block;
    }
    
    
    .activity .activity-desk .arrow {
        border-right: 8px solid #F4F4F4 !important;
    }
    .activity .activity-desk .arrow {
        border-bottom: 8px solid transparent;
        border-top: 8px solid transparent;
        display: block;
        height: 0;
        left: -7px;
        position: absolute;
        top: 13px;
        width: 0;
    }
    
    .activity-desk .arrow-alt {
        border-left: 8px solid #F4F4F4 !important;
    }
    
    .activity-desk .arrow-alt {
        border-bottom: 8px solid transparent;
        border-top: 8px solid transparent;
        display: block;
        height: 0;
        right: -7px;
        position: absolute;
        top: 13px;
        width: 0;
    }
    
    .activity-desk .album {
        display: inline-block;
        margin-top: 10px;
    }
    
    .activity-desk .album a{
        margin-right: 10px;
    }
    
    .activity-desk .album a:last-child{
        margin-right: 0px;
    }

    .styled-input{
    background-color: rgb(34, 34, 37); 
    font-size: 16px; 
    color: rgb(250, 250, 250); 
    font-weight: 400; 
    padding: 12px 20px; 
    border: none;
    border-radius: 5px;
    &::-webkit-calendar-picker-indicator {
        background:none;
        display:none;
    }
`
export default Global
