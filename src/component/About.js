// import React, {useState} from "react";

export default function About(props) {
    // const [myStyle, setmyStyle] = useState(
    // {
    //     color: 'black',
    //     backgroundColor: 'white',
    //     border : '1px solid black'
    // });

    // const [btnText, setbtnText] = useState("Enable Dark Mode")
    // const toggleStyle = () => {
    //     if(myStyle.color === 'white'){
    //         setmyStyle({
    //             color : 'black',
    //             backgroundColor : 'white',
    //             border : '1px solid black'
    //         });
    //         setbtnText('Enable dark Mode');
    //     }
    //     else{
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor : 'black',
    //             border : '1px solid white'
    //         });
    //         setbtnText('Enable Light Mode');
    //     }
    // }
  return (
    <div className="container rounded" style={{ backgroundColor: props.mode === 'light'?'white':'black'}}>
        <h2 className="my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}><b>About us</b></h2>
      <div className="accordion" id="accordionExample">
        <div className="card" style={{ backgroundColor: props.mode === 'light'?'white':'black'}}>
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button
                className="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Collapsible Group Item #1
              </button>
            </h2>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
            style={{ color: props.mode === 'light' ? 'black' : 'white' }}
          >
            <div className="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div className="card" style={{ backgroundColor: props.mode === 'light'?'white':'black'}}>
          <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
              <button
                className="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Collapsible Group Item #2
              </button>
            </h2>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
            style={{ color: props.mode === 'light' ? 'black' : 'white' }}
          >
            <div className="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div className="card" style={{ backgroundColor: props.mode === 'light'?'white':'black'}}>
          <div className="card-header" id="headingThree">
            <h2 className="mb-0">
              <button
                className="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Collapsible Group Item #3
              </button>
            </h2>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionExample"
            style={{ color: props.mode === 'light' ? 'black' : 'white' }}
          >
            <div className="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
      </div>
      {/* <button type="button" onClick={toggleStyle} className="btn btn-primary my-3">{btnText}</button> */}
    </div>
  );
}
