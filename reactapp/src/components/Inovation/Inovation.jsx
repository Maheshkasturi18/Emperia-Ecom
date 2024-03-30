import React, { Component } from "react";
import "./Inovation.css";

export default class Inovation extends Component {
  render() {
    return (
      <section className="tech-bg ">
        <div className="tech-head">
          {/* <div className="tech-vid-bg">
            <iframe
            title="youtube Video"
              className="elementor-background-video-embed"
              frameborder="0"
              autoplay
              
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/AO7tv9uNiGk?controls=0&amp;rel=0&amp;playsinline=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Femperia1900.com&amp;widgetid=1"
            />        
          </div> */}

          <h1 className="tech-img-content fw-bold text-white">
            Smart Micellar Technology
          </h1>
        </div>

        <div className="container  py-4">
          <div className="row ">
            <div className="col-lg-6  mb-4 mb-lg-0  rounded-4 bg-white text-center">
              <img
                src="images/technology-img1.png"
                alt=""
                width={"80%"}
                className="img-fluid "
              />
            </div>

            <div className="col-lg-6 px-4  col-md-12">
              <p className="lh-lg ">
                Recently, the world has faced the COVID-19 pandemic situation,
                which has taught the importance of hygiene solutions. This
                encouraged us to provide effective and innovative hygiene care
                solutions that ultimately contribute to promote healthy living.
                Based on various studies, surfactant plays a vital role in all
                cleaning formulations. Moreover, its structure and properties
                provide a greater opportunity for smart modifications.
                Therefore, Empire Industries Limited utilizes
                <b> “SMART MICELLAR TECHNOLOGY” </b> in all cleaning ranges of
                products with the brand name <b>“EMPERIA 1900″.</b>
              </p>

              <p className="lh-lg ">
                The technology is enabled by smart action techniques for
                cleaning surfaces. This technology employs a technically
                designed surfactant that works on the fundamental principle of
                “like attracts like”. This suggests that the polar head group is
                water-loving and the long hydrophobic hydrocarbon tail is
                water-repelling. This techno-enabled surfactant is smart enough
                for all types of stains, dirt and soil.
              </p>
            </div>
          </div>

          <p className="lh-lg py-3">
            In order to understand Smart Micellar Technology, we should first
            understand surfactant, factors affecting cleaning such as surface
            tension, Hydrophilic-Lipophilic Balance, and the essential need for
            cleaning, as highlighted below.
          </p>

          <h5 className="fw-semibold">Surfactants</h5>
          <p className="lh-lg mb-4">
            Surfactants are the primary components of cleaning detergents.
            Surfactants are also called <b>surface active agents</b> that are
            amphiphilic in nature, i.e. dual-natured molecules. The general
            structure possesses a polar group that is <b>“water-loving”</b> and
            called a <b>“hydrophilic head”</b> and another non-polar group that
            is
            <b>“water-repelling”</b> (or oil loving) which is denoted as a{" "}
            <b>“hydrophobic tail”</b>. Generally, the polar head group is
            composed of anionic/cationic or non-ionic charge molecules and a
            long chain of hydrocarbons denoted as the tail of the surfactant,
            which is the hydrophobic part of the surfactant. Surfactants are
            used as a key component in many of the diverse industrial products
            or in their processes. Due to their dual nature, they are helpful in
            decreasing the interfacial tension (also called surface tension)
            between two phases.
          </p>

          <h4 className="fw-semibold bg-info d-inline-flex p-1">
            Factors Affecting Cleaning:
          </h4>
          <h5 className="fw-semibold"> Surface Tension</h5>
          <p className="lh-lg ">
            The water molecule consists of hydrogen and oxygen atoms. Due to the
            difference in their electronegativity, the hydrogen atoms are
            polarized toward the oxygen atom. This causes the development of a
            charge on the water molecule. These charges may vary from bulk water
            molecules to those present on the top layer. The bulk water
            molecules are surrounded by other water molecules, which stabilize
            their charge. However, the surface water molecules are in an
            unstable position as they hang between the liquid and air medium and
            therefore, these unstabilized dangling molecules react to achieve
            stability faster. Therefore when any molecule touches the surface,
            the unstable water molecule attracts the material thereby lowering
            the surface tension of the water molecule. This way it plays a vital
            role in dissolving the dirt.
          </p>

          <h5 className="fw-semibold">Hydrophilic - Lipophilic Balance</h5>
          <p className="lh-lg ">
            The Hydrophilic-Lipophilic Balance (HLB) scale is a standard scale
            used to measure the hydrophilic to lipophilic balance ratio. The HLB
            value is significantly important in dissolving the dirt and prevents
            its redeposition.
          </p>

          <div className="row py-2">
            <div className="col-lg-6  py-2 col-md-12">
              <h5 className="fw-semibold"> Essential need for Cleaning</h5>
              <ul className="lh-lg list-unstyled ps-4 lh-lg list-group list-group-numbered list-group-flush">
                <li className="list-group-item border-0">
                  <b> SURFACTANT:</b> Based on the charge on its head group it
                  is classified as cationic, anionic, non-ionic and amphoteric.
                </li>
                <li className="list-group-item border-0">
                  <b> HYDROTROPES:</b> It is usually used to increase the
                  solubility of surfactant.
                </li>
                <li className="list-group-item border-0">
                  <b> CHELATOR:</b> It entraps the hard water elements from the
                  water and smoothen the cleaning action.
                </li>
                <li className="list-group-item border-0">
                  <b> BUILDER:</b> Helps in emulsifying and dispersion of dirt
                  molecules and prevents its redeposit ion.
                </li>
                <li className="list-group-item border-0">
                  <b> CARRIERS:</b> Helps in the final step of cleaning in
                  decomposing or entrapment of dirt/soil particles.
                </li>
              </ul>
            </div>

            <div className="col-lg-6  my-3 rounded-4 bg-white text-center">
              <img
                src="images/technology-img2.png"
                alt=""
                className="img-fluid py-3"
              />
            </div>
          </div>

          <h5 className="fw-semibold">
            Micellar Formation and Cleaning Action
          </h5>
          <p className="lh-lg ">
            The characteristic nature of soil particles varies from water-loving
            (hydrophilic) to oil loving (liophilic). Based on the nature of soil
            particles and surrounds the soil by the accumulation of the
            surfactant’s tail in the soil, which leads to the formation of a
            spherical structure known as a micelle structure. The micelle
            structure aligns the head group in such a way that they are exposed
            to the water while the tail part is away from the water. The micelle
            encloses the soil particle and appears in a spherical form, which
            minimizes the contact of the soil with the surface. Finally, with
            ample water washing, the micelles burst into fine particles and the
            soil particle disintegrates into very small fine particles, which
            can easily be washed away.
          </p>

          <div className="my-3 rounded-4 py-3 bg-white text-center">
            <img
              src="images/technology-img3.jpg"
              alt=""
              className="img-fluid py-3"
            />
            <h5 className="fw-semibold text-black">
              Micelle Formation & Cleaning Action
            </h5>
          </div>

          <p className="lh-lg ">
            <b>Empire Industries Limited</b> strives to be a company that
            calibrates the standard of excellence and makes a positive impact on
            the environment and communities, it serves.<b> EMPERIA 1900</b>{" "}
            envisions promoting public health and contributing to making a
            meaningful difference in the lives of individuals and communities.
            This has led us to work constantly to build <b>EMPERIA 1900</b>,
            enabled with <i>“Smart Micellar Technology”</i> in providing
            effective and innovative hygiene care solutions that in turn enable
            individuals and communities to maintain a clean and healthy living.
            We are guided by our principles such as a customer centric approach,
            passion & integrity and continuous improvement & innovation. We have
            leveraged our decades of experience in research and development to
            create products that are safe, effective and easy to use.
          </p>
          <p className="lh-lg ">
            <b> Emperia 1900 </b>is steadfastly committed to improving and
            carefully formulating solutions to meet the highest standards of
            quality and safety.
          </p>
        </div>
      </section>
    );
  }
}
