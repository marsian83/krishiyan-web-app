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
          <p>
            Description:
            <br /> {props?.cropDetails?.cropStage[props.stage]?.Description}
          </p>
          <br />
          {/* <p>NutrientContains: </p>
          <br /> */}
          <p>
            Disease Infection: <br />
            {
              props?.cropDetails?.cropStage[props.stage]?.Disease_Infection
                ?.Data
            }
          </p>
          <br />
          <p>
            Pest Infestation: <br />
            {props?.cropDetails?.cropStage[props.stage]?.Pest_infestation?.Data}
          </p>
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
            ImportantActivity: <br />
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
