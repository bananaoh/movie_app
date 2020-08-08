import React from "react";
const fs = require('fs');

class Detail extends React.Component{
    componentDidMount() {
        const { location, history } = this.props;
        console.log(history);
        if(location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if(location.state) {
            return <span>{location.state.title}</span>
        } else {
            return null;
            // -> componentDidMount에서 홈으로 보내줌
        }
    }

    createFile(filename, content) {
        console.log(`hi : ${filename}`);
        fs.writeFile(`data/${filename}`, content, 'utf8', (err)=>{
            if (err) return console.log(err);
        }); 
    }
}

export default Detail;