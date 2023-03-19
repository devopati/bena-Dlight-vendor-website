import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./mobileProduct.css";
import { nokiaData } from "../../Data/nokiaData";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { samsungData } from "../../Data/samsungData";

import { motion } from "framer-motion";

const MobileProduct = () => {
  const capacityIcon =
    "https://www.dlight.com/wp-content/uploads/Battery-Capacity-1.png";
  const cameraIcon =
    "https://www.dlight.com/wp-content/uploads/Camera-Icon-1.png";
  const displayIcon =
    "https://www.dlight.com/wp-content/uploads/Screen-size-icon-1.png";
  const memoryIcon =
    "https://www.dlight.com/wp-content/uploads/Memory-Icon-1.png";
  const paygoIcon =
    "https://www.dlight.com/wp-content/uploads/PayGo-Icon-1.png";
  const { name, prodId } = useParams();

  const [mapData, setMapData] = useState([]);

  useEffect(() => {
    name === "nokia" ? setMapData(nokiaData) : setMapData(samsungData);
  }, [mapData]);
  return (
    <>
      <motion.div
        className="mobile-product-container"
        animate={{ opacity: [0, 0, 1, 1] }}
        exit={{ opacity: [1, 1, 0, 0] }}
        transition={{ type: "tween", duration: 1 }}
      >
        {mapData
          .filter((item) => item.id === prodId)
          .map((item) => {
            return (
              <div className="m-product-top" key={item.id}>
                <div className="m-p-t1">
                  <span>d.light {item.name}</span>
                  <h1>{item.title}</h1>
                </div>
                <div className="m-product-middle">
                  <div className="mobile-product-btn m-p-big">
                    <a
                      href={`https://wa.me/+254704027671?text=${encodeURIComponent(
                        `Hello! I'm interested in your d.light pay-as-you-go product. Provide me with more information on the Mobile ${item.name}, such as its features and pricing. Thank you!`
                      )}`}
                      style={{ color: "black" }}
                      target="_blank"
                    >
                      <div className="m-p-btn">
                        <BsFillArrowRightCircleFill id="m-p-icon" />
                        <h4>Buy Now</h4>
                      </div>
                    </a>
                  </div>
                  <div className="mobile-product-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="mobile-product-btn m-p-small">
                    <a
                      href={`https://wa.me/+254704027671?text=${encodeURIComponent(
                        `Hello! I'm interested in your d.light pay-as-you-go product. Provide me with more information on the Mobile ${item.name}, such as its features and pricing. Thank you!`
                      )}`}
                      style={{ color: "black" }}
                      target="_blank"
                    >
                      <div className="m-p-btn">
                        <BsFillArrowRightCircleFill id="m-p-icon" />
                        <h4>Buy Now</h4>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="mobile-prod-mid-mid">
                  <div className="m-overview">
                    <span>Overview</span>
                  </div>
                  <div className="m-overview-description">
                    <p>{item.overview}</p>
                  </div>
                </div>
                <div className="mobile-prod-top-bottom">
                  <div className="m-top-bottom-cards">
                    <div className="m-top-bottom-card1">
                      <img src={capacityIcon} alt="Capacity" />
                      <br />
                      <span>Battery: {item.capacity}</span>
                    </div>
                    <div className="m-top-bottom-card2">
                      <img src={cameraIcon} alt="Camera" />
                      <br />
                      <span>
                        Front: {item.cfront} Rear: {item.crear}
                      </span>
                    </div>
                  </div>
                  <div className="m-top-bottom-cards">
                    <div className="m-top-bottom-card1">
                      <img src={memoryIcon} alt="Memory" />
                      <br />
                      <span>{item.memory}</span>
                    </div>
                    <div className="m-top-bottom-card2">
                      <img src={paygoIcon} alt="paygo" />
                      <br />
                      <span>PayGo: Pay in easy installments</span>
                    </div>
                  </div>
                </div>
                <div className="mob-prod-mid-bottom">
                  <div className="mob-prod-mid-bottom-content">
                    <h2>A choice for durability</h2>
                    <br />
                    <br />

                    <p>
                      You may want to double check the battery capacity of this
                      phone as that will tell it all! You need a phone with more
                      power! A phone whose battery doesn’t need charging after
                      every other hour. You need to make a choice of durability
                    </p>
                    <br />
                    <br />
                    <h2>Making a Statement </h2>
                    <br />
                    <br />
                    <p>
                      Maximize the power of your {item.name} battery, take those
                      perfect shots using its powerful camera, and the best part
                      of it is that you can pay for it slowly using our PayGo
                      technology.
                      <br />
                      <br />
                      <br />
                    </p>
                    <div className="mobile-product-btn">
                      <a
                        href={`https://wa.me/+254704027671?text=${encodeURIComponent(
                          `Hello! I'm interested in your d.light pay-as-you-go product. Provide me with more information on the Mobile ${item.name}, such as its features and pricing. Thank you!`
                        )}`}
                        style={{ color: "white" }}
                        target="_blank"
                      >
                        <div className="m-p-btn">
                          <BsFillArrowRightCircleFill id="m-p-icon" />
                          <h4>Buy Now</h4>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mob-prod-bottom">
                  <div className="m-bottom-header">
                    <h1>{item.name} in the Box</h1>
                    <br />
                    <br />
                    <span>The d.light {item.name} Includes: </span>
                  </div>
                  <div className="m-p-box-image">
                    <img src={item.inboxImg} alt={item.name} />
                  </div>
                </div>
                <div className="mobile-prod-last">
                  <div>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="make-yours">
                    <h1>Make it yours today! </h1>
                    <br />
                    <br />
                    <p>
                      Discover why over 137 million people around the world rely
                      on d.light solar products to live A Brighter Future
                      <br />
                      <br />
                      <br />
                      <div className="mobile-product-btn">
                        <a
                          href={`https://wa.me/+254704027671?text=${encodeURIComponent(
                            `Hello! I'm interested in your d.light pay-as-you-go product. Provide me with more information on the Mobile ${item.name}, such as its features and pricing. Thank you!`
                          )}`}
                          style={{ color: "white" }}
                          target="_blank"
                        >
                          <div
                            className="m-p-btn m-p-last"
                            style={{ color: "white" }}
                          >
                            <BsFillArrowRightCircleFill id="m-p-icon" />
                            <h4>Buy Now</h4>
                            <br />
                          </div>
                        </a>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </motion.div>
    </>
  );
};

export default MobileProduct;
