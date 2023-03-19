import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { solarSystemsData } from "../../Data/solarData";
import { motion } from "framer-motion";

const MobileProduct = () => {
  const battery =
    "https://www.dlight.com/wp-content/uploads/2018/08/icon-battery.png";
  const radio =
    "https://www.dlight.com/wp-content/uploads/2018/08/icon-radio.png";
  const brightness =
    "https://www.dlight.com/wp-content/uploads/2018/08/icon-brightness.png";
  const portability =
    "https://www.dlight.com/wp-content/uploads/2018/08/icon-portability.png";

  const { name, solarId } = useParams();

  const [mapData, setMapData] = useState([]);

  useEffect(() => {
    setMapData(solarSystemsData);
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
          .filter((item) => item.id === solarId)
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
                        `Hello! I'm interested in your d.light pay-as-you-go product. Provide me with more information on the Solar Product ${item.name}, such as its features and pricing. Thank you!`
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
                        `Hello! I'm interested in your d.light pay-as-you-go product. Provide me with more information on the Solar Product ${item.name}, such as its features and pricing. Thank you!`
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
                      <img src={battery} alt="battery" />
                      <br />
                      <span>
                        Battery: <br /> {item.battery}
                      </span>
                    </div>
                    <div className="m-top-bottom-card2">
                      <img src={radio} alt="radio" />
                      <br />
                      <span>
                        Radio: <br /> {item.radio}
                      </span>
                    </div>
                  </div>
                  <div className="m-top-bottom-cards">
                    <div className="m-top-bottom-card1">
                      <img src={brightness} alt="brightness" />
                      <br />
                      <span>
                        Brightness: <br />
                        {item.brightness}
                      </span>
                    </div>
                    <div className="m-top-bottom-card2">
                      <img src={portability} alt="paygo" />
                      <br />
                      <span>
                        Portability: <br /> {item.portability}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mob-prod-mid-bottom">
                  <div className="mob-prod-mid-bottom-content">
                    <h2>Flexible design</h2>
                    <br />
                    <br />

                    <p>
                      The modular {item.name} system enables you to arrange the
                      solar LED lights to best suit your home or business. With
                      the flip of a switch, you can light up your home for{" "}
                      {item.battery}.
                    </p>
                    <br />
                    <br />
                    <h2>Exciting Accessories </h2>
                    <br />
                    <br />
                    <p>
                      The {item.name} bundle comes packed with a solar FM radio
                      with MP3 playback and a bright torch lasting for hours on
                      a single charge.
                      <br />
                      <br />
                      <br />
                    </p>
                    <br />
                    <br />
                    <h2>PayGo technology </h2>
                    <br />
                    <br />
                    <p>
                      The {item.name} allows you to own a powerful solar home
                      system without any financial burden; now pay in easy
                      installments from the convenience of your home using our
                      patented technology.
                      <br />
                      <br />
                      <br />
                    </p>

                    <div className="mobile-product-btn">
                      <a
                        href={`https://wa.me/+254704027671?text=${encodeURIComponent(
                          `Hello! I'm interested in your d.light pay-as-you-go product. Provide me with more information on the Solar Product ${item.name}, such as its features and pricing. Thank you!`
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
                            `Hello! I'm interested in your d.light pay-as-you-go product. Provide me with more information on the Solar Product ${item.name}, such as its features and pricing. Thank you!`
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
