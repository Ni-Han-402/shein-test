import React, { useState, useEffect } from 'react';
import { Wheel } from 'react-custom-roulette';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import { authkey } from "../Login/authkey";
import './Wheel4.css'
import { IoIosArrowBack } from "react-icons/io";

const Wheel4 = () => {

    const data = [
        { option: "0" },
        { option: "5" },
        { option: "10" },
        { option: "0" },
        { option: "15" },
        { option: "20" },
        { option: "30" },
        { option: "0" },
        { option: "50" },
        { option: "80" },
        { option: "90" },

    ];

    const [winner, setWinner] = useState(0);

    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [winDataT, setWinDataT] = useState({});
    const [test, setTest] = useState(0);

    const navigate = useNavigate();
    useEffect(() => {
        var history = new FormData();
        history.append("spinner", "");
        history.append("auth", authkey);
        history.append("logged", localStorage.getItem('auth'));
        fetch("https://mining-nfts.com/api/", {
            method: "POST",
            body: history,
        })
            .then((res) => res.json())
            .then((winHistory) => {
                if (winHistory.status == 200) {
                    setWinDataT(winHistory.message);
                    console.log(winHistory?.message);

                } else {
                    navigate("/login");
                }
            });
    }, []);

    const runSpin = () => {
        var runSpinData = new FormData();
        runSpinData.append("runSpin", "");
        runSpinData.append("spinner", "");
        runSpinData.append("auth", authkey);
        runSpinData.append("logged", localStorage.getItem('auth'));
        fetch("https://mining-nfts.com/api/", {
            method: "POST",
            body: runSpinData,
        })
            .then((res) => res.json())
            .then((spHs) => {
                if (spHs.status == 200) {
                    setWinDataT(spHs.message);
                    if (spHs.message.winNumber == 'auto') {

                        const newPrize = Math.floor(Math.random() * data.length);
                        const newPrizeNumber = newPrize;
                        const item = data[newPrizeNumber];
                        setPrizeNumber(newPrizeNumber);
                        setMustSpin(true);
                        setWinner(item);
                        if (newPrize != 0) {
                            var eewrER = new FormData();
                            eewrER.append("winAmount", newPrize);
                            eewrER.append("auth", authkey);
                            eewrER.append("logged", localStorage.getItem('auth'));
                            fetch("https://mining-nfts.com/api/", {
                                method: "POST",
                                body: eewrER,
                            })
                                .then((res) => res.json())
                                .then((sdfRTE) => {
                                    if (sdfRTE.status == 100) {
                                        toast.error(spHs.message);

                                    }

                                }, []);
                        }


                    } else {
                        const newPrize = spHs.message.winNumber;
                        const newPrizeNumber = newPrize;
                        const item = data[newPrizeNumber];
                        setPrizeNumber(newPrizeNumber);
                        setMustSpin(true);
                        setWinner(item);
                    }

                } else if (spHs.status == 100) {
                    toast.error(spHs.message.message);
                    setMustSpin(false);

                } else {
                    navigate("/login");
                }

            }, []);
    }


   


    const handleSpinClick = () => {

        if (test == 0 && winDataT?.spinLeft == 0) {
            setMustSpin(false)
            swal({
                title: "Are you sure?",
                text: "You will be charged $5 fe for this spin",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        setTest(1);
                        runSpin();

                    } else {
                        setMustSpin(false)
                    }
                });
        } else {
            runSpin();

        }


        if (winDataT.spinLeft < 0) {

        }

    }


    return (
        <div className="container max-w-[1080] mx-auto my-5">
            <div className="bg-base-200 p-5 rounded-xl mb-5 flex items-center justify-between">
                <Link to="/profile">
                    <IoIosArrowBack></IoIosArrowBack>
                </Link>
              
            </div>
            <div className="wheel-decider">
                <div id="successInfo" className="text-center text-slate-800"> <br />
                    <h1 className="font-bold lg:text-4xl ">Lucky Wheel!!!</h1>
                    {winDataT.spinLeft <= 0 ? <h4 className="font-bold lg:text-xl pt-5 pb-16 text-blue-800">0</h4>

                        :
                        <h4 className="font-bold lg:text-xl pt-5 pb-16 text-blue-800">Spin Left {winDataT.spinLeft} </h4>

                    }
                </div>
            </div>

            <div className="wheel-decider pb-5" >
                <Wheel className="flex justify-center "
                    backgroundColors={["#081135", "#570C31"]}
                    textColors={["#ffffff"]}
                    // onStopSpinning={stopSpin}
                    radiusLineWidth={2}
                    outerBorderWidth={10}
                    mustStartSpinning={mustSpin}
                    prizeNumber={prizeNumber}

                    data={data}
                    onStopSpinning={() => {
                        setMustSpin(false);
                    }}
                />
            </div>

            <div className="wheel-decider">

                {winDataT.spinLeft <= 0 ?
                    <button type="button" disabled={mustSpin == true} onClick={handleSpinClick} className="btn btn-primary" >Spin For 5$</button>
                    :
                    <button disabled={mustSpin == true} className="btn btn-primary" onClick={handleSpinClick}>
                        Free Spin
                    </button>
                }

            </div>

            <div className="wheel-decider">
                <div >


                    <h2 className="text-2xl font-bold py-8">You win
                        {mustSpin == true
                            ? (<span className="pl-2"></span>)
                            : (<span className="pl-2"> {winner.option}</span>)
                        }</h2>
                </div>


            </div>

            <div>
                <div className="text-slate-800 my-10 card w-full bg-white rounded shadow-xl mx-5">
                    <div className="card-body">
                        <h2 className="card-title">Rules Description!</h2>
                        <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt delectus dolores quo libero? Quidem autem obcaecati sit necessitatibus, aut blanditiis mollitia doloribus rem quod inventore.</p>

                    </div>
                </div>
            </div>

        </div>

    );
};

export default Wheel4;