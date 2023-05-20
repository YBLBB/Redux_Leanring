import React, { memo } from 'react'
import User from './user'

const App = memo(() => {
    return (
        <div>
            <User></User>
            <hr />
            <button onClick={() => console.log('查询用户')}>查询用户</button>
            <button onClick={() => console.log('添加用户')}>添加用户</button>
            <button onClick={() => console.log('删除用户')}>删除用户</button>

        </div>
    )
})

export default App