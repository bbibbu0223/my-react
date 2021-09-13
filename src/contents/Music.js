import FMusic from "../json/music.json";

export default function Music(){
    console.log(FMusic);
    
        return (
            
            <div className="f-music">
                
            
            
                {FMusic.map((w,k)=>(
                <a className="music-wrap" href={w.link}>
                <div className="music">
                    <picture>
                    <img src={w.img}/>
                    </picture>
                    <div className="m-info">
                        <p className="music-title">{w.title}</p>
                        <p className="music-text">{w.text}</p>
                    </div>
                </div>
                </a>
                ))
            }
            </div>

            
        );
    }
    




