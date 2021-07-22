import React, { Component } from 'react';
import './../assets/styles/container.css'
class MemberDetail extends Component {
    render() {
        var member={
            avatar:'./img/avaCV.jpg',
            fullName:'Trần Huy Tú',
            email:'tran.huy.tu@sun-asterisk.com',
            category:['Category1','Category 2'],
            chatworkID:'2132131123',
            assignedJF:[{
                name:'JF1',
                date:'4/2022-7/2022'
            },
            {
                name:'JF1',
                date:'4/2022-7/2022'
            },
            {
                name:'JF1',
                date:'4/2022-7/2022'
            },
            {
                name:'JF1',
                date:'4/2022-7/2022'
            }
        ]};
        var listCategory=member.category.map(function(element,index){
            var listCate=document.getElementById('list_cate')
            return <tr style={{borderStyle:'none',display:'block',marginRight:'auto',marginLeft:'auto'}}>
           {element}
            </tr>
            
        })
        var listJF=member.assignedJF.map(function(element,index){
            return <tr style={{borderStyle:'none',display:'block',marginRight:'auto',marginLeft:'auto'}}>
            <td style={{borderStyle:'none',display:'inline-block',marginRight:'30px'}}>{element.name}</td>
            <td style={{borderStyle:'none',display:'inline-block'}}>{element.date}</td>
            </tr>
            
        })
        return (
                <table className="member_table">
                        <tr>
                            <th>アバター</th>
                            <td><img src={member.avatar} style={{width:"200px",height:"200px",display:'block',margin:'0 auto'}} id="avatar"></img></td>
                        </tr>
                        <tr>
                            <th>フルネーム</th>
                            <td>{member.fullName}</td>
                        </tr>
                        <tr>
                            <th>メールアドレス</th>
                            <td>{member.email}</td>
                        </tr>
                        <tr>
                            <th >カテゴリー</th>
                            <td id="list_cate">
                                {listCategory}
                            </td>
                        </tr>
                        <tr>
                            <th>チャットワークID</th>
                            <td><a href={"https://www.chatwork.com/"+member.chatworkID}>{member.chatworkID}</a></td>
                        </tr>
                        <tr>
                            <th id="jobfairs">アサインされたJF</th>
                            <td>{listJF}</td>
                        </tr>
                </table>
            
        );
    }
}

export default MemberDetail;
