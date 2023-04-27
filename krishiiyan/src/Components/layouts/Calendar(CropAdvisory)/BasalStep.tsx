import React from "react";

const BasalStep = (props: any) => {
  return (
    <>
      <div
        className="text-[#13490A] font-extrabold mt-4 "
        style={{
          display: "flex",
          textAlign: "left",
        }}
      >
        <div>
          <div style={{ display: "Flex", justifyContent: "space-between" }}>
            <p>
              Name Of the Stage:
              <br />
              {
                props?.cropDetails?.cropStage[props.stage]?.Name_of_the_Stage
                  ?.name
              }
            </p>
            <img
              style={{ width: "200px", height: "200px", marginRight: "20px" }}
              src={
                props?.cropDetails?.cropStage[props.stage]?.Name_of_the_Stage
                  ?.image
              }
            />
          </div>

          <p>
            Description:
            <br /> {props?.cropDetails?.cropStage[props.stage]?.Description}
          </p>
          <br />
          {/* <p>NutrientContains: </p>
          <br /> */}
          <div
            className="text-[#13490A] font-extrabold mt-4 "
            style={{
              display: "flex",
              textAlign: "left",
            }}
          >
            <p>
              Disease Infection: <br />
              {
                props?.cropDetails?.cropStage[props.stage]?.Disease_Infection
                  ?.Data
              }
            </p>
            <img
              style={{ width: "200px", height: "200px", marginRight: "20px" }}
              src={
                props?.cropDetails?.cropStage[props.stage]?.Disease_Infection
                  ?.image
              }
            />
          </div>

          <br />
          <div
            className="text-[#13490A] font-extrabold mt-4 "
            style={{
              display: "flex",
              textAlign: "left",
            }}
          ></div>
          <p>
            Pest Infestation: <br />
            {props?.cropDetails?.cropStage[props.stage]?.Pest_infestation?.Data}
          </p>
          <img
            style={{ width: "200px", height: "200px", marginRight: "20px" }}
            src={
              props?.cropDetails?.cropStage[props.stage]?.Pest_infestation
                ?.image
            }
          />
          <br />
          <p>
            Fertilizer: <br />
            {props?.cropDetails?.cropStage[props.stage]?.Fertilizer?.Data}
          </p>
          <br />
          <p>
            Weed Mangement: <br />
            {props?.cropDetails?.cropStage[props.stage]?.Weed_mangement?.Data}
          </p>
          <br />
          <p>
            Important Activity: <br />
            {props?.cropDetails?.cultivationStage?.basal?.importantActivity}
          </p>
          <br />
          {/* <p>
            DiseaseManagement:{" "}
            {props?.cropDetails?.cultivationStage?.basal?.diseaseManagement}
          </p>
          <p>
            InterculturalOperation:{" "}
            {
              props?.cropDetails?.cultivationStage?.basal
                ?.interculturalOperation
            }
          </p>
          <p>
            SynpfomImage:{" "}
            {props?.cropDetails?.cultivationStage?.basal?.synpfomImage}
          </p> */}
          <br />
        </div>
      </div>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "start",
          flexDirection: "row",
        }}
      >
        <figure>
          <img
            src="/images/nirogen_deficiency.png"
            style={{ width: "250px", height: "190px", marginLeft: "40px" }}
          />
          <figcaption>Nitrogen Deficiency</figcaption>
        </figure>
        <figure>
          <img
            src="/images/phosporus_deficiency.png"
            style={{ width: "250px", height: "190px", marginLeft: "25px" }}
          />
          <figcaption>Phosphorus Deficiency</figcaption>
        </figure>

        <figure>
          <img
            src="/images/pottasium.png"
            style={{ width: "250px", height: "190px", marginLeft: "25px" }}
          />
          <figcaption>Potassium Deficiency</figcaption>
        </figure>

        <figure>
          <img
            src="/images/zinc.png"
            style={{ width: "250px", height: "190px", marginLeft: "25px" }}
          />
          <figcaption>Zinc Deficiency</figcaption>
        </figure>
      </div> */}
    </>
  );
};

export default BasalStep;
