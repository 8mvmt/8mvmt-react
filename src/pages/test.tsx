import { useStarknet } from "@starknet-react/core";
import { Navig, Homeb1, Homeb2, Footer, Metaverse } from "../components/home";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";


function TestPage() {
  const { account } = useStarknet();
  const NUM_TRANS = [
    {
      fig: 8,
      op: {
        range: [0.25, 0.5],
        output: [0, 2],
      },
    },
  ];

  const [items, setItems] = useState(NUM_TRANS);

  const transitions = useTransition(items, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 200,
    onRest: () => setItems([]),
  });

  useEffect(() => {
    if (items.length === 0) {
      setTimeout(() => {
        setItems(NUM_TRANS);
      }, 2000);
    }
  }, [items]);

  return (
    <>
      <Parallax pages={19.3} className="bg-black" style={{}}>
        <ParallaxLayer offset={0} speed={0.5} style={{}}>
          <div className="bg-black w-screen grid place-content-center justify-items-center">
            <div className=" w-screen max-w-screen-2xl  grid grid-cols-12 justify-items-center place-self-center justify-self-center px-20 bg-black min-h-screen content-start position relative">
              <img
                src="dancerhome.png"
                className=" col-span-12 w-full h-full object-cover absolute z-0"
                alt=""
              />
              <Navig  />
              <Homeb1 />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 3, end: 4 }}
          className="grid grid-cols-12 grid-rows-6 z-0 "
        >
          <div className="col-span-12   row-span-3 w-full grid justify-center  content-center h-4/5 place-self-center">
            <div className="max-w-screen-lg grid row-span-3 justify-center content-center  ">
              <img className="ml-8 lg:ml-4 mt-8 z-0 lg:w-full  w-8/12" src="img/mvmtowl.png" alt="" />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 9 }} className="z-0">
          <div className="w-screen grid place-content-center justify-items-center z-20">
            <Homeb2 />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{ backgroundColor: "#000000" }}
        />

        <ParallaxLayer
          sticky={{ start: 1, end: 5 }}
          className="w-screen grid  grid-rows-6  justify-items-center place-centent-center content-center"
        >
          <div className="grid grid-cols-12 col-span-12 row-span-2 w-full max-w-screen-xl">
            <h1 className="col-end-12 col-span-1  grid  justify-center content-center text-7xl font-extralight text-white">
              +
            </h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.2}
          className="grid grid-cols-12 grid-rows-6 z-50 "
        >
          <div className="col-span-12  row-end-6 row-span-3 w-full grid justify-center  content-center h-4/5 place-self-center">
            <div className="max-w-screen-lg grid row-span-3 content-center text-6xl lg:text-7xl font-extrabold text-white text-center ">
              <h1>WE ENABLE MOVEMENT TO BE COLLECTED AS ANY OTHER ART PIECE</h1>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={1} className="bg-black" />
        <ParallaxLayer
          sticky={{ start: 4, end: 5 }}
          className="grid grid-cols-12 grid-rows-6 z-50 "
        >
          <div className="col-span-12  row-end-6 row-span-3 w-full grid justify-center  content-center h-4/5 place-self-center">
            <div className="max-w-screen-md grid row-span-3 justify-center content-center text-4xl font-extrabold text-white text-center ">
              <h1 className="z-50">
                Dancing is the first artistic expression of a human being, this
                is the only one art you cannot own.
              </h1>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 6, end: 7 }}
          className="grid  grid-cols-12 grid-rows-6 z-0 "
        >
          <div className="col-span-12 row-end-6 row-span-3 w-full grid justify-center  content-center h-4/5 place-self-center">
            <div className="max-w-screen-md px-2 grid row-span-3 justify-center content-center  font-extrabold text-white text-center ">
              <h1 className="text-6xl lg:text-7xl">THIS NEED TO CHANGE </h1>
              <br />
              <h2 className="text-2xl uppercase ">Movement is <b className="bg-gradient-to-r from-pink-500 to-yellow-500 px-2">art</b> </h2>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 8, end: 9 }}
          className="grid   grid-rows-6 z-10 justify-content-center  content-center"
        >
          <div className=" max-w-screen-xl row-end-6 row-span-3 w-full grid grid-flow-row lg:grid-cols-12 justify-center  content-center h-4/5 place-self-center ">
            <div className="lg:col-span-6 mx-2 lg:mx-10 h-auto lg:h-40 p-5 backdrop-blur-sm rounded-xl  grid content-center text-2xl font-extrabold text-white text-center ">
              <h1 className="z-50">
                At 8mvmt, we believe that technology should be at the service of
                artist to make their art accessible to anyone
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-end-12 px-8 grid grid-flow-col content-center uppercase text-7xl font-extrabold text-white text-center">
              {transitions(({ opacity }, item) => (
                <animated.div
                  className="w-full"
                  style={{
                    opacity: opacity.to(item.op),
                    transform: opacity
                      .to((x) => `translate3d(0,${x}px,0)`)
                      .to((y) => `translate3d(0,${y}px,2)`),
                  }}
                >
                  {item.fig}
                </animated.div>
              ))}
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={10}
          speed={0.2}
          className="grid w-full  z-50 justify-content-center content-center place-content-center p-2 snap-mandatory snap-y"
        >
          <div className=" max-w-screen-xl h-auto grid grid-cols-12 grid-rows-6 w-full  justify-center  content-center  place-self-center snap-center ">
            <div className="col-span-12 row-span-3  p-5 bg-white/[.2] backdrop-blur-sm rounded-xl  grid content-center place-items-center text-2xl font-extrabold text-white text-center ">
              <h1 className="z-50">
                At 8mvmt, we believe that technology should be at the service of
                artist to make their art accessible to anyone{" "}
              </h1>
            </div>
            
            <div className="row-span-3 col-span-3 col-end-12 px-8 grid  content-center justify-center ">
              <button className="w-40 h-10 bg-gradient-to-r from-pink-500 to-yellow-500 uppercase text-sm font-regular text-white text-center rounded-full" > Get started</button>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={10}
          speed={1}
          className="grid w-full   bg-gray-200    justify-content-center content-center place-content-center p-2 "
        >
          <div className=" max-w-screen-xl h-auto grid lg:grid-cols-12 grid-rows-6 w-full  justify-center  content-center  place-self-center ">
            
            <div className="  row-span-3 row-end-7 lg:col-span-4 lg:col-end-9 px-8 grid  content-center justify-center uppercase text-4xl font-extrabold text-white text-center">
              <img src="/img/dancing-form-1.png" className=" w-80 l" alt="" />
            </div>
           
          </div>
        </ParallaxLayer>   

        <ParallaxLayer
          offset={11}
          speed={0.5}
          className="grid w-full z-50  justify-content-center content-center place-content-center p-2"
        >
          <div className=" max-w-screen-xl h-auto grid grid-cols-12 grid-rows-6 w-full  justify-center  content-center  place-content-center ">
            
            <div className="w-full grid grid-cols-12 grid-row-6 row-span-3 row-end-5 col-span-10 col-end-12 backdrop-blur-sm h-80 px-8   content-center justify-center place-content-center  text-white text-center">
            <h1 className="col-end-1 col-span-1 row-span-1 row-start-1  grid  justify-center content-center text-7xl font-extralight text-white opacity-40">
                +
                </h1>
                <h1 className="col-end-13 col-span-1 row-span-1 row-start-1  grid  justify-center content-center text-7xl font-extralight text-white opacity-40">
                +
                </h1>
                <p className="col-span-12 text-3xl font-extrabold uppercase"> A way that has never been done before
                </p>
                 <br />
                <p className="col-span-12 text-sm fond-extralight">8mvmt aims to be the new digital canvas for dancer and artists in general, putting AI and blockchain at the service of art.

                In short, the vision behind 8mvmt is to create a standard of movement sequencing and make it available as a digital medium containing the matrix of data related to that movement. 8mvmt is a way for artists to exist on the Metaverse, but also a contribution to the improvement of the artists' remuneration model.</p>

            </div>
           
          </div>
        </ParallaxLayer>  

        <ParallaxLayer
          offset={11}
          speed={1}
          className="grid h-full w-full  z-0    justify-content-center content-center place-content-center p-2"
        >
          <div className="w-screen h-full grid place-content-center justify-items-center snap-mandatory snap-center snap-y">
            <div className=" w-screen h-max max-w-screen-2xl  grid grid-cols-12 justify-items-center place-self-center justify-self-center px-20 bg-black min-h-screen content-start position relative">
              <img
                src="/img/movementbg.png"
                className=" col-span-12 w-full h-full object-cover absolute z-0 opacity-80"
                alt=""
              />
            </div>
          </div>
        </ParallaxLayer>  

        <ParallaxLayer
          offset={12}
          speed={0.5}
          className="grid w-full  z-50  justify-content-center content-center place-content-center p-2 snap-mandatory snap-center snap-y"
        >
          <div className=" max-w-screen-xl  h-auto grid  grid-rows-6 w-full  justify-center  content-center  place-content-center ">
            
            <div className="w-full grid grid-cols-12 grid-row-6 row-span-3 row-end-5  h-80 px-8   content-center justify-center place-content-center  text-white text-center">
                <p className="w-10/12 col-span-12 text-4xl font-extrabold uppercase"> Collect 8 steps moves from your favorite dancer
                </p>
                <h1 className="col-end-11 col-span-1 row-span-1 row-end-5  grid  justify-center content-center text-7xl font-extralight text-white opacity-40">
                +
                </h1>
            </div>
          </div>
        </ParallaxLayer> 

        <ParallaxLayer
          offset={13}
          speed={0.5}
          className="grid w-full bg-pink-500  z-50  justify-content-center content-center place-content-center p-2 snap-mandatory snap-center snap-y"
        >
          <div className=" max-w-screen-xl h-auto grid  grid-rows-6 w-full  justify-center  content-center  place-content-center ">
            
            <div className="w-full grid grid-cols-12 grid-row-6 row-span-3 row-end-5  h-80 px-8   content-center justify-center place-content-center  text-white text-center">
                <p className="w-10/12 col-span-12 text-4xl font-extrabold uppercase"> If you are an artist, create your moves and tokenize them with our incredible technology
                </p>
                <h1 className="col-end-11 col-span-1 row-span-1 row-end-5  grid  justify-center content-center text-7xl font-extralight text-white opacity-40">
                +
                </h1>
            </div>
          </div>
        </ParallaxLayer> 

        <ParallaxLayer
          offset={14}
          speed={0.5}
          className="grid w-full  z-50  justify-content-center content-center place-content-center p-2 snap-mandatory snap-center snap-y"
        >
          <div className=" max-w-screen-xl h-auto grid  grid-rows-6 w-full  justify-center  content-center  place-content-center ">
            
            <div className="w-full grid grid-cols-12 grid-row-6 row-span-3 row-end-5  h-80 px-8   content-center justify-center place-content-center  text-white text-center">
                <p className="w-10/12 col-span-12 text-4xl font-extrabold uppercase"> Merge the movement with you avatar or other famous collection we partnered with
                </p>
                <h1 className="col-end-11 col-span-1 row-span-1 row-end-5  grid  justify-center content-center text-7xl font-extralight text-white opacity-40">
                +
                </h1>
            </div>
          </div>
        </ParallaxLayer> 

        <ParallaxLayer
          offset={15}
          speed={0.5}
          className="grid w-full bg-yellow-500 z-50  justify-content-center content-center place-content-center p-2 snap-mandatory snap-center snap-y"
        >
          <div className=" max-w-screen-xl h-auto grid grid-rows-6 w-full  justify-center  content-center  place-content-center ">
            
            <div className="w-full grid  grid-row-6 row-span-3 row-end-5  h-80 px-8   content-center justify-center place-content-center  text-white text-center">
                <p className="w-10/12 col-span-12 text-4xl font-extrabold uppercase"> Share your choregraphic correction and confront the community in dance battle to win prizes
                </p>
                <h1 className="col-end-11 col-span-1 row-span-1 row-end-5  grid  justify-center content-center text-7xl font-extralight text-white opacity-40">
                +
                </h1>
            </div>
          </div>
        </ParallaxLayer> 

        <ParallaxLayer
          offset={16}
          speed={1}
          className="grid w-full  z-50  justify-content-center content-center place-content-center p-2"
        >
          <div className=" max-w-screen-xl h-auto grid lg:grid-cols-12 grid-rows-6 w-full   place-items-center ">
            
            <div className="w-full grid  row-span-6  lg:col-span-4      content-center justify-center place-content-center  text-white text-center">
                <img src="/img/mounirdancer.png"  className="w-80" alt="" />
            </div>
          </div>
        </ParallaxLayer> 

        <ParallaxLayer
          offset={16}
          speed={0.5}
          className="grid w-screen  z-50  justify-center content-center pt-10 p-2"
        >
          <div className="w-full grid lg:grid-cols-12 grid-flow-row row-span-3 row-end-5 col-span-10 col-end-12  h-80 px-8   content-center justify-center place-content-center  text-white text-center">
                <p className="col-span-12 p-20  text-6xl font-extrabold uppercase"> STEP INTO THE FUTURE OF METAVERSE</p>
                  <img src="/img/worldicon.png" className="col-span-12 h-16 place-self-center " alt="" />
            </div>
        </ParallaxLayer>


        <ParallaxLayer
          offset={17}
          speed={0.5}
          className="grid w-screen  z-50  justify-center content-center pt-10 p-2"
        >
          <div className=" bg-gray-800w-screen px-10 max-w-screen-xl h-auto     place-items-center text-white">
            <Metaverse />
          </div>
        </ParallaxLayer>

        

        <ParallaxLayer
          offset={18}
          speed={1}
          className="grid w-screen  z-50  justify-content-center content-start pt-0 h-auto "
        >
          <div className=" max-w-screen-xl   min-w-full    ">
            <Footer />
          </div>
        </ParallaxLayer>
        

        

              
        
        
      </Parallax>
    </>
  );
}

export default TestPage;
