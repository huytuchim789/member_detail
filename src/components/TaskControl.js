import React, { Component } from 'react';
import { Button } from 'antd';
import './../assets/styles/container.css'
class TaskControl extends Component {
    render() {
        return (
            <div className="task_control">
                <div className="back_btn">
                    <Button type="primary" size={'large'} className="btn"　style={{border:'2px solid black',borderRadius:'3px'}}>
                        バック
                    </Button>
                </div>
                <div className="control_btn">
                    <span className="member_label">メンバー詳細</span>
                    <Button type="primary" size={'large'} className="btn">
                    タスクー覧
                    </Button>
                    <Button type="primary" size={'large'} className="btn">
                        ガンチャート
                    </Button>
                    <Button type="primary" size={'large'} className="btn">
                        編集
                    </Button>
                    <Button type="primary" size={'large'} className="btn">
                        消去
                    </Button>
                </div>
            </div>
        );
    }
}

export default TaskControl;
