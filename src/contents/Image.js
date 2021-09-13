import {useState} from 'react';

export default function Image(){
    let imgArr = ['img/075.jpg','img/076.jpg','img/077.jpg','img/078.jpg',
    'img/079.jpg','img/080.jpg','img/081.jpg','img/082.jpg'];
    let [num,setNum] = useState(0);

    function change(){
        console.log(num)
        if(num < 8){
            setNum(num+1);
        }else{
            setNum(0);
        }
    }
    return(
        <>
        <div className="con-img">
        
            <img src={imgArr[num]} alt="" className="img-1"/>
            <div className="M-btn">
            <p className="btn"><a onClick={change}>Next</a></p>
            </div>
        </div>
        </>
    );
}