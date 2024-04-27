import React from "react"
import { NavLink } from "react-router-dom";
import { MdDone } from "react-icons/md";

const j = {

    width: "100%",
    dispaly: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const m = {
    width: "100%",
    dispaly: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const t = {
    color: "white",
}

const Pricing = () => {
    return <div>
        <div className="container-fluid BestPlan" id="container-fluid ">
            <h1 className="h1-C" data-aos="zoom-in" data-aos-duration="1500" id="ctbp" style={m}>Choose the Best Plan </h1>

            <div className="container pt-5 ">
                <div className=" gx-0  flex items-center block3 " data-aos="fade-up" data-aos-duration="1500" id="items">
                    <div className="col-md-4 h-auto">
                        <div className="bestplan_col1  bestplan_col12 px-[50rem]">
                            <h5>STANDARD GYM+GX</h5>
                            <div class="price">
                                <h1 className="pt-4">₹14000 <span>6 Month</span></h1>
                                <h1>₹24000 <span>12 Month</span></h1></div>
                            <div className="bestplan_detail py-3">
                                <p><img src="" alt="" />+dance classes</p>
                                <p><img src="" alt="" />+Shower Room </p>
                                <p><img src="" alt="" />+Steam room</p>


                            </div>
                            <a href="/book"> <button className="btn4" NavLink to="book">Know More</button></a>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="bestplan_col1 bestplan_col2" id="pgpt">
                            <h3 className="BestPlan_3">Most Popular</h3>
                            <h5>PREMIUM GYM+PT</h5>
                            <div class="price" style={j}>
                                <h1 className="pt-4">₹31000 <span>3 Month</span></h1>
                                <h1 >₹60000 <span>6 Month</span></h1></div>
                            <div className="bestplan_detail py-3">
                                <p><img src="" alt="" />dance classes</p>
                                <p><img src="" alt="" />Shower Room </p>
                                <p><img src="" alt="" />Steam room</p>
                                <p><img src="" alt="" />Personal traning</p>
                            </div>
                            <a href="/book"> <button className="btn4" NavLink to="book">Know More</button></a>                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="bestplan_col1 bestplan_col13">
                            <h5>NUTRITION PLAN</h5>
                            <div class="price" style={j}>
                                <h1 className="pt-4">₹7500 <span>3 Month</span></h1>
                                <h1 >₹12000 <span>6 Month</span></h1></div>
                            <div className="bestplan_detail py-3">
                                <p><img src="" alt="" />Diet Plan</p>
                            </div>
                            <a href="/book"> <button className="btn4" NavLink to="book">Know More</button></a>                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="bestplan_col1 bestplan_col14">
                            <h5>KNOCKOUT FIGHTCLUB</h5>
                            <div class="price" style={j}>
                                <h1 className="pt-4">₹14000 <span>6 Month</span></h1>
                                <h1>₹18000 <span>12 Month</span></h1></div>
                            <div className="bestplan_detail py-3">
                                <p><img src="" alt="" />Full Traning of Martial arts</p>
                            </div>
                            <a href="/book"> <button className="btn4" NavLink to="book">Know More</button></a>                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p className="text-4xl mb-6 text-center" data-aos="zoom-in" data-aos-duration="1500" style={t} id="trialtext">Book Your Trial Classes </p>
        <div className="container trail flex   " id="trial">
            <button className="btn3" data-aos="zoom-in" data-aos-duration="1500">
                <NavLink to="/book">BOOK NOW</NavLink></button>

        </div>
    </div>

}


export default Pricing;